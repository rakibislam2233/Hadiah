import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

type TItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};
type TInitialState = {
  cart: TItem[];
};
const initialState: TInitialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { quantity } = action.payload;
      const isItemExists = state.cart.find(
        (item: TItem) => item.id === action.payload.id
      );
      if (isItemExists) {
        state.cart = state.cart.map((item: TItem) => {
          return item.id === action.payload.id
            ? {
                ...item,
                quantity: quantity
                  ? item.quantity + quantity
                  : item.quantity + 1,
              }
            : item;
        });
        toast.success(`Cart added successfully`);
      } else {
        state.cart.push({
          ...action.payload,
          quantity: quantity ? quantity : 1,
        });
        toast.success(`Cart added successfully`);
      }
    },
    removeFromCart: (state, action) => {
      toast.success(`Cart removed successfully`);
      state.cart = state.cart.filter(
        (item: TItem) => item.id !== action.payload.id
      );
    },
    incrementQuantity: (state, action) => {
      state.cart = state.cart.map((item: TItem) => {
        return item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    },
    decrementQuantity: (state, action) => {
      state.cart = state.cart.map((item: TItem) => {
        return item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
