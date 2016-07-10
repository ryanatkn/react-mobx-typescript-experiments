import {observable, action} from 'mobx';

export interface ItemModel {
  id: number;
  isChecked: boolean;
}

let _id = 0;
function createItem(): ItemModel {
  return {
    id: ++_id,
    isChecked: false,
  };
}

function createDefaultItems(): ItemModel[] {
  return [createItem(), createItem(), createItem()];
}

export default class GranularRerendersStore {
  @observable items: ItemModel[] = createDefaultItems();

  @action addItem = (): void => {
    this.items.push(createItem());
  };

  @action toggleItem = (item: ItemModel): void => {
    item.isChecked = !item.isChecked;
  };

  @action reset = (): void => {
    _id = 0;
    this.items = createDefaultItems();
  };
}
