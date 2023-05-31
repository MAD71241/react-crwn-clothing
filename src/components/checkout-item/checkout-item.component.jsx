import "./checkout-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart, removeItemsFromCart, clearItemsFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

export const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems);
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItemsFromCart(cartItems, item))}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => dispatch(addItemsToCart(cartItems, item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => dispatch(clearItemsFromCart(cartItems, item))}>
        &#10005;
      </div>
    </div>
  );
};
