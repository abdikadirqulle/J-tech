import { useEffect } from "react";
import Contact from "../component/contact/Contact";
import Footer from "../component/footer/Footer";
import { CompaniesList } from "../component/home/Home";
import { useAuth } from "../context/Context";

const ContactUs = () => {
  const { currentPage, setCurrentPage } = useAuth();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage("contact");
  }, []);
  return (
    <div className=" bg-[#] dark:bg-blue-950">
      <div className="flex flex-col gap-5 ">
        <Contact />
        {/* <CompaniesList /> */}
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
