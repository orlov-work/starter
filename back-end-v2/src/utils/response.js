import { STATUS_CODES } from 'http';
import { logger } from '../helpers';

/**
 * response function
 * @param res
 * @param code
 * @param payload
 * @param err
 */
export default function (res, code, payload = null, err = null) {
  const tempCode = (err && !code) ? (err.status || 500) : code;
  const response = err ? { status: STATUS_CODES[code], code } : payload;

  if (err) {
    const env = process.env.NODE_ENV;

    if (env === global.DEVELOPMENT_ENV || env === global.STAGING_ENV) {
      response.error = err.message || err;

      if (err.stack) response.stack = err.stack.replace(/(?:\r\n|\r|\n)/g, '');
    }

    if (response.code < 500 && env === global.PRODUCTION_ENV) response.error = err.message || err;

    if (response.code === 500) {
      const error = err.stack || err;

      if (payload) {
        logger.error(`Data: ${payload}\nError: ${error}`);
      } else {
        logger.error(error);
      }
    }
  }

  res.status(tempCode);
  res.send(response);
}
