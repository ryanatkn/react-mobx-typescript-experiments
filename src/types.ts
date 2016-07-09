export type ExperimentName = 'counter' | 'computed-properties'
  | 'dynamic-dependencies'| 'batched-mutations' | 'todos';

// TODO with TypeScript 2.0 we could use an enum with string literal values
// to generate this automatically.
export const experimentNames: ExperimentName[] = [
  'counter', 'computed-properties', 'dynamic-dependencies', 'batched-mutations', 'todos',
];
