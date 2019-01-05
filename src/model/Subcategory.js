import knex from 'knex';
import knexConfig from '../knexConfig';

const knexfile = knex(knexConfig);

class Subcategory {
  static async addsubCategory(subcategory) {
    return await knexfile('subcategory').insert(subcategory);
  }
  static async getAllSubcategory() {
    return await knexfile('subcategory');
  }
}
export default Subcategory;
