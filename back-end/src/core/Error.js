/**
 * A class representing REST API Error object
 */
class Error {
  status = 500

  statusMessage = 'Internal Error'

  /**
   *
   * @param statusMessage
   * @param status
   */
  constructor(statusMessage, status) {
    if (statusMessage) {
      this.statusMessage = statusMessage;
    }

    if (status) {
      this.status = status;
    }
  }
}

export default Error;
