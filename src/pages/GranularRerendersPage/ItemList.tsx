import * as React from 'react';
import {observer} from 'mobx-react';
import {ItemModel} from '../../stores/GranularRerendersStore';
import Item from './Item';

interface Props {
  items: ItemModel[];
  onToggle(item: ItemModel): void;
}

function getItemRef(item: ItemModel): string {
  return 'item' + item.id;
}

@observer
export default class ItemList extends React.Component<Props, {}> {
  renderCount = -1;

  render(): JSX.Element {
    const {items, onToggle} = this.props;

    // This is a hack to demonstrate some Mobx behavior.
    // In normal code render functions should be kept free of side-effects.
    this.renderCount++;

    return (
      <div>
        Item list - <small>{this.renderCount} rerenders</small>
        {items.map((item: ItemModel): JSX.Element => {
          return <Item key={item.id} ref={getItemRef(item)} item={item} onToggle={onToggle}/>;
        })}
      </div>
    );
  }

  resetRenderCount(): void {
    this.renderCount = -1;

    // Also reset each item's render count.
    for (const item of this.props.items) {
      const itemInstance = this.refs[getItemRef(item)] as Item;
      itemInstance.resetRenderCount();
    }
  }
}
