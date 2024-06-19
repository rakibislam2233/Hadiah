import { Router } from 'express';
import { productRouter } from '../module/product/product.route';
import { categoriesRouter } from '../module/categories/categories.route';
import { authRouter } from '../module/auth/auth.route';
import { reviewRouter } from '../module/review/review.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/products',
    route: productRouter,
  },
  {
    path: '/categories',
    route: categoriesRouter,
  },
  {
    path: '/review',
    route: reviewRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
