import Subcategory from '../model/Subcategory';
export async function addsubCategory(subcategory) {
  return await Subcategory.addsubCategory(subcategory);
}
export async function getAllSubcategory() {
  return await Subcategory.getAllSubcategory();
}
