import { createContext, useState, useEffect } from "react";
import api from "../config/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          setLoading(true)
          const { data } = await api.get(`/user`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setUser(null);
      } finally {
        setLoading(false); 
      }
    };

    fetchUserData();
  },[token]);

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await api.post(`/auth/logout`, null, {
          headers: { Authorization: `Bearer ${token}` },
        });
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
      }
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, token }}>
      {children}
    </AuthContext.Provider>
  );
};

