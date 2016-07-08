export type ExperimentName = 'counter' | 'simple-form'
  | 'dynamic-dependencies' | 'todos';

// TODO with TypeScript 2.0 we could use an enum with string literal values
// to generate this automatically.
export const experimentNames: ExperimentName[] = [
  'counter', 'simple-form', 'dynamic-dependencies', 'todos',
];
