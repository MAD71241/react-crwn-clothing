import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";

export const CartIcon = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleCartOpening = () => dispatch(setIsCartOpen(isCartOpen));

  return (
    <CartIconContainer onClick={toggleCartOpening}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
