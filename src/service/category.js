import Category from '../model/catgory';
export async function getAllCategory() {
  return await Category.getAllCategory();
}
export async function addCategory() {
  return await Category.addCategory();
}
