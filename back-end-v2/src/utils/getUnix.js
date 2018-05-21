import * as moment from 'moment';

/**
 * get unix time
 * @param value
 * @returns {number}
 */
export default function(value = new Date()) {
  return moment(value).unix();
}
