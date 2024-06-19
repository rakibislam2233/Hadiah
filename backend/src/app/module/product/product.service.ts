import { Review } from '../review/review.model';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProduct = async (productId: string) => {
  const result = await Product.findById(productId);
  const review = await Review.find({ productId }).populate('user');
  return { product: result, review };
};
export const productService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
