import axios from "axios";

const api = axios.create({
    baseURL: "https://user-managementapp.onrender.com",
    headers: {
        Authorization: "secretToken07",
        Role: "admin"
    }
});

export default api;