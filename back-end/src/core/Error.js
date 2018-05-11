/**
 * A class representing REST API Error object
 */
class Error {
  /**
   *  constructor
   * @param statusMessage
   * @param status
   */
  constructor(statusMessage = 'Internal Error', status = 500) {
    this.statusMessage = statusMessage;
    this.status = status;
  }
}

export default Error;
