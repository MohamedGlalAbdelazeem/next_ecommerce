"use client"
import { useEffect , useState } from "react"
import ProductsApis from "../_utils/ProductsApis"
import ProductList from "./ProductList"

function Products() {
  const [productList, setProductList] = useState([])

     useEffect(() => {  
        getLatestProducts_();
     }, []);

     const getLatestProducts_=()=>{
      ProductsApis.getLatestProducts().then(res=>{
        setProductList(res.data.data);
      }) }
  return (
    <>
      <ProductList productList={productList}/>
    </>
  )
}

export default Products