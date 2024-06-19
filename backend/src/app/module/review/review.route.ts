import { Router } from 'express';
import auth from '../../middleware/auth';
import { reviewController } from './review.controller';
import validateRequest from '../../middleware/validateRequest';
import { reviewValidation } from './review.validation';

const router = Router();
router.post(
  '/',
  auth,
  validateRequest(reviewValidation.createReviewValidationSchema),
  reviewController.addReview,
);
router.get('/:productId', reviewController.getAllReviews);

export const reviewRouter = router;
