"use client";
import { useAppSelector } from "@/redux/hook/hook";
const useCart = () => {
  const { cart: cartProducts } = useAppSelector((state) => state.cart);
  return cartProducts;
};
export default useCart;
