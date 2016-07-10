import * as React from 'react';
import {observer} from 'mobx-react';
import {ItemModel} from '../../stores/GranularRerendersStore';

interface Props {
  item: ItemModel;
  onToggle(item: ItemModel): void;
}

@observer
export default class Item extends React.Component<Props, {}> {
  renderCount = -1;

  render(): JSX.Element {
    const {item} = this.props;

    // This is a hack to demonstrate some Mobx behavior.
    // In normal code render functions should be kept free of side-effects.
    this.renderCount++;

    return (
      <div style={{height: '37px', lineHeight: '37px'}}>
        <label className="pure-checkbox">
          <input type="checkbox" checked={item.isChecked} onChange={this.doToggle}/>
          Item #{item.id} - <small>{this.renderCount} rerenders</small>
        </label>
      </div>
    );
  }

  doToggle = (): void => {
    this.props.onToggle(this.props.item);
  }

  resetRenderCount(): void {
    this.renderCount = -1;
  }
}
