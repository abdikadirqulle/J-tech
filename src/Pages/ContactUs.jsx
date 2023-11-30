import { useEffect } from "react";
import Contact from "../component/contact/Contact";
import Footer from "../component/footer/Footer";
import { CompaniesList } from "../component/home/Home";

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  });
    return (
      <div className=" bg-[#] dark:bg-blue-950">
        <div className="flex flex-col gap-5 ">
          <Contact />
          {/* <CompaniesList /> */}
          <Footer />
          </div>        
      </div>
    ); 
}

export default ContactUs;