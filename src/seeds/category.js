
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('category').insert([
        {
          id: 1,
          ct_name: 'Home Application',
          ct_des: 'these category contaion home equipment',
          ct_status: 'true'
        },
        {
          id: 2,
          ct_name: 'Electronic',
          ct_des: 'these category contain the electronic item',
          ct_status: 'true'
        },
        {
          id: 3,
          ct_name: 'Toy & Kids',
          ct_des: 'these category kids and toy items',
          ct_status: 'true'
        }
      ]);
    });
};