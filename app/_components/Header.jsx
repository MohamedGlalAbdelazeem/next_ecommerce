"use client"
import { useState , useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
  setIsMounted(true);
}, []);

if (!isMounted) return null;
  return (
    <>
      <header className="bg-white dark:bg-primary">
        <div className="mx-auto max-w-screen-2xl px-4 py-3 sm:px-6 ">
          <div className="flex h-16 items-center justify-between">
           
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src="/logo.png"
                        width={"55"}
                        height={"55"}
                        alt="متجركو لوجو"/>
                      <span className="hidden md:block text-secondary text-3xl font-extrabold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-secondary via-white to-gray-500">
                        Matjariku
                    </span>
              </Link>
            </div>
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-gray-500 text-lg font-bold transition hover:text-gray-500/75 dark:text-white dark:hover:text-secondary"
                      href="/">
                      الصفحة الرئيسية
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition text-lg font-bold hover:text-gray-500/75 dark:text-white dark:hover:text-secondary"
                    href="#about" >
                      من نحن 
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition text-lg font-bold hover:text-gray-500/75 dark:text-white dark:hover:text-secondary"
                    href="#new" >
                         ما الجديد 
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition text-lg font-bold hover:text-gray-500/75 dark:text-white dark:hover:text-secondary"
                      href="#products" >
                      منتجاتنا
                    </a>
                  </li>
                
                  <li>
                    <a
                      className="text-gray-500 transition text-lg font-bold hover:text-gray-500/75 dark:text-white dark:hover:text-secondary"
                      href="#contact"
                    >
                      تواصل معنا 
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-teal-600 text-lg  px-5 py-2.5  text-white shadow dark:hover:bg-teal-500"
                    href="#"
                  >
                    سجل الدخول 
                  </a>

                  <div className="hidden sm:flex">
                  <a href="#" className="py-2 px-4 rounded-lg bg-transparent border-2 border-secondary text-secondary dark:text-white hover:bg-secondary hover:text-white text-lg">
                   حساب جديد
                    </a>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden">
            <ul className="flex flex-col items-center gap-4 p-4 text-sm">
            <li>
                    <a
                      className="text-gray-500 text-xl font-bold transition hover:text-gray-500/75 dark:text-white dark:hover:text-secondary"
                      href="/">
                      الصفحة الرئيسية
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition text-xl font-bold hover:text-gray-500/75 dark:text-white dark:hover:text-secondary"
                    href="#about" >
                      من نحن 
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition text-xl font-bold hover:text-gray-500/75 dark:text-white dark:hover:text-secondary"
                    href="#new" >
                         ما الجديد 
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition text-xl font-bold hover:text-gray-500/75 dark:text-white dark:hover:text-secondary"
                      href="#products" >
                      منتجاتنا
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition text-xl font-bold hover:text-gray-500/75 dark:text-white dark:hover:text-secondary"
                      href="#"
                    >
                      تواصل معنا 
                    </a>
                  </li>
              
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
