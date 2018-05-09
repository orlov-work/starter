const getPredefinedData = require('./data/provider');
const data = getPredefinedData('predefined_users');

exports.seed = knex =>
  knex('User')
    .del()
    .then(() => knex('User').insert(data));
