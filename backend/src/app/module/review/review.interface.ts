import { Schema } from 'mongoose';

export type TReview = {
  user: Schema.Types.ObjectId;
  productId: Schema.Types.ObjectId;
  rating: number;
  comment: string;
};

export type TReviewData = {
  userId: string;
  productId: string;
  rating: number;
  comment: string;
};
