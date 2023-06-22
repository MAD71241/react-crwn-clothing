import {
  BaseButton,
  ButtonSpinner,
  GoogleSigninButton,
  InvertedSigninButton,
} from "./button.styles";
import { ButtonHTMLAttributes, FC } from "react";

export enum BUTTON_TYPES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

const getButton = (buttonType = BUTTON_TYPES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.google]: GoogleSigninButton,
    [BUTTON_TYPES.inverted]: InvertedSigninButton,
  }[buttonType]);

type ButtonProps = {
  buttonType?: BUTTON_TYPES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonComponent: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const Button = getButton(buttonType);
  return (
    <Button disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </Button>
  );
};
