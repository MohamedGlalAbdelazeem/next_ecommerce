import Image from "next/image"

function Hero() {
  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
    <div className="bg-white dark:bg-gray-800 flex  relative z-20 items-center overflow-hidden">
      <div className="container mx-auto px-6 flex  py-32">
            <div className="lg:w-2/5 flex justify-center text-center items-center flex-col relative z-20">
                <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
                <h1 className="font-bebas-neue uppercase my-6 text-4xl leading-normal lg:leading-normal sm:text-6xl font-black flex flex-col dark:text-white text-gray-800">
                كن دائمًا في طليعة التسوق الإلكتروني
                </h1>
                <p className="text-xl text-gray-400 leading-9">
                استمتع بتجربة تسوق فريدة وسريعة مع متجر "متجركو". نقدم لك أفضل المنتجات بأعلى جودة وخدمة سريعة لتلبية احتياجاتك بشكل مثالي.
                 </p>
                <div className="flex mt-8">
                <a
                    href="#"
                    className="uppercase py-2 mx-4 px-4 rounded-lg bg-secondary border-2 border-transparent text-white text-lg mr-4 hover:bg-secondary"
                >
                    انطلق من هنا
                </a>
                <a
                    href="#"
                    className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-secondary text-secondary dark:text-white hover:bg-secondary hover:text-white text-lg"
                >
                    اقراء المزيد
                </a>
                </div>
            </div>
            <div className="hidden lg:block mr-64 relative">
                <Image
                src="/hero.png"
                width={450}
                height={450}
                priority={true} 
                alt="hero image"
                />
            </div>
        </div>

    </div>
   </main>
  )
}

export default Hero