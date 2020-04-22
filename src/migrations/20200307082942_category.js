exports.up = function (knex, Promise) {
  return knex.schema.createTable('category', (table) => {
    table.integer('id').primary();
    table.text('ct_name').notNullable().unique();
    table.text('ct_des').notNullable();
    table.boolean('ct_status').notNullable().default(true);

    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('category');
};
