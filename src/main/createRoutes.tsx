import * as React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../pages/App';
import IndexPage from '../pages/IndexPage';
import BasicUsagePage from '../pages/BasicUsagePage';
import ComputedPropertiesPage from '../pages/ComputedPropertiesPage';
import EfficientNestedRerendersPage from '../pages/EfficientNestedRerendersPage';
import GranularRerendersPage from '../pages/GranularRerendersPage';
import DynamicDependenciesPage from '../pages/DynamicDependenciesPage';
import BatchedMutationsPage from '../pages/BatchedMutationsPage';
import TodosPage from '../pages/TodosPage';
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
    case 'basic-usage': return BasicUsagePage;
    case 'computed-properties': return ComputedPropertiesPage;
    case 'efficient-nested-rerenders': return EfficientNestedRerendersPage;
    case 'granular-rerenders': return GranularRerendersPage;
    case 'dynamic-dependencies': return DynamicDependenciesPage;
    case 'batched-mutations': return BatchedMutationsPage;
    case 'todos': return TodosPage;
    default: throw new Error(`Unknown experiment name "${name}"`);
  }
}