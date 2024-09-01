 "use client"
import { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import CartApis from "../_utils/CartApis";
import { useRouter } from "next/navigation";

function Page() {
    const { cart, setCart } = useContext(CartContext); 
    const router = useRouter()
    function getTotalAmount() {
        let totalAmount = 0;
        cart.forEach(item => {
            totalAmount += Number(item?.product?.attributes?.price);
        });
        return totalAmount;
    }

    const deleteProductFromCart = (id) => {
        CartApis.deletCartItem(id)
            .then(() => {
                const updatedCart = cart.filter(item => item.id !== id);
                setCart(updatedCart);  
                toast('تم حذف المنتج بنجاح', { type: 'success' });   
            })
            .catch(error => {
                console.log(error);
                toast('حدث خطأ أثناء حذف المنتج', { type: 'error' });   
            });
    };

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
                    <div className="mt-8">
                        {cart.length === 0 ? (
                            <div className="text-center text-lg text-gray-500">
                                <p>سلة المشتريات الخاصة بك فارغة</p>
                                <Link href="/" className="text-blue-500 hover:underline">
                                    اذهب للتسوق
                                </Link>
                            </div>
                        ) : (
                            <>
                                <ul className="space-y-4">
                                    {cart.map((item, index) => (
                                        <li className="flex items-center gap-4 bg-gray-50 p-2 my-3 rounded-xl" key={index}>
                                            <Image
                                                src={item?.product?.attributes?.banner?.data?.attributes?.url}
                                                width={"500"}
                                                height={"500"}
                                                alt="product image"
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
                                                    <h2 className="text-lg text-green-500 font-bold">{item?.product?.attributes?.price} EGP</h2>
                                                </div>
                                                <button
                                                    onClick={() => deleteProductFromCart(item?.id)}
                                                    className="text-3xl font-extrabold text-red-500">🗑</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                    <div className="w-screen max-w-lg space-y-4">
                                        <div className="flex justify-between !text-base font-medium">
                                            <dt className="text-lg">التكلفة الكلية</dt>
                                            <h2 className="text-lg text-green-500 font-bold">{getTotalAmount()} EGP</h2>
                                        </div>
                                        <div className="flex justify-end">
                                            <button  
                                            onClick={()=>router.push(`/checkout?amount=${getTotalAmount()}`)}
                                            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
                                                اذهب للدفع 
                                            </button>
                                        </div>
                                        <p className="text-red-600">كل المتجات التي تم شراؤها سوف يتم إرسالها إلي البريد الخاص بك</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default Page;
