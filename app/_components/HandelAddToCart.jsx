'use client';

import { useUser } from "@clerk/nextjs";

function HandelAddToCart() {
  const { user } = useUser();

  return function handleClick() {
    if (!user) {
      window.location = 'sign-in';
    }
  };
}

export default HandelAddToCart;
