import { Schema, model } from 'mongoose';
import { TCategories } from './categories.interface';

const categoriesSchema = new Schema<TCategories>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
    trim: true,
  },
  status: {
    type: String,
    default: '',
  },
});

export const Categories = model<TCategories>('categories', categoriesSchema);
