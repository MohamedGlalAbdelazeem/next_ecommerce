const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = ()=>axiosClient.get('/products?populate=*');
 
const getProductById = (id)=>axiosClient.get(`/products/${id}?populate=*`)
 
export default {
    getLatestProducts,
    getProductById,
}