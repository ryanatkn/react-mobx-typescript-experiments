import * as React from 'react';
import {observer} from 'mobx-react';
import Link from '../Link';
import {ExperimentName, experimentNames} from '../../types';
import AppHeaderLink from '../AppHeaderLink';

import './style.css';

interface Props {}

@observer
export default class AppHeader extends React.Component<Props, {}> {
  render(): JSX.Element {
    return (
      <div className="app-header">
        <Link to="/" className="link-unstyled" onlyActiveOnIndex={true}>
          <h1>
            React MobX TypeScript Experiments
          </h1>
        </Link>
        <div className="app-header-nav">
          {experimentNames.map((name: ExperimentName): JSX.Element => {
            return <AppHeaderLink key={name} experimentName={name}/>;
          })}
        </div>
      </div>
    );
  }
}
