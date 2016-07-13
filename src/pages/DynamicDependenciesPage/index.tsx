import * as React from 'react';
import {observer, inject} from 'mobx-react';
import DynamicDependenciesStore from '../../stores/DynamicDependenciesStore';
import {Stores} from '../../types';

interface SelectedStores {
  store?: DynamicDependenciesStore;
}

interface Props extends SelectedStores {}

@inject((stores: Stores): Props => ({store: stores.dynamicDependenciesStore}))
@observer
export default class DynamicDependenciesPage extends React.Component<Props, {}> {
  renderCount = -1;
  shouldReadCounter = true;

  render(): JSX.Element {
    const {store} = this.props;

    // This is a hack to demonstrate some MobX behavior.
    // In normal code render functions should be kept free of side-effects.
    this.renderCount++;
    if (this.renderCount === 3) {
      this.shouldReadCounter = false;
    }

    return (
      <div className="page">
        <p>
          MobX dynamically updates a component's dependencies on each render.
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
            <small>render count:</small> {this.renderCount}
          </div>
          <div>
            {this.shouldReadCounter
              ? <span><small>click count:</small> {store!.counter}</span>
              : <em>[stopped reading counter]</em>
            }
          </div>
          <div>
            <button className="pure-button" onClick={this.doIncrement}>
              increment
            </button>
          </div>
        </div>
        <div className="form-group">
          <button className="pure-button" onClick={this.doReset}>
            reset
          </button>
        </div>
      </div>
    );
  }

  doIncrement = (): void => {
    this.props.store!.increment();
    if (this.props.store!.counter > 5) {
      this.shouldReadCounter = true;
      this.forceUpdate();
    }
  };

  doReset = (): void => {
    this.renderCount = -1;
    this.shouldReadCounter = true;
    this.props.store!.reset();
    this.forceUpdate();
  }
}
