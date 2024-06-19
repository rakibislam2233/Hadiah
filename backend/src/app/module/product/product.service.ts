/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { generateRandomName } from '../../utils/generateRandomName';
import { uploadImage } from '../../utils/uploadImage';
import { Review } from '../review/review.model';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const uploadImages = async (files: any): Promise<string[]> => {
  const imageUploadPromises = files.map(async (file: any) => {
    const imageName = generateRandomName('product');
    const path = file?.path;
    const { secure_url } = (await uploadImage(path, imageName)) as any;
    return secure_url;
  });
  return Promise.all(imageUploadPromises);
};

const createProduct = async (files: any, payload: TProduct) => {
  const isExistsProduct = await Product.findOne({ title: payload.title });
  if (isExistsProduct) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product already exists');
  }

  const imageUrls = await uploadImages(files);

  const newProduct = new Product({
    ...payload,
    images: imageUrls,
  });

  await newProduct.save();
  return newProduct;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProduct = async (productId: string) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product not available');
  }

  const review = await Review.find({ productId }).populate('user');
  return { product, review };
};

const updateProduct = async (
  productId: string,
  files: any,
  payload: TProduct,
) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product not available');
  }

  let updatedImages = product.images; 

  if (files?.length > 0) {
    const imageUrls = await uploadImages(files);
    updatedImages = [...updatedImages, ...imageUrls];
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    { ...payload, images: updatedImages },
    { new: true },
  );
  return updatedProduct;
};

const deleteProduct = async (productId: string) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product not available');
  }

  const result = await Product.findByIdAndDelete(productId);
  return result;
};

export const productService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
