import "./sign-in-form.styles.scss";
import { useState } from "react";
import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/form-input.component";
import { ButtonComponent, BUTTON_TYPES } from "../button/button.component";


const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-form-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <ButtonComponent type="submit" buttonType={BUTTON_TYPES.inverted} onClick={handleSubmit}>
            Submit
          </ButtonComponent>
          <ButtonComponent onClick={signInWithGoogle} buttonType={BUTTON_TYPES.google}>
            Google sign in
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};
