import { NextFunction, Request, Response, Router } from 'express';
import { productController } from './product.controller';
import validateRequest from '../../middleware/validateRequest';
import { productValidation } from './product.validation';
import auth from '../../middleware/auth';
import { upload } from '../../utils/uploadImage';
import admin from '../../middleware/admin';

const router = Router();
router.post(
  '/',
  auth,
  admin,
  upload.array('files'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(productValidation.createProductSchema),
  productController.createProduct,
);
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getSingleProduct);
router.patch(
  '/:productId',
  auth,
  admin,
  upload.array('files'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(productValidation.updateProductSchema),
  productController.updateProduct,
);

router.delete('/:productId', auth, admin, productController.deleteProduct);
export const productRouter = router;
