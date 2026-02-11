import { useState } from "react";
import API from "../services/candidateService";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() =>
    localStorage.getItem("token")
  );

  const login = async (email, password) => {
    const res = await API.post("/auth/login", { email, password });
    const token = res.data.token;

    localStorage.setItem("token", token);
    setUser(token);
  };

  const register = async (name, email, password) => {
    await API.post("/auth/register", { name, email, password });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
