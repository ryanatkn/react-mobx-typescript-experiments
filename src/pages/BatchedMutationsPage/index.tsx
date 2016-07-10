import * as React from 'react';
import {observer} from 'mobx-react';
import BatchedMutationsStore from '../../stores/BatchedMutationsStore';

interface Props {
  batchedMutationsStore?: BatchedMutationsStore; // provided by the `observer` decorator
}

@observer(['batchedMutationsStore'])
export default class BatchedMutationsPage extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {batchedMutationsStore} = this.props;
    return (
      <div className="page">
        <p>
          <a href="https://mobxjs.github.io/mobx/refguide/action.html">Actions in MobX</a> are
          functions that mutate observable data.
          Using actions is optional unless `mobx.useStrict(true)` is used.
          Combined wih the MobX devtools, they achieve many of the same benefits
          that actions in Redux, Flux, and other event sourcing patterns provide.
        </p>
        <p>
          Mutations during an action are batched in a transaction,
          so downstream data that depends on the changes does not update
          until the action completes.
        </p>
        <p>
          MobX allows you to react to any observable data changes via `reaction` and `autorun`,
          which have similar purposes but different characteristics.
          In this example the observable counter is watched by a reaction and the number of times
          it appears to change is tracked as the "counter reaction count".
          It is also watched by an autorun which is counted as "counter autorun count".
        </p>
        <p>
          In this example, the counter is mutated many times on every click.
          It demonstrates how two types of downstream data,
          computed properties used in a React component and reactions/autorun,
          will run only a single time when the upstream data changes are wrapped in an action.
        </p>
        <div><small>counter:</small> {batchedMutationsStore.counter}</div>
        <div><small>counter squared:</small> {batchedMutationsStore.counterSquared}</div>
        <div>
          <small>counter squared compute count:</small>{' '}
          {batchedMutationsStore.counterSquaredComputeCount}
        </div>
        <div>
          <small>counter reaction count:</small>{' '}
          {batchedMutationsStore.counterReactionCount}
        </div>
        <div>
          <small>counter autorun count:</small>{' '}
          {batchedMutationsStore.counterAutorunCount}
        </div>
        <div className="form-group btns-vertical">
          <button className="pure-button" onClick={batchedMutationsStore.incrementWithAction}>
            increment and decrement many times in an action
          </button>
          <button className="pure-button" onClick={batchedMutationsStore.increment}>
            increment and decrement many times without an action
          </button>
        </div>
        <div className="form-group">
          <button className="pure-button" onClick={batchedMutationsStore.reset}>
            reset
          </button>
        </div>
      </div>
    );
  }
}
