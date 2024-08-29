"use client"
import { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import Image from "next/image";
import Link from "next/link";

function page() {
    const { cart } = useContext(CartContext);
    function getTotalAmount() {
        let totalAmount = 0;
        cart.forEach(item=>{
            totalAmount = totalAmount + Number(item?.product?.attributes?.price)
        })
        return totalAmount
    }
    
  return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="my-5 text-left text-sm">
                        <Link href="/" className="bg-primary text-white p-2 rounded-lg">
                            العودة لصفحة المنتجات ◀
                        </Link>
                </div>
                 <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">سلة المشتريات الخاصة بك</h1>
                    </header>
                <div className="mt-8 ">
                    <ul className="space-y-4">
                        {cart.map((item ,index)=>{
                                return(
                                <li className="flex items-center gap-4 bg-gray-50 p-2 my-3 rounded-xl" key={index}>
                                  <Image
                                    src={item?.product?.attributes?.banner?.data?.attributes?.url}
                                    width={"500"}
                                    height={"500"}
                                    alt="product image "
                                    className="size-36 rounded object-cover"
                                  />
                                    <div>
                                       <h3 className="text-lg font-bold text-gray-900">{item?.product?.attributes?.title}</h3>
                                        <div>
                                        {item?.product?.attributes?.description?.map((paragraph, index) => (
                                            <p key={index} className="text-gray-500 text-lg my-2">
                                            {paragraph?.children?.map((child, childIndex) => (
                                                <span key={childIndex}>{child.text}</span>
                                            ))}
                                            </p>
                                        ))}
                                          <h2 className="text-lg text-green-500 font-bold">{item?.product?.attributes?.price}EGP</h2>
                                        </div>
                                          <button className="text-3xl  font-extrabold text-red-500">🗑</button>
                                    </div>
                                </li>
                                );
                            })}
                    </ul>
                        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                            <div className="w-screen max-w-lg space-y-4">
                                <div className="flex justify-between !text-base font-medium">
                                    <dt  className="text-lg">التكلفة الكلية </dt>
                                    <h2 className="text-lg text-green-500 font-bold"> {getTotalAmount()}EGP</h2>

                                </div>
                                <div className="flex justify-end">
                                <a href="#" className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600" >
                                    Checkout
                                </a>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </section>
  )
}

export default page