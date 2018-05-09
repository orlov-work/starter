/* eslint no-unused-vars: 0 */
import Error from '../core/Error';

export default (err, req, res, next) => {
  if (err instanceof Error) {
    return res
      .status(err.status)
      .json({
        status: err.status,
        errors: err.statusMessage
      });
  }

  return res
    .status(500)
    .json({
      errors: err.toString()
    });
};
