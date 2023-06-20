import { createSelector } from "reselect";
import { CartState, CartItem } from "./cart.types";

const selectCartReducer = (state: any): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart: CartState) => cart.cartItems
);
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart: CartState) => cart.isCartOpen
);
export const selectCartCount = createSelector(
  [selectCartReducer],
  (cart: CartState) =>
    cart.cartItems.reduce(
      (total: number, cartItem: CartItem) => total + cartItem.quantity,
      0
    )
);
export const selectCartTotal = createSelector(
  [selectCartReducer],
  (cart: CartState) =>
    cart.cartItems.reduce(
      (total: number, cartItem: CartItem) =>
        total + cartItem.quantity * cartItem.price,
      0
    )
);
