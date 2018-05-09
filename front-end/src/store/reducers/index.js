import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { sideMenuReducer } from '../../features/side-menu';

import identity from './identity';
import users from './users';


export default combineReducers({
  router,
  identity,
  users,
  sideMenu: sideMenuReducer
});
