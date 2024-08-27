const { default: axiosClient } = require("./axiosClient");

const addToCart = (payload) => axiosClient.post("/carts", payload);
const getUserCartItems = (email) =>
    axiosClient.get(
      `carts?populate[products][populate]=banner&filters[email][$eq]=${email}`
    );

export default {
    addToCart,
    getUserCartItems,
};