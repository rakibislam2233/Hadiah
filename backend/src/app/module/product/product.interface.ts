export type TProduct = {
  title: string;
  category: string;
  brand: string;
  images: string[];
  price: number;
  description: string;
  specification: Record<string, unknown>;
  averageRating: number;
  numReviews: number;
};
