import { Router } from 'express';
import { authController } from './auth.controller';
import validateRequest from '../../middleware/validateRequest';
import { authValidation } from './auth.validation';

const router = Router();
router.post(
  '/register',
  validateRequest(authValidation.registerValidationSchema),
  authController.register,
);
router.post('/login', authController.login);

export const authRouter = router;
