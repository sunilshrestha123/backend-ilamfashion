exports.seed = function (knex, Promise) { 
  // Deletes ALL existing entries 
  return knex('contactus')
  .del() 
  .then(function () 
  { // Inserts seed entries 
    return knex('contactus').insert([ {
     id: 1, f_name: 'sunil', l_name: 'shrestha', email: 'ilamalisunilshrestha00@gmail.com', mobile: '9860689684', address: 'ilam', message: 'hello nepal i wnat something' },
     { id: 2, f_name: 'suraj', m_name: 'bhadur', l_name: 'shrestha', email: 'suraj@gmail.com', mobile: '9818245144', address: 'ilam', message: 'hello nepal i wnat something' },
      { id: 3, f_name: 'kabita', l_name: 'shrestha', email: 'kabita@gmail.com', mobile: '9818245145', address: 'ilam', message: 'hello nepal i wnat something' } 
    ]);
     }); 
    };