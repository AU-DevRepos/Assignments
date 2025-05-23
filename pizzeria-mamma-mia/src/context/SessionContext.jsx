import { createContext, useContext, useState, useEffect } from "react";

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [token, setToken] = useState(null);
  
// Cargar datos guardados al recargar página
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedToken = localStorage.getItem("token");
    if (storedEmail && storedToken) {
      setEmail(storedEmail);
      setToken(storedToken);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setEmail(data.email);
        setToken(data.token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("token", data.token);
        console.log("Session iniciada");
        return true;
      } else {
        alert(data.message || "Error al iniciar sesión");
        return false;
      }
    } catch (err) {
      console.error("Login error:", err);
      return false;
    }
  };

  const register = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setEmail(data.email);
        setToken(data.token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("token", data.token);
        return true;
      } else {
        alert(data.message || "Error al registrar");
        return false;
      }
    } catch (err) {
      console.error("Register error:", err);
      return false;
    }
  };

  const logout = () => {
    setEmail(null);
    setToken(null);
    localStorage.removeItem("email");
    localStorage.removeItem("token");
  };

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setEmail(data.email); // solo si quieres actualizar
      } else {
        alert("No se pudo obtener el perfil");
      }
    } catch (err) {
      console.error("Error al obtener perfil:", err);
    }
  };

  return (
    <SessionContext.Provider
      value={{ email, token, login, register, logout, getProfile }}
    >
      {children}
    </SessionContext.Provider>
  );
};
