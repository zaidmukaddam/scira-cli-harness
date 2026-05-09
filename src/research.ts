import { runFlueResearch, type FlueResearchRetryOptions } from './flue-runner';
import type { ResearchOptions, ResearchRun } from './types';

export type { FlueResearchRetryOptions };

export async function runResearch(
  options: ResearchOptions,
  retry?: FlueResearchRetryOptions,
): Promise<ResearchRun> {
  return runFlueResearch(options, retry);
}
