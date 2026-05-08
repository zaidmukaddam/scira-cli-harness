import Exa from 'exa-js';
import FirecrawlApp, { type SearchResultNews, type SearchResultWeb } from '@mendable/firecrawl-js';
import Parallel from 'parallel-web';
import { requireEnv } from './env';
import type { Quality, SearchBatch, SearchProvider, SearchResult, Topic } from './types';

function cleanTitle(title: string | undefined): string {
  return (title ?? '')
    .replace(/\[.*?\]/g, '')
    .replace(/\(.*?\)/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeContent(value: unknown): string {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === 'string').join(' ');
  }
  return typeof value === 'string' ? value : '';
}

/** DocumentMetadata adds `[key: string]: unknown`; take first usable string candidate. */
function firstMetadataString(...values: unknown[]): string | undefined {
  for (const value of values) {
    if (typeof value !== 'string') continue;
    const trimmed = value.trim();
    if (trimmed) return trimmed;
  }
  return undefined;
}

function uniqueByUrl(results: SearchResult[]): SearchResult[] {
  const byUrl = new Map<string, SearchResult>();

  for (const result of results) {
    if (!result.url) continue;
    const previous = byUrl.get(result.url);
    if (!previous || scoreSource(result) > scoreSource(previous)) {
      byUrl.set(result.url, result);
    }
  }

  return [...byUrl.values()];
}

function scoreSource(result: SearchResult): number {
  const kindScore = result.sourceKind === 'fetch' ? 10_000 : 0;
  return kindScore + (result.content?.length ?? 0);
}

export function chooseProvider(requested?: SearchProvider): SearchProvider {
  if (requested) return requested;
  if (process.env.PARALLEL_API_KEY) return 'parallel';
  if (process.env.EXA_API_KEY) return 'exa';
  if (process.env.FIRECRAWL_API_KEY) return 'firecrawl';
  return 'parallel';
}

export function buildQueries(query: string, explicit?: string[]): string[] {
  if (explicit?.length) return explicit.slice(0, 5);

  const year = new Date().getFullYear();
  return [
    query,
    `${query} latest ${year}`,
    `${query} current evidence ${year}`,
  ];
}

export async function runSearches(params: {
  provider: SearchProvider;
  queries: string[];
  maxResults: number;
  topic: Topic;
  quality: Quality;
  startDate?: string;
}): Promise<SearchBatch[]> {
  const searches = await Promise.all(
    params.queries.map(async (query) => ({
      query,
      results: await runSingleSearch({
        ...params,
        query,
      }),
    })),
  );

  return searches;
}

async function runSingleSearch(params: {
  provider: SearchProvider;
  query: string;
  maxResults: number;
  topic: Topic;
  quality: Quality;
  startDate?: string;
}): Promise<SearchResult[]> {
  switch (params.provider) {
    case 'parallel':
      return searchParallel(params);
    case 'exa':
      return searchExa(params);
    case 'firecrawl':
      return searchFirecrawl(params);
  }
}

async function searchParallel(params: {
  query: string;
  quality: Quality;
  maxResults: number;
  startDate?: string;
}): Promise<SearchResult[]> {
  const parallel = new Parallel({ apiKey: requireEnv('PARALLEL_API_KEY') });
  const response = await parallel.search({
    objective: params.query,
    mode: params.quality === 'best' ? 'advanced' : 'basic',
    max_chars_total: 6000,
    search_queries: [params.query],
    advanced_settings: {
      max_results: Math.max(params.maxResults, 10),
      fetch_policy: {
        max_age_seconds: 3600,
        timeout_seconds: 120,
      },
      ...(params.startDate
        ? {
            source_policy: {
              after_date: params.startDate,
            },
          }
        : {}),
    },
  });

  const results = (response.results ?? []).map((result): SearchResult => ({
    provider: 'parallel',
    sourceKind: 'search',
    query: params.query,
    url: result.url ?? '',
    title: cleanTitle(result.excerpts.join(',')),
    content: normalizeContent(result.excerpts).slice(0, 1600),
    publishedDate: result.publish_date ?? undefined,
  }));

  return uniqueByUrl(results);
}

async function searchExa(params: {
  query: string;
  maxResults: number;
  topic: Topic;
  quality: Quality;
  startDate?: string;
}): Promise<SearchResult[]> {
  const exa = new Exa(requireEnv('EXA_API_KEY'));
  const startPublishedDate = params.startDate
    ? new Date(params.startDate).toISOString()
    : undefined;
  const endPublishedDate = params.startDate ? new Date().toISOString() : undefined;

  const response = await exa.search(params.query, {
    type: params.quality === 'best' ? 'deep' : 'instant',
    numResults: Math.max(params.maxResults, 10),
    category: params.topic === 'news' ? 'news' : undefined,
    ...(startPublishedDate ? { startPublishedDate } : {}),
    ...(endPublishedDate ? { endPublishedDate } : {}),
    contents: {
      text: {
        maxCharacters: 4000,
      },
      highlights: {
        maxCharacters: 4000,
      },
    },
  });

  const results = (response.results ?? []).map((result): SearchResult => ({
    provider: 'exa',
    sourceKind: 'search',
    query: params.query,
    url: result.url ?? '',
    title: cleanTitle(result.title ?? ''),
    content: normalizeContent(result.text ?? result.highlights).slice(0, 1600),
    publishedDate: result.publishedDate ?? undefined,
    author: result.author ?? undefined,
  }));

  return uniqueByUrl(results);
}

async function searchFirecrawl(params: {
  query: string;
  maxResults: number;
  topic: Topic;
  startDate?: string;
}): Promise<SearchResult[]> {
  const firecrawl = new FirecrawlApp({ apiKey: requireEnv('FIRECRAWL_API_KEY') });
  const response = await firecrawl.search(params.query, {
    sources: params.topic === 'news' ? ['news', 'web'] : ['web'],
    limit: params.maxResults,
    ...(params.startDate
      ? {
          tbs: buildFirecrawlDateFilter(params.startDate),
        }
      : {}),
  });

  const web = Array.isArray(response.web) ? response.web : [];
  const news = Array.isArray(response.news) ? response.news : [];

  const results = [...news, ...web].map((result): SearchResult => ({
    provider: 'firecrawl',
    sourceKind: 'search',
    query: params.query,
    url: (result as SearchResultWeb).url ?? '',
    title: cleanTitle((result as SearchResultWeb).title ?? ''),
    content: normalizeContent((result as SearchResultWeb).description).slice(0, 1600),
    publishedDate: (result as SearchResultNews).date ?? undefined,
  }));

  return uniqueByUrl(results);
}

export async function fetchLinks(params: {
  provider: SearchProvider;
  urls: string[];
  objective?: string;
  queries?: string[];
  maxCharacters: number;
}): Promise<SearchResult[]> {
  const urls = [...new Set(params.urls.map((url) => url.trim()).filter(Boolean))].slice(0, 10);
  if (urls.length === 0) return [];

  switch (params.provider) {
    case 'parallel':
      return fetchParallelLinks({ ...params, urls });
    case 'exa':
      return fetchExaLinks({ ...params, urls });
    case 'firecrawl':
      return fetchFirecrawlLinks({ ...params, urls });
  }
}

async function fetchParallelLinks(params: {
  urls: string[];
  objective?: string;
  queries?: string[];
  maxCharacters: number;
}): Promise<SearchResult[]> {
  const parallel = new Parallel({ apiKey: requireEnv('PARALLEL_API_KEY') });
  const response = await parallel.extract({
    urls: params.urls,
    objective: params.objective,
    search_queries: params.queries,
    max_chars_total: Math.max(params.maxCharacters * params.urls.length, 2000),
    advanced_settings: {
      fetch_policy: {
        max_age_seconds: 600,
        timeout_seconds: 120,
      },
      full_content: {
        max_chars_per_result: params.maxCharacters,
      },
      excerpt_settings: {
        max_chars_per_result: Math.min(params.maxCharacters, 4000),
      },
    },
  });

  const results = (response.results ?? []).map((result): SearchResult => ({
    provider: 'parallel',
    sourceKind: 'fetch',
    query: params.objective || params.queries?.join(', ') || 'fetch_links',
    url: result.url ?? '',
    title: cleanTitle(result.title ?? ''),
    content: normalizeContent(result.full_content).slice(0, params.maxCharacters),
    publishedDate: result.publish_date ?? undefined,
  }));

  return uniqueByUrl(results);
}

async function fetchExaLinks(params: {
  urls: string[];
  objective?: string;
  maxCharacters: number;
}): Promise<SearchResult[]> {
  const exa = new Exa(requireEnv('EXA_API_KEY'));
  const response = await exa.getContents(params.urls, {
    text: {
      maxCharacters: params.maxCharacters,
    },
    highlights: params.objective
      ? {
          query: params.objective,
          maxCharacters: Math.min(params.maxCharacters, 4000),
        }
      : undefined,
    maxAgeHours: 0,
    filterEmptyResults: false,
  });

  const results = (response.results ?? []).map((result): SearchResult => ({
    provider: 'exa',
    sourceKind: 'fetch',
    query: params.objective || 'fetch_links',
    url: result.url ?? '',
    title: cleanTitle(result.title ?? ''),
    content: normalizeContent(result.text).slice(0, params.maxCharacters),
    publishedDate: result.publishedDate ?? undefined,
    author: result.author ?? undefined,
  }));

  return uniqueByUrl(results);
}

async function fetchFirecrawlLinks(params: {
  urls: string[];
  objective?: string;
  maxCharacters: number;
}): Promise<SearchResult[]> {
  const firecrawl = new FirecrawlApp({ apiKey: requireEnv('FIRECRAWL_API_KEY') });
  const results = await Promise.all(
    params.urls.map(async (url): Promise<SearchResult> => {
      const document = await firecrawl.scrape(url, {
        formats: ['markdown'],
        onlyMainContent: true,
        timeout: 30_000,
        storeInCache: false,
      });
      const metadata = document.metadata ?? {};
      return {
        provider: 'firecrawl',
        sourceKind: 'fetch',
        query: params.objective || 'fetch_links',
        url: metadata.sourceURL ?? metadata.url ?? url,
        title: cleanTitle(metadata.title),
        content: normalizeContent(document.markdown ?? document.answer).slice(
          0,
          params.maxCharacters,
        ),
        publishedDate: firstMetadataString(
          metadata.publishedTime,
          metadata.articlePublishedTime,
          metadata.date,
        ),
        author: firstMetadataString(metadata.author),
      };
    }),
  );

  return uniqueByUrl(results);
}

function buildFirecrawlDateFilter(startDate: string): string {
  const start = formatDateForFirecrawl(startDate);
  const end = formatDateForFirecrawl(new Date().toISOString());
  return `cdr:1,cd_min:${start},cd_max:${end}`;
}

function formatDateForFirecrawl(value: string): string {
  const date = new Date(value);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}
