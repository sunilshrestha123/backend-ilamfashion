import Subcategory from '../model/Subcategory';
export async function addsubCategory(subcategory) {
  return await Subcategory.addsubCategory(subcategory);
}
export async function getAllSubcategory() {
  return await Subcategory.getAllSubcategory();
}
export async function subcategoryById(id) {
  return await Subcategory.subcategoryById(id);
}
export async function updateById(id) {
  return await Subcategory.updateById(id);
}
export async function deleteById(id) {
  return await Subcategory.deleteById(id);
}
