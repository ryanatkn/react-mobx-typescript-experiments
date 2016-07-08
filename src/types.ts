export type ExperimentName = 'counter' | 'simple-form'
  | 'dynamic-dependencies'| 'batched-mutations' | 'todos';

// TODO with TypeScript 2.0 we could use an enum with string literal values
// to generate this automatically.
export const experimentNames: ExperimentName[] = [
  'counter', 'simple-form', 'dynamic-dependencies', 'batched-mutations', 'todos',
];
