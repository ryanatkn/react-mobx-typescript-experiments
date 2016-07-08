import * as React from 'react';
import {observer} from 'mobx-react';
import BatchedMutationsStore from '../../stores/BatchedMutationsStore';

interface Props {
  BatchedMutationsStore?: BatchedMutationsStore; // provided by the `observer` decorator
}

@observer(['BatchedMutationsStore'])
export default class BatchedMutationsPage extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {BatchedMutationsStore} = this.props;
    return (
      <div className="page">
        <p>
          <a href="https://mobxjs.github.io/mobx/refguide/action.html">Actions in Mobx</a> are
          functions that mutate observable data.
          Using actions is optional unless `mobx.useStrict(true)` is used.
          Combined wih the Mobx devtools, they achieve many of the same benefits
          that actions in Redux, Flux, and other event sourcing patterns provide.
          Changes during an action are batched, so downstream data that depends on the changes
          an action makes is not updated until the action completes,
          meaning computed properties will only be updated a single time.
          In this experiment, the counter is mutated many times on every click,
          but the computed property that squares the counter should only recompute once per click.
        </p>
        <div>counter: {BatchedMutationsStore.counter}</div>
        <div>counter squared: {BatchedMutationsStore.counterSquared}</div>
        <div>
          counter squared compute count: {BatchedMutationsStore.counterSquaredComputeCount}
        </div>
        <div>
          <button onClick={BatchedMutationsStore.increment}>
            increment and decrement many times
          </button>
        </div>
      </div>
    );
  }
}
