const { default: axiosClient } = require("./axiosClient");

const getLatestProducts  = ()=>axiosClient.get('/products');

export default {
    getLatestProducts
}