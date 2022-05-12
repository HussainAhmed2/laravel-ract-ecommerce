import apiClient from "./apiclient";

const login = (postData) => apiClient.post("auth/login", postData);

export default {
    //login EndPoints
    login,

};
