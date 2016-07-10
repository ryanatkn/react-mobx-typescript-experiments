import RouterStore from '../stores/RouterStore';
import BasicUsageStore from '../stores/BasicUsageStore';
import ComputedPropertiesStore from '../stores/ComputedPropertiesStore';
import GranularRerendersStore from '../stores/GranularRerendersStore';
import DynamicDependenciesStore from '../stores/DynamicDependenciesStore';
import BatchedMutationsStore from '../stores/BatchedMutationsStore';
import TodosStore from '../stores/TodosStore';

/**
 * Creates the Mobx stores.
 */
export default function createMobxStores(history: HistoryModule.History): {} { // TODO Stores type?
  return {
    routerStore: new RouterStore(history),
    basicUsageStore: new BasicUsageStore(),
    computedPropertiesStore: new ComputedPropertiesStore(),
    granularRerendersStore: new GranularRerendersStore(),
    dynamicDependenciesStore: new DynamicDependenciesStore(),
    batchedMutationsStore: new BatchedMutationsStore(),
    todosStore: new TodosStore(),
  };
}
