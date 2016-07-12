import * as React from 'react';
import {observer, inject} from 'mobx-react';
import BasicUsageStore from '../../stores/BasicUsageStore';
import {Stores} from '../../types';

interface SelectedStores {
  store?: BasicUsageStore;
}

interface Props extends SelectedStores {}

@inject((stores: Stores): Props => ({store: stores.basicUsageStore}))
@observer
export default class BasicUsagePage extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {store} = this.props;
    return (
      <div className="page">
        <p>
          MobX makes React components automatically react to the data changes
          that their render funtions implicitly depend on.
          No explicit subscriptions are needed to achieve granular re-renders.
        </p>
        <div>{store.counter}</div>
        <div>
          <button className="pure-button" onClick={store.increment}>
            increment
          </button>
        </div>
      </div>
    );
  }
}
