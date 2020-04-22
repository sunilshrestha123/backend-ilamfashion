import knex from 'knex';
import knexConfig from '../knexConfig';
const knexfile = knex(knexConfig);
class Contactus {
  static async getAllContactus() {
    let result = await knexfile('contactus');
    return result;
  }

  static async addContactus(data) {
    return await knexfile('contactus').insert(data);
  }
  static async getContactusById(id) {
    let result = await knexfile('contactus').where('id', id);
    return result;
  }
}
export default Contactus;
