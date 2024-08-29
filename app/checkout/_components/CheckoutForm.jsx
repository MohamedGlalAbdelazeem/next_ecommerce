import {PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  return (
    <form className='text-lg sm:w-1/2 mx-auto p-12 my-16 border-2 border-gray-200'>
      <PaymentElement />
      <button className='rounded-sm hover:opacity-35 p-2  my-11 bg-green-400 text-white text-lg w-full'>إتمام الشراء</button>
    </form>
  );
};

export default CheckoutForm;