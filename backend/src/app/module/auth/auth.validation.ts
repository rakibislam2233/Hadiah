import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({
      invalid_type_error: 'Email must be a string',
      required_error: 'Email is required',
    }),
    password: z.string({
      invalid_type_error: 'Password must be a string',
      required_error: 'Password is required',
    }),
  }),
});
const registerValidationSchema = z.object({
  body: z.object({
    fullName: z.string({
      invalid_type_error: 'Full name must be a string',
      required_error: 'Full name is required',
    }),
    email: z.string({
      invalid_type_error: 'Email must be a string',
      required_error: 'Email is required',
    }),
    password: z.string({
      invalid_type_error: 'Password must be a string',
      required_error: 'Password is required',
    }),
    profileImage: z.string().optional(),
  }),
});

export const authValidation = {
  loginValidationSchema,
  registerValidationSchema,
};
