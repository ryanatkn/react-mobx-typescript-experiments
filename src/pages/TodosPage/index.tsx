import * as React from 'react';
import {observer, inject} from 'mobx-react';
import TodosStore from '../../stores/TodosStore';
import TodoModel from '../../models/TodoModel';
import Todo from './Todo';
import NewTodo from './NewTodo';
import TodoViewControls from './TodoViewControls';
import {Stores} from '../../types';

interface SelectedStores {
  store?: TodosStore;
}

interface Props extends SelectedStores {}

@inject((stores: Stores): Props => ({store: stores.todosStore}))
@observer
export default class TodosPage extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {store} = this.props;
    return (
      <div className="page">
        <p>
          This experiment demonstrates a simple todo list.
          Some of the concepts introduced here include filtering arrays via computed properties,
          composing models within a store, performing actions both on the store and models,
          and defining second-order computed properties.
        </p>
        <div>
          {store!.completedCount}/{store!.todos.length} complete
        </div>
        <TodoViewControls todosStore={store!}/>
        <NewTodo todosStore={store!}/>
        {store!.visibleTodos.map((todo: TodoModel): JSX.Element => {
          return <Todo key={todo.id} todo={todo} onRemove={this.doRemoveTodo}/>;
        })}
      </div>
    );
  }

  doRemoveTodo = (todo: TodoModel): void => {
    this.props.store!.removeTodo(todo);
  };
}
