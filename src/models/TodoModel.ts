import {observable, action} from 'mobx';

let _id = 0;

export default class TodoModel {
  id = ++_id;

  @observable text = '';
  @observable isComplete = false;

  constructor(text: string) {
    this.text = text;
  }

  @action toggleComplete = (): void => {
    this.isComplete = !this.isComplete;
  };
}
