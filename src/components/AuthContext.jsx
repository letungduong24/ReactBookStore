import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiURL = 'import.meta.env.VITE_API_URL';
const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const csrf = () => axios.get("/sanctum/csrf-cookie")
    const getUser = async () => {
        const {data} = axios.get(`${apiURL}/user`);
        setUser(data);
    }
}