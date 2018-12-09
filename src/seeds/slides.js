exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('product_slides')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('product_slides').insert([
        { id: 1, colName: 'rowValue1' },
        { id: 2, colName: 'rowValue2' },
        { id: 3, colName: 'rowValue3' }
      ]);
    });
};
