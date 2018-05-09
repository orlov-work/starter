import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunkMiddleware from 'redux-thunk';
import fetchMiddleware from './middlewares/fetch';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const history = createHistory();
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(
      fetchMiddleware,
      thunkMiddleware,
      routerMiddleware(history)
    ))
  );

  return { store, history };
};
