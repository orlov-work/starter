import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tooltip from 'react-tooltip-lite';
import TooltipContent from '../../../components/tooltip-content';

import { getUsers, getUser, saveUser, deleteUser } from '../../../actions/users';

/**
 * Main container
 * */
const UserContainer = ({
  users,
  errors,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}) => (
  <div>
    <h1>App Container 123</h1>
    <button onClick={getUsers}>Get Users</button>
    <button onClick={getUser}>Get User 1</button>
    <button onClick={createUser}>Create User</button>
    <button onClick={updateUser}>Update User</button>
    <button onClick={deleteUser}>Delete User</button>
    <h2>Users List</h2>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Tooltip
            content={<TooltipContent content={user.name} />}
            direction="right"
            useDefaultStyles >
            {user.name} {user.info && <span>| {user.info}</span>}
          </Tooltip>
        </li>
      ))}
    </ul>
    {errors && <div>Error - {errors}</div>}
  </div>
);

UserContainer.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  errors: PropTypes.string
};

UserContainer.defaultProps = {
  errors: ''
};

/**
 * @param state
 */
const mapDispatchToPros = state => ({
  users: state.users.items,
  errors: state.users.errors
});

const mapDispatchToProps = {
  getUsers,
  getUser: () => getUser(1),
  createUser: () => saveUser({ name: 'Created User' }),
  updateUser: () => saveUser({ id: 1, name: 'Updated User' }),
  deleteUser: () => deleteUser(1)
};

export default connect(mapDispatchToPros, mapDispatchToProps)(UserContainer);
