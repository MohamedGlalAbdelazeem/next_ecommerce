import Image from "next/image"

function ProductList({productList}) {
     console.log(productList);
     
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 id='products' className="font-extrabold mx-auto w-20 pb-2 border-secondary border-b-4 text-center my-5 text-3xl text-secondary ">منتجاتنا</h2>
      <div className="text-center grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {productList.map((product) => (
          <div key={product.id}  className="group">
        
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img alt={"product image"}  src={product.imageSrc} className="h-full w-full object-cover object-center group-hover:opacity-75"/>
            </div>

               <h3 className="mt-4 text-base text-gray-700">{product?.attributes?.title}</h3>
                <span>{}</span>
                <p className="mt-1 bg-green-500 text-lg font-bold text-white">{product?.attributes?.price} EGP</p>
            <button className='text-secondary hover:bg-slate-200 font-bold flex items-center justify-around border-2 p-1 border-secondarytext-secondary w-full text-lg'>
                اضف الي السلة
                <Image
                 src={"/cart.png"}
                 width={"50"}
                 height={"50"}
                 alt="cart image" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ProductList