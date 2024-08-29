'use client';
import React, { useContext } from 'react';
import { CartContext } from '../_context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="absolute left-11 top-16 mt-2 w-80 bg-white border border-gray-300 shadow-lg p-4 z-50">
      <h2 className="font-semibold text-center text-lg mb-2">المنتجات التي تم شراؤها</h2>
      <ul className="overflow-y-auto max-h-64">
        {cart.map((item, index) => (
          <li key={index} className="my-4 bg-slate-200 flex items-center p-2">
            <Image
                 width={"200"}
                 height={"200"}
                 src={item?.productDetails?.attributes?.banner?.data?.attributes?.url}
                 alt="product image"
                className="ml-2 h-20 w-20 rounded object-cover" />
            <div className="w-full">
              <h3 className="text-center text-sm text-gray-900">
                {item?.productDetails?.attributes?.title}
              </h3>
              <h4 className="my-2 text-sm bg-green-500 text-white text-center">
                {item?.productDetails?.attributes?.price} EGP
              </h4>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-4 text-center">
        <Link  href="/cart"  className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"  >
          عربة التسوق ({cart?.length})
        </Link>
      </div>
    </div>
  );
}

export default Cart;
