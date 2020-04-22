exports.up = function (knex, Promise) {
  return knex.schema.createTable("contactus", (t) => {
    t.increments("id").primary().unsigned();
    t.text("f_name").notNullable();
    t.text("m_name");
    t.text("l_name");
    t.text("email").unique().notNullable();
    t.text("mobile").unique().notNullable();
    t.text("address");
    t.text("message");
    t.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("contactus");
};
