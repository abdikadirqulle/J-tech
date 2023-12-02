import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// our hook

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage", "") === ""
      ? "home"
      : JSON.parse(localStorage.getItem("currentPage"))
  );

  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));

  const value = {
    currentPage,
    setCurrentPage,
    theme,
    setTheme,
  };

  localStorage.setItem("currentPage", JSON.stringify(currentPage));

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
