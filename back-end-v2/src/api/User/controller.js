import { ApiController } from '../../core';

/**
  * UserController class
  */
class UserController extends ApiController {
  model = this.use('model');

  /**
   * insert
   * @param payload
   * @param req
   * @param res
   * @param next
   */
  insert(req, res, next) {
    console.log(123);
  }

  /**
   * detail
   * @param req
   * @param res
   * @param next
   */
  detail (req, res, next) {

  }
}

export default new UserController();
