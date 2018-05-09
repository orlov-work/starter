import 'whatwg-fetch';
import { set } from 'lodash';
import { TRANSPORT_FETCH } from '../../constants/actions';
import { METHOD } from '../../constants/urls';
import { AUTH_HEADER } from '../../constants/common';
import { buildActionType, REQUEST, SUCCESS, FAILURE } from '../../utils/fetch';

/**
 * @param options
 * @returns {Boolean}
 */
function isValidFetchStructure(options) {
  if (!options.url) {
    throw new Error('Unspecified URL for fetch.');
  }

  return true;
}

/**
 * @returns {Object} 1
 */
function getDefaultHeaders() {
  const defaultHeaders = {
    'Content-Type': 'application/json'
  };

  // todo: check to dev or test env
  defaultHeaders[AUTH_HEADER] = localStorage.getItem(AUTH_HEADER);

  return defaultHeaders;
}

/**
 * @param options
 * @returns {Promise}
 */
function constructFetch(options) {
  const {
    url,
    method,
    body,
    headers = {}
  } = options;

  return fetch(url, {
    method: method || METHOD.GET,
    headers: {
      ...getDefaultHeaders(),
      ...headers
    },
    body: JSON.stringify(body)
  });
}

/**
 * @param response
 * @returns {Object}
 */
function parseJSON(response) {
  const contentType = response.headers.get('content-type');
  const isJson = contentType && contentType.includes('json');
  const type = isJson ? 'json' : 'text';

  return response[type]()
    .then(body => ({
      url: response.url,
      headers: response.headers,
      status: response.status,
      statusText: response.statusText,
      type,
      body
    }));
}

/**
 * @param response
 * @returns {Object}
 */
function checkErrors(response) {
  const { status, body, statusText } = response;

  if (status >= 200 && status < 300) {
    return response;
  }

  if (!body.errors) {
    return set(response, 'body.errors', statusText);
  }

  return response;
}

/**
 * @param dispatch
 * @param getState
 * @returns {Promise}
 */
export default ({ dispatch }) => next => action => {
  const {
    type,
    transport,
    options,
    payload = {},
    ...other
  } = action;

  if (transport !== TRANSPORT_FETCH) {
    return next(action);
  }

  if (!isValidFetchStructure(options)) {
    return null;
  }

  dispatch({ type: buildActionType(type, REQUEST), payload, ...other });

  return constructFetch(options)
    .then(parseJSON)
    .then(checkErrors)
    .then(response => {
      const { body, status } = response;

      if (body.errors) {
        dispatch({
          type: buildActionType(type, FAILURE),
          errors: body.errors,
          status,
          payload,
          ...other
        });
      } else {
        dispatch({
          type: buildActionType(type, SUCCESS),
          response: body,
          payload,
          ...other
        });
      }
    });
};
