import { FormInputLabel, Input, Group } from "./form-input.styles";
import { FC, InputHTMLAttributes } from "react";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

export const FormInput: FC<FormInputProps> = (props) => {
  return (
    <Group>
      <Input
        className="form-input"
        required
        type={props.type}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
      />
      {props.label && <FormInputLabel>{props.label}</FormInputLabel>}
    </Group>
  );
};
