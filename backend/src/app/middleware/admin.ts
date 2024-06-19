import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import AppError from '../errors/AppError';

const admin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user.role !== 'admin') {
    throw new AppError(httpStatus.UNAUTHORIZED,'Admin access required')
  }
  next();
};

export default admin;
