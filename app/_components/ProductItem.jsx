import Image from "next/image"
function ProductItem({product}) {
     const imageUrl= product.attributes.banner.data.attributes.url;
return ( 
          <div key={product.id}  className="group cursor-pointer bg-green-50 p-1 rounded-lg">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <Image 
               src={imageUrl}
                width={"400"}
                height={"400"}
                alt="cart image" 
                className="w-[300px] h-[300px] object-cover object-center group-hover:opacity-75"
            />

            </div>
               <h3 className="mt-4 text-base text-gray-700">{product?.attributes?.title}</h3>
                <span>{product?.attributes?.description?.children?.text}</span>
                <p className="mt-1 bg-green-500 text-lg font-bold text-white">{product?.attributes?.price} EGP</p>
            <button className='text-secondary hover:bg-slate-200 font-bold flex items-center justify-around border-2 p-1 border-secondarytext-secondary w-full text-lg'>
                اضف الي السلة
                <Image
                 src={"/cart.png"}
                 width={"30"}
                 height={"30"}
                 alt="cart image" />
            </button>
          </div>
   
   
  )
}

export default ProductItem