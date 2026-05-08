import { runFlueResearch } from './flue-runner';
import type { ResearchOptions, ResearchRun } from './types';

export async function runResearch(options: ResearchOptions): Promise<ResearchRun> {
  return runFlueResearch(options);
}
