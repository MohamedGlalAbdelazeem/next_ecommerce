"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import ProductsApis from "@/app/_utils/ProductsApis";
import ProductListCategory from "@/app/_components/ProductListCategory";
import ProductDetailsPage from "@/app/_components/ProductDetailsPage";

function ProductDetails({ params }) {
  const [productDetails, setProductDetails] = useState({});
  const [productListByCategory, setProductListByCategory] = useState([]);
  useEffect(() => {
    getProductById_();

  }, [params?.productId]);

  const getProductById_ = () => {
    ProductsApis.getProductById(params?.productId).then((res) => {
      setProductDetails(res.data.data);
      getProductsByCategory(res.data.data);
    });
  };

  const getProductsByCategory = (product)=>{
    ProductsApis.getProductsByCategory(product?.attributes?.category).then((res)=>{
      setProductListByCategory(res?.data?.data);
    })
  }
  return (
    <>
      <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
        <div className="my-5 text-left text-sm">
          <Link href={"/"} className="bg-primary text-white p-2 rounded-lg">
            العودة للصفحة الرئيسية ◀
          </Link>
        </div>

      <ProductDetailsPage productDetails = {productDetails} />
       
        <h1 className="text-2xl text-center mt-20">المنتجات المرتبطة بهذه السلعة</h1>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6  lg:max-w-7xl">
          <div className="text-center grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
             <ProductListCategory productListByCategory={productListByCategory}/>
        </div>
      </div>
        
      </div>
    </>
  );
}
export default ProductDetails;
