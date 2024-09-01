"use client";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';
import { useSearchParams } from 'next/navigation';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function page({clientSecret}) {
  const searchParams = useSearchParams();
    const options = {
		mode: 'payment',
		currency: 'usd',
		amount:  Number(searchParams.get('amount'))
	}
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Number(searchParams.get('amount'))} clientSecret={clientSecret} />
    </Elements>
  )
}

export default page