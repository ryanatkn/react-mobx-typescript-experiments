import {observable, action} from 'mobx';

export default class RouterStore {
  @observable path: string;

  constructor(history: HistoryModule.History) {
    // TODO teardown, dispose in abstract base store?
    history.listen((location: HistoryModule.Location): void => {
      this.updatePath(location);
      window.ga('send', 'pageview');
    });
  }

  @action updatePath(location: HistoryModule.Location): void {
    this.path = location.key;
  }
}
