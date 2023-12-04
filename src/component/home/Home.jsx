import React from "react";
import "./Home.css";
import google from "../../assets/images/google.svg";
import aws from "../../assets/images/aws.svg";
import bmw from "../../assets/images/bmw.svg";
import figma from "../../assets/images/figma.svg";
import meta from "../../assets/images/meta.svg";
import microsoft from "../../assets/images/microsoft.svg";
import netflix from "../../assets/images/netflix.svg";

import another from "../../assets/images/visual.jpg";
import { Link } from "react-router-dom";
import { LocalBrands } from "../../LocalBrands";
import { useAuth } from "../../context/Context";
import { motion } from "framer-motion";

export const BigCompanies = [
  {
    name: "netflix",
    image: netflix,
  },
  {
    name: "aws",
    image: aws,
  },
  {
    name: "meta",
    image: meta,
  },
  {
    name: "figma",
    image: figma,
  },
  {
    name: "bmw",
    image: bmw,
  },
  {
    name: "google",
    image: google,
  },
  {
    name: "Microsoft",
    image: microsoft,
  },
];
const Home = () => {
  const { currentPage, setCurrentPage } = useAuth();

  const handelStart = () => {
    setCurrentPage("contact");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="items-center  dark:bg-blue-950 flex w-full flex-col mt- md:pt-14 pb-9 px-5 "
    >
      {/* home */}
      <div className="mx-auto max-w-6xl">
        <div className="gap-5 flex justify-between  items-center max-md:flex-col mt-10 ">
          {/* tile &subtitle & CTA */}
          <div className="flex flex-col w-[47%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-center md:items-start my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-black dark:text-white text-5xl text-center md:text-left font-bold leading-[0px] md:leading-[72px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[69px]">
                Next-Gen <span className="text-secondary">Technology</span>{" "}
                Solutions Provider
                <br />
              </div>
              <div className="text-black dark:text-white/90 text-[20px] font-light self-stretch mt-1 text-center md:text-left max-md:max-w-full">
                🚀 Revolutionizing Industries with Advanced Technology and
                Tailored Solutions
              </div>
              <Link to="/contact" onClick={handelStart}>
                <button className="text-white shadow text-xl font-medium hover:bg-blue-600 duration-100 leading-4 items-center bg-secondary w-[172px] max-w-full mt-10 px-6 py-5 rounded-[8px] max-md:mt-10">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          {/* image */}
          <img
            src={another}
            alt="visual"
            className="md:w-[53%] w-full object-contain rounded-md"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

export const CompaniesList = () => {
  return (
    <div className="justify-center items-center mx-auto  overflow-hidden self-center flex w-full max-w-[1152px] flex-col gap-10 px-5 py-10 max-md:max-w-full">
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center dark:text-white text-black/70 text-[19px] mt-10 font-medium"
      >
        Trusted by the biggest companies
      </motion.p>
      <div className=" flex flex-wrap w-full  items-center justify-center gap-10 max-md:max-w-full ">
        {BigCompanies.map((company, e) => (
          <div key={e}>
            <img src={company.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
export const LocalBrand = () => {
  return (
    <div className="justify-center items-center mx-auto  overflow-hidden self-center flex w-full max-w-[1152px] flex-col gap-10 px-5 py-10 max-md:max-w-full">
      <p className="text-center dark:text-white text-black/70 text-[19px] mt-10 font-normal">
        Start now and join thousands of successful local and global brands with
        Jubba ICT solutions.
      </p>
      <div className="animate-left-to-right  flex  w-full translate-x-2  items-center justify-center gap-10 max-md:max-w-full ">
        {LocalBrands.map((brand) => (
          <div key={brand.id} className=" flex">
            <img src={brand.image} alt="" className="-4" />
          </div>
        ))}
      </div>
    </div>
  );
};
