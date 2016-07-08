import * as React from 'react';
import {observer} from 'mobx-react';
import TodosStore from '../../stores/TodosStore';
import TodoModel from '../../models/TodoModel';
import Todo from './Todo';
import NewTodo from './NewTodo';
import TodoViewControls from './TodoViewControls';

interface Props {
  todosStore?: TodosStore;
}

@observer(['todosStore'])
export default class TodosPage extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {todosStore} = this.props;
    return (
      <div className="page">
        <p>
          This experiment demonstrates a simple todo list.
          Some of the concepts introduced here include filtering arrays via computed properties,
          composing models within a store, actions both on the store and models,
          and second-order computed properties.
        </p>
        <div>
          {todosStore.completedCount}/{todosStore.todos.length} complete
        </div>
        <TodoViewControls todosStore={todosStore}/>
        <NewTodo todosStore={todosStore}/>
        {todosStore.visibleTodos.map((todo: TodoModel): JSX.Element => {
          return <Todo key={todo.id} todo={todo} onRemove={this.doRemoveTodo}/>;
        })}
      </div>
    );
  }

  doRemoveTodo = (todo: TodoModel): void => {
    this.props.todosStore.removeTodo(todo);
  };
}
