export type TProduct = {
  _id: string;
  category: string;
  title: string;
  brand: string;
  images: [string, string];
  price: number;
  rating: number;
  description: string;
  specification: Record<string, unknown>;
};
