import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TReviewData } from './review.interface';
import { Review } from './review.model';
import { Product } from '../product/product.model';

const addReview = async (payload: TReviewData) => {
  const { userId, productId, rating, comment } = payload;
  const existingReview = await Review.findOne({
    user: userId,
    productId,
  });
  if (existingReview) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'You have already reviewed this product',
    );
  }
  const review = new Review({
    user: userId,
    productId,
    rating,
    comment,
  });
  await review.save();
  const product = await Product.findById(productId);
  if (!product) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product not found');
  }

  product.numReviews += 1;
  product.averageRating =
    (product.averageRating * (product.numReviews - 1) + rating) /
    product.numReviews;
  await product.save();
  return review;
};

const getReview = async (productId: string) => {
  const result = await Review.find({ productId }).populate('user');
  return result;
};
export const reviewService = { addReview, getReview };
