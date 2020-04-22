import Category from '../model/catgory';
export async function getAllCategory() {
  return await Category.getAllCategory();
}
export async function getById(id) {
  return await Category.getById(id);
}
export async function addCategory(category) {
  return await Category.addCategory(category);
}
export async function updateByid(id) {
  return await Category.updateById(id);
}
export async function deleteById(id) {
  return await Category.deleteById(id);
}
