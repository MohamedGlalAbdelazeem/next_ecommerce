import Image from "next/image";

function ProductListCategory({ productListByCategory }) {
  return (
    <>
    {
      productListByCategory.map((product)=>{
        return(
        <div key={product.id}  className="w-full h-full group cursor-pointer bg-green-50 p-1 rounded-lg">
        <div className="w-full  overflow-hidden rounded-lg bg-gray-200 ">
        <Image 
             src={product?.attributes?.banner?.data?.attributes?.url}
            width={"600"}
            height={"600"}
            alt="cart image" 
            className="w-[200px] h-[200px] object-cover object-center group-hover:opacity-75"
        />

        </div>
          <h3 className="mt-4 text-base text-gray-700">{product?.attributes?.title}</h3>
            <span>{product?.attributes?.description?.children?.text}</span>
            <p className="mt-1 bg-red-500 text-lg font-bold text-white">{product?.attributes?.price} EGP</p>
        <button className='text-secondary hover:bg-green-500 hover:text-white font-bold flex items-center justify-around border-2 p-1 border-secondarytext-secondary w-full text-lg'>
            اضف الي السلة
            <Image
            src={"/cart.png"}
            width={"30"}
            height={"30"}
            alt="cart image" />
        </button>
      </div>
        );
      })}
    </>
  );
}
export default ProductListCategory;
