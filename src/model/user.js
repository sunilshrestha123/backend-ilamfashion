import knex from 'knex';
import knexConfig from '../knexConfig';

const knexfile = knex(knexConfig);

// const GET_DEPARTMENT = "SELECT * FROM department";
// const nameValidator=[
// validate({
// validator:'isLength',
// argument:[]

// })

class User {
  static async getAllUser() {
    // let result = await knexConfig("department");
    var result = await knexfile('users');
    // let results = await knexConfig.raw(GET_DEPARTMENT);

    return result;
  }
  static async getUserById(id) {
    let result = await knexfile('users').where('id', id);
    return result;
  }
  static async getUserAdd(data) {
    return await knexfile('users').insert(data);
  }
  //   static sync getUserDelete(id){
  // return await k

  // }
}

export default User;
