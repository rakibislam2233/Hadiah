/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import { TCategories } from './categories.interface';
import { Categories } from './categories.model';
import AppError from '../../errors/AppError';
import { generateRandomName } from '../../utils/generateRandomName';
import { uploadImage } from '../../utils/uploadImage';

const createCategories = async (file: any, payload: TCategories) => {
  const isExistCategories = await Categories.findOne({ name: payload.name });
  if (isExistCategories) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Categories name already exist');
  }
  const imageName = generateRandomName('categories');
  const path = file?.path;
  const { secure_url } = (await uploadImage(path, imageName)) as any;
  const newCategories = new Categories({
    ...payload,
    image: secure_url,
  });

  await newCategories.save();
  return newCategories;
};

const getAllCategories = async () => {
  const result = await Categories.find();
  return result;
};

const updateCategories = async (categoryId: string, payload: TCategories) => {
  const isExistCategories = await Categories.findById(categoryId);
  if (!isExistCategories) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Categories not found');
  }
  const result = await Categories.findByIdAndUpdate(categoryId, payload);
  return result;
};

const deleteCategories = async (categoryId: string) => {
  const isExistCategories = await Categories.findById(categoryId);
  if (!isExistCategories) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Categories not found');
  }
  const result = await Categories.findByIdAndDelete(categoryId);
  return result;
};

export const categoriesService = {
  createCategories,
  getAllCategories,
  updateCategories,
  deleteCategories,
};
