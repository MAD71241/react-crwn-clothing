import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/home/home.component"; 
import { NavigationBar } from "./routes/navigation/navigation.component";
import { Authentication } from "./routes/authentication/authentication.component";
import { Shop } from "./routes/shop/shop.component";
import { Checkout } from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";
import { useDispatch } from "react-redux";

const App = () => {
  // this binding allows us to interact with the redux store
  // this dispatch works in the same way as the react context dispatch that we get as the second argument of the reducer function
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />}/>
        <Route path="authentication" element={<Authentication />}/>
        <Route path="shop/*" element={<Shop />}/>
        <Route path="checkout" element={<Checkout />}/>
      </Route>
    </Routes>
  );
};

export default App;
