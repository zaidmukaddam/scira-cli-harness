#!/usr/bin/env bun
import { readFileSync, writeFileSync } from 'node:fs';
import {
  formatBenchmarkCasesMarkdown,
  formatBenchmarkMarkdown,
  loadBenchmarkSuite,
  runBenchmark,
} from './benchmark';
import { runPythonInDaytona } from './daytona';
import { loadEnv } from './env';
import { formatMarkdown } from './format';
import {
  formatModelsMarkdown,
  inferModelListFilters,
  listAvailableModels,
  validateModelIds,
} from './models';
import { runResearch } from './research';
import type { Quality, SearchProvider, Topic } from './types';

interface CliOptions {
  command: 'research' | 'sandbox' | 'benchmark' | 'models' | 'help';
  query: string;
  provider?: SearchProvider;
  providers?: SearchProvider[];
  queries?: string[];
  maxResults: number;
  topic: Topic;
  quality: Quality;
  startDate?: string;
  model?: string;
  models?: string[];
  synthesize: boolean;
  json: boolean;
  useSandbox: boolean;
  sandboxSnapshot?: string;
  sandboxTarget?: string;
  code?: string;
  file?: string;
  installLibs?: string[];
  benchmarkSuite?: string;
  benchmarkCases?: string[];
  benchmarkLimit?: number;
  benchmarkConcurrency?: number;
  listCases: boolean;
  listModels: boolean;
  modelProvider?: string;
  modelSearch?: string;
  modelLimit?: number;
  configuredOnly: boolean;
  outputFile?: string;
  quiet: boolean;
}

async function main() {
  loadEnv();
  const options = parseArgs(Bun.argv.slice(2));

  if (options.command === 'help') {
    printHelp();
    return;
  }

  if (options.command === 'sandbox') {
    const code = options.code ?? (options.file ? readFileSync(options.file, 'utf8') : options.query);
    if (!code.trim()) throw new Error('Missing sandbox code. Pass --code, --file, or positional code.');

    const result = await runPythonInDaytona({
      code,
      installLibs: options.installLibs,
      snapshot: options.sandboxSnapshot,
      target: options.sandboxTarget,
    });

    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }

    console.log(result.stdout || result.result || '(no output)');
    return;
  }

  if (options.command === 'models') {
    const filters = inferModelListFilters(options.query, {
      provider: options.modelProvider,
      search: options.modelSearch,
      limit: options.modelLimit,
      configuredOnly: options.configuredOnly,
    });
    const models = listAvailableModels(filters);
    const output = options.json
      ? JSON.stringify(models, null, 2)
      : formatModelsMarkdown(models, filters);
    writeOutput(output, options.outputFile, options.quiet);
    return;
  }

  if (options.command === 'benchmark') {
    const suite = loadBenchmarkSuite(options.benchmarkSuite);

    if (options.listModels) {
      const filters = {
        provider: options.modelProvider,
        search: options.modelSearch,
        limit: options.modelLimit ?? options.benchmarkLimit,
        configuredOnly: options.configuredOnly,
      };
      const models = listAvailableModels(filters);
      const output = options.json
        ? JSON.stringify(models, null, 2)
        : formatModelsMarkdown(models, filters);
      writeOutput(output, options.outputFile, options.quiet);
      return;
    }

    if (options.listCases) {
      const output = options.json
        ? JSON.stringify(suite, null, 2)
        : formatBenchmarkCasesMarkdown(suite);
      writeOutput(output, options.outputFile, options.quiet);
      return;
    }

    const models = resolveBenchmarkModels(options);
    validateModelIds(models);
    const report = await runBenchmark({
      suite,
      providers: options.providers ?? (options.provider ? [options.provider] : undefined),
      models,
      caseIds: options.benchmarkCases,
      limit: options.benchmarkLimit,
      maxResults: options.maxResults,
      topic: options.topic,
      quality: options.quality,
      useSandbox: options.useSandbox,
      sandboxSnapshot: options.sandboxSnapshot,
      sandboxTarget: options.sandboxTarget,
      concurrency: resolveBenchmarkConcurrency(options),
      logger: options.quiet ? undefined : logBenchmark,
    });
    const output = options.json
      ? JSON.stringify(report, null, 2)
      : formatBenchmarkMarkdown(report);
    writeOutput(output, options.outputFile, options.quiet);
    return;
  }

  if (options.model) validateModelIds([options.model]);
  const run = await runResearch({
    query: options.query,
    provider: options.provider,
    generatedQueries: options.queries,
    maxResults: options.maxResults,
    topic: options.topic,
    quality: options.quality,
    startDate: options.startDate,
    model: options.model,
    synthesize: options.synthesize,
    useSandbox: options.useSandbox,
    sandboxSnapshot: options.sandboxSnapshot,
    sandboxTarget: options.sandboxTarget,
  });

  if (options.json) {
    console.log(JSON.stringify(run, null, 2));
    return;
  }

  console.log(formatMarkdown(run));
}

function parseArgs(args: string[]): CliOptions {
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    return defaultOptions('help', '');
  }

  const command =
    args[0] === 'research' || args[0] === 'sandbox' || args[0] === 'benchmark' || args[0] === 'models'
      ? args[0]
      : 'research';
  const rest =
    args[0] === 'research' || args[0] === 'sandbox' || args[0] === 'benchmark' || args[0] === 'models'
      ? args.slice(1)
      : args;
  const positionals: string[] = [];
  const options = defaultOptions(command, '');

  for (let index = 0; index < rest.length; index++) {
    const arg = rest[index];
    if (!arg) continue;

    if (arg === '--json') {
      options.json = true;
      continue;
    }
    if (arg === '--no-synthesis') {
      options.synthesize = false;
      continue;
    }
    if (arg === '--sandbox') {
      options.useSandbox = true;
      continue;
    }
    if (arg === '--provider') {
      if (options.command === 'models') {
        options.modelProvider = readValue(rest, ++index, arg);
      } else {
        options.provider = parseProvider(readValue(rest, ++index, arg));
      }
      continue;
    }
    if (arg === '--providers') {
      options.providers = readValue(rest, ++index, arg)
        .split(',')
        .map((value) => parseProvider(value.trim()));
      continue;
    }
    if (arg === '--query') {
      options.queries = readValue(rest, ++index, arg)
        .split(',')
        .map((value) => value.trim())
        .filter(Boolean);
      continue;
    }
    if (arg === '--max-results') {
      options.maxResults = Number.parseInt(readValue(rest, ++index, arg), 10);
      if (!Number.isFinite(options.maxResults) || options.maxResults < 1) {
        throw new Error('--max-results must be a positive integer.');
      }
      continue;
    }
    if (arg === '--topic') {
      options.topic = parseTopic(readValue(rest, ++index, arg));
      continue;
    }
    if (arg === '--quality') {
      options.quality = parseQuality(readValue(rest, ++index, arg));
      continue;
    }
    if (arg === '--start-date') {
      options.startDate = readValue(rest, ++index, arg);
      continue;
    }
    if (arg === '--model') {
      options.model = readValue(rest, ++index, arg);
      continue;
    }
    if (arg === '--models') {
      options.models = readValue(rest, ++index, arg)
        .split(',')
        .map((value) => value.trim())
        .filter(Boolean);
      continue;
    }
    if (arg === '--suite') {
      options.benchmarkSuite = readValue(rest, ++index, arg);
      continue;
    }
    if (arg === '--list-models') {
      options.listModels = true;
      continue;
    }
    if (arg === '--model-provider') {
      options.modelProvider = readValue(rest, ++index, arg);
      continue;
    }
    if (arg === '--search' || arg === '--model-search') {
      options.modelSearch = readValue(rest, ++index, arg);
      continue;
    }
    if (arg === '--model-limit') {
      options.modelLimit = Number.parseInt(readValue(rest, ++index, arg), 10);
      if (!Number.isFinite(options.modelLimit) || options.modelLimit < 1) {
        throw new Error('--model-limit must be a positive integer.');
      }
      continue;
    }
    if (arg === '--configured-only') {
      options.configuredOnly = true;
      continue;
    }
    if (arg === '--case' || arg === '--cases') {
      options.benchmarkCases = readValue(rest, ++index, arg)
        .split(',')
        .map((value) => value.trim())
        .filter(Boolean);
      continue;
    }
    if (arg === '--limit') {
      const limit = Number.parseInt(readValue(rest, ++index, arg), 10);
      if (!Number.isFinite(limit) || limit < 1) {
        throw new Error('--limit must be a positive integer.');
      }
      if (options.command === 'models' || options.listModels) {
        options.modelLimit = limit;
      } else {
        options.benchmarkLimit = limit;
      }
      continue;
    }
    if (arg === '--concurrency') {
      options.benchmarkConcurrency = parsePositiveInteger(
        readValue(rest, ++index, arg),
        '--concurrency',
      );
      continue;
    }
    if (arg === '--list-cases') {
      options.listCases = true;
      continue;
    }
    if (arg === '--out' || arg === '--output') {
      options.outputFile = readValue(rest, ++index, arg);
      continue;
    }
    if (arg === '--quiet') {
      options.quiet = true;
      continue;
    }
    if (arg === '--sandbox-snapshot' || arg === '--snapshot') {
      options.sandboxSnapshot = readValue(rest, ++index, arg);
      continue;
    }
    if (arg === '--sandbox-target' || arg === '--target') {
      options.sandboxTarget = readValue(rest, ++index, arg);
      continue;
    }
    if (arg === '--code') {
      options.code = readValue(rest, ++index, arg);
      continue;
    }
    if (arg === '--file') {
      options.file = readValue(rest, ++index, arg);
      continue;
    }
    if (arg === '--install') {
      options.installLibs = readValue(rest, ++index, arg)
        .split(',')
        .map((value) => value.trim())
        .filter(Boolean);
      continue;
    }
    if (arg.startsWith('-')) {
      throw new Error(`Unknown option ${arg}`);
    }
    positionals.push(arg);
  }

  options.query = positionals.join(' ').trim();
  if (!options.query && options.command === 'research') throw new Error('Missing query.');
  return options;
}

function defaultOptions(
  command: 'research' | 'sandbox' | 'benchmark' | 'models' | 'help',
  query: string,
): CliOptions {
  return {
    command,
    query,
    maxResults: 10,
    topic: 'general',
    quality: 'default',
    synthesize: true,
    json: false,
    useSandbox: false,
    listCases: false,
    listModels: false,
    configuredOnly: false,
    quiet: false,
  };
}

function readValue(args: string[], index: number, option: string): string {
  const value = args[index];
  if (!value || value.startsWith('-')) throw new Error(`${option} requires a value.`);
  return value;
}

function parseProvider(value: string): SearchProvider {
  if (value === 'parallel' || value === 'exa' || value === 'firecrawl') return value;
  throw new Error(`Unsupported provider "${value}". Use parallel, exa, or firecrawl.`);
}

function resolveBenchmarkModels(options: CliOptions): string[] {
  if (options.models?.length) return options.models;
  if (options.model) return [options.model];
  if (process.env.BENCHMARK_MODELS) {
    return process.env.BENCHMARK_MODELS.split(',')
      .map((value) => value.trim())
      .filter(Boolean);
  }
  return [];
}

function resolveBenchmarkConcurrency(options: CliOptions): number {
  if (options.benchmarkConcurrency) return options.benchmarkConcurrency;
  if (process.env.BENCHMARK_CONCURRENCY) {
    return parsePositiveInteger(process.env.BENCHMARK_CONCURRENCY, 'BENCHMARK_CONCURRENCY');
  }
  return 2;
}

function parsePositiveInteger(value: string, name: string): number {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed < 1) {
    throw new Error(`${name} must be a positive integer.`);
  }
  return parsed;
}

function writeOutput(output: string, outputFile?: string, quiet = false) {
  if (outputFile) {
    writeFileSync(outputFile, `${output}\n`);
    if (!quiet) console.error(`[benchmark] wrote ${outputFile}`);
    return;
  }
  console.log(output);
}

function logBenchmark(message: string) {
  console.error(`[benchmark] ${message}`);
}

function parseTopic(value: string): Topic {
  if (value === 'general' || value === 'news') return value;
  throw new Error(`Unsupported topic "${value}". Use general or news.`);
}

function parseQuality(value: string): Quality {
  if (value === 'default' || value === 'best') return value;
  throw new Error(`Unsupported quality "${value}". Use default or best.`);
}

function printHelp() {
  console.log(`Scira CLI Harness

Usage:
  scira-harness "research question" [options]
  scira-harness research "research question" [options]
  scira-harness benchmark --models openai/gpt-4.1-mini --providers parallel,exa
  scira-harness models xai
  scira-harness sandbox --code "print(2 + 2)" [options]
  scira-harness sandbox --file analysis.py [options]

Options:
  --provider parallel|exa|firecrawl   Search backend. Defaults to available env keys.
  --providers parallel,exa            Benchmark provider sweep.
  --query "q1,q2,q3"                  Override generated search queries.
  --max-results 10                    Results per query.
  --topic general|news                Search topic.
  --quality default|best              Search quality where supported.
  --start-date YYYY-MM-DD             Filter results after this date where supported.
  --model openai/gpt-4.1-mini         Synthesize through the Flue research agent.
  --models model-a,model-b            Benchmark model sweep.
  --list-models                       Print registered Flue models without running benchmark cases.
  --model-provider xai                Filter model list by Flue model provider.
  --search grok                       Filter model list by model id/name/API.
  --model-limit 50                    Limit model list output.
  --configured-only                   Show models whose provider env key is configured.
  --suite research-smoke              Benchmark suite name or JSON path.
  --case id1,id2                      Benchmark case ids.
  --limit 2                           Limit benchmark cases.
  --concurrency 2                     Benchmark runs to execute in parallel. Default: 2.
  --list-cases                        Print benchmark cases without running them.
  --out results.md                    Write benchmark output to a file.
  --quiet                             Suppress benchmark progress logs.
  --sandbox                           Give the Flue agent a Daytona Python tool when useful.
  --sandbox-snapshot name             Daytona snapshot. Defaults to DAYTONA_SNAPSHOT_NAME or Daytona's default.
  --sandbox-target us                 Daytona target. Default: DAYTONA_TARGET or us.
  --no-synthesis                      Return collected sources only.
  --code "print(2 + 2)"               Python code for the sandbox command.
  --file analysis.py                  Python file for the sandbox command.
  --install numpy,pandas              pip libraries for the sandbox command.
  --json                              Print full JSON run data.
  -h, --help                          Show this help.

Environment:
  PARALLEL_API_KEY, EXA_API_KEY, or FIRECRAWL_API_KEY for source gathering.
  OPENAI_API_KEY, XAI_API_KEY, or another Flue-supported provider key when using --model.
  DAYTONA_API_KEY when using sandbox features.
  BENCHMARK_MODELS can provide default comma-separated models for benchmark runs.
  BENCHMARK_CONCURRENCY can provide the default benchmark parallelism.
  SCIRA_ENV_FILE=/path/to/.env can point at an explicit env file.
`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
