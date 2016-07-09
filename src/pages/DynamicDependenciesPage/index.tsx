import * as React from 'react';
import {observer} from 'mobx-react';
import DynamicDependenciesStore from '../../stores/DynamicDependenciesStore';

interface Props {
  dynamicDependenciesStore?: DynamicDependenciesStore; // provided by the `observer` decorator
}

@observer(['dynamicDependenciesStore'])
export default class CounterPage extends React.Component<Props, {}> {
  renderCount = -1;
  shouldReadCounter = true;

  render(): JSX.Element {
    const {dynamicDependenciesStore} = this.props;

    // This is a hack to demonstrate some Mobx behavior.
    // Side effects like these shouldn't be done in real code.
    this.renderCount++;
    if (this.renderCount === 3) {
      this.shouldReadCounter = false;
    }

    return (
      <div className="page">
        <p>
          Mobx dynamically updates a component's dependencies on each render.
          This component stops reading the counter for the 4th and 5th clicks,
          so the render count should not increment for them.
          Not reading the counter simply means
          not accessing it on the store during the render function.
          It resumes watching the counter starting with the 6th click.
          Clicking the counter 10 times should cause only 8 renders, but the click
          count should be 10.
        </p>
        <div className="form-group">
          <div>
            render count: {this.renderCount}
          </div>
          <div>
            {this.shouldReadCounter
              ? <span>click count: {dynamicDependenciesStore.counter}</span>
              : <em>[stopped reading counter]</em>
            }
          </div>
          <div>
            <button onClick={this.doIncrement}>
              increment
            </button>
          </div>
        </div>
        <div className="form-group">
          <button onClick={this.doReset}>
            reset
          </button>
        </div>
      </div>
    );
  }

  doIncrement = (): void => {
    this.props.dynamicDependenciesStore.increment();
    if (this.props.dynamicDependenciesStore.counter > 5) {
      this.shouldReadCounter = true;
      this.forceUpdate();
    }
  };

  doReset = (): void => {
    this.renderCount = -1;
    this.shouldReadCounter = true;
    this.props.dynamicDependenciesStore.reset();
    this.forceUpdate();
  }
}
