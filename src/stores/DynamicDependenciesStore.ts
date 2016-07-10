import {observable, action} from 'mobx';

export default class DynamicDependenciesStore {
  @observable counter = 0;

  @action increment = (): void => {
    this.counter++;
  };

  @action reset = (): void => {
    this.counter = 0;
  };
}
