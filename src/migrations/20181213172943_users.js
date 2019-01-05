exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table
      .increments('id')
      .primary()
      .unsigned();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table
      .text('email')
      .notNullable()
      .unique();
    table.text('password').notNullable();
    table
      .timestamp('created_at')
      .notNullable()
      .default(knex.raw('now()'));
    table
      .timestamp('updated_at')
      .notNullable()
      .default(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
