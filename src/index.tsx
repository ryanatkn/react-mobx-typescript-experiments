import 'normalize.css';
import 'purecss';
import './styles/main.css';

import createMobxStores from './main/createMobxStores';
import createHistory from './main/createHistory';
import createRoutes from './main/createRoutes';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router} from 'react-router';
import {Provider} from 'mobx-react';
import {useStrict} from 'mobx';

// In a real application, I would use `useStrict(true)`,
// but some examples demonstrate the differences between using and not using
// actions, so we need to keep it disabled to prevent those examples from throwing.
useStrict(false);

/**
 * Create the 	 store and React Router history and routes.
 */
const history = createHistory();
const stores = createMobxStores(history);
const routes = createRoutes();

/**
 * Mount the app.
 */
ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app-wrapper')
);
