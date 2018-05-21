import UserController from './controller';

export default require('express').Router()
/**
 * @method post
 * @type json
 *
 * @param clientId {string} !
 * @param fullName {string} !
 * @param weight {double} !
 * @param height {double} !
 * @param bloodTypeIndex {int} !
 * @param gender {string} !
 * @param birthday {int} !
 * @param origin {base64}
 */
  .post(
    '/',
    UserController.insert.bind(UserController)
  )

  /**
   * @method get
   * @type json
   */
  .get(
    '/:id',
    UserController.detail.bind(UserController)
  );
