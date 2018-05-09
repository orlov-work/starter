/* eslint function-paren-newline: 0 */
import guardMiddleware from '../middlewares/guardMiddleware';

export const VERB = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete'
};

/**
 * Base class for route controllers
 */
class Controller {
  /**
   * Applies routes config to the router.
   * @param router
   */
  initRoutes(router) {
    this.routes.forEach(config => {
      const verb = config.verb || VERB.GET;
      const args = [config.route];

      if (config.guards) {
        args.push(
          guardMiddleware(config.guards)
        );
      }

      router[verb].apply(router, [...args, config.handler]);
    });
  }
}

export default Controller;
