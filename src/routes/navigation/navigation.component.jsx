import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  NavigationContainer,
  LogoContainer,
  NavlinksContainer,
  Navlink,
} from "./navigation.styles.js";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

export const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavlinksContainer>
          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              SIGN-OUT
            </span>
          ) : (
            <Navlink to="/authentication">SIGN-IN</Navlink>
          )}
          <Navlink to="/shop">SHOP</Navlink>
          <CartIcon />
        </NavlinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
