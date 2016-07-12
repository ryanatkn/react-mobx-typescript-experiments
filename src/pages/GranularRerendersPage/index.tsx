import * as React from 'react';
import {observer, inject} from 'mobx-react';
import GranularRerendersStore from '../../stores/GranularRerendersStore';
import ItemList from './ItemList';
import {Stores} from '../../types';

interface SelectedStores {
  store?: GranularRerendersStore;
}

interface Props extends SelectedStores {}

@inject((stores: Stores): Props => ({store: stores.granularRerendersStore}))
@observer
export default class GranularRerendersPage extends React.Component<Props, {}> {
  itemListInstance: ItemList;

  render(): JSX.Element {
    const {store} = this.props;
    return (
      <div className="page">
        <p>
          MobX rerenders React components with granular precision when their observed data changes.
          When using React with a library like Redux that relies on immutable data,
          changing an item in a collection requires changing
          the references of both the item and its collection
          (and all other references up the state tree),
          causing a rerender of any components that use the collection.
        </p>
        <p>
          In this example, notice how toggling an item does not cause the list to rerender.
          This is because MobX automatically rerenders only the components
          which could actually be affected by the data changes.
        </p>
        <p>
          Note that it is possible, though more complex, to work around
          this behavior of immutable data as seen
          in <a href="https://github.com/mweststrate/redux-todomvc">this Redux TodoMVC project</a>.
          The basic idea is that you store items in a centralized unrendered collection,
          create a separate collection of ids for rendered collections,
          and connect/select each item by id in the item component,
          so changing an item does not change a rendered collection, only the unrendered one.
        </p>
        <div className="form-group">
          <ItemList items={store.items} ref={(c) => this.itemListInstance = c}
            onToggle={store.toggleItem}
          />
        </div>
        <div className="form-group">
          <button className="pure-button" onClick={store.addItem}>
            add item
          </button>
        </div>
        <div className="form-group">
          <button className="pure-button" onClick={this.doReset}>
            reset
          </button>
        </div>
      </div>
    );
  }

  doReset = (): void => {
    // First reset the item list's render count, and all of its items' render counts.
    // It's easier to put this data on the component instances rather than the store.
    this.itemListInstance.resetRenderCount();

    this.props.store.reset();
  };
}
