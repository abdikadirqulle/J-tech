import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import Logo from "../../assets/images/jubbaLogo.png"
import { useAuth } from '../../context/Context';


const Header = () => {
  const [showMenu ,setShowMenu] = useState(false)

  const { setCurrentPage , currentPage ,theme ,setTheme} = useAuth();

  
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.headers');
    if (window.scrollY >= 10) {
      header.style.backgroundColor = '';
      header.classList.add = '';
    } else {
      header.style.backgroundColor = '';
      
    }
  });
  

  const handleHomeClick = () => {
  };
  
  console.log(currentPage)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll behavior
    });

    setCurrentPage('home');
  };

  return (
    <header className="headers max-w-6xl mx-auto">
      <div className="relative flex justify-between items-center gap-  px-5 ">
        <Link to="/" className=" cursor-pointer my-auto">
          <img
            src={Logo}
            alt=""
            className="object-contain object-center  w-14"
            onClick={scrollToTop}
          />
        </Link>
        {/* nabnar */}
        <nav className="hidden  lg:space-x-[44px] space-x-8 bg-slate-  md:flex items-center    my-auto px-10 py-4 rounded-[50px] ">
          <Link
            to="/"
            className={`${
              currentPage === "home"
                ? "text-indigo-600  font-semibold dark:text-indigo-600"
                : "text-slate-900  dark:text-white"
            }  text-base font-medium leading-4 cursor-pointer whitespace-nowrap`}
            onClick={scrollToTop}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              currentPage === "about"
                ? "text-indigo-600 font-semibold dark:text-indigo-600 "
                : "text-slate-900  dark:text-white"
            } text-base font-medium leading-4 cursor-pointer whitespace-nowrap`}
            onClick={() => setCurrentPage("about")}
          >
            About us
          </Link>
          <Link
            to="/services"
            onClick={() => setCurrentPage("services")}
            className={` ${
              currentPage === "services"
                ? "text-indigo-600 font-semibold dark:text-indigo-600"
                : "text-slate-900  dark:text-white"
            } text-base  font-medium leading-4 cursor-pointer whitespace-nowrap`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setCurrentPage("contact")}
            className={`${
              currentPage === "contact"
                ? "text-indigo-600 font-semibold dark:text-indigo-600"
                : "text-slate-900  dark:text-white"
            } text-base font-medium leading-4 cursor-pointer whitespace-nowrap`}
          >
            Contact Us
          </Link>
        </nav>
        {/* CTA and Dark mode */}
        <div className="flex items-center justify-between gap-5">
          {theme === "dark" ? (
            <FiMoon
              className="w-8 h-8 md:w-6 md:h-6 dark:text-blue-100 cursor-pointer hover:rotate-45 duration-100"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            />
          ) : (
            <FiSun
              className="w-8 h-8 md:w-6 md:h-6  cursor-pointer hover:rotate-45 duration-100"
              onClick={() =>
                setTheme(
                  theme === "light" ? "dark" : theme === null ? "dark" : "light"
                )
              }
            />
          )}
          <Link to="/contact" onClick={() => setCurrentPage("contact")}>
            <button className="text-white hidden hover:scale-95 duration-500 md:flex text-center text-[12px] font-medium   bg-secondary   px-5 py-2 rounded-lg">
              Get Started
            </button>
          </Link>
          <div className="md:hidden flex gap-3 items-center ">
            <HiMenu
              className="w-9 h-9  dark:text-blue-100 cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          </div>
        </div>

        {/* mobile menu  */}
        {showMenu && (
          <div className="absolute md:hidden right-0 -top-4">
            <div className="bg-white relative  w-[20rem] h-screen">
              <div className="h-screen w-full flex flex-col pt-10 justify-evenly items- px-2 py-4 ">
                <div className="flex flex-col space-y-[74px]  items-center">
                  <Link
                    to="/"
                    className={`${
                      currentPage === "home"
                        ? "text-indigo-600  font-semibold "
                        : currentPage === null
                        ? "text-indigo-600  font-semibold"
                        : "text-slate-900"
                    } text-base font-medium leading-4 cursor-pointer whitespace-nowrap`}
                    onClick={scrollToTop}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className={`${
                      currentPage === "about"
                        ? "text-indigo-600 font-semibold  "
                        : "text-slate-900"
                    } text-base  font-medium leading-4 cursor-pointer whitespace-nowrap`}
                    onClick={() => setCurrentPage("about")}
                  >
                    About us
                  </Link>
                  <Link
                    to="/services"
                    onClick={() => setCurrentPage("services")}
                    className={` ${
                      currentPage === "services"
                        ? "text-indigo-600 font-semibold "
                        : "text-slate-900"
                    } text-base font-medium leading-4 cursor-pointer whitespace-nowrap`}
                  >
                    Services
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setCurrentPage("contact")}
                    className={`${
                      currentPage === "contact"
                        ? "text-indigo-600 font-semibold "
                        : "text-slate-900"
                    } text-base  font-medium leading-4 cursor-pointer whitespace-nowrap`}
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Link to="/contact" onClick={() => setCurrentPage("contact")}>
                    <button className="text-purple-50 cursor-pointer text-center text-base font-medium leading-4 items-center bg-indigo-600 self-stretch mt-5 px-5 py-5 hover:scale-95 dur rounded-md">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
              <MdClose
                onClick={() => setShowMenu(false)}
                className="w-9 h-9 absolute right-4 top-5 cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header

