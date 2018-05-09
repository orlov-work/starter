import { buildActionType, REQUEST, SUCCESS, FAILURE } from '../../utils/fetch';
import { GET_IDENTITY } from '../../constants/actions';

const initialState = {
  data: null,
  errors: null,
  isFetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case buildActionType(GET_IDENTITY, REQUEST):
      return {
        ...state,
        errors: null,
        isFetching: true
      };

    case buildActionType(GET_IDENTITY, SUCCESS):
      return {
        ...state,
        data: action.response,
        isFetching: false
      };

    case buildActionType(GET_IDENTITY, FAILURE):
      return {
        ...state,
        data: null,
        errors: action.errors,
        isFetching: false
      };

    default:
      return state;
  }
};
