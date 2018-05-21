import Controller from './Controller';
import { response } from '../utils';

/**
 * Api controller class
 */
export default class ApiController extends Controller {
  /**
   * Show all rows
   * @param {object} req
   * @param {object} res
   * @memberof ApiController
   */
  index (req, res, next) {
    this.model.findAll((err, result) => {
      if (err) return response(res, 500, null, err);

      response(res, 200, result);
    });
  }

  /**
   * Show row taken by id
   *
   * @param {object} req
   * @param {object} res
   * @memberof ApiController
   */
  show (req, res, next) {
    this.model.findById(req.params.id, (err, result) => {
      if (err) return response(res, 500, null, err);
      if (result) {
        response(res, 200, result);
      } else {
        response(res, 404);
      }
    });
  }

  /**
   * Create row
   *
   * @param {object} req
   * @param {object} res
   * @memberof ApiController
   */
  create (req, res, next) {
    this.model.create(req.body, (err, result) => {
      if (err) return response(res, 500, null, err);

      response(res, 200, result);
    });
  }

  /**
   * Upgrade parts of row
   *
   * @param {object} req
   * @param {object} res
   * @memberof ApiController
   */
  patch (req, res, next) {
    this.model.update(req.params.id, req.body, (err, result) => {
      if (err) return response(res, 500, null, err);

      response(res, 200, result);
    });
  }

  /**
   * Update row
   *
   * @param {object} req
   * @param {object} res
   * @memberof ApiController
   */
  update (req, res, next) {
    this.model.update(req.params.id, req.body, (err, result) => {
      if (err) return response(res, 500, null, err);

      response(res, 200, result);
    });
  }

  /**
   * Remove row
   *
   * @param {object} req
   * @param {object} res
   * @memberof ApiController
   */
  destroy (req, res, next) {
    this.model.destroy(req.params.id, (err, result) => {
      if (err) return response(res, 500, null, err);

      response(res, 200, result);
    });
  }

  /**
   * Limit rows
   *
   * @param {object} req
   * @param {object} res
   * @memberof ApiController
   */
  limit (req, res, next) {
    this.model.limit(req.params.count, (err, result) => {
      if (err) return response(res, 500, null, err);

      response(res, 200, result);
    });
  }
}
