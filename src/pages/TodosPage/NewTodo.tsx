import * as React from 'react';
import {observer} from 'mobx-react';
import TodosStore from '../../stores/TodosStore';

interface Props {
  todosStore: TodosStore;
}

@observer
export default class NewTodo extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {todosStore} = this.props;
    return (
      <form className="pure-form">
        <fieldset>
          <input type="text" onChange={this.doChangeText} value={todosStore.newTodoText}
            placeholder="new todo"
          />
          <button type="button" className="pure-button" onClick={this.doAddTodo}
            style={{marginLeft: '5px'}}
          >
            add todo
          </button>
        </fieldset>
      </form>
    );
  }

  doChangeText = (e: React.FormEvent): void => {
    const target = e.target as HTMLInputElement;
    this.props.todosStore.updateNewTodoText(target.value);
  };

  doAddTodo = (): void => {
    this.props.todosStore.addTodo(this.props.todosStore.newTodoText);
  }
}
