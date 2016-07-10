import TodoModel from '../models/TodoModel';
import {observable, computed, action} from 'mobx';

const DEFAULT_TODOS = [
  new TodoModel('bake pie'),
  new TodoModel('clean room'),
  new TodoModel('eat pie'),
];

export type TodosView = 'all' | 'completed' | 'pending';

// TODO check if the TypeScript nightly has string literals for enums yet
export const views: TodosView[] = ['all', 'completed', 'pending'];

export default class TodoStore {
  @observable todos: TodoModel[] = DEFAULT_TODOS;
  @observable newTodoText = '';
  @observable view: TodosView = 'all';

  @computed get completedTodos(): TodoModel[] {
    return this.todos.filter((todo: TodoModel): boolean => todo.isComplete);
  }

  @computed get pendingTodos(): TodoModel[] {
    return this.todos.filter((todo: TodoModel): boolean => !todo.isComplete);
  }

  // An example of a second-order computed property.
  @computed get completedCount(): number {
    return this.completedTodos.length;
  }

  // Another example of a second-order computed property.
  @computed get visibleTodos(): TodoModel[] {
    switch (this.view) {
      case 'all': return this.todos;
      case 'completed': return this.completedTodos;
      case 'pending': return this.pendingTodos;
      default: throw new Error('type is `never` here, but have to return or throw'); // TODO 
    }
  }

  @action addTodo = (text: string): void => {
    if (!text) {
      return;
    }
    this.todos.push(new TodoModel(text));
    this.newTodoText = '';
  };

  @action removeTodo = (todo: TodoModel): void => {
    (this.todos as any).remove(todo); // TODO type is unfortunately array instead of MobX array
  };

  @action updateNewTodoText = (text: string): void => {
    this.newTodoText = text;
  };

  @action setView = (view: TodosView): void => {
    this.view = view;
  };
}
