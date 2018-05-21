import response from './response';

/**
 * 500 error response
 * @param res
 * @param err
 * @param code
 */
export default function(res, err, code) {
  response(res, code || 500, null, err.errors || err);
}