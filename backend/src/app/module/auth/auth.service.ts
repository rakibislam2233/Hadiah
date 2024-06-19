import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import bcrypt from 'bcrypt';
import { User } from '../user/user.model';
import { createJwtToken } from './auth.constant';
import config from '../../config';
import { TUser } from '../user/user.interface';

const register = async (payload: TUser) => {
  const { fullName, email, password } = payload;
  //check if user already exist in database
  const user = await User.findOne({ email: email });
  if (user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User already exists');
  }
  const hashedPassword = await bcrypt.hash(password as string, 12);
  //if user not exist in database for create new user
  const newUser = await User.create({
    fullName,
    email,
    password: hashedPassword,
  });
  //create jwt token for user
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
  //create jwt token for user
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
