 "use client";
import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { CartContext } from '../_context/CartContext';
import CartApis from '../_utils/CartApis';
import Cart from './Cart';  
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoggedIng, setIsLoggedIng] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);  
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();

  useEffect(() => {
    user && getCartItems();
  }, [user]);
  
  const getCartItems = () => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(res => {
      res?.data?.data.forEach(cartItem => {
        setCart(oldCart => [
          ...oldCart,
          {
            id: cartItem.id,
            product: cartItem?.attributes?.products?.data[0],
          },
        ]);
      });
    }).catch(error => {
      console.log(error);
    });
  };
  
  useEffect(() => {  
    setIsLoggedIng(window.location.href.toString().includes('sign-in') || window.location.href.toString().includes('sign-up'));
  }, []);
 
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { title: "الصفحة الرئيسية", href: "/" },
    { title: "من نحن", href: "#about" },
    { title: "ما الجديد", href: "#new" },
    { title: "منتجاتنا", href: "#products" },
    { title: "تواصل معنا", href: "#contact" },
  ];
  
  if (!isMounted) return null;
    
  return !isLoggedIng && (
    <header className="bg-white dark:bg-primary relative">
      <div className="mx-auto max-w-screen-2xl px-4 py-3 sm:px-9 ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src="/logo.png" width={"40"} height={"40"} alt="متجركو لوجو"/>
              <span className="hidden md:block text-secondary text-3xl font-extrabold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-secondary via-white to-gray-500">
                Matjariku
              </span>
            </Link>
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link className="text-gray-500 text-lg font-bold transition hover:text-gray-500/75 dark:text-white dark:hover:text-secondary" href={item.href}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {!user ? (
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a className="rounded-md bg-teal-600 text-lg px-5 py-2.5 text-white shadow dark:hover:bg-teal-500" href="sign-in">
                    سجل الدخول 
                  </a>
                  <div className="hidden sm:flex">
                    <a href="sign-up" className="py-2 px-4 rounded-lg bg-transparent border-2 border-secondary text-secondary dark:text-white hover:bg-secondary hover:text-white text-lg">
                      حساب جديد
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className='hidden lg:flex md:flex items-center gap-6 relative'>
                <div className='bg-gray-300 pt-1 px-1 rounded-xl'>
                  <UserButton />
                </div>
                <div className='flex gap-1 items-center'>
                  <span className='text-white font-bold text-lg'>({cart?.length})</span>
                  <Image
                    src="/trolley.png"
                    width={"40"}
                    height={"40"}
                    className='cursor-pointer'
                    alt="متجركو لوجو"
                    onClick={() => setIsCartOpen(!isCartOpen)} // Toggle the cart box
                  />
                  <Cart isOpen={isCartOpen} cart={cart} /> {/* Cart Component */}
                </div>
              </div>
            )}

            {/* start list icon */}
            <div className="block md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-11 border-2 border-secondary rounded-lg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {/* end list icon */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-500">
          <ul className="flex flex-col items-center gap-4 p-4 text-sm">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link className="text-gray-500 text-xl font-bold transition hover:text-gray-500/75 dark:text-white dark:hover:text-secondary" href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
            {user && (
              <>
                <UserButton />
                <div className='flex gap-1'>
                  <span className='text-white font-bold text-lg'>({cart?.length})</span>
                  <Image
                    src="/trolley.png"
                    width={"45"}
                    height={"45"}
                    className='cursor-pointer'
                    alt="متجركو لوجو"
                    onClick={() => setIsCartOpen(!isCartOpen)} // Toggle the cart box
                  />
                </div>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
