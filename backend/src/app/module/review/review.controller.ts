/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { reviewService } from './review.service';

const addReview = catchAsync(async (req, res, next) => {
  const userId = req?.user?.userId
  const { productId, rating, comment } = req.body;
  const reviewData = {
    userId,
    productId,
    rating,
    comment,
  };
  const result = await reviewService.addReview(reviewData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review added successfully',
    data: result,
  });
});

const getAllReviews = catchAsync(async (req, res, next) => {
  const { productId } = req.params;
  const result = await reviewService.getReview(productId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review retrieve successfully',
    data: result,
  });
});

export const reviewController = {
  addReview,
  getAllReviews,
};
