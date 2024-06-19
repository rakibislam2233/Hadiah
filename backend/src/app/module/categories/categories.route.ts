import { Router } from 'express';
import { categoriesController } from './categories.controller';
import validateRequest from '../../middleware/validateRequest';
import { categoriesValidation } from './categories.validation';

const route = Router();

route.post(
  '/',
  validateRequest(categoriesValidation.createCategoriesSchema),
  categoriesController.createCategories,
);
route.get('/', categoriesController.getAllCategories);
route.get('/:categoryId', categoriesController.getSingleCategory);
route.patch(
  '/:categoryId',
  validateRequest(categoriesValidation.updateCategoriesSchema),
  categoriesController.updateCategories,
);
route.delete('/:categoryId', categoriesController.deleteCategories);

export const categoriesRouter = route;
