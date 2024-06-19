import { z } from 'zod';

const createReviewValidationSchema = z.object({
  body: z.object({
    productId: z.string().min(1, { message: 'Product id is required' }),
    rating: z
      .number()
      .min(1, { message: 'Rating must be at least 1' })
      .max(5, { message: 'Rating must be at most 5' }),
    comment: z.string().min(1, { message: 'Comment is required' }),
  }),
});
const updateReviewValidationSchema = z.object({
  body: z.object({
    product: z.string().min(1, { message: 'Product is required' }).optional(),
    rating: z
      .number()
      .min(1, { message: 'Rating must be at least 1' })
      .max(5, { message: 'Rating must be at most 5' }),
    comment: z.string().min(1, { message: 'Comment is required' }).optional(),
  }),
});

export const reviewValidation = {
  createReviewValidationSchema,
  updateReviewValidationSchema,
};
