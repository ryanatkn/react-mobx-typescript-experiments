import {observable, action} from 'mobx';

export default class CounterStore {
  @observable
  counter = 0;

  @action
  increment = (): void => {
    this.counter++;
  };

  @action
  reset = (): void => {
    this.counter = 0;
  }
}
