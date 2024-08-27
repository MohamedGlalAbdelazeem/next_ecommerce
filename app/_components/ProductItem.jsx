'use client'
import Image from "next/image"
import Link from "next/link";
function ProductItem({product}) {
return ( 
      //  product item in home page
      <Link href={`/product-details/${product.id}`} key={product.id}  className="group cursor-pointer bg-gray-100 p-1 rounded-lg">
          <div className=" w-full rounded-lg h-72 p-1">
             <Image 
               src={product.attributes.banner.data.attributes.url}
               width={"500"}
               height={"500"}
               priority={true}
               alt="product" 
               className="rounded-lg w-[100%] h-[320px] object-cover object-center group-hover:opacity-80" />
          </div>
          <div className="mt-11">
            <h3 className="mt-4 text-lg text-gray-700">{product?.attributes?.title}</h3>
            <p className="mt-1 bg-green-500 text-lg font-bold text-white">{product?.attributes?.price} EGP</p>
          </div>
      </Link>
)}
export default ProductItem;