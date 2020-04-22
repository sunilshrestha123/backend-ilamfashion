exports.up = function (knex) {
  return knex.schema.createTable('mainslide', (table) => {
    table.increments('id').primary();
    table.text('heading');
    table.text('des');
    table.text('url');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('mainslide');
};
