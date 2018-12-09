import User from '../model/user';

export async function getAllUser() {
  return await User.getAllUser();
}
export async function getUserById(id) {
  return await User.getUserById(id);
}
export async function getUserAdd(data) {
  return await User.getUserAdd(data);
}
