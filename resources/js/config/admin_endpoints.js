import apiClient from "./apiclient";

const login = (postData) => apiClient.post("auth/login", postData);

const storeProduct = (token, postData) =>
    apiClient.post("admin/storeProduct", postData, {
        headers: {
            "content-type": "application/json; multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });


    const fetchMediaImages = (token, userid) =>
apiClient.get(`admin/getMediaImages/${userid}`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});


export default {
    //login EndPoints
    login,

    //Product
    storeProduct,


    fetchMediaImages,

};
