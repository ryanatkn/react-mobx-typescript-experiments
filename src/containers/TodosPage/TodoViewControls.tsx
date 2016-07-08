import * as React from 'react';
import {observer} from 'mobx-react';
import TodosStore, {TodosView, views} from '../../stores/TodosStore';

interface Props {
  todosStore: TodosStore;
}

@observer
export default class TodoViewControls extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {todosStore} = this.props;
    return (
      <div>
        <select value={todosStore.view} onChange={this.doChangeView}>
          {views.map((view: TodosView): JSX.Element => {
            return <option key={view} value={view}>{view}</option>;
          })}
        </select>
      </div>
    );
  }

  doChangeText = (e: React.FormEvent): void => {
    const target = e.target as HTMLInputElement;
    this.props.todosStore.updateNewTodoText(target.value);
  };

  doAddTodo = (): void => {
    this.props.todosStore.addTodo(this.props.todosStore.newTodoText);
  };

  doChangeView = (e: React.FormEvent): void => {
    const target = e.target as HTMLInputElement;
    const view = target.value as TodosView;
    this.props.todosStore.setView(view);
  }
}
