exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'sunil',
          last_name: 'shrestha',
          email: 'sunil@gmail.com',
          password: 'sunil123'
        },
        {
          first_name: 'govinda',
          last_name: 'rana',
          email: 'gov@gmail.com',
          password: 'gov123'
        },
        {
          first_name: 'prabin',
          last_name: 'sarkar',
          email: 'prabin@gmail.com',
          password: 'prabin123'
        }
      ]);
    });
};
