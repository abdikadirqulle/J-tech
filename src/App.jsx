import { Outlet } from "react-router-dom";
import Header from "./component/header/Header";
import { useEffect,  useState } from "react";

const App = () => {
  const [hasShadow, setHasShadow] = useState(false);

  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));


  localStorage.setItem('theme' , JSON.stringify(theme))
  
  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark")
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [theme])



  return (
    <div className="scroll-smooth bg- dark:bg-blue-950 ">
      <div className={`bg-white dark:bg-blue-950  header  py-2 z-50 fixed w-full ${hasShadow ? " dark:shadow-blue-900  shadow-md": ""}`}>
      <Header theme={theme} setTheme={setTheme}/>
    </div>
      <Outlet />
    </div>
  );
};

export default App;
