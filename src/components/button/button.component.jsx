import {
  BaseButton,
  GoogleSigninButton,
  InvertedSigninButton,
} from "./button.styles.jsx";

export const BUTTON_TYPES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES.base) =>
({
  [BUTTON_TYPES.base]: BaseButton,
  [BUTTON_TYPES.google]: GoogleSigninButton,
  [BUTTON_TYPES.inverted]: InvertedSigninButton,
}[buttonType]);

export const ButtonComponent = ({ children, buttonType, ...otherProps }) => {
  const Button = getButton(buttonType);

  return (
    <Button
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
