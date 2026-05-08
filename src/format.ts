import type { ResearchRun, SearchResult } from './types';

export function formatMarkdown(run: ResearchRun): string {
  if (run.answer) {
    return [run.answer, formatSourcesSection(run.sources)].filter(Boolean).join('\n\n');
  }

  const lines = [
    `## ${run.query}`,
    '',
    `Provider: \`${run.provider}\``,
    `Queries: ${run.generatedQueries.map((query) => `\`${query}\``).join(', ')}`,
    '',
    '### Sources',
    '',
  ];

  for (const [index, source] of run.sources.entries()) {
    lines.push(formatSource(index + 1, source));
  }

  return lines.join('\n');
}

function formatSourcesSection(sources: SearchResult[]): string {
  if (sources.length === 0) return '';

  const lines = ['## Source Ledger', ''];
  for (const [index, source] of sources.entries()) {
    lines.push(formatSource(index + 1, source));
  }
  return lines.join('\n');
}

function formatSource(index: number, source: SearchResult): string {
  const published = source.publishedDate ? ` (${source.publishedDate})` : '';
  const kind = source.sourceKind === 'fetch' ? 'fetch' : 'search';
  const meta = `\n  Provider: ${source.provider}; kind: ${kind}; query: ${source.query}`;
  const excerpt = source.content ? `\n  ${source.content.replace(/\s+/g, ' ').slice(0, 280)}` : '';
  return `${index}. [${source.title || source.url}](${source.url})${published}${meta}${excerpt}`;
}
