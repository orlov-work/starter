import { invokeMap } from 'lodash';
import IdentityController from './IdentityController';
import UserController from './UserController';

const controllers = {
  IdentityController,
  UserController
};

/**
 *
 * @param router
 */
export function initControllers(router) {
  invokeMap(controllers, 'initRoutes', router);
}
