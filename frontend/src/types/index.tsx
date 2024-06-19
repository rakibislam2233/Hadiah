import { ReactNode } from "react";

export type TName = string;

export type TParams = {
  category: string;
};
export type TCarasoul = {
  children: ReactNode;
  slide?: number;
  smSlide?: number;
  mdSlide?: number;
  lgSlide?: number;
};
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
export type TCategory = {
  _id: string;
  name: string;
  image: string;
  status?: string;
};
