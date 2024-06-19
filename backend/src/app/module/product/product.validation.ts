import { z } from 'zod';

const createProductSchema = z.object({
  body: z.object({
    title: z
      .string({
        invalid_type_error: 'Title must be a string',
        required_error: 'Title is required',
      })
      .min(1, 'Title cannot be empty'),
    category: z
      .string({
        invalid_type_error: 'Category must be a string',
        required_error: 'Category is required',
      })
      .min(1, 'Category cannot be empty'),
    brand: z
      .string({
        invalid_type_error: 'Brand must be a string',
        required_error: 'Brand is required',
      })
      .min(1, 'Brand cannot be empty'),
    images: z
      .array(
        z.string().url({
          message: 'Invalid URL',
        }),
      )
      .min(1, 'At least one image is required'),
    price: z
      .number({
        invalid_type_error: 'Price must be a number',
        required_error: 'Price is required',
      })
      .positive('Price must be a positive number'),
    rating: z
      .number({
        invalid_type_error: 'Rating must be a number',
        required_error: 'Rating is required',
      })
      .min(0, 'Rating must be at least 0')
      .max(5, 'Rating can be at most 5'),
    description: z
      .string({
        invalid_type_error: 'Description must be a string',
        required_error: 'Description is required',
      })
      .min(1, 'Description cannot be empty'),
    specification: z.record(z.unknown(), {
      invalid_type_error: 'Specification must be an object',
      required_error: 'Specification is required',
    }),
  }),
});

const updateProductSchema = z.object({
  body: z.object({
    title: z
      .string({
        invalid_type_error: 'Title must be a string',
        required_error: 'Title is required',
      })
      .optional(),
    category: z
      .string({
        invalid_type_error: 'Category must be a string',
        required_error: 'Category is required',
      })
      .optional(),
    brand: z
      .string({
        invalid_type_error: 'Brand must be a string',
        required_error: 'Brand is required',
      })
      .optional(),
    images: z
      .array(
        z.string().url({
          message: 'Invalid URL',
        }),
      )
      .min(1, 'At least one image is required')
      .optional(),
    price: z
      .number({
        invalid_type_error: 'Price must be a number',
        required_error: 'Price is required',
      })
      .positive('Price must be a positive number')
      .optional(),
    rating: z
      .number({
        invalid_type_error: 'Rating must be a number',
        required_error: 'Rating is required',
      })
      .min(0, 'Rating must be at least 0')
      .max(5, 'Rating can be at most 5')
      .optional(),
    description: z
      .string({
        invalid_type_error: 'Description must be a string',
        required_error: 'Description is required',
      })
      .min(1, 'Description cannot be empty')
      .optional(),
    specification: z
      .record(z.unknown(), {
        invalid_type_error: 'Specification must be an object',
        required_error: 'Specification is required',
      })
      .optional(),
  }),
});

export const productValidation = {
  createProductSchema,
  updateProductSchema,
};
