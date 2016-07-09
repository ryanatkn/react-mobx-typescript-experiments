import RouterStore from '../stores/RouterStore';
import CounterStore from '../stores/CounterStore';
import ComputedPropertiesStore from '../stores/ComputedPropertiesStore';
import DynamicDependenciesStore from '../stores/DynamicDependenciesStore';
import BatchedMutationsStore from '../stores/BatchedMutationsStore';
import TodosStore from '../stores/TodosStore';

/**
 * Creates the Mobx stores.
 */
export default function createMobxStores(history: HistoryModule.History): {} { // TODO Stores type?
  return {
    routerStore: new RouterStore(history),
    counterStore: new CounterStore(),
    computedPropertiesStore: new ComputedPropertiesStore(),
    dynamicDependenciesStore: new DynamicDependenciesStore(),
    BatchedMutationsStore: new BatchedMutationsStore(),
    todosStore: new TodosStore(),
  };
}
