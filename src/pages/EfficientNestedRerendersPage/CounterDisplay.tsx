import * as React from 'react';
import {observer, inject} from 'mobx-react';
import EfficientNestedRerendersStore from '../../stores/EfficientNestedRerendersStore';

interface Props {
  counter: number;
  renderCountIndex: number; // hack, see the store for why it's being done like this
  children?: React.ReactNode; // for the nested demo we render some of these inside each other
  // provided by the `observer` decorator
  efficientNestedRerendersStore?: EfficientNestedRerendersStore;
}

@inject('efficientNestedRerendersStore')
@observer
export default class CounterDisplay extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {efficientNestedRerendersStore, counter, renderCountIndex} = this.props;

    // This is a hack to demonstrate some MobX behavior.
    // In normal code render functions should be kept free of side-effects.
    efficientNestedRerendersStore.renderCounts[renderCountIndex]++;

    return (
      <div style={{border: '1px solid #ddd', padding: '5px', marginTop: '5px'}}>
        <div>counter from props: {counter}</div>
        <div>counter from injected store: {efficientNestedRerendersStore.counter}</div>
        <div>
          <small>{efficientNestedRerendersStore.renderCounts[renderCountIndex]} rerenders</small>
        </div>
        {this.props.children}
      </div>
    );
  }
}
