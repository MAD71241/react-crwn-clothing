import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";

export const FormInput = (props) => {
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
