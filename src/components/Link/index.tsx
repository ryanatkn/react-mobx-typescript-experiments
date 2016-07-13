import * as React from 'react';
import {Link as RRLink} from 'react-router';
import {observer, inject} from 'mobx-react';
import RouterStore from '../../stores/RouterStore';
import * as omit from 'lodash/omit';
import * as assign from 'lodash/assign';
import {Stores} from '../../types';

import './style.css';

interface SelectedStores {
  // The store prop is provided by the `observer` decorator.
  // The component reads `routerStore.path` in its render function to make the component
  // re-render on a route change. Without this the component does not update its `active` class.
  store?: RouterStore;
}

interface Props extends SelectedStores, ReactRouter.LinkProps {}

@inject((stores: Stores, nextProps: Props): Props => {
  return assign({store: stores.routerStore}, nextProps);
})
@observer
export default class Link extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {store} = this.props;

    // Read the router store's observable path so MobX knows to re-render on route changes,
    // otherwise the `active` class on links never gets updated.
    store!.path; // tslint:disable-line:no-unused-expression

    // Remove the `store` prop since it shouldn't be passed to the link.
    const finalProps: any = omit(this.props, 'store');

    return (
      <RRLink activeClassName="active" {...finalProps}>
        {this.props.children}
      </RRLink>
    );
  }
}
