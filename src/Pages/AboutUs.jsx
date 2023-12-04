import React, { useEffect } from "react";
import About from "../component/about/About";
import LastCTA from "../component/last-CTA/Last-CTA";
import { CompaniesList } from "../component/home/Home";
import FAQ from "../component/faq/FAQ";
import Footer from "../component/footer/Footer";

import AboutImg from "../assets/AboutImg/img5.jpg";
import { useAuth } from "../context/Context";
import { motion } from "framer-motion";

const AboutUs = () => {
  const { setCurrentPage } = useAuth();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
    setCurrentPage("about");
  }, []);

  window.title = "About Us";
  return (
    <div className=" bg-[#] w-full h-full flex flex-col gap-10 dark:bg-blue-950">
      <div className="pt-20 flex flex-col gap-10   max-w-6xl  mx-auto  pb-4 ">
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src={AboutImg}
            alt=""
            className="w-1/2 rotate- hover:rotate-0 duration-100 rounded-md mt-2 object-contain "
          />
        </div>
        <About />
        <CompaniesList />
        <FAQ />
        <LastCTA />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
