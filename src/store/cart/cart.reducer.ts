import { setIsCartOpen, setCartItems } from "./cart.action";
import { CartState } from "./cart.types";
import { AnyAction } from "@reduxjs/toolkit";

export const INITIAL_CART_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = INITIAL_CART_STATE,
  action = {} as AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {   
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;
};
