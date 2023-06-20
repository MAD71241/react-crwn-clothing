import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardButton,
  ProductCardFooter,
  ProductCardFooterName,
  ProductCardFooterPrice,
} from "./product-card.styles.jsx";
import { BUTTON_TYPES } from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price } = product;
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={name} />
      <ProductCardFooter>
        <ProductCardFooterName>{name}</ProductCardFooterName>
        <ProductCardFooterPrice>{price}</ProductCardFooterPrice>
      </ProductCardFooter>
      <ProductCardButton
        buttonType={BUTTON_TYPES.inverted}
        onClick={addProductToCart}
      >
        Shop now!
      </ProductCardButton>
    </ProductCardContainer>
  );
};
