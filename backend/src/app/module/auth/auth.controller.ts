/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import { authService } from './auth.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const register = catchAsync(async (req, res, next) => {
  const userInfo = req.body;
  const result = await authService.register(userInfo);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Register successfully',
    data: result,
  });
});
const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const result = await authService.login(email, password);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Login successfully',
    data: result,
  });
});
export const authController = {
  register,
  login,
};
