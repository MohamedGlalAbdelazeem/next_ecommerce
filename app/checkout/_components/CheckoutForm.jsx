'use client'
import { useContext, useState } from 'react';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { CartContext } from '../../_context/CartContext';
import { useUser } from '@clerk/nextjs';
import OrdersApis from '../../_utils/OrdersApis';
import CartApis from '../../_utils/CartApis';
 
  
const CheckoutForm = ({amount}) => {
  const {cart , setCart } = useContext(CartContext);
  const {user} = useUser();

  const stripe = useStripe();
  const elements = useElements();
 
	const [loading, setLoading] = useState(false);
	const [errormessage, setErrorMessage] = useState()

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setLoading(true);


    const handleError = (error) => {
			setLoading(false)
			setErrorMessage(error.message)
		}
		
    createOrder();
    // Trigger form validation and wallet collection
		const { error: submitError } = await elements.submit();
		if (submitError) {
			handleError(submitError);
			return;
		}

    const res = await fetch('api/create-intent',{
      method:'POST',
      body:JSON.stringify({
        amount:amount
      })
    })
    const clientSecret =  await res.json();
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret, // Pass the clientSecret here
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm",
      },
    });


    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
      console.log("done");
    }
    setLoading(false);
  };
  function createOrder() {
    let productsId = [];
    cart.forEach(element =>{
      return productsId.push(element?.product?.id)
    })
    const data = {
      data:{
        email:user.primaryEmailAddress.emailAddress,
        username:user.fullName,
        amount:amount,
        products:productsId
      }
    }
    OrdersApis.createOrder(data).then(res=>{
      if (res) {
        cart.forEach(element=>{
          CartApis.deletCartItem(element?.id).then(result=>{
            console.log(result);
            
          })
        })
        
      }
    }).catch(error=>{
      console.log(error);
      
    })
  }
  return (
    <form 
    onSubmit={handleSubmit}
     className='text-lg sm:w-1/2 mx-auto p-12 my-16 border-2 border-gray-200'>

      <PaymentElement />

      <button 
     disabled={!stripe || loading}
      className='rounded-sm hover:opacity-35 p-2  my-11 bg-green-400 text-white text-lg w-full'
      >
      {loading ? ' جاري عملية الدفع.........' : 'إتمام الشراء'}
      </button>
    </form>
  );
};

export default CheckoutForm;


//  4242 4242 4242 4242
// Expiration Date: (e.g., 12/34)
// CVC:  (e.g., 123)