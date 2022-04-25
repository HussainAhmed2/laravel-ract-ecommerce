import apiClient from "./apiclient";

const login = (postData) => apiClient.post("login", postData);

const register = (postData) => apiClient.post("register", postData);

const fetchProducts = (token) =>
    apiClient.get("getProducts", {
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

export default {
    login,
    register,
    fetchProducts,
    storeProduct,
};
