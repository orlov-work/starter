/* eslint no-unused-vars: 0 */
import Controller, { VERB } from '../core/Controller';
// import Error from '../core/Error';
/**
 * IdentityController
 */
class IdentityController extends Controller {
  /**
   * Routes configuration.
   */
  get routes() {
    return [
      {
        route: '/identity',
        verb: VERB.GET,
        handler: this.getIdentity
      }
    ];
  }

  /**
   * Returns current identity data.
   * @param req
   * @param res
   * @param next
   */
  getIdentity(req, res, next) {
    res.json(req.user);
  }
}

export default new IdentityController();
