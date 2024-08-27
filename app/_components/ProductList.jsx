import ProductItem from "./ProductItem";
function ProductList({productList}) {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 id='products' className="font-extrabold mx-auto w-20 pb-2 border-secondary border-b-4 text-center my-5 text-4xl text-secondary ">منتجاتنا</h2>
          <div className="text-center grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {productList.map((item)=>{
                return(
                    <ProductItem  key={item.id} product={item}/>
                )})}
        </div>
      </div>
    </>
)}
export default ProductList