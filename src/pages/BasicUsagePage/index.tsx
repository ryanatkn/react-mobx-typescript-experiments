import * as React from 'react';
import {observer} from 'mobx-react';
import BasicUsageStore from '../../stores/BasicUsageStore';

interface Props {
  basicUsageStore?: BasicUsageStore; // provided by the `observer` decorator
}

@observer(['basicUsageStore'])
export default class BasicUsagePage extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {basicUsageStore} = this.props;
    return (
      <div className="page">
        <p>
          MobX makes React components automatically react to the data changes
          that their render funtions implicitly depend on.
          No explicit subscriptions are needed to achieve granular re-renders.
        </p>
        <div>{basicUsageStore.counter}</div>
        <div>
          <button className="pure-button" onClick={basicUsageStore.increment}>
            increment
          </button>
        </div>
      </div>
    );
  }
}
