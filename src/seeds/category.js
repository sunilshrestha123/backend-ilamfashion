exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('category').insert([
        {
          category_name: 'TV',
          category_des: 'these contain all type of tv equipment'
        },
        {
          category_name: 'Mobile',
          category_des: 'these contain all type of Mobile equipment'
        },
        { category_name: 'Cake', category_des: 'contain cake ' }
      ]);
    });
};
