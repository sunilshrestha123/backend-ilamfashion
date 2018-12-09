exports.up = function(knex, Promise) {
  return knex.schema.createTable('product_slides', tb => {
    tb.increments('id').primary();
    tb.binary('image').notNullable();
    tb.text('des');
    tb.boolean('status').defaultTo(false);
    tb.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('product_slides');
};
