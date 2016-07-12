import * as React from 'react';
import {observer, inject} from 'mobx-react';
import EfficientNestedRerendersStore from '../../stores/EfficientNestedRerendersStore';
import {Stores} from '../../types';
import * as assign from 'lodash/assign';

interface SelectedStores {
  store?: EfficientNestedRerendersStore;
}

interface Props extends SelectedStores {
  counter: number;
  renderCountIndex: number; // hack, see the store for why it's being done like this
  children?: React.ReactNode; // for the nested demo we render some of these inside each other
}

@inject((stores: Stores, nextProps: Props): Props => {
  return assign({store: stores.efficientNestedRerendersStore}, nextProps);
})
@observer
export default class CounterDisplay extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {store, counter, renderCountIndex} = this.props;

    // This is a hack to demonstrate some MobX behavior.
    // In normal code render functions should be kept free of side-effects.
    store.renderCounts[renderCountIndex]++;

    return (
      <div style={{border: '1px solid #ddd', padding: '5px', marginTop: '5px'}}>
        <div>counter from props: {counter}</div>
        <div>counter from injected store: {store.counter}</div>
        <div>
          <small>{store.renderCounts[renderCountIndex]} rerenders</small>
        </div>
        {this.props.children}
      </div>
    );
  }
}
