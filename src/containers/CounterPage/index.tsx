import * as React from 'react';
import {observer} from 'mobx-react';
import CounterStore from '../../stores/CounterStore';

interface Props {
  counterStore?: CounterStore; // provided by the `observer` decorator
}

@observer(['counterStore'])
export default class CounterPage extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {counterStore} = this.props;
    return (
      <div className="page">
        <p>
          Mobx makes React components automatically react to the data changes
          that their render funtions implicitly depend on.
          No explicit subscriptions are needed to achieve granular re-renders.
        </p>
        <div>{counterStore.counter}</div>
        <div>
          <button onClick={counterStore.increment}>
            increment
          </button>
        </div>
      </div>
    );
  }
}
