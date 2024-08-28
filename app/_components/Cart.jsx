import React, { useContext , useEffect} from 'react';
import { CartContext } from '../_context/CartContext';

function Cart({ isOpen}) {

  
  const {cart} = useContext(CartContext);
 
  if (!isOpen) return null;
  return (
    <div className="absolute left-11 top-16 mt-2 w-80 bg-white border border-gray-300 shadow-lg p-4 z-50">
      <h2 className="font-semibold text-center text-lg mb-2">المنتجات التي تم شراؤها</h2>
      <ul className="overflow-y-auto max-h-64">
        {cart.map((item, index) => {
          return (
            <li key={index} className="my-4 bg-slate-200 flex items-center p-2">
              <img
                src={item?.product?.attributes?.banner?.data?.attributes?.url}
                alt="product image"
                className="ml-2 h-20 w-20 rounded object-cover"
              />

              <div className=''>
                <h3 className="text-sm text-gray-900">{item?.product?.attributes?.title}</h3>
                <h4 className='my-2 text-sm bg-green-500 text-white text-center'>{item?.product?.attributes?.price} EGP</h4>
              </div>

              <div className="flex flex-1 items-center justify-end gap-2">
                <button className="text-gray-600 transition hover:text-red-600">
                  <span className="sr-only">Remove item</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="space-y-4 text-center">
      <a href="#"
        className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
      >
        عربة التسوق ({cart?.length})
      </a>

      <a
        href="#"
        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
      >
        Checkout
      </a>

      <a
        href="#"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </a>
    </div>
    </div>
  );
}

export default Cart;
