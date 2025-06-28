import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const storedUser = localStorage.getItem("Users");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  // ✅ Save user to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("Users", JSON.stringify(user));
    } else {
      localStorage.removeItem("Users"); // Optional: clear on logout
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
