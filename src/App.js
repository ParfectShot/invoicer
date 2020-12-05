import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';

import Root from './containers/Root';

import './App.css';

const App = () =>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={Root} />
        </Switch>
      </ConnectedRouter>
    </Provider>

export default App;
