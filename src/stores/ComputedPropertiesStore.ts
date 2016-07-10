import {observable, computed, action} from 'mobx';

const DEFAULT_FIRST_NAME = 'Jimi';
const DEFAULT_LAST_NAME = 'Jackson';

export default class ComputedPropertiesStore {
  @observable firstName = DEFAULT_FIRST_NAME;
  @observable lastName = DEFAULT_LAST_NAME;

  // This is used to track the number of times `fullName` is computed.
  fullNameComputeCount = 0;

  @computed get fullName(): string {
    // This is a hack to track change counts.
    // Getters shouldn't mutate stuff in real code.
    this.fullNameComputeCount++;

    return this.firstName + ' ' + this.lastName;
  }

  @action updateFirstName = (firstName: string): void => {
    this.firstName = firstName;
  };

  @action updateLastName = (lastName: string): void => {
    this.lastName = lastName;
  };

  @action reset = (): void => {
    this.firstName = DEFAULT_FIRST_NAME;
    this.lastName = DEFAULT_LAST_NAME;
    this.fullNameComputeCount = 0;
  };
}
