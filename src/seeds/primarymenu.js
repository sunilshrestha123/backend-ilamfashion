
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('primarymenu').del()
    .then(function () {
      // Inserts seed entries
      return knex('primarymenu').insert([
       {id: 1, name:'Home' },
       {id: 2, name:'Contact-Us' }

      ]);
    });
};
