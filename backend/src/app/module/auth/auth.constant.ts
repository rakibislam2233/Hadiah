import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
export const createJwtToken = (
  jwtPayload: {
    userId: Types.ObjectId;
    fullName: string;
    email: string;
    profileImage: string | undefined;
    role: string;
  },
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
