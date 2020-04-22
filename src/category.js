
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('category').insert([
        {
          id: 1,
          category_name: 'Home Application',
          category_des: 'these category contaion home equipment',
          status: 'true'
        },
        {
          id: 2,
          category_name: 'Electronic',
          category_des: 'these category contain the electronic item',
          status: 'true'
        },
        {
          id: 3,
          category_name: 'Toy & Kids',
          category_des: 'these category kids and toy items',
          status: 'true'
        }
      ]);
    });
};