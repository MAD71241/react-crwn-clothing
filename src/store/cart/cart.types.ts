import { CategoryItem } from "../category/category.types";
export enum CART_ACTION_TYPES {
  SET_CART_OPEN = "SET_CART_OPEN",
  SET_CART_ITEMS = "SET_CART_ITEMS",
  SET_CART_COUNT = "SET_CART_COUNT",
  SET_CART_TOTAL = "SET_CART_TOTAL",
}

export type CartItem = CategoryItem & {
  quantity: number;
}

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};