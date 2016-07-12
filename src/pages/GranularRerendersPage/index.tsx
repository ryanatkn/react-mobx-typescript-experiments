import * as React from 'react';
import {observer, inject} from 'mobx-react';
import GranularRerendersStore from '../../stores/GranularRerendersStore';
import ItemList from './ItemList';

interface Props {
  granularRerendersStore?: GranularRerendersStore; // provided by the `observer` decorator
}

const ITEM_LIST_REF = 'itemList';

@inject('granularRerendersStore')
@observer
export default class GranularRerendersPage extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {granularRerendersStore} = this.props;
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
          <ItemList items={granularRerendersStore.items} ref={ITEM_LIST_REF}
            onToggle={granularRerendersStore.toggleItem}
          />
        </div>
        <div className="form-group">
          <button className="pure-button" onClick={granularRerendersStore.addItem}>
            Add item
          </button>
        </div>
        <div className="form-group">
          <button className="pure-button" onClick={this.doReset}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  doReset = (): void => {
    // First reset the item list's render count, and all of its items' render counts.
    // It's easier to put this data on the component instances rather than the store.
    const itemListInstance = this.refs[ITEM_LIST_REF] as ItemList;
    itemListInstance.resetRenderCount();

    this.props.granularRerendersStore.reset();
  };
}
