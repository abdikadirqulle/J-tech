import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

import Logo from "../../assets/images/jubbaLogo.png";
import DLogo from "../../assets/images/jubbaDarkLogo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Context";

const Footer = () => {
  const { theme } = useAuth();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { currentPage, setCurrentPage } = useAuth();
  return (
    <div className="w-full dark:bg-blue-950 bg-blue-50 p-2 pb-4">
      <div className="flex  flex-col max-w-6xl mx-auto ">
        {/* one */}
        <div className="grid  md:grid-cols-2">
          {/* img */}
          <Link to="/" className="">
            <img
              src={theme === "light" ? Logo : Logo}
              alt=""
              className="object-contain w-28 "
              onClick={scrollToTop}
            />
          </Link>
          {/* items */}
          <div className=" flex flex-col sm:flex-row sm:justify-between dark:text-white flex-wrap gap-5 items-start  ">
            <section className="flex flex-col gap-4 ">
              <h1 className="text-slate-900 dark:text-white font-bold whitespace-nowrap">
                Explore
              </h1>
              <ul className="flex flex-col space-y-4">
                <li className="text-slate-900/70  cursor-pointer dark:text-white/50 font-medium">
                  <Link
                    to="/"
                    onClick={() => {
                      setCurrentPage("home"),
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="text-slate-900/70 cursor-pointer dark:text-white/50 font-medium">
                  <Link
                    to="/about"
                    onClick={() => {
                      setCurrentPage("about"),
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                    }}
                  >
                    About
                  </Link>
                </li>
                <li className="text-slate-900/70 cursor-pointer dark:text-white/50 font-medium">
                  <Link
                    to="/services"
                    onClick={() => {
                      setCurrentPage("services"),
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                    }}
                  >
                    Services
                  </Link>
                </li>
                <li className="text-slate-900/70 cursor-pointer dark:text-white/50 font-medium">
                  <Link
                    to="/contact"
                    onClick={() => {
                      setCurrentPage("contact"),
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-4 ">
              <h1 className="text-slate-900 dark:text-white font-bold whitespace-nowrap">
                Information
              </h1>
              <ul className="flex flex-col space-y-4">
                <li className="text-slate-900/70 cursor-pointer dark:text-white/50 font-medium">
                  FAQ
                </li>
                <li className="text-slate-900/70 cursor-pointer dark:text-white/50 font-medium">
                  Testimonials
                </li>
                <li className="text-slate-900/70 cursor-pointer dark:text-white/50 font-medium">
                  <Link
                    to="/contact"
                    onClick={() => {
                      setCurrentPage("contact"),
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                    }}
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-4 ">
              <h1 className="text-slate-900 dark:text-white font-bold whitespace-nowrap">
                Company
              </h1>
              <ul className="flex flex-col space-y-4">
                <li className="text-slate-900/70 cursor-pointer dark:text-white/50 font-medium">
                  <Link
                    to="/about"
                    onClick={() => {
                      setCurrentPage("about"),
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                    }}
                  >
                    About
                  </Link>
                </li>
                <li className="text-slate-900/70 cursor-pointer dark:text-white/50 font-medium">
                  <Link
                    to="/contact"
                    onClick={() => {
                      setCurrentPage("contact"),
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                    }}
                  >
                    Contact
                  </Link>
                </li>
                <li className="text-slate-900/70 cursor-pointer dark:text-white/50 font-medium">
                  <Link
                    to="/services"
                    onClick={() => {
                      setCurrentPage("services"),
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                    }}
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* two */}
        <div className=" flex flex-col gap-6">
          <div className="flex  items-stretch gap-6 ml-2.5 mt-3.5 self-start max-md:justify-center">
            <a target="_blank" href="http://www.facebook.com">
              <FaFacebook className=" dark:text-white cursor-pointer w-6 h-6" />
            </a>
            <a target="_blank" href="http://www.instagram.com">
              <FiInstagram className=" dark:text-white cursor-pointer w-6 h-6" />
            </a>
            <a target="_blank" href="http://www.linkedin.com">
              <FaLinkedin className=" dark:text-white cursor-pointer w-6 h-6" />
            </a>
            <a target="_blank" href="http://www.github.com">
              <BsGithub className=" dark:text-white cursor-pointer w-6 h-6" />
            </a>
            <a target="_blank" href="http://www.x.com">
              <FaXTwitter className=" dark:text-white cursor-pointer w-6 h-6" />
            </a>
          </div>
          <p className="text-indigo-600 dark:text-white/50 text-sm ">
            Copyright © 2023 Jubba ICT solutions . All Rights Reserved By Jubba
            ICT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
