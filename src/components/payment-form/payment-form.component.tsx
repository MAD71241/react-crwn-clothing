import { useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { ButtonComponent } from "../button/button.component";
import { BUTTON_TYPES } from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector(selectCurrentUser);
  const cartTotal = useSelector(selectCartTotal);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((response) => response.json());
    if (response.error) {
    }
    const clientSecret = response.paymentIntent.client_secret;

    const cardDetails = elements.getElement(CardElement);
    if (!cardDetails) return;

    const paymentResult = stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: user ? user.displayName : "Guest",
        },
      },
    });
    setIsProcessingPayment(false);
    console.log(response);
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <ButtonComponent
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPES.inverted}
        >
          Pay now
        </ButtonComponent>
      </FormContainer>
    </PaymentFormContainer>
  );
};
