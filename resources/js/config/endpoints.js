import apiClient from "./apiclient";

const login = (postData) => apiClient.post("auth/login", postData);

const register = (postData) => apiClient.post("auth/registerUser", postData);

const fetchProducts = (pageNumber = 1, token) =>
    apiClient.get(`getProducts?page=${pageNumber}`, {
        headers: {
            "content-type": "application/json; multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });

const storeProduct = (token, postData) =>
    apiClient.post("storeProducts", postData, {
        headers: {
            "content-type": "application/json; multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });

const createOrder = (token, postData) =>
    apiClient.post("createOrder", postData, {
        headers: {
            "content-type": "application/json; multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });

const fetchSingleOrder = (token, order_no) =>
    apiClient.get(`getOrder/${order_no}`, {
        headers: {
            "content-type": "application/json; multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });

const fetchUserOrders = (token, user_id) =>
    apiClient.get(`user/getOrders/${user_id}`, {
        headers: {

            Authorization: `Bearer ${token}`,
        },
    });

const addToWishlist = (token, postData) =>
    apiClient.post("user/addToWishlist", postData, {
        headers: {
            "content-type": "application/json; multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });

const fetchUserWishlist = (token, user_id) =>
    apiClient.get(`user/getUserWhislist/${user_id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

const deleteItemFromWishlist = (token, item_id) =>
    apiClient.get(`user/deleteCartItem/${item_id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
const getSingleProduct = (product_id) =>
    apiClient.get(`getSingleProduct/${product_id}`);

const submitProductRating = (postData) =>
    apiClient.post("productRating", postData);

const productSearchByName = (name) =>
    apiClient.get(`searchProducts/${name}`);

const paymenyPay = (postData) => apiClient.get("checkout", postData);

const getMediaImages = (token, userid) =>
apiClient.get(`admin/getMediaImages/${userid}`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export default {
    //Website EndPoints
    login,
    register,
    fetchProducts,
    storeProduct,
    paymenyPay,
    createOrder,
    fetchSingleOrder,
    fetchUserOrders,
    addToWishlist,
    fetchUserWishlist,
    deleteItemFromWishlist,
    getSingleProduct,
    submitProductRating,
    productSearchByName,

    //Admin
    getMediaImages,
};
