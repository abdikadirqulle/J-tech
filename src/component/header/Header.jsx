import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const Header = ({theme, setTheme}) => {
  const [showMenu ,setShowMenu] = useState(false)

  window.addEventListener('scroll', function() {
    const header = document.querySelector('.headers');
    if (window.scrollY >= 10) {
      header.style.backgroundColor = '';
      header.classList.add = '';
    } else {
      header.style.backgroundColor = '';
      
    }
  });
  return (
    <header className="headers relative flex max-w-6xl mx-auto  justify-between items-center gap-5  px-5  ">
      <Link
        to="/"
        className="text-indigo-600 text-base font-medium leading-4 self-center cursor-pointer my-auto"
      >
        Logo
      </Link>
      {/* nabnar */}
      <nav className="hidden  lg:space-x-[44px] space-x-8 bg-slate-  md:flex items-center    my-auto px-10 py-4 rounded-[50px] ">
        <Link to="/" className="text-indigo-600 text-base font-semibold leading-4 cursor-pointer whitespace-nowrap">
          Home
        </Link>
        <a className="text-neutral-700 text-base dark:text-white font-medium leading-4 cursor-pointer whitespace-nowrap">
          About us
        </a>
        <a className="text-slate-900 text-base dark:text-white font-medium leading-4 cursor-pointer whitespace-nowrap">
          Services
        </a>
        <Link
          to="/contact"
          className="text-neutral-700 text-base dark:text-white font-medium leading-4 cursor-pointer whitespace-nowrap"
        >
          Contact Us
        </Link>
      </nav>
      {/* CTA and Dark mode */}
      <div className="flex items-center justify-between gap-5">
        {theme === "light" ? (
          <FiSun
            className="w-8 h-8 md:w-6 md:h-6 cursor-pointer hover:rotate-45 duration-100"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        ) : (
          <FiMoon
            className="w-8 h-8 md:w-6 md:h-6 dark:text-blue-100 cursor-pointer hover:rotate-45 duration-100"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        )}
        <button className="text-white hidden hover:scale-95 duration-500 md:flex text-center text-[12px] font-medium   bg-secondary   px-5 py-2 rounded-lg">
          <Link to="/contact">Get Started</Link>
        </button>
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
                <Link to="/" className="text-blue-700 text-base font-semibold leading-4 whitespace-nowrap cursor-pointer ml-3 self-start ">
                  Home
                </Link>
                <a className="text-neutral-700 text-base font-medium leading-4 whitespace-nowrap cursor-pointer ml-3 mt-16 self-start  max-md:mt-10">
                  About us
                </a>
                <a className="text-neutral-700 text-base font-medium leading-4 whitespace-nowrap cursor-pointer ml-3 mt-16 self-start  max-md:mt-10">
                  Services
                </a>
                <Link
                  to="/contact"
                  className="text-neutral-700 text-base font-medium leading-4 whitespace-nowrap cursor-pointer ml-3 mt-16 self-start  max-md:mt-10"
                >
                  Contact Us
                </Link>
              </div>

              <div className="flex flex-col items-center gap-2">
                <button className="text-purple-50 cursor-pointer text-center text-base font-medium leading-4 items-center bg-indigo-600 self-stretch mt-5 px-5 py-5 hover:scale-95 dur rounded-md">
                  <Link to="/contact">Get Started</Link>
                </button>
              </div>
            </div>
            <MdClose
              onClick={() => setShowMenu(false)}
              className="w-9 h-9 absolute right-4 top-5 cursor-pointer"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header

