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
      <div style={{height: '37px', lineHeight: '37px'}}>
        <label className="pure-checkbox">
          <input type="checkbox" checked={todo.isComplete} onChange={todo.toggleComplete}/>
          <span style={{marginLeft: '8px'}}>{todo.text}</span>
          <button className="pure-button" onClick={this.doRemove} style={{float: 'right'}}>
            ×
          </button>
        </label>
      </div>
    );
  }

  doRemove = (): void => {
    this.props.onRemove(this.props.todo);
  }
}
