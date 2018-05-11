/* eslint no-unused-vars: 0, consistent-return: 0 */
import Error from '../core/Error';
import { AUTH_HEADER } from '../constants/common';

/**
 * Identity Middleware
 */
export default (req, res, next) => {
  const user521 = req.headers[AUTH_HEADER] || null;

  next()
  // db('User')
  //   .where({ user521 })
  //   .first()
  //   .then(user => {
  //     if (!user) {
  //       return next(new Error('Unauthorized User', 401));
  //     }
  //
  //     if (!user.active) {
  //       return next(new Error('User is disabled', 401));
  //     }
  //
  //     req.user = {
  //       ...user,
  //       // @todo: use user's permission
  //       permissions: ['ADMIN']
  //     };
  //
  //     next();
  //   })
    .catch(err => next(new Error('Could not get an identity')));
};
