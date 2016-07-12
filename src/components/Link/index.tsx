import * as React from 'react';
import {Link as RRLink} from 'react-router';
import {observer, inject} from 'mobx-react';
import RouterStore from '../../stores/RouterStore';
import * as omit from 'lodash/omit';

import './style.css';

interface SelectedProps {
  // The store prop is provided by the `observer` decorator.
  // The component reads `routerStore.path` in its render function to make the component
  // re-render on a route change. Without this the component does not update its `active` class.
  routerStore?: RouterStore;
}

interface Props extends SelectedProps, ReactRouter.LinkProps {}

@inject('routerStore')
@observer
export default class Link extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {routerStore} = this.props;

    // Read the router store's observable path so MobX knows to re-render on route changes,
    // otherwise the `active` class on links never gets updated.
    routerStore.path; // tslint:disable-line:no-unused-expression

    // Remove the `routerStore` prop since it shouldn't be passed to the link.
    const finalProps: any = omit(this.props, 'routerStore');

    return (
      <RRLink activeClassName="active" {...finalProps}>
        {this.props.children}
      </RRLink>
    );
  }
}
