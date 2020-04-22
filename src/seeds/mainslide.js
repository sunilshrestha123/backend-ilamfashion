exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('mainslide')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('mainslide').insert([
        {
          id: 1,
          heading: 'Laptop',
          des: 'lenovo,dell,hp,mac,accer laptop are availabe here',
          url: 'rowValue1',
        },
        {
          id: 2,
          heading: 'Printer',
          des: 'we are the authorized company for canon printer in nepal',
          url: 'rowValue2',
        },
        {
          id: 3,
          heading: 'Mobile',
          des: 'samsung,oppo,huwai mobile availabe here to us',
          url: 'rowValue3',
        },
      ]);
    });
};
