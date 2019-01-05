exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', table => {
    table
      .increments('id')
      .primary()
      .unsigned();
    table.text('category_name').notNullable();
    table.text('category_des').notNullable();
    table
      .boolean('status')
      .notNullable()
      .defaultTo(false);

    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('category');
};
