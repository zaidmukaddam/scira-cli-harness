import { Daytona } from '@daytonaio/sdk';
import { requireEnv } from './env';

export interface DaytonaRunOptions {
  code: string;
  installLibs?: string[];
  snapshot?: string;
  target?: string;
}

export interface DaytonaRunResult {
  result: string;
  stdout?: string;
  stderr?: string;
  charts?: unknown[];
  raw?: unknown;
}

export async function runPythonInDaytona(options: DaytonaRunOptions): Promise<DaytonaRunResult> {
  const snapshot = options.snapshot || process.env.DAYTONA_SNAPSHOT_NAME;
  const daytona = new Daytona({
    apiKey: requireEnv('DAYTONA_API_KEY'),
    target: options.target || process.env.DAYTONA_TARGET || 'us',
  });

  const sandbox = await daytona.create(snapshot ? { snapshot } : undefined);

  try {
    if (options.installLibs?.length) {
      const libs = options.installLibs.map(shellQuote).join(' ');
      await sandbox.process.executeCommand(`pip install ${libs}`, undefined, undefined, 120);
    }

    const execution = await sandbox.process.codeRun(options.code);
    return normalizeCodeRunResult(execution);
  } finally {
    try {
      await sandbox.delete();
    } catch {
      // Best-effort cleanup. The caller should still receive execution output.
    }
  }
}

function normalizeCodeRunResult(execution: any): DaytonaRunResult {
  return {
    result: String(execution?.result ?? execution?.artifacts?.stdout ?? ''),
    stdout:
      typeof execution?.artifacts?.stdout === 'string'
        ? execution.artifacts.stdout
        : undefined,
    stderr:
      typeof execution?.artifacts?.stderr === 'string'
        ? execution.artifacts.stderr
        : undefined,
    charts: Array.isArray(execution?.artifacts?.charts) ? execution.artifacts.charts : undefined,
    raw: execution,
  };
}

function shellQuote(value: string): string {
  return `'${value.replace(/'/g, "'\\''")}'`;
}
