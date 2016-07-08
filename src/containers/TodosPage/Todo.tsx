import * as React from 'react';
import {observer} from 'mobx-react';
import TodoModel from '../../models/TodoModel';

interface Props {
  todo: TodoModel;
  onRemove(todo: TodoModel): void;
}

@observer
export default class Todo extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {todo} = this.props;
    return (
      <div>
        <label>
          <input type="checkbox" checked={todo.isComplete} onChange={todo.toggleComplete}/>
          {todo.text}
          <button onClick={this.doRemove} style={{marginLeft: 10}}>×</button>
        </label>
      </div>
    );
  }

  doRemove = (): void => {
    this.props.onRemove(this.props.todo);
  }
}
