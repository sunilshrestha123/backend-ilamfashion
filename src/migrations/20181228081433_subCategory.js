exports.up = function(knex, Promise) {
  return knex.schema.createTable('subcategory', table => {
    table
      .increments('id')
      .primary()
      .unsigned();

    table
      .integer('category_id')
      .references('category.id')
      .notNullable();
    table
      .string('sub_category')
      .notNullable()
      .unsigned();

    table
      .boolean('status')
      .notNullable()
      .defaultTo(true);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subcategory');
};
