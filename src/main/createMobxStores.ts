import {Stores} from '../types';
import RouterStore from '../stores/RouterStore';
import BasicUsageStore from '../stores/BasicUsageStore';
import ComputedPropertiesStore from '../stores/ComputedPropertiesStore';
import EfficientNestedRerendersStore from '../stores/EfficientNestedRerendersStore';
import GranularRerendersStore from '../stores/GranularRerendersStore';
import DynamicDependenciesStore from '../stores/DynamicDependenciesStore';
import BatchedMutationsStore from '../stores/BatchedMutationsStore';
import TodosStore from '../stores/TodosStore';

/**
 * Creates the MobX stores.
 */
export default function createMobxStores(history: HistoryModule.History): Stores {
  return {
    routerStore: new RouterStore(history),
    basicUsageStore: new BasicUsageStore(),
    computedPropertiesStore: new ComputedPropertiesStore(),
    efficientNestedRerendersStore: new EfficientNestedRerendersStore(),
    granularRerendersStore: new GranularRerendersStore(),
    dynamicDependenciesStore: new DynamicDependenciesStore(),
    batchedMutationsStore: new BatchedMutationsStore(),
    todosStore: new TodosStore(),
  };
}
