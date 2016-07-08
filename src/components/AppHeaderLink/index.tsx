import * as React from 'react';
import Link from '../Link';
import {ExperimentName} from '../../types';

import './style.css';

function getPath(name: ExperimentName): string {
  return '/' + name;
}

export function getExperimentNameTitle(name: ExperimentName): string {
  switch (name) {
    case 'counter': return 'basic usage';
    case 'simple-form': return 'computed properties';
    case 'todos': return 'todo list';
    default: return name.replace(/-/g, ' ').toLowerCase();
  }
}

interface Props {
  experimentName: ExperimentName;
}

export default class AppHeaderLink extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {experimentName} = this.props;
    return (
      <Link to={getPath(experimentName)} className="app-header-link link-unstyled">
        {getExperimentNameTitle(experimentName)}
      </Link>
    );
  }
}
