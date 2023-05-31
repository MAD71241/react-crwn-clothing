import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { SignUpForm } from "../../components/sign-up/sign-up-form.component";
import { SignInForm } from "../../components/sign-in/sign-in-form.component";
import './authentication.styles.scss'

export const Authentication = () => {
  const logRedirectResults = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const { user } = response;
      const userDocRef = createUserDocumentFromAuth(user);
    }
  };

  useEffect(() => {
    logRedirectResults();
  });

  return (
    <div className="authentication-container">
      <SignUpForm />
      <SignInForm />
    </div>
  );
};
