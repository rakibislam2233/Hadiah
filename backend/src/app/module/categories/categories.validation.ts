import { z } from 'zod';

const createCategoriesSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    image: z.string().min(1, { message: 'Image is required' }),
    status: z.string().min(1, { message: 'Status is required' }).optional(),
  }),
});

const updateCategoriesSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }).optional(),
    image: z.string().min(1, { message: 'Image is required' }).optional(),
    status: z.string().min(1, { message: 'Status is required' }).optional(),
  }),
});

export const categoriesValidation = {
  createCategoriesSchema,
  updateCategoriesSchema,
};
