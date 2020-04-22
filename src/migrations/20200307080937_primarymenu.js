exports.up = function (knex, Promise) {
  return knex.schema.createTable('primarymenu', (table) => {
    table.increments('id').primary().unsigned();
    table.text('name').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.dropTable();
};
