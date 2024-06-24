import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import bcrypt from 'bcrypt';
import { User } from '../user/user.model';
import { createJwtToken } from './auth.constant';
import config from '../../config';
import { TUser } from '../user/user.interface';

const register = async (payload: TUser) => {
  const { fullName, email, password } = payload;
  // Check if user already exists in the database
  const user = await User.findOne({ email: email });
  if (user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User already exists');
  }
  const hashedPassword = await bcrypt.hash(password as string, 12);
  // Create a new user if they do not exist in the database
  const newUser = await User.create({
    fullName,
    email,
    password: hashedPassword,
  });
  // Create JWT token for the user
  const jwtPayload = {
    userId: newUser._id,
    fullName: newUser.fullName,
    email: newUser.email,
    profileImage: newUser.profileImage,
    role: newUser.role,
  };
  const accessToken = createJwtToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expire_in as string,
  );
  return {
    accessToken,
  };
};

const login = async (email: string, password: string) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User not found');
  }
  const isPasswordCorrect = await bcrypt.compare(
    password,
    user.password as string,
  );
  if (!isPasswordCorrect) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid password');
  }
  // Create JWT token for the user
  const jwtPayload = {
    userId: user._id,
    fullName: user.fullName,
    email: user.email,
    profileImage: user.profileImage,
    role: user.role,
  };
  const accessToken = createJwtToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expire_in as string,
  );
  return {
    accessToken,
  };
};

export const authService = {
  register,
  login,
};
