import * as React from 'react';
import { observer } from 'mobx-react';
import Link from '../Link';
import { experimentNames } from '../../types';
import AppHeaderLink from '../AppHeaderLink';

import './style.css';

interface Props {
  title: string;
}

export const AppHeader = observer(({title}: Props) => (
  <div className="app-header">
    <Link to="/" className="link-unstyled" onlyActiveOnIndex={true}>
      <h1>{title}</h1>
    </Link>
    <div className="app-header-nav">
      {experimentNames.map((name) => (
        <AppHeaderLink key={name} experimentName={name} />
      ))}
    </div>
  </div>
));
