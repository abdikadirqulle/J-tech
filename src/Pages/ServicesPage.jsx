import React, { useEffect } from "react";
import Services from "../component/services/Services";
import Footer from "../component/footer/Footer";
import LastCTA from "../component/last-CTA/Last-CTA";
import { useAuth } from "../context/Context";

const ServicesPage = () => {
  const { setCurrentPage } = useAuth();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
    setCurrentPage("services");
  });
  return (
    <div className=" bg-[#] w-full h-full flex flex-col gap-10 dark:bg-blue-950">
      <div className="pt-20  max-w-6xl  mx-auto pb-4 flex flex-col gap-10 ">
        <Services />
        <LastCTA />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
