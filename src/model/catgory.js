import knex from 'knex';
import knexConfig from '../knexConfig';

const knexfile = knex(knexConfig);

class Category {
  static async getAllCategory() {
    let result = await knexfile('category');
    return result;
  }
  static async addCategory(category) {
    return await knexfile('category').insert(category);
  }
  static async updateById(id) {
    return await knexfile(category).update(category);
  }
}

export default Category;
