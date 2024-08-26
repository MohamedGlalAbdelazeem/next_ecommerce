import Image from "next/image";

function ProductDetailsPage({productDetails}) {
  return (
    <div className="grid items-center justify-center text-center grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
      <div className="w-full lg:sticky top-0 sm:flex gap-2">
          {productDetails?.attributes?.banner?.data?.attributes?.url && (
            <Image
              src={productDetails?.attributes?.banner?.data?.attributes?.url}
              width={330}
              height={300}
              alt="Product"
              priority={true}
              className="w-[400px] h-[450px] object-cover border-2 border-gray-300 p-5 rounded-2xl"  />
          )}
        </div>
        <div className="bg-slate-300 p-9 rounded-xl">
          <h2 className="text-2xl my-3 font-bold text-gray-800">
            {productDetails?.attributes?.title}
          </h2>
          {productDetails?.attributes?.description?.map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-4">
              {paragraph?.children?.map((child, childIndex) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </p>
          ))}
          <div className="w-full flex justify-around">
            <span className=" bg-red-400 p-1 rounded-lg text-white">{productDetails?.attributes?.instantDelivery === true? "توصيل فوري 🚛" :"غير متاح للتوصل"}</span>
            <span className="bg-red-400 p-1 rounded-lg text-white">
                {(() => {
                  switch (productDetails?.attributes?.category) {
                    case "mobile":
                      return "تليفون 📱";
                    case "clothes":
                      return "ملابس رجالي 🧔";
                    case "watches":
                      return "ساعة ذكية ⌚";
                    case "bages":
                      return "شنطة كتف 🎒";
                    default:
                      return "منتج";
                  }
                })()}
              </span>
          </div>
          <p className="text-gray-800 text-xl my-4 font-bold">
            EGP {productDetails?.attributes?.price}
          </p>
          <button  type="button"  className="w-auto mx-auto mt-8 px-6 py-3 flex justify-around bg-green-500 hover:bg-green-400 text-white text-lg font-bold rounded-md" >
            اضف إلي السلة
            <Image
              src={"/cart.png"}
              width={"30"}
              height={"30"}
              alt="cart image"
            />
          </button>
        </div>
  </div>
  )
}

export default ProductDetailsPage