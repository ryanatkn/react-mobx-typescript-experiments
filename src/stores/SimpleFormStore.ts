import {observable, computed, action} from 'mobx';

const DEFAULT_FIRST_NAME = 'Jimi';
const DEFAULT_LAST_NAME = 'Jackson';

export default class SimpleFormStore {
  @observable
  firstName = DEFAULT_FIRST_NAME;

  @observable
  lastName = DEFAULT_LAST_NAME;

  @computed
  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  @action
  updateFirstName = (firstName: string): void => {
    this.firstName = firstName;
  };

  @action
  updateLastName = (lastName: string): void => {
    this.lastName = lastName;
  };

  @action
  reset = (): void => {
    this.firstName = DEFAULT_FIRST_NAME;
    this.lastName = DEFAULT_LAST_NAME;
  };
}
