import Category from '../model/catgory';
export async function getAllCategory() {
  return await Category.getAllCategory();
}
export async function addCategory(category) {
  return await Category.addCategory(category);
}
