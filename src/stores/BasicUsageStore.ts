import {observable, action} from 'mobx';

export default class BasicUsageStore {
  @observable counter = 0;

  @action increment = (): void => {
    this.counter++;
  };
}
