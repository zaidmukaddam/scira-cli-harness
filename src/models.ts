import {
  findEnvKeys,
  getModel,
  getModels,
  getProviders,
  getSupportedThinkingLevels,
} from '@mariozechner/pi-ai';
import type { Api, Model, Provider } from '@mariozechner/pi-ai';

export interface AvailableModel {
  id: string;
  provider: string;
  modelId: string;
  name: string;
  api: string;
  reasoning: boolean;
  thinking: string[];
  input: string[];
  contextWindow: number;
  maxTokens: number;
  cost: {
    input: number;
    output: number;
    cacheRead: number;
    cacheWrite: number;
  };
  configured: boolean;
  envKeys?: string[];
}

export interface ListModelsOptions {
  provider?: string;
  search?: string;
  limit?: number;
  configuredOnly?: boolean;
}

export function listModelProviders(): string[] {
  return [...getProviders()].sort((a, b) => a.localeCompare(b));
}

export function listAvailableModels(options: ListModelsOptions = {}): AvailableModel[] {
  const providers = options.provider ? [options.provider] : listModelProviders();
  const search = normalize(options.search ?? '');
  const models: AvailableModel[] = [];

  for (const provider of providers) {
    if (!listModelProviders().includes(provider)) continue;

    for (const model of getModels(provider as Provider as never) as Model<Api>[]) {
      const available = toAvailableModel(model);
      if (options.configuredOnly && !available.configured) continue;
      if (search && !modelMatchesSearch(available, search)) continue;
      models.push(available);
    }
  }

  const sorted = models.sort((a, b) => a.id.localeCompare(b.id));
  return options.limit && options.limit > 0 ? sorted.slice(0, options.limit) : sorted;
}

export function validateModelIds(modelIds: string[]) {
  const invalid = modelIds.filter((modelId) => !resolveModelId(modelId));
  if (invalid.length === 0) return;

  const lines = ['Unknown Flue model id(s):'];
  for (const modelId of invalid) {
    lines.push(`- ${modelId}`);
    const suggestions = suggestModelIds(modelId);
    if (suggestions.length) {
      lines.push(`  Did you mean: ${suggestions.join(', ')}`);
    }
  }
  lines.push('');
  lines.push('Run `bun run src/cli.ts models --search <name>` to inspect registered model ids.');
  throw new Error(lines.join('\n'));
}

export function formatModelsMarkdown(models: AvailableModel[], options: ListModelsOptions = {}): string {
  const title = options.provider
    ? `# Flue Models: ${options.provider}`
    : '# Flue Models';
  const lines = [title, ''];

  if (options.search) lines.push(`Filter: \`${options.search}\``, '');
  lines.push(`Models: ${models.length}`, '');
  lines.push('| Model id | Name | API | Reasoning | Context | Max tokens | Cost in/out | Env |');
  lines.push('| --- | --- | --- | --- | ---: | ---: | ---: | --- |');

  for (const model of models) {
    lines.push(
      `| \`${model.id}\` | ${escapeCell(model.name)} | ${model.api} | ${
        model.reasoning ? model.thinking.join(', ') : 'off'
      } | ${formatNumber(model.contextWindow)} | ${formatNumber(model.maxTokens)} | ${formatCost(
        model.cost.input,
      )}/${formatCost(model.cost.output)} | ${model.configured ? `yes (${model.envKeys?.join(', ')})` : 'missing'} |`,
    );
  }

  if (models.length === 0) {
    lines.push('', 'No matching registered Flue models found.');
  }

  return lines.join('\n');
}

export function suggestModelIds(input: string, limit = 5): string[] {
  const allModels = listAvailableModels();
  const [provider, modelId = ''] = splitModelId(input);
  const normalizedInput = normalize(input);
  const normalizedModelId = normalize(modelId || input);

  return allModels
    .map((model) => {
      const sameProvider = provider && model.provider === provider ? -20 : 0;
      const contains =
        normalize(model.id).includes(normalizedInput) ||
        normalize(model.modelId).includes(normalizedModelId)
          ? -30
          : 0;
      return {
        id: model.id,
        score:
          sameProvider +
          contains +
          Math.min(
            levenshtein(normalize(model.id), normalizedInput),
            levenshtein(normalize(model.modelId), normalizedModelId),
          ),
      };
    })
    .sort((a, b) => a.score - b.score || a.id.localeCompare(b.id))
    .slice(0, limit)
    .map((candidate) => candidate.id);
}

export function inferModelListFilters(input: string | undefined, options: ListModelsOptions): ListModelsOptions {
  const providers = new Set(listModelProviders());
  const value = input?.trim();
  if (!value) return options;
  if (!options.provider && providers.has(value)) return { ...options, provider: value };
  if (!options.search) return { ...options, search: value };
  return options;
}

function resolveModelId(model: string): Model<Api> | undefined {
  const [provider, modelId] = splitModelId(model);
  if (!provider || !modelId) return undefined;
  return getModel(provider as never, modelId as never) as Model<Api> | undefined;
}

function splitModelId(model: string): [string, string?] {
  const slash = model.indexOf('/');
  if (slash === -1) return [model];
  return [model.slice(0, slash), model.slice(slash + 1)];
}

function toAvailableModel(model: Model<Api>): AvailableModel {
  const envKeys = findEnvKeys(model.provider);
  return {
    id: `${model.provider}/${model.id}`,
    provider: model.provider,
    modelId: model.id,
    name: model.name,
    api: model.api,
    reasoning: model.reasoning,
    thinking: getSupportedThinkingLevels(model),
    input: model.input,
    contextWindow: model.contextWindow,
    maxTokens: model.maxTokens,
    cost: model.cost,
    configured: Boolean(envKeys?.length),
    envKeys,
  };
}

function modelMatchesSearch(model: AvailableModel, search: string): boolean {
  return [
    model.id,
    model.provider,
    model.modelId,
    model.name,
    model.api,
    model.input.join(','),
  ].some((value) => normalize(value).includes(search));
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9.:-]+/g, '');
}

function escapeCell(value: string): string {
  return value.replace(/\|/g, '\\|');
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

function formatCost(value: number): string {
  return `$${value.toFixed(value >= 1 ? 2 : 3)}`;
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  const current = Array.from({ length: b.length + 1 }, () => 0);

  for (let i = 1; i <= a.length; i++) {
    current[0] = i;
    for (let j = 1; j <= b.length; j++) {
      current[j] = Math.min(
        previous[j]! + 1,
        current[j - 1]! + 1,
        previous[j - 1]! + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
    previous.splice(0, previous.length, ...current);
  }

  return previous[b.length]!;
}
