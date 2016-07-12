import {observable, action} from 'mobx';

function getDefaultRenderCounts(): number[] {
  return [-1, -1, -1];
}

export default class EfficientNestedRerendersStore {
  @observable counter = 0;

  // The render counts are stored here instead of on the components
  // because mobx-react's experimental @inject appears to be broken with refs right now. 
  renderCounts = getDefaultRenderCounts();

  @action increment = (): void => {
    this.counter++;
  };

  @action reset = (): void => {
    this.counter = 0;
    this.renderCounts = getDefaultRenderCounts();
  };
}
