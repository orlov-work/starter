import mongoose from 'mongoose';
import { getConfig } from '../utils';

/**
 * Mongo connection class
 */
export default class Mongo {
  /**
   * MongoDB connection in memory;
   *
   * @memberof Mongo
   */
  static connection;

  /**
   * Connect to MongoDB
   *
   * @static
   * @returns
   * @memberof Mongo
   */
  static connect () {
    if (!Mongo.connection) {
      Mongo.connection = mongoose.connect(getConfig('database').MONGODB_URL);
    }

    return Mongo.connection;
  }

  /**
   * Disconnect from MongoDB
   *
   * @static
   * @memberof Mongo
   */
  static disconnect (callback = () => {}) {
    mongoose.connection.close(() => {
      Mongo.connection = null;
      callback();
    });
  }
}
