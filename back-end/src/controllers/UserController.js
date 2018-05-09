/* eslint no-unused-vars: 0, eqeqeq: 0 */
import { findIndex } from 'lodash';
import Controller, { VERB } from '../core/Controller';
import {
  GET_USERS,
  GET_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER
} from '../constants/permissions';


const users = [
  { id: 1, name: 'Test 1' },
  { id: 2, name: 'Test 2' },
  { id: 3, name: 'Test 3' }
];

/**
 *
 */
class UserController extends Controller {
  /**
   * Routes configuration.
   */
  get routes() {
    return [
      {
        route: '/users',
        verb: VERB.GET,
        guards: [ GET_USERS ],
        handler: this.getUsers
      },
      {
        route: '/users/:id',
        verb: VERB.GET,
        guards: [ GET_USER ],
        handler: this.getUser
      },
      {
        route: '/users',
        verb: VERB.POST,
        guards: [ CREATE_USER ],
        handler: this.createUser
      },
      {
        route: '/users/:id',
        verb: VERB.PUT,
        guards: [ UPDATE_USER ],
        handler: this.updateUser
      },
      {
        route: '/users/:id',
        handler: this.deleteUser,
        verb: VERB.DELETE,
        guards: [ DELETE_USER ]
      }
    ];
  }

  /**
   * Returns list of users.
   * @param req
   * @param res
   * @param next
   */
  getUsers(req, res, next) {
    res.json(users);
  }

  /**
   * Retunrs requested user by id.
   * @param req
   * @param res
   * @param next
   */
  getUser(req, res, next) {
    const user = users.find(user => user.id == req.params.id);

    res.json(user);
  }

  /**
   * Creates new user.
   * @param req
   * @param res
   * @param next
   */
  createUser(req, res, next) {
    const user = {
      id: users.length + 1,
      name: `${req.body.name} - ${users.length + 1}`
    };

    users.push(user);

    res.json(user);
  }

  /**
   * Updates user.
   * @param req
   * @param res
   * @param next
   */
  updateUser(req, res, next) {
    const itemIndex = findIndex(user => user.id == req.params.id);

    users.splice(itemIndex, 1, req.body);

    res.json(req.body);
  }

  /**
   * Deletes user.
   * @param req
   * @param res
   * @param next
   */
  deleteUser(req, res, next) {
    const itemIndex = findIndex(user => user.id == req.params.id);

    users.splice(itemIndex, 1);

    res
      .status(204)
      .send();
  }
}

export default new UserController();
