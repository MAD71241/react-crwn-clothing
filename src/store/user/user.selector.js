  // selector is essentially a function that extracts off the value that we need from the redux store
  // we receive the whole state object.
  export const selectCurrentUser = (state) => state.user.currentUser
  // const isCartOpen = useSelector((state) => state.currentUser.isCartOpen);

  // using the useContext from react:
  /*   const { currentUser } = useContext(UserContext); */