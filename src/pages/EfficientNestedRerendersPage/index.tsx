import * as React from 'react';
import {observer, inject} from 'mobx-react';
import EfficientNestedRerendersStore from '../../stores/EfficientNestedRerendersStore';
import CounterDisplay from './CounterDisplay';
import {Stores} from '../../types';

interface SelectedStores {
  store?: EfficientNestedRerendersStore;
}

interface Props extends SelectedStores {}

@inject((stores: Stores): Props => ({store: stores.efficientNestedRerendersStore}))
@observer
export default class EfficientNestedRerendersPage extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {store} = this.props;
    return (
      <div className="page">
        <p>
          MobX offers a strategy for side-loading data into components with mobx-react's `@inject`.
          This is similar to `@connect` in Redux. Both MobX and Redux use a top-level `Provider`
          that provides a store or stores in the React context.
          The decorators select these stores from the context in a
          higher-order component and inject them into the target component's props.
        </p>
        <p>
          This example passes data into the child components both through props
          and by injecting the store directly. Notice that the components rerender only
          a single time on a change even though their props and observed store state both change.
        </p>
        <div className="form-group">
          <CounterDisplay counter={store!.counter} renderCountIndex={0}>
            <CounterDisplay counter={store!.counter} renderCountIndex={1}>
              <CounterDisplay counter={store!.counter} renderCountIndex={2}/>
            </CounterDisplay>
          </CounterDisplay>
        </div>
        <div className="form-group">
          <button className="pure-button" onClick={store!.increment}>
            increment
          </button>
        </div>
        <div className="form-group">
          <button className="pure-button" onClick={store!.reset}>
            reset
          </button>
        </div>
      </div>
    );
  }
}
