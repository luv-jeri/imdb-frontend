import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState(null); // [state , setState

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const value = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
