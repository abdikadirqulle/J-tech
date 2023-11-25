import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FiSun } from "react-icons/fi";


const Header = () => {
  const [showMenu ,setShowMenu] = useState(false)

  window.addEventListener('scroll', function() {
    const header = document.querySelector('.headers');
    if (window.scrollY >= 710) {
      header.style.backgroundColor = 'blue';
      header.classList.add = '';
    } else {
      header.style.backgroundColor = '';
      
    }
  });
  return (
    <header className="headers relative flex max-w-6xl mx-auto  justify-between items-center gap-5  px-5  ">
      <h1 className="text-indigo-600 text-base font-medium leading-4 self-center cursor-pointer my-auto">
        Logo
      </h1>
      {/* nabnar */}
      <nav className="hidden lg:space-x-[74px] space-x-8 bg-slate-50  md:flex items-center    my-auto px-10 py-4 rounded-[50px] ">
        <a className="text-indigo-600 text-base font-semibold leading-4 cursor-pointer whitespace-nowrap">
          Home
        </a>
        <a className="text-neutral-700 text-base font-medium leading-4 cursor-pointer whitespace-nowrap">
          About us
        </a>
        <a className="text-slate-900 text-base font-medium leading-4 cursor-pointer whitespace-nowrap">
          Services
        </a>
        <a className="text-neutral-700 text-base font-medium leading-4 cursor-pointer whitespace-nowrap">
          Contact Us
        </a>
      </nav>
        {/* CTA and Dark mode */}
      <div className="hidden md:flex items-center justify-between gap-5">
        <FiSun className="w-7 h-7 cursor-pointer" />
        <button className="text-white text-center text-base font-medium leading-6 items-center bg-secondary self-stretch grow px-5 py-3 rounded-[40px] whitespace-nowrap">
          Get started
        </button>
      </div>
      <div className="md:hidden flex gap-3 items-center ">
        <FiSun className="w-7 h-7 cursor-pointer" />
        <HiMenu
          className="w-9 h-9 cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
      </div>

      {/* mobile menu  */}
      {showMenu && (
        <div className="absolute md:hidden right-0 -top-4">
          <div className="bg-white relative  w-[20rem] h-screen">
            <div className="h-screen w-full flex flex-col pt-10 justify-evenly items- px-2 py-4 ">
              <div className="flex flex-col space-y-[74px]  items-center">
                <a className="text-blue-700 text-base font-semibold leading-4 whitespace-nowrap cursor-pointer ml-3 self-start ">
                  Home
                </a>
                <a className="text-neutral-700 text-base font-medium leading-4 whitespace-nowrap cursor-pointer ml-3 mt-16 self-start  max-md:mt-10">
                  About us
                </a>
                <a className="text-neutral-700 text-base font-medium leading-4 whitespace-nowrap cursor-pointer ml-3 mt-16 self-start  max-md:mt-10">
                  Services
                </a>
                <a className="text-neutral-700 text-base font-medium leading-4 whitespace-nowrap cursor-pointer ml-3 mt-16 self-start  max-md:mt-10">
                  Contact Us
                </a>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="text-purple-50 cursor-pointer text-center text-base font-medium leading-4 items-center bg-indigo-600 self-stretch mt-5 px-5 py-5 rounded-[50px]">
                  Get Started
                </div>
              </div>
            </div>
            <MdClose
              onClick={() => setShowMenu(false)}
              className="w-9 h-9 absolute right-2 top-2 cursor-pointer"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header

