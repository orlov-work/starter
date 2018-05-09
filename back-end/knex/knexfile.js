const config = require('../config/default');

module.exports = {
  client: 'oracledb',
  connection: config.oracle,
  migrations: {
    tableName: 'migrations',
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
};
