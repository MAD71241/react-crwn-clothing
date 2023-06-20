import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolean) => {
  console.log(
    `Creating action of type ${
      CART_ACTION_TYPES.SET_CART_OPEN
    } and value of: ${boolean}`
  );
  return createAction(CART_ACTION_TYPES.SET_CART_OPEN, !boolean);
};

const addCartItem = (itemsArray, productToAdd) => {
  const existingCartItem = itemsArray.find(
    (element) => element.id === productToAdd.id
  );

  if (existingCartItem) {
    return itemsArray.map((element) => {
      return element.id === productToAdd.id
        ? { ...element, quantity: element.quantity + 1 }
        : element;
    });
  }

  return [...itemsArray, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (itemsArray, productToRemove) => {
  const existingCartItem = itemsArray.find(
    (element) => element.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return itemsArray.filter((element) => element.id !== productToRemove.id);
  }

  return itemsArray.map((element) => {
    return element.id === productToRemove.id
      ? { ...element, quantity: element.quantity - 1 }
      : element;
  });
};

const clearCartItem = (itemsArray, productToClear) => {
  return itemsArray.filter((element) => element.id !== productToClear.id);
};

export const addItemsToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemsFromCart = (cartItems, product) => {
  const newCartItems = removeCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemsFromCart = (cartItems, product) => {
  const newCartItems = clearCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};