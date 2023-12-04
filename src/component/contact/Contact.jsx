import React, { useEffect, useState } from "react";

import { LiaFaxSolid } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

import company from "../../assets/images/techcompany.jpg";
import logo from "../../assets/images/jubbaLogo.png";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [textValue, setTextValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      toast.success(
        `Thank  you for reaching out! I'll be in touch shortly to discuss your inquiry.`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTextValue("");
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    setTimeout(() => {}, 8000);
  }, []);
  return (
    <div
      id="contact"
      className="dark:bg-blue-950 self-stretch flex w-full flex-col items-center  px-5 py-12 max-md:max-w-full"
    >
      <div className="w-full max-w-[1151px] mt-12 mb-6 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col  p-2 items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
              <div className="text-blue-600 text-6xl leading-[63px] whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                <span className="text-black font-bold dark:text-white">
                  Get in
                </span>
                <span className="text-blue-600 dark:text-yellow-500 font-bold">
                  Touch
                </span>
              </div>
              <div className="text-black dark:text-white text-sm font-medium leading-6 tracking-normal mt-5 max-md:max-w-full">
                Efficiency and excellence in operational processes are vital for
                success in today's digital landscape
              </div>
              {/* contact input */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col"
              >
                <input
                  className="dark:bg-blue-900 dark:text-white focus:dark:border-white dark:border-blue-950  text-black text-sm leading-6 tracking-normal whitespace-nowrap border
                 border-[color:var(--Gray-5,#E0E0E0)]  outline-none focus:border-[2px] rounded-md focus:border-secondary mt-10 px-5 py-3.5 border-solid max-md:max-w-full"
                  placeholder="name"
                  type="text"
                  value={formData.name}
                  required
                  {...register("name", { required: true })}
                  onChange={handleInputChange}
                />
                {errors.name && (
                  <p className="pt-2 text-sm text-orange-500">
                    Please enter valid name
                  </p>
                )}

                <input
                  className="dark:bg-blue-900 dark:text-white  focus:dark:border-white dark:border-blue-950 text-black text-sm leading-6 tracking-normal whitespace-nowrap border 
                border-[color:var(--Gray-5,#E0E0E0)]  outline-none focus:border-[2px] rounded-md focus:border-secondary mt-5 px-5 py-3.5 border-solid max-md:max-w-full"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  required
                  {...register("email", { required: true })}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="pt-2 text-sm text-orange-500">
                    Please enter valid email
                  </p>
                )}

                <input
                  className="dark:bg-blue-900 dark:text-white focus:dark:border-white dark:border-blue-950  text-black text-sm leading-6 tracking-normal whitespace-nowrap border 
                border-[color:var(--Gray-5,#E0E0E0)]  outline-none focus:border-[2px] rounded-md focus:border-secondary mt-5 px-5 py-3.5 border-solid max-md:max-w-full"
                  placeholder="Phone number"
                  type="text"
                  value={formData.phone}
                  {...register("phone")}
                  onChange={handleInputChange}
                />
                <input
                  className="dark:bg-blue-900 dark:text-white  focus:dark:border-white dark:border-blue-950 text-black text-sm leading-6 tracking-normal whitespace-nowrap border 
                border-[color:var(--Gray-5,#E0E0E0)]  outline-none focus:border-[2px] rounded-md focus:border-secondary mt-5 px-5 py-3.5 border-solid max-md:max-w-full"
                  placeholder="Subject"
                  type="subject"
                  value={formData.subject}
                  required
                  {...register("subject", { required: true })}
                  onChange={handleInputChange}
                />
                {errors.subject && (
                  <p className="pt-2 text-sm text-orange-500">
                    Please enter valid subject
                  </p>
                )}
                <textarea
                  className="dark:bg-blue-900 dark:text-white  focus:dark:border-white dark:border-blue-950  border bg-white flex shrink-0  outline-none focus:border-[2px] rounded-md focus:border-secondary flex-col mt-5 border-solid border-neutral-200 max-md:max-w-full px-5 py-3.5 placeholder:font-normal"
                  rows={5}
                  cols={40}
                  placeholder="Messege"
                  value={textValue}
                  required
                  {...register("massege", { required: true })}
                  onChange={handleTextChange}
                />
                <button className="text-white dark:text-black dark:bg-blue-300 rounded-md text-base text-center font-bold  uppercase bg-secondary mt-5 px-5 py-4 max-md:max-w-full">
                  Let’s talk
                </button>
              </form>
              <div className="items-stretch flex w-full justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                <div className="items-center flex justify-between gap-4">
                  <FiPhoneCall className="w-7 h-7 dark:text-white" />
                  <div className="text-blue-600 text-sm leading-5 tracking-wide self-stretch">
                    <span className="font-semibold text-black dark:text-white">
                      PHONE
                      <br />
                    </span>
                    <span className="text-blue-600 dark:text-blue-400">
                      01 2345 6789
                    </span>
                  </div>
                </div>
                <div className="items-center flex justify-between gap-4">
                  <LiaFaxSolid className="w-7 h-7 dark:text-white" />
                  <div className="text-blue-600  text-sm leading-5 tracking-wide self-stretch">
                    <span className="font-semibold text-black dark:text-white">
                      FAX
                      <br />
                    </span>
                    <span className="text-blue-600 dark:text-blue-400">
                      012345
                    </span>
                  </div>
                </div>
                <div className="items-center flex justify-between gap-4">
                  <MdOutlineMarkEmailUnread className="w-7 h-7 dark:text-white" />
                  <div className="text-blue-600  text-sm leading-5 tracking-wide">
                    <span className="font-semibold text-black dark:text-white">
                      EMAIL
                      <br />
                    </span>
                    <span className="text-blue-600 dark:text-blue-400">
                      info@jtech.so
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="absolute inset-0 top-0 bg-blue-900/50  rounded-md p-4"></div>
            <img
              src={company}
              className="object-contain w-full  rounded-md"
              alt="company"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
