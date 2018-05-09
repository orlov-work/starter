import { GET_IDENTITY, TRANSPORT_FETCH } from '../constants/actions';
import { IDENTITY_URL } from '../constants/urls';

/**
 * Retunrs action to get an identity.
 */
export const getIdentity = () => ({
  type: GET_IDENTITY,
  transport: TRANSPORT_FETCH,
  options: {
    url: IDENTITY_URL
  }
});
