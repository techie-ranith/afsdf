"use client"
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "@/components/Forms/StripeCheckoutForm";
import Button from "@/components/Buttons/Buttons";
import { Check } from "@mui/icons-material";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

if(!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set")
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


export default function App() {
  const [clientSecret, setClientSecret] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/stripe-create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setLoading(false);
      });
  }, []);

  const appearance = {
    theme: 'stripe' as const,
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )
      )}
      {/* <Button variant={'primary'} size={'medium'}>Checkout</Button> */}
    </div>
  );
}
