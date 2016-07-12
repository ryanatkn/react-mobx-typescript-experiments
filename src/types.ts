export type ExperimentName = 'basic-usage' | 'computed-properties'
  | 'granular-rerenders' | 'efficient-nested-rerenders' | 'dynamic-dependencies'
  | 'batched-mutations' | 'todos';

// TODO with TypeScript 2.0 we could use an enum with string literal values
// to generate this automatically.
export const experimentNames: ExperimentName[] = [
  'basic-usage', 'computed-properties', 'granular-rerenders', 'efficient-nested-rerenders',
  'dynamic-dependencies', 'batched-mutations', 'todos',
];
