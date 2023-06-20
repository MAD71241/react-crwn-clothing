import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  DropdownButton,
} from "./cart-dropdown.styles.jsx";
import { Link } from "react-router-dom";
import { CartItem } from "../cart-item/cart-item.component";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

export const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((value) => (
            <CartItem key={value.id} cartItem={value}></CartItem>
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to="/checkout">
        <DropdownButton>checkout</DropdownButton>
      </Link>
    </CartDropdownContainer>
  );
};
