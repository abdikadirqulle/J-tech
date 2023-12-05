import React, { useEffect, useRef } from "react";
import Home, { CompaniesList, LocalBrand } from "../component/home/Home";
import About from "../component/about/About";
import Services from "../component/services/Services";
import Testimonial from "../component/testimonial/Testimonial";
import ICTStrategy from "../component/ict-Strategy/ICT-Strategy";
import FAQ from "../component/faq/FAQ";
import LastCTA from "../component/last-CTA/Last-CTA";
import Footer from "../component/footer/Footer";
import Contact from "../component/contact/Contact";
import { useAuth } from "../context/Context";

const Hero = () => {
  const { currentPage, setCurrentPage } = useAuth();

  return (
    <div className="">
      <Home />
      <div className="max-w-6xl mx-auto flex flex-col">
        <div className="mx-2">
          <CompaniesList />
          <About />
        </div>
        <div className=" flex flex-col gap-10 mx-2">
          <Services />
          {/* <ICTStrategy /> */}
          <Testimonial />
          {/* <LocalBrand /> */}
          <FAQ />
          <LastCTA />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Hero;
