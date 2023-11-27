import { Outlet } from "react-router-dom";
import Header from "./component/header/Header";
import { useEffect, useState } from "react";

const App = () => {
  
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY >= 10) {
      // header.style.backgroundColor = 'blue';
      header.classList.add = "shadow";
    } else {
      header.style.backgroundColor = "";
    }
  });

  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  localStorage.setItem('theme' , "light")
  
  useEffect(() => {
    console.log(theme)
    if(theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  return (
    <div className="scroll-smooth bg- dark:bg-blue-950 ">
      <div className="bg-[#F5F5FE] dark:bg-blue-950  header backdrop-blur-2xl py-2 z-50 fixed w-full">
      <Header theme={theme} setTheme={setTheme} />
    </div>
      <Outlet />
    </div>
  );
};

export default App;
