exports.up = function (knex) {
  return knex.schema.createTable('register', (t) => {
    t.increments('id').primary().unsigned();
    t.text('f_name').notNullable();
    t.text('m_name');
    t.text('l_name');
    t.text('email').unique().notNullable();
    t.text('mobile').unique().notNullable();
    t.text('password');
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('register');
};
