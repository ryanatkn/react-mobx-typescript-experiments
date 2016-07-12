import * as React from 'react';
import {observer} from 'mobx-react';
import {ItemModel} from '../../stores/GranularRerendersStore';
import Item from './Item';

interface Props {
  items: ItemModel[];
  onToggle(item: ItemModel): void;
}

@observer
export default class ItemList extends React.Component<Props, {}> {
  renderCount = -1;
  itemInstances: Dict<Item> = {};

  render(): JSX.Element {
    const {items, onToggle} = this.props;

    // This is a hack to demonstrate some MobX behavior.
    // In normal code render functions should be kept free of side-effects.
    this.renderCount++;

    return (
      <div>
        Item list - <small>{this.renderCount} rerenders</small>
        {items.map((item: ItemModel): JSX.Element => {
          return (
            <Item key={item.id} ref={(c) => this.itemInstances[item.id] = c}
              item={item} onToggle={onToggle}
            />
          );
        })}
      </div>
    );
  }

  resetRenderCount(): void {
    this.renderCount = -1;

    // Also reset each item's render count.
    for (const id in this.itemInstances) {
      if (this.itemInstances[id]) { // may have been unmounted
        this.itemInstances[id].resetRenderCount();
      }
    }
  }
}
