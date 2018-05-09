import {
  GET_USERS,
  GET_USER,
  SAVE_USER,
  DELETE_USER,
  TRANSPORT_FETCH
} from '../constants/actions';
import { USERS_URL, METHOD } from '../constants/urls';

/**
 * @returns {Object}
 */
export function getUsers() {
  return {
    type: GET_USERS,
    transport: TRANSPORT_FETCH,
    options: {
      url: USERS_URL,
      headers: {
        'some-header': 'Some Header Value'
      }
    },
    payload: {
      some: 'some specific info'
    }
  };
}

/**
 * @returns {Object}
 */
export function getUser(id) {
  return {
    type: GET_USER,
    transport: TRANSPORT_FETCH,
    options: {
      url: `${USERS_URL}/${id}`,
      headers: {
        'some-header': 'Some Header Value'
      }
    },
    payload: {
      some: 'some specific info'
    }
  };
}

/**
 * @returns {Object}
 */
export function saveUser(data) {
  const method = data.id ? METHOD.PUT : METHOD.POST;

  return {
    type: SAVE_USER,
    transport: TRANSPORT_FETCH,
    options: {
      url: `${USERS_URL}${method === METHOD.PUT ? `/${data.id}` : ''}`,
      method,
      body: data
    },
    payload: {
      some: 'some specific info'
    }
  };
}

/**
 * @returns {Object}
 */
export function deleteUser(id) {
  return {
    type: DELETE_USER,
    transport: TRANSPORT_FETCH,
    options: {
      url: `${USERS_URL}/${id}`,
      method: METHOD.DELETE,
      headers: {
        'some-header': 'Some Header Value'
      }
    },
    payload: {
      some: 'some specific info',
      id
    }
  };
}

