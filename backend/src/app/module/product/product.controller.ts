/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import { productService } from './product.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createProduct = catchAsync(async (req, res, next) => {
  const productData = req.body;
  const result = await productService.createProduct(req.files, productData);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product create successfully',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res, next) => {
  const result = await productService.getAllProducts();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Products retrieves successfully',
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res, next) => {
  const { productId } = req.params;
  const result = await productService.getSingleProduct(productId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single Product retrieves successfully',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res, next) => {
  const { productId } = req.params;
  const productData = req.body;
  const result = await productService.updateProduct(
    productId,
    req.files,
    productData,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product update successfully',
    data: result,
  });
});
const deleteProduct = catchAsync(async (req, res, next) => {
  const { productId } = req.params;
  const result = await productService.deleteProduct(productId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product delete successfully',
    data: result,
  });
});
export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
