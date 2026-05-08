import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ResearchOptions, ResearchRun } from './types';

export async function runFlueResearch(options: ResearchOptions): Promise<ResearchRun> {
  const root = projectRoot();
  const flueBin = join(root, 'node_modules', '.bin', 'flue');
  if (!existsSync(flueBin)) {
    throw new Error('Missing Flue CLI. Run `bun install` before using the research harness.');
  }

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
