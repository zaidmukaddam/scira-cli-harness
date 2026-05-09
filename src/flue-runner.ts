import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ResearchOptions, ResearchRun } from './types';

const DEFAULT_FLUE_MAX_ATTEMPTS = 3;
const DEFAULT_FLUE_RETRY_BASE_MS = 1500;

export type FlueResearchRetryOptions = {
  /** Total attempts including the first (default 3). */
  maxAttempts?: number;
  /** Delay before the second attempt, in ms; doubles each subsequent retry. */
  baseDelayMs?: number;
  /**
   * Called before waiting for a retry. If omitted, retries log with `console.warn`.
   * Pass a no-op to silence (for example when the benchmark logger is unset in quiet mode).
   */
  log?: (message: string) => void;
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function resolveRetryLog(retry?: FlueResearchRetryOptions): (message: string) => void {
  if (retry?.log) return retry.log;
  return (message: string) => {
    console.warn(message);
  };
}

function truncateForLog(message: string, maxChars: number): string {
  const oneLine = message.trim().split(/\r?\n/)[0] ?? message;
  if (oneLine.length <= maxChars) return oneLine;
  return `${oneLine.slice(0, maxChars)}…`;
}

export async function runFlueResearch(
  options: ResearchOptions,
  retry?: FlueResearchRetryOptions,
): Promise<ResearchRun> {
  const root = projectRoot();
  const flueBin = join(root, 'node_modules', '.bin', 'flue');
  if (!existsSync(flueBin)) {
    throw new Error('Missing Flue CLI. Run `bun install` before using the research harness.');
  }

  const maxAttempts = Math.max(1, retry?.maxAttempts ?? DEFAULT_FLUE_MAX_ATTEMPTS);
  const baseDelayMs = Math.max(0, retry?.baseDelayMs ?? DEFAULT_FLUE_RETRY_BASE_MS);
  const logRetry = resolveRetryLog(retry);

  let lastError: Error | undefined;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      return await spawnFlueResearchOnce(root, flueBin, options);
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      const retriable = isRetriableFlueFailure(lastError.message);
      if (!retriable || attempt === maxAttempts - 1) {
        throw lastError;
      }
      const delay = baseDelayMs * 2 ** attempt;
      const preview = truncateForLog(lastError.message, 320);
      logRetry(
        `[scira-harness] flue research retry: next attempt ${attempt + 2}/${maxAttempts} in ${delay}ms (${preview})`,
      );
      await sleep(delay);
    }
  }
  throw lastError ?? new Error('Flue research run failed.');
}

async function spawnFlueResearchOnce(
  root: string,
  flueBin: string,
  options: ResearchOptions,
): Promise<ResearchRun> {
  const id = `research-${Date.now().toString(36)}`;
  const proc = Bun.spawn(
    [
      flueBin,
      'run',
      'research',
      '--target',
      'node',
      '--id',
      id,
      '--workspace',
      join(root, '.flue'),
      '--output',
      root,
      '--payload',
      JSON.stringify(options),
    ],
    {
      cwd: root,
      env: process.env,
      stdout: 'pipe',
      stderr: 'pipe',
    },
  );

  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
    proc.exited,
  ]);

  if (exitCode !== 0) {
    throw new Error(stderr.trim() || stdout.trim() || `Flue research run failed with exit ${exitCode}.`);
  }

  const json = extractJsonPayload(stdout);
  try {
    return JSON.parse(json) as ResearchRun;
  } catch (error) {
    throw new Error(
      `Flue research run returned invalid JSON: ${error instanceof Error ? error.message : String(error)}\n${stdout}`,
    );
  }
}

function isRetriableFlueFailure(message: string): boolean {
  if (message.startsWith('Flue research run returned invalid JSON:')) {
    return false;
  }
  return true;
}

function extractJsonPayload(stdout: string): string {
  const trimmed = stdout.trim();
  if (trimmed.startsWith('{')) return trimmed;

  const jsonStart = trimmed.indexOf('\n{');
  if (jsonStart !== -1) return trimmed.slice(jsonStart + 1);

  return trimmed;
}

function projectRoot(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  if (existsSync(join(here, 'package.json'))) return here;
  return dirname(here);
}
