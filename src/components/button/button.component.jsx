import {
  BaseButton,
  ButtonSpinner,
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

export const ButtonComponent = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const Button = getButton(buttonType);

  return (
    <Button
      disabled={isLoading}
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
      {...otherProps}
    >
      {isLoading ? <ButtonSpinner /> : children}
    </Button>
  );
};
