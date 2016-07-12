export type ExperimentName = 'basic-usage' | 'computed-properties'
  | 'granular-rerenders' | 'dynamic-dependencies' | 'batched-mutations'
  | 'efficient-nested-rerenders' | 'todos';

// TODO with TypeScript 2.0 we could use an enum with string literal values
// to generate this automatically.
export const experimentNames: ExperimentName[] = [
  'basic-usage', 'computed-properties', 'granular-rerenders', 'dynamic-dependencies',
  'efficient-nested-rerenders', 'batched-mutations', 'todos',
];
