/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import { categoriesService } from './categories.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createCategories = catchAsync(async (req, res, next) => {
  const { categoryData } = req.body;
  const result = await categoriesService.createCategories(categoryData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully',
    data: result,
  });
});

const getAllCategories = catchAsync(async (req, res, next) => {
  const result = await categoriesService.getAllCategories();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Categories retrieves successfully',
    data: result,
  });
});

const getSingleCategory = catchAsync(async (req, res, next) => {
  const { categoryId } = req.params;
  const result = await categoriesService.getSingleCategories(categoryId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Category retrieves successfully',
    data: result,
  });
});

const updateCategories = catchAsync(async (req, res, next) => {
  const { categoryId } = req.params;
  const { categoryData } = req.body;
  const result = await categoriesService.updateCategories(
    categoryId,
    categoryData,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category updated successfully',
    data: result,
  });
});

const deleteCategories = catchAsync(async (req, res, next) => {
  const { categoryId } = req.params;
  const result = await categoriesService.deleteCategories(categoryId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category deleted successfully',
    data: result,
  });
});

export const categoriesController = {
  createCategories,
  getAllCategories,
  getSingleCategory,
  updateCategories,
  deleteCategories,
};
