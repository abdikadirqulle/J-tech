import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-blue-950  self-stretch flex w-full flex-col items-center mt-7 px-5 py-12 max-md:max-w-full">
      <div className="flex w-full max-w-[1184px] flex-col mt-24 mb-16 max-md:max-w-full max-md:my-10">
        <div className="self-stretch flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-col">
          <div className="text-blue-600 text-xl font-medium leading-6">
            Logo
          </div>
          <div className="justify-between dark:text-white mt-3.5 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">


              <div className="flex flex-col items-stretch w-[27%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch max-md:mt-10">
                  <div className="text-slate-900 dark:text-white text-base leading-7 whitespace-nowrap">
                    Product
                  </div>
                  <span className="text-slate-900 dark:text-white text-base leading-4 opacity-50 mt-6">
                    database
                  </span>
                  <span className="text-slate-900 dark:text-white text-base leading-4 opacity-50 mt-5">
                    Payroll
                  </span>
                  <span className="text-slate-900 dark:text-white text-base leading-4 opacity-50 mt-4">
                    Absences
                  </span>
                  <span className="text-slate-900 dark:text-white text-base leading-4 opacity-50 mt-5">
                    Time tracking
                  </span>
                  <span className="text-slate-900 dark:text-white text-base leading-4 opacity-50 mt-4">
                    Shift planner
                  </span>
                  <span className="text-slate-900 dark:text-white text-base leading-4 opacity-50 mt-4">
                    Recruiting
                  </span>
                </div>
              </div>


              <div className="flex flex-col items-stretch w-[73%] ml-5 max-md:w-full max-md:ml-0">
                <div className="max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">

                    <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
                      <div className="flex flex-col items-stretch max-md:mt-10">
                        <div className="text-slate-900 dark:text-white text-base leading-7 whitespace-nowrap">
                          Information
                        </div>
                        <span className="text-slate-900 dark:text-white text-base leading-4 opacity-50 whitespace-nowrap mt-6">
                          FAQ
                        </span>
                        <span className="text-slate-900 dark:text-white text-base leading-4 opacity-50 mt-4">
                          Blog
                        </span>
                        <span className="text-slate-900 dark:text-white text-base leading-4 opacity-50 whitespace-nowrap mt-4">
                          Support
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col items-stretch max-md:mt-10">
                        <div className="text-slate-900 dark:text-white text-base leading-7 whitespace-nowrap">
                          Company
                        </div>
                        <span className="text-slate-900 dark:text-white text-base leading-4 opacity-50 whitespace-nowrap mt-5">
                          About us
                        </span>
                        <span className="text-slate-900 dark:text-white text-base leading-4 opacity-50 mt-5">
                          Careers
                        </span>
                        <span className="text-slate-900 dark:text-white text-base leading-4 opacity-50 mt-5">
                          Contact us
                        </span>
                        <span className="text-slate-900 dark:text-white text-base leading-4 opacity-50 whitespace-nowrap mt-5">
                          Lift Media
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
                      {/* <div className="flex grow flex-col items-stretch max-md:mt-10">
                          <div className="text-slate-900 dark:text-white text-base leading-7">
                            Legal
                          </div>
                          <div className="text-slate-900 dark:text-white text-base leading-4 opacity-50 mt-5">
                            Privacy & Policy
                          </div>
                          <div className="text-slate-900 dark:text-white text-base leading-4 opacity-50 whitespace-nowrap mt-4">
                            Refunds Policy
                          </div>
                          <div className="text-slate-900 dark:text-white text-sm leading-4 opacity-50 mt-5">
                            Terms
                          </div>
                          <div className="text-slate-900 dark:text-white text-sm leading-4 opacity-50 mt-6">
                            Privacy
                          </div>
                        </div> */}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-indigo-600 dark:text-white/50 text-lg self-stretch whitespace-nowrap max-md:max-w-full">
          © 2023 Jubba ICT solutions, Inc.
        </div>
        <div className="flex w-[197px] max-w-full items-stretch gap-6 ml-2.5 mt-3.5 self-start max-md:justify-center">
          <FaFacebook className=" dark:text-white w-6 h-6" />
          <FiInstagram className=" dark:text-white w-6 h-6" />
          <FaLinkedin className=" dark:text-white w-6 h-6" />
          <BsGithub className=" dark:text-white w-6 h-6" />
          <FaXTwitter className=" dark:text-white w-6 h-6" />
        </div>

      </div>
    </div>
  );
}

export default Footer