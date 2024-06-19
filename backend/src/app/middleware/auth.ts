import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import config from '../config';
import catchAsync from '../utils/catchAsync';
import { User } from '../module/user/user.model';

const auth = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized to access');
    }
    const decoded = jwt.verify(
      token as string,
      config.jwt_access_secret as string,
    );
    const { userId } = decoded as JwtPayload;
    //user exist
    const user = await User.findById(userId);
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }
    req.user = decoded as JwtPayload;
    next();
  },
);

export default auth;
