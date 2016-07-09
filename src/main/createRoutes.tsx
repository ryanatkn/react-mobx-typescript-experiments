import * as React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../containers/App';
import IndexPage from '../containers/IndexPage';
import CounterPage from '../containers/CounterPage';
import ComputedPropertiesPage from '../containers/ComputedPropertiesPage';
import DynamicDependenciesPage from '../containers/DynamicDependenciesPage';
import BatchedMutationsPage from '../containers/BatchedMutationsPage';
import TodosPage from '../containers/TodosPage';
import {experimentNames, ExperimentName} from '../types';

/**
 * Creates the React Router routes for the entire app.
 */
export default function createRoutes(): JSX.Element {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage}/>
      {experimentNames.map((name: ExperimentName): JSX.Element => {
        return <Route key={name} path={'/' + name} component={getExperimentPage(name)}/>;
      })}
    </Route>
  );
}

export function getExperimentPage(name: ExperimentName): React.ComponentClass<any> {
  switch (name) {
    case 'counter': return CounterPage;
    case 'computed-properties': return ComputedPropertiesPage;
    case 'dynamic-dependencies': return DynamicDependenciesPage;
    case 'batched-mutations': return BatchedMutationsPage;
    case 'todos': return TodosPage;
    default: throw new Error(`Unknown experiment name "${name}"`);
  }
}