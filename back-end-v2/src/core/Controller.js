import callsite from 'callsite';
import { response } from '../utils';

/**
 * base controller class
 */
export default class Controller {
  model;
  /**
   * Method for use some elements of the controller
   *
   * @param element
   * @memberof Controller
   */
  use (element) {
    const filename = callsite()[1].getFileName();
    const filenameArray = filename.split('/');
    const moduleName = filenameArray.slice(0, filenameArray.length - 1).join('/');
    const elementArray = element.split('/');

    if (elementArray.length > 1) {
      try {
        return require(`${moduleName}/${element}`).default.bind(this);
      } catch (exception) {
        return undefined;
      }
    } else {
      try {
        switch (element) {
          case 'model': return require(`${moduleName}/model`).default;
          default: return undefined;
        }
      } catch (exception) {
        return undefined;
      }
    }
  }

  /**
   * response
   * @param res
   * @param code
   * @param payload
   * @param err
   */
  response (res, code, payload = null, err = null) {
    response(res, code, payload, err);
  }
}
