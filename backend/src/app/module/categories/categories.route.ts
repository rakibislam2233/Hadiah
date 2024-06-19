import { NextFunction, Request, Response, Router } from 'express';
import { categoriesController } from './categories.controller';
import validateRequest from '../../middleware/validateRequest';
import { categoriesValidation } from './categories.validation';
import { upload } from '../../utils/uploadImage';
import auth from '../../middleware/auth';
import admin from '../../middleware/admin';

const route = Router();

route.post(
  '/',
  auth,
  admin,
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(categoriesValidation.createCategoriesSchema),
  categoriesController.createCategories,
);
route.get('/', categoriesController.getAllCategories);
route.patch(
  '/:categoryId',
  auth,
  admin,
  validateRequest(categoriesValidation.updateCategoriesSchema),
  categoriesController.updateCategories,
);
route.delete(
  '/:categoryId',
  auth,
  admin,
  categoriesController.deleteCategories,
);

export const categoriesRouter = route;
