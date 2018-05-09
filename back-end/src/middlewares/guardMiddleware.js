/* eslint consistent-return: 0, function-paren-newline: 0 */
import Error from '../core/Error';
import { ADMIN } from '../constants/permissions';

export default requiredPermissions =>
  (req, res, next) => {
    const userPermissions = req.user.permissions;

    if (userPermissions.includes(ADMIN)) {
      return next();
    }

    const hasPermisssions = requiredPermissions.every(
      permission => userPermissions.includes(permission)
    );

    if (!hasPermisssions) {
      return next(new Error('Additional permissions are required', 403));
    }

    next();
  };
