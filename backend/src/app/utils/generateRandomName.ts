import { randomBytes } from 'crypto';
export const generateRandomName = (prefix: string) => {
  const randomString = randomBytes(8).toString('hex');
  return `${prefix}-${randomString}`;
};
