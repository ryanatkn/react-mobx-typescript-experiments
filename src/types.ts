import RouterStore from './stores/RouterStore';
import BasicUsageStore from './stores/BasicUsageStore';
import ComputedPropertiesStore from './stores/ComputedPropertiesStore';
import EfficientNestedRerendersStore from './stores/EfficientNestedRerendersStore';
import GranularRerendersStore from './stores/GranularRerendersStore';
import DynamicDependenciesStore from './stores/DynamicDependenciesStore';
import BatchedMutationsStore from './stores/BatchedMutationsStore';
import TodosStore from './stores/TodosStore';

export type ExperimentName = 'basic-usage' | 'computed-properties'
  | 'granular-rerenders' | 'dynamic-dependencies' | 'batched-mutations'
  | 'efficient-nested-rerenders' | 'todos';

// TODO with TypeScript 2.0 we could use an enum with string literal values
// to generate this automatically.
export const experimentNames: ExperimentName[] = [
  'basic-usage', 'computed-properties', 'granular-rerenders', 'dynamic-dependencies',
  'efficient-nested-rerenders', 'batched-mutations', 'todos',
];

export interface Stores {
  routerStore: RouterStore;
  basicUsageStore: BasicUsageStore;
  computedPropertiesStore: ComputedPropertiesStore;
  efficientNestedRerendersStore: EfficientNestedRerendersStore;
  granularRerendersStore: GranularRerendersStore;
  dynamicDependenciesStore: DynamicDependenciesStore;
  batchedMutationsStore: BatchedMutationsStore;
  todosStore: TodosStore;
}
