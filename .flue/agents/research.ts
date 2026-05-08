import type { FlueContext, ToolDef } from '@flue/sdk';
import { buildQueries, chooseProvider, fetchLinks, runSearches } from '../../src/search.ts';
import { runPythonInDaytona } from '../../src/daytona.ts';
import type {
  Quality,
  ResearchOptions,
  ResearchRun,
  SearchBatch,
  SearchProvider,
  SearchResult,
  Topic,
} from '../../src/types.ts';

export const triggers = {};

type ResearchPayload = ResearchOptions;

interface SearchToolArgs {
  queries?: string[];
  query?: string;
  provider?: SearchProvider;
  maxResults?: number;
  topic?: Topic;
  quality?: Quality;
  startDate?: string;
}

interface DaytonaToolArgs {
  code: string;
  installLibraries?: string[];
  snapshot?: string;
  target?: string;
}

interface FetchLinksToolArgs {
  urls: string[];
  provider?: SearchProvider;
  objective?: string;
  queries?: string[];
  maxCharacters?: number;
}

const searchToolParameters = {
  type: 'object',
  properties: {
    query: {
      type: 'string',
      description: 'Single search query. Prefer queries when running multiple searches.',
    },
    queries: {
      type: 'array',
      items: { type: 'string' },
      description: 'One or more focused web search queries.',
    },
    provider: {
      type: 'string',
      enum: ['parallel', 'exa', 'firecrawl'],
      description: 'Search backend override.',
    },
    maxResults: {
      type: 'number',
      description: 'Maximum results per query.',
    },
    topic: {
      type: 'string',
      enum: ['general', 'news'],
      description: 'Search topic.',
    },
    quality: {
      type: 'string',
      enum: ['default', 'best'],
      description: 'Search depth where the provider supports it.',
    },
    startDate: {
      type: 'string',
      description: 'Optional YYYY-MM-DD lower date bound.',
    },
  },
  additionalProperties: false,
};

const fetchLinksToolParameters = {
  type: 'object',
  properties: {
    urls: {
      type: 'array',
      items: { type: 'string' },
      description: 'Specific URLs to fetch. Use absolute http(s) URLs.',
    },
    provider: {
      type: 'string',
      enum: ['parallel', 'exa', 'firecrawl'],
      description: 'Fetch backend. Defaults to the run provider.',
    },
    objective: {
      type: 'string',
      description: 'What information to extract or verify from these pages.',
    },
    queries: {
      type: 'array',
      items: { type: 'string' },
      description: 'Optional keyword queries to focus extraction.',
    },
    maxCharacters: {
      type: 'number',
      description: 'Maximum characters per fetched URL. Defaults to 6000.',
    },
  },
  required: ['urls'],
  additionalProperties: false,
};

const daytonaToolParameters = {
  type: 'object',
  properties: {
    code: {
      type: 'string',
      description: 'Complete Python code to run. Print the final result.',
    },
    installLibraries: {
      type: 'array',
      items: { type: 'string' },
      description: 'Optional pip packages to install before running the code.',
    },
    snapshot: {
      type: 'string',
      description: 'Optional Daytona snapshot override.',
    },
    target: {
      type: 'string',
      description: 'Optional Daytona target override, such as us.',
    },
  },
  required: ['code'],
  additionalProperties: false,
};

export default async function ({ init, payload }: FlueContext<ResearchPayload>): Promise<ResearchRun> {
  const provider = chooseProvider(payload.provider);
  const generatedQueries = buildQueries(payload.query, payload.generatedQueries);
  const initialSearches = await runSearches({
    provider,
    queries: generatedQueries,
    maxResults: payload.maxResults,
    topic: payload.topic,
    quality: payload.quality,
    startDate: payload.startDate,
  });
  const initialSources = dedupeSources(initialSearches.flatMap((search) => search.results));

  const baseRun: ResearchRun = {
    query: payload.query,
    provider,
    generatedQueries,
    searches: initialSearches,
    sources: initialSources,
  };

  if (!payload.synthesize) return baseRun;
  if (!payload.model) {
    throw new Error('Synthesis requires --model. Use --no-synthesis for source collection only.');
  }

  const followUpSearches: SearchBatch[] = [];
  const tools = createTools(payload, provider, followUpSearches);
  const agent = await init({
    model: payload.model,
    sandbox: 'empty',
    role: 'researcher',
    tools,
  });

  try {
    const session = await agent.session('research');
    const answer = await session.prompt(buildResearchPrompt(payload, generatedQueries, initialSources), {
      role: 'researcher',
      timeout: 600,
    });
    const searches = [...initialSearches, ...followUpSearches];
    const sources = dedupeSources(searches.flatMap((search) => search.results));

    return {
      ...baseRun,
      searches,
      sources,
      answer: answer.text.trim(),
    };
  } finally {
    await agent.destroy();
  }
}

function createTools(
  payload: ResearchPayload,
  defaultProvider: SearchProvider,
  followUpSearches: SearchBatch[],
): ToolDef[] {
  const tools: ToolDef[] = [
    {
      name: 'scira_search',
      description:
        'Run Scira-style web research using Parallel, Exa, or Firecrawl. Use for follow-up searches when the supplied sources are insufficient.',
      parameters: searchToolParameters,
      execute: async (args: Record<string, any>) => {
        const a = args as SearchToolArgs;
        const provider = chooseProvider(a.provider ?? defaultProvider);
        const queries = normalizeQueries(a.queries, a.query);
        if (queries.length === 0) throw new Error('scira_search requires query or queries.');

        const searches = await runSearches({
          provider,
          queries,
          maxResults: a.maxResults ?? payload.maxResults,
          topic: a.topic ?? payload.topic,
          quality: a.quality ?? payload.quality,
          startDate: a.startDate ?? payload.startDate,
        });
        followUpSearches.push(...searches);

        return JSON.stringify(
          {
            searches,
            sources: dedupeSources(searches.flatMap((search) => search.results)),
          },
          null,
          2,
        );
      },
    },
    {
      name: 'fetch_links',
      description:
        'Fetch current page content from specific URLs using Parallel extract, Exa contents, or Firecrawl scrape. Use this to verify benchmark numbers, pricing, dates, or claims from named links.',
      parameters: fetchLinksToolParameters,
      execute: async (args: Record<string, any>) => {
        const a = args as FetchLinksToolArgs;
        const provider = chooseProvider(args.provider ?? defaultProvider);
        const results = await fetchLinks({
          provider,
          urls: args.urls,
          objective: args.objective ?? payload.query,
          queries: args.queries,
          maxCharacters: args.maxCharacters ?? 6000,
        });
        followUpSearches.push({
          query: `fetch_links: ${args.objective ?? payload.query}`,
          results,
        });

        return JSON.stringify({ results }, null, 2);
      },
    },
  ];

  if (payload.useSandbox) {
    tools.push({
      name: 'daytona_python',
      description:
        'Run Python in an isolated Daytona sandbox for calculations, data analysis, parsing, or small transformations.',
      parameters: daytonaToolParameters,
      execute: async (args: Record<string, any>) => {
        const a = args as DaytonaToolArgs;
        return JSON.stringify(
          await runPythonInDaytona({
            code: a.code,
            installLibs: a.installLibraries,
            snapshot: a.snapshot ?? payload.sandboxSnapshot,
            target: a.target ?? payload.sandboxTarget,
          }),
          null,
          2,
        );
      },
    });
  }

  return tools;
}

function buildResearchPrompt(
  payload: ResearchPayload,
  generatedQueries: string[],
  sources: SearchResult[],
): string {
  return `Research question:
${payload.query}

Search plan already executed:
${generatedQueries.map((query) => `- ${query}`).join('\n')}

Initial sources:
${formatSourcesForPrompt(sources)}

Instructions:
- Answer the research question using the initial sources.
- Use scira_search for follow-up evidence only if the initial sources are insufficient.
- Use fetch_links on specific high-value URLs before relying on exact benchmark numbers, pricing, dates, or quotes.
- ${payload.useSandbox ? 'Use daytona_python when computation or parsing would materially improve the answer.' : 'Do not perform code execution; no sandbox tool is available.'}
- Cite claims inline with descriptive Markdown links, not labels like "source 1".
- Do not include a separate Sources or References section; the CLI appends an exact source ledger.`;
}

function formatSourcesForPrompt(sources: SearchResult[]): string {
  if (sources.length === 0) return '(no sources found; use scira_search before answering)';

  return sources
    .slice(0, 30)
    .map((source, index) => {
      const published = source.publishedDate ? `\nPublished: ${source.publishedDate}` : '';
      const author = source.author ? `\nAuthor: ${source.author}` : '';
      return `<source index="${index + 1}">
Title: ${source.title}
URL: ${source.url}${published}${author}
Provider: ${source.provider}
Query: ${source.query}
Excerpt:
${source.content}
</source>`;
    })
    .join('\n\n');
}

function normalizeQueries(queries?: string[], query?: string): string[] {
  const values = queries?.length ? queries : query ? [query] : [];
  return values.map((value) => value.trim()).filter(Boolean).slice(0, 5);
}

function dedupeSources(sources: SearchResult[]): SearchResult[] {
  const byUrl = new Map<string, SearchResult>();

  for (const source of sources) {
    if (!source.url) continue;
    const previous = byUrl.get(source.url);
    if (!previous || sourceScore(source) > sourceScore(previous)) {
      byUrl.set(source.url, source);
    }
  }

  return [...byUrl.values()];
}

function sourceScore(source: SearchResult): number {
  return (source.sourceKind === 'fetch' ? 10_000 : 0) + (source.content?.length ?? 0);
}
