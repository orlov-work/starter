import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createAppStore from './store';

import AppContainer from './features/app-container';
import './assets/css/common.css';

const { store, history } = createAppStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
