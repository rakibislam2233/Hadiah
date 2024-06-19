import { TCategories } from './categories.interface';
import { Categories } from './categories.model';

const createCategories = async (payload: TCategories) => {
  const result = await Categories.create(payload);
  return result;
};

const getAllCategories = async () => {
  const result = await Categories.find();
  return result;
};

const getSingleCategories = async (categoryId: string) => {
  const result = await Categories.findById(categoryId);
  return result;
};

const updateCategories = async (categoryId: string, payload: TCategories) => {
  const result = await Categories.findByIdAndUpdate(categoryId, payload);
  return result;
};

const deleteCategories = async (categoryId: string) => {
  const result = await Categories.findByIdAndDelete(categoryId);
  return result;
};

export const categoriesService = {
  createCategories,
  getAllCategories,
  getSingleCategories,
  updateCategories,
  deleteCategories,
};
