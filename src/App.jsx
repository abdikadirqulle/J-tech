import { Outlet } from "react-router-dom";
import Header from "./component/header/Header";
import { useEffect, useState } from "react";
import { useAuth } from "./context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [hasShadow, setHasShadow] = useState(false);

  const { theme, setTheme } = useAuth();

  localStorage.setItem("theme", JSON.stringify(theme));

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 2) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);

  return (
    <div className="selection:bg-blue-400  dark:selection:bg-blue-300 scroll-smooth bg- dark:bg-blue-950 ">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div
        className={`bg-white dark:bg-blue-950  header  py-2 z-50 fixed w-full ${
          hasShadow ? " dark:shadow-blue-900  shadow-md" : ""
        }`}
      >
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default App;
