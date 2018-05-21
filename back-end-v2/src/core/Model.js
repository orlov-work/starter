import * as mongoose from 'mongoose';
import Mongo from './Mongo';
import { isNumber } from 'lodash';
import { getUnix } from '../utils';

/**
 * Model class
 */
export default class Model {
  /**
   * Schema of model
   * @memberof Model
   */
  Schema;

  /**
   * Create scheme
   * @param {string} name
   * @param {object} scheme
   * @param {object} plugin
   * @param {number} index
   * @returns
   * @memberof Model
   */
  constructor (name, scheme, altName = null, plugin = null, pluginOptions = null, index = null) {
    const schema = Mongo.connect().Schema(scheme);

    if (plugin) schema.plugin(plugin, pluginOptions);
    if (index) schema.index(index);

    try {
      if (altName) {
        this.Schema = mongoose.model(name, schema, altName);
      } else {
        this.Schema = mongoose.model(name, schema);
      }
    } catch (exception) {
      this.Schema = mongoose.model(name);
    }
  }

  /**
   * Return instance of model
   * @param {object} data
   * @param {function} [callback=(err, result) => {}]
   * @memberof Model
   */
  instance (data, callback = data => {}) {
    callback(new this.Schema(data));
  }

  /**
   * Find a row by condition
   * @param {object} condition
   * @param {function} [callback=(err, result) => {}]
   * @memberof Model
   */
  findOne (condition, callback = (err, result) => {}) { // eslint-disable-line handle-callback-err
    this.Schema.findOne(condition, callback);
  }

  /**
   * Find all rows
   * @param {function} [callback=(err, result) => {}]
   * @memberof Model
   */
  findAll (callback = (err, result) => {}) { // eslint-disable-line handle-callback-err
    this.Schema.find({}, callback);
  }

  /**
   * Find a row by id
   * @param {object} id
   * @param {function} [callback=(err, result) => {}]
   * @memberof Model
   */
  findById (id, callback = (err, result) => {}) { // eslint-disable-line handle-callback-err
    this.Schema.findOne({ _id: id }, callback);
  }

  /**
   * Create new row
   * @param {object} data
   * @param {function} [callback=(err, result) => {}]
   * @memberof Model
   */
  create (data, callback = (err, result = null) => {}) { // eslint-disable-line handle-callback-err
    const instance = new this.Schema(data);
    const error = instance.validateSync();

    if (error) {
      callback(error);
    } else {
      instance.save(callback);
    }
  }

  /**
   * Update row by id
   * @param {string} id
   * @param {object} data
   * @param {function} [callback=(err, result) => {}]
   * @memberof Model
   */
  update (id, data, callback = (err, result) => {}) { // eslint-disable-line handle-callback-err
    this.Schema.findByIdAndUpdate(id, { $set: { ...data, updatedAt: getUnix() } }, { new: true }, callback);
  }

  /**
   * Destroy row by id
   * @param {string} id
   * @param {function} [callback=(err, result) => {}]
   * @memberof Model
   */
  destroy (id, callback = (err, result) => {}) { // eslint-disable-line handle-callback-err
    this.Schema.findByIdAndRemove(id, callback);
  }

  /**
   * Limit rows
   * @param {string} count
   * @param {function} callback
   * @param {object} [condition={}]
   * @memberof Model
   */
  limit (count, callback = (err, result) => {}, condition = {}) { // eslint-disable-line handle-callback-err
    this.Schema.find(condition, callback).limit(Number(count));
  }

  /**
   * paginate
   * @param page
   * @param pageSize
   * @param condition
   * @returns {*}
   */
  paginateSync (page, pageSize, condition) {
    if (!Number(page)) {
      return { code: 400, error: 'Parameter \'page\' should be a number.' };
    }

    const tempPage = Number(page);
    const tempPageSize = Number(pageSize);

    const query = this.Schema.find(condition);

    if (!isNaN(tempPageSize) && isNumber(tempPageSize)) {
      query.limit(tempPageSize).skip((tempPage - 1) * tempPageSize);
    }

    return { code: 200, query };
  }
}
