import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { config } from 'dotenv';

function defaultEnvFilesLowToHigh(): string[] {
  const cwd = process.cwd();
  const fallbackRoot = process.env.SCIRA_PROJECT_ROOT?.trim();
  const chain: string[] = [];
  if (fallbackRoot) {
    const root = resolve(fallbackRoot);
    chain.push(resolve(root, '.env'), resolve(root, '.env.local'));
  }
  chain.push(resolve(cwd, '.env'), resolve(cwd, '.env.local'));
  return chain;
}

export function loadEnv() {
  const explicit = process.env.SCIRA_ENV_FILE;
  const base = defaultEnvFilesLowToHigh();
  const files = explicit ? [...base, resolve(explicit)] : base;
  const shellEnv = { ...process.env };

  for (const file of files) {
    if (existsSync(file)) {
      config({ path: file, override: true, quiet: true });
    }
  }

  for (const [key, value] of Object.entries(shellEnv)) {
    if (value !== undefined) process.env[key] = value;
  }
}

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}. Put it in .env or set SCIRA_ENV_FILE=/path/to/env.`);
  }
  return value;
}
