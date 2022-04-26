import axios from "axios";

let url = process.env.MIX_APP_URL || "";
const apiClient = axios.create({
    baseURL: url+'api/',
    timeout: 15000,
});

export default apiClient;
