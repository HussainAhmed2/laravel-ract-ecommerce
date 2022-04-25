import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:2124/EcommerceApp/api/",
    timeout: 15000,
});

export default apiClient;
