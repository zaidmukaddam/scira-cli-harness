export type SearchProvider = 'parallel' | 'exa' | 'firecrawl';

export type Topic = 'general' | 'news';

export type Quality = 'default' | 'best';

export interface SearchResult {
  provider: SearchProvider;
  sourceKind?: 'search' | 'fetch';
  query: string;
  url: string;
  title: string;
  content: string;
  publishedDate?: string;
  author?: string;
}

export interface SearchBatch {
  query: string;
  results: SearchResult[];
}

export interface ResearchRun {
  query: string;
  provider: SearchProvider;
  generatedQueries: string[];
  searches: SearchBatch[];
  sources: SearchResult[];
  answer?: string;
  usage?: {
    inputTokens?: number;
    outputTokens?: number;
    totalTokens?: number;
  };
}

export interface ResearchOptions {
  query: string;
  provider?: SearchProvider;
  generatedQueries?: string[];
  maxResults: number;
  topic: Topic;
  quality: Quality;
  startDate?: string;
  model?: string;
  synthesize: boolean;
  useSandbox?: boolean;
  sandboxSnapshot?: string;
  sandboxTarget?: string;
}
