import {observable, computed, action} from 'mobx';

export default class BatchedMutationstore {
  @observable
  counter = 0;

  // This is used to track the number of times `counterSquared` is computed.
  counterSquaredComputeCount = 0;

  @computed get counterSquared(): number {
    // This is a hack to track change counts.
    // Getters shouldn't mutate stuff in real code.
    this.counterSquaredComputeCount++;
    return this.counter * this.counter;
  }

  @action
  increment = (): void => {
    this.counter++;
    this.counter -= 2;
    this.counter++;
    this.counter++;
    this.counter--;
    this.counter++;
  };
}
