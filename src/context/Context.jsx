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

  const value = {
    currentPage,
    setCurrentPage,
  };

  localStorage.setItem("currentPage", JSON.stringify(currentPage));

  // 	useEffect(() => {
  //     currentPage === "" ? "home" : currentPage;
  //   }, [currentPage]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
