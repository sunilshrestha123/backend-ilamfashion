exports.up = function(knex, Promise) {
  return knex.schema.table('subcategory', t => {
    t.string('subcategory_des').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('subcategory', t => {
    t.droupColumn('subcategory_des');
  });
};
