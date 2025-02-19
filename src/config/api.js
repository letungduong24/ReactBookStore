import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    withCredentials: true,
    withXSRFToken: true,
    headers:{
        Accept: 'application/json',
    }
})

export default api