import { existsSync, readFileSync } from 'node:fs';
import { dirname, isAbsolute, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runResearch } from './research';
import type { Quality, ResearchRun, SearchProvider, Topic } from './types';

export interface BenchmarkFact {
  label: string;
  anyOf: string[];
}

export interface BenchmarkCase {
  id: string;
  title: string;
  category: string;
  question: string;
  queries?: string[];
  expectedFacts: BenchmarkFact[];
  requiredDomains: string[];
  requireCitation?: boolean;
  requireFetch?: boolean;
  referenceUrls?: string[];
}

export interface BenchmarkSuite {
  name: string;
  description?: string;
  inspiredBy?: string[];
  cases: BenchmarkCase[];
}

export interface BenchmarkRunOptions {
  suite: BenchmarkSuite;
  providers?: SearchProvider[];
  models: string[];
  caseIds?: string[];
  limit?: number;
  maxResults: number;
  topic: Topic;
  quality: Quality;
  useSandbox?: boolean;
  sandboxSnapshot?: string;
  sandboxTarget?: string;
  concurrency?: number;
  logger?: (message: string) => void;
}

export interface BenchmarkFactCheck {
  label: string;
  hit: boolean;
  matched?: string;
}

export interface BenchmarkDomainCheck {
  domain: string;
  hit: boolean;
  urls: string[];
}

export interface BenchmarkScore {
  score: number;
  passed: boolean;
  answerScore: number;
  sourceScore: number;
  citationScore: number;
  fetchScore: number;
  factChecks: BenchmarkFactCheck[];
  domainChecks: BenchmarkDomainCheck[];
  hasCitation: boolean;
  hasFetch: boolean;
}

export interface BenchmarkCaseResult {
  case: BenchmarkCase;
  provider: SearchProvider;
  model: string;
  score?: BenchmarkScore;
  run?: ResearchRun;
  error?: string;
  durationMs: number;
}

export interface BenchmarkReport {
  suite: BenchmarkSuite;
  startedAt: string;
  completedAt: string;
  providers: SearchProvider[];
  models: string[];
  concurrency: number;
  results: BenchmarkCaseResult[];
}

interface BenchmarkJob {
  index: number;
  runNumber: number;
  case: BenchmarkCase;
  provider: SearchProvider;
  model: string;
}

export function loadBenchmarkSuite(input?: string): BenchmarkSuite {
  const suitePath = resolveSuitePath(input);
  const suite = JSON.parse(readFileSync(suitePath, 'utf8')) as BenchmarkSuite;
  validateSuite(suite, suitePath);
  return suite;
}

export async function runBenchmark(options: BenchmarkRunOptions): Promise<BenchmarkReport> {
  const providers = options.providers?.length ? options.providers : availableProviders();
  if (providers.length === 0) {
    throw new Error('Benchmark requires at least one provider. Pass --providers or set a provider API key.');
  }
  if (options.models.length === 0) {
    throw new Error('Benchmark requires at least one model. Pass --models model-a,model-b or --model model.');
  }

  const cases = selectCases(options.suite, options.caseIds, options.limit);
  const startedAt = new Date().toISOString();
  const jobs = buildBenchmarkJobs(cases, providers, options.models);
  const results = Array.from<BenchmarkCaseResult | undefined>({ length: jobs.length });
  const totalRuns = jobs.length;
  const concurrency = Math.min(Math.max(options.concurrency ?? 1, 1), Math.max(totalRuns, 1));

  options.logger?.(
    `suite=${options.suite.name} cases=${cases.length} providers=${providers.join(',')} models=${options.models.join(',')} total_runs=${totalRuns} concurrency=${concurrency}`,
  );

  await runWithConcurrency(jobs, concurrency, async (job) => {
    results[job.index] = await runBenchmarkJob(job, options, totalRuns);
  });

  options.logger?.(`complete total_runs=${totalRuns} duration=${formatDuration(Date.now() - Date.parse(startedAt))}`);

  return {
    suite: options.suite,
    startedAt,
    completedAt: new Date().toISOString(),
    providers,
    models: options.models,
    concurrency,
    results: results.filter((result): result is BenchmarkCaseResult => Boolean(result)),
  };
}

export function formatBenchmarkCasesMarkdown(suite: BenchmarkSuite): string {
  const lines = [`# Benchmark Suite: ${suite.name}`, ''];
  if (suite.description) lines.push(suite.description, '');

  lines.push('| Case | Category | Expected facts | Required domains |');
  lines.push('| --- | --- | --- | --- |');

  for (const benchmarkCase of suite.cases) {
    lines.push(
      `| \`${benchmarkCase.id}\` | ${benchmarkCase.category} | ${benchmarkCase.expectedFacts
        .map((fact) => fact.label)
        .join('<br>')} | ${benchmarkCase.requiredDomains.join(', ')} |`,
    );
  }

  if (suite.inspiredBy?.length) {
    lines.push('', 'Inspired by:');
    for (const url of suite.inspiredBy) lines.push(`- ${url}`);
  }

  return lines.join('\n');
}

export function formatBenchmarkMarkdown(report: BenchmarkReport): string {
  const lines = [`# Benchmark Results: ${report.suite.name}`, ''];
  if (report.suite.description) lines.push(report.suite.description, '');
  lines.push(`Started: ${report.startedAt}`);
  lines.push(`Completed: ${report.completedAt}`);
  lines.push(`Concurrency: ${report.concurrency}`);
  lines.push('');

  lines.push('## Summary', '');
  lines.push('| Provider | Model | Cases | Avg score | Passes | Errors | Avg duration |');
  lines.push('| --- | --- | ---: | ---: | ---: | ---: | ---: |');

  for (const summary of summarizeResults(report.results)) {
    lines.push(
      `| ${summary.provider} | \`${summary.model}\` | ${summary.cases} | ${summary.averageScore.toFixed(
        1,
      )} | ${summary.passes} | ${summary.errors} | ${formatDuration(summary.averageDurationMs)} |`,
    );
  }

  lines.push('', '## Case Runs', '');
  for (const result of report.results) {
    const score = result.score;
    lines.push(`### ${result.case.id} / ${result.provider} / ${result.model}`);
    if (result.error) {
      lines.push(`Error: ${result.error}`, '');
      continue;
    }
    if (!score || !result.run) {
      lines.push('Error: missing benchmark result.', '');
      continue;
    }

    lines.push(
      `Score: ${score.score}/100 (${score.passed ? 'pass' : 'fail'}), duration ${formatDuration(
        result.durationMs,
      )}`,
    );
    lines.push(
      `Facts: ${score.factChecks.map((check) => `${check.hit ? 'yes' : 'no'} ${check.label}`).join('; ')}`,
    );
    lines.push(
      `Sources: ${score.domainChecks
        .map((check) => `${check.hit ? 'yes' : 'no'} ${check.domain}`)
        .join('; ')}; citation: ${score.hasCitation ? 'yes' : 'no'}; fetch: ${score.hasFetch ? 'yes' : 'no'}`,
    );
    lines.push('');
    lines.push('Answer excerpt:');
    lines.push('');
    lines.push(blockquote(truncate(result.run.answer ?? '', 900)));
    lines.push('');
  }

  if (report.suite.inspiredBy?.length) {
    lines.push('## Benchmark Design References', '');
    for (const url of report.suite.inspiredBy) lines.push(`- ${url}`);
  }

  return lines.join('\n');
}

function scoreBenchmarkCase(benchmarkCase: BenchmarkCase, run: ResearchRun): BenchmarkScore {
  const answer = run.answer ?? '';
  const normalizedAnswer = normalizeForMatch(answer);
  const factChecks = benchmarkCase.expectedFacts.map((fact): BenchmarkFactCheck => {
    const matched = fact.anyOf.find((candidate) =>
      normalizedAnswer.includes(normalizeForMatch(candidate)),
    );
    return {
      label: fact.label,
      hit: Boolean(matched),
      matched,
    };
  });
  const domainChecks = benchmarkCase.requiredDomains.map((domain): BenchmarkDomainCheck => {
    const urls = run.sources
      .map((source) => source.url)
      .filter((url) => sourceMatchesDomain(url, domain));
    return {
      domain,
      hit: urls.length > 0,
      urls,
    };
  });

  const hasCitation = /\[[^\]]+\]\(https?:\/\/[^)]+\)/.test(answer);
  const hasFetch = run.sources.some((source) => source.sourceKind === 'fetch');
  const answerScore = ratio(factChecks.filter((check) => check.hit).length, factChecks.length);
  const sourceScore = ratio(domainChecks.filter((check) => check.hit).length, domainChecks.length);
  const citationScore = benchmarkCase.requireCitation === false || hasCitation ? 1 : 0;
  const fetchScore = !benchmarkCase.requireFetch || hasFetch ? 1 : 0;
  const score = Math.round(
    100 * (answerScore * 0.62 + sourceScore * 0.25 + citationScore * 0.08 + fetchScore * 0.05),
  );

  return {
    score,
    passed:
      score >= 75 &&
      factChecks.every((check) => check.hit) &&
      domainChecks.every((check) => check.hit) &&
      citationScore === 1 &&
      fetchScore === 1,
    answerScore,
    sourceScore,
    citationScore,
    fetchScore,
    factChecks,
    domainChecks,
    hasCitation,
    hasFetch,
  };
}

function buildBenchmarkJobs(
  cases: BenchmarkCase[],
  providers: SearchProvider[],
  models: string[],
): BenchmarkJob[] {
  const jobs: BenchmarkJob[] = [];

  for (const benchmarkCase of cases) {
    for (const provider of providers) {
      for (const model of models) {
        jobs.push({
          index: jobs.length,
          runNumber: jobs.length + 1,
          case: benchmarkCase,
          provider,
          model,
        });
      }
    }
  }

  return jobs;
}

async function runBenchmarkJob(
  job: BenchmarkJob,
  options: BenchmarkRunOptions,
  totalRuns: number,
): Promise<BenchmarkCaseResult> {
  const start = Date.now();
  const benchmarkCase = job.case;

  options.logger?.(
    `start ${job.runNumber}/${totalRuns} case=${benchmarkCase.id} provider=${job.provider} model=${job.model}`,
  );

  try {
    const run = await runResearch(
      {
        query: buildBenchmarkQuery(benchmarkCase),
        provider: job.provider,
        generatedQueries: benchmarkCase.queries,
        maxResults: options.maxResults,
        topic: options.topic,
        quality: options.quality,
        model: job.model,
        synthesize: true,
        useSandbox: options.useSandbox,
        sandboxSnapshot: options.sandboxSnapshot,
        sandboxTarget: options.sandboxTarget,
      },
      {
        log: options.logger ?? (() => {}),
      },
    );
    const score = scoreBenchmarkCase(benchmarkCase, run);
    const durationMs = Date.now() - start;

    options.logger?.(
      `done ${job.runNumber}/${totalRuns} case=${benchmarkCase.id} provider=${job.provider} model=${job.model} score=${score.score} status=${
        score.passed ? 'PASS' : 'FAIL'
      } sources=${run.sources.length} duration=${formatDuration(durationMs)}`,
    );

    return {
      case: benchmarkCase,
      provider: job.provider,
      model: job.model,
      run,
      score,
      durationMs,
    };
  } catch (error) {
    const durationMs = Date.now() - start;
    const message = error instanceof Error ? error.message : String(error);

    options.logger?.(
      `error ${job.runNumber}/${totalRuns} case=${benchmarkCase.id} provider=${job.provider} model=${job.model} duration=${formatDuration(
        durationMs,
      )} message=${message}`,
    );

    return {
      case: benchmarkCase,
      provider: job.provider,
      model: job.model,
      error: message,
      durationMs,
    };
  }
}

async function runWithConcurrency<T>(
  items: T[],
  concurrency: number,
  worker: (item: T) => Promise<void>,
): Promise<void> {
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < items.length) {
      const item = items[nextIndex];
      nextIndex += 1;
      if (item !== undefined) await worker(item);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => runWorker()),
  );
}

function buildBenchmarkQuery(benchmarkCase: BenchmarkCase): string {
  return `${benchmarkCase.question}

Benchmark answer contract:
- Answer in 1-4 concise sentences or bullets.
- Cite official or primary sources with Markdown links.
- Prefer exact numbers and command strings.
- If a specific URL is named, use fetch_links on that URL before relying on it.
- Do not include a separate Sources section; the CLI adds the source ledger.`;
}

function selectCases(
  suite: BenchmarkSuite,
  caseIds: string[] | undefined,
  limit: number | undefined,
): BenchmarkCase[] {
  const requested = new Set(caseIds ?? []);
  let cases = requested.size
    ? suite.cases.filter((benchmarkCase) => requested.has(benchmarkCase.id))
    : suite.cases;
  if (requested.size && cases.length !== requested.size) {
    const found = new Set(cases.map((benchmarkCase) => benchmarkCase.id));
    const missing = [...requested].filter((id) => !found.has(id));
    throw new Error(`Unknown benchmark case id(s): ${missing.join(', ')}`);
  }
  if (limit && limit > 0) cases = cases.slice(0, limit);
  return cases;
}

function summarizeResults(results: BenchmarkCaseResult[]) {
  const byCombo = new Map<
    string,
    {
      provider: SearchProvider;
      model: string;
      cases: number;
      totalScore: number;
      passes: number;
      errors: number;
      totalDurationMs: number;
    }
  >();

  for (const result of results) {
    const key = `${result.provider}\t${result.model}`;
    const summary =
      byCombo.get(key) ??
      {
        provider: result.provider,
        model: result.model,
        cases: 0,
        totalScore: 0,
        passes: 0,
        errors: 0,
        totalDurationMs: 0,
      };
    summary.cases += 1;
    summary.totalScore += result.score?.score ?? 0;
    summary.passes += result.score?.passed ? 1 : 0;
    summary.errors += result.error ? 1 : 0;
    summary.totalDurationMs += result.durationMs;
    byCombo.set(key, summary);
  }

  return [...byCombo.values()].map((summary) => ({
    ...summary,
    averageScore: summary.cases ? summary.totalScore / summary.cases : 0,
    averageDurationMs: summary.cases ? summary.totalDurationMs / summary.cases : 0,
  }));
}

function availableProviders(): SearchProvider[] {
  const providers: SearchProvider[] = [];
  if (process.env.PARALLEL_API_KEY) providers.push('parallel');
  if (process.env.EXA_API_KEY) providers.push('exa');
  if (process.env.FIRECRAWL_API_KEY) providers.push('firecrawl');
  return providers;
}

function validateSuite(suite: BenchmarkSuite, suitePath: string) {
  if (!suite.name) throw new Error(`Benchmark suite ${suitePath} is missing name.`);
  if (!Array.isArray(suite.cases) || suite.cases.length === 0) {
    throw new Error(`Benchmark suite ${suitePath} must include at least one case.`);
  }
  for (const benchmarkCase of suite.cases) {
    if (!benchmarkCase.id || !benchmarkCase.question) {
      throw new Error(`Benchmark suite ${suitePath} has a case missing id or question.`);
    }
    if (!Array.isArray(benchmarkCase.expectedFacts) || benchmarkCase.expectedFacts.length === 0) {
      throw new Error(`Benchmark case ${benchmarkCase.id} must define expectedFacts.`);
    }
    if (!Array.isArray(benchmarkCase.requiredDomains) || benchmarkCase.requiredDomains.length === 0) {
      throw new Error(`Benchmark case ${benchmarkCase.id} must define requiredDomains.`);
    }
  }
}

function resolveSuitePath(input?: string): string {
  const root = projectRoot();
  if (!input) return join(root, 'benchmarks', 'research-smoke.json');
  if (isAbsolute(input)) return input;

  const fromCwd = resolve(process.cwd(), input);
  if (existsSync(fromCwd)) return fromCwd;

  const fromRoot = resolve(root, input);
  if (existsSync(fromRoot)) return fromRoot;

  const named = resolve(root, 'benchmarks', input.endsWith('.json') ? input : `${input}.json`);
  if (existsSync(named)) return named;

  return fromCwd;
}

function projectRoot(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  if (existsSync(join(here, 'package.json'))) return here;
  return dirname(here);
}

function sourceMatchesDomain(url: string, domain: string): boolean {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    return host === domain || host.endsWith(`.${domain}`);
  } catch {
    return url.includes(domain);
  }
}

function normalizeForMatch(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/(?<=\d),(?=\d)/g, '')
    .replace(/[’']/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9./:_+-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function ratio(numerator: number, denominator: number): number {
  return denominator === 0 ? 1 : numerator / denominator;
}

function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

function truncate(value: string, maxLength: number): string {
  const collapsed = value.replace(/\s+/g, ' ').trim();
  if (collapsed.length <= maxLength) return collapsed;
  return `${collapsed.slice(0, maxLength - 1)}...`;
}

function blockquote(value: string): string {
  if (!value) return '> (empty)';
  return value
    .split('\n')
    .map((line) => `> ${line}`)
    .join('\n');
}
