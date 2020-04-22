import knex from 'knex';
import knexConfig from '../knexConfig';
const knexfile = knex(knexConfig);

class MainSlide {
  static async getAllMainSlide() {
    let result = await knexfile('mainslide');
    return result;
  }
}
export default MainSlide;
