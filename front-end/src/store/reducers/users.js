import { findIndex } from 'lodash';
import { buildActionType, REQUEST, SUCCESS, FAILURE } from '../../utils/fetch';
import {
  GET_USERS,
  GET_USER,
  SAVE_USER,
  DELETE_USER
} from '../../constants/actions';

const initialState = {
  items: [],
  errors: null,
  isFetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    // GET_USERS actions
    case buildActionType(GET_USERS, REQUEST):
      return {
        ...state,
        errors: null,
        isFetching: true
      };

    case buildActionType(GET_USERS, SUCCESS):
      return {
        ...state,
        items: action.response,
        isFetching: false
      };

    case buildActionType(GET_USERS, FAILURE):
      return {
        ...state,
        errors: action.errors,
        isFetching: false
      };

    // GET_USER actions
    case buildActionType(GET_USER, REQUEST):
      return {
        ...state,
        errors: null,
        isFetching: true
      };

    case buildActionType(GET_USER, SUCCESS): {
      const items = [...state.items];
      const itemIndex = findIndex(items, item => item.id === action.response.id);

      items.splice(itemIndex, 1, action.response);

      return {
        ...state,
        items,
        isFetching: false
      };
    }

    case buildActionType(GET_USER, FAILURE):
      return {
        ...state,
        errors: action.errors,
        isFetching: false
      };

    // SAVE_USER actions
    case buildActionType(SAVE_USER, REQUEST):
      return {
        ...state,
        errors: null,
        isFetching: true
      };

    case buildActionType(SAVE_USER, SUCCESS): {
      const items = [...state.items];
      const itemIndex = findIndex(items, item => item.id === action.response.id);

      if (itemIndex >= 0) {
        items.splice(itemIndex, 1, action.response);
      } else {
        items.push(action.response);
      }

      return {
        ...state,
        items,
        isFetching: false
      };
    }

    case buildActionType(SAVE_USER, FAILURE):
      return {
        ...state,
        errors: action.errors,
        isFetching: false
      };

    // DELETE_USER actions
    case buildActionType(DELETE_USER, REQUEST):
      return {
        ...state,
        errors: null,
        isFetching: true
      };

    case buildActionType(DELETE_USER, SUCCESS): {
      const items = state.items.filter(item => item.id !== action.payload.id);

      return {
        ...state,
        items,
        isFetching: false
      };
    }

    case buildActionType(DELETE_USER, FAILURE):
      return {
        ...state,
        errors: action.errors,
        isFetching: false
      };

    default:
      return state;
  }
};
