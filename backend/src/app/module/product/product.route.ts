import { Router } from 'express';
import { productController } from './product.controller';
import validateRequest from '../../middleware/validateRequest';
import { productValidation } from './product.validation';
import auth from '../../middleware/auth';

const router = Router();
router.post(
  '/',
  validateRequest(productValidation.createProductSchema),
  productController.createProduct,
);
router.get('/', auth, productController.getAllProducts);
router.get('/:productId', productController.getSingleProduct);
export const productRouter = router;
