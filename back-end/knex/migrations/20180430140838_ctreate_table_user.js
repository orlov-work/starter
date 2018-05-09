exports.up = knex =>
  knex.schema.createTable('User', table => {
    table.increments('userId');
    table.string('user521').notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.boolean('active').defaultTo(true);
  });

exports.down = knex =>
  knex.schema.dropTable('User');
