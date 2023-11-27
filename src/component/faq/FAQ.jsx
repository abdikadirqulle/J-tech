import React, { useState } from 'react'
import { IoIosArrowDown , IoIosArrowUp} from "react-icons/io";

const FAQ = () => {
  const [open , setOpen] = useState(false)

  const AllFAQ = [
    {
      title: "How can your ICT solutions benefit my business?",
      subtitle:
        "You can subscribe to our services by visiting the subscription page and filling out the subscription form with the required information. After that, choose the package that suits you and complete the payment process.",
    },
    {
      title: "What industries do you specialize in?",
      subtitle: "",
    },
    {
      title: "How do you ensure the security of your ICT solutions?",
      subtitle: "",
    },
    {
      title: "What sets your consultancy services apart?",
      subtitle: "",
    },
    {
      title: "What sets your consultancy services apart?",
      subtitle: "",
    },
   
  ];


  const handelOpen =(index) => {

    console.log(index)

  }
  return (
    <div>
      <div className="max-w-5xl lg:mx-auto flex flex-col gap-6 mx-4">
        <div className="bg-blue-100 rounded-lg  py-8 ">
          <div className="flex flex-col gap-2 ">
            <div className="flex justify-center items-center">
              <span className="text-center bg-[#AAAAFF] font-medium rounded-md text-[#6065CB] px-2">
                Faqs • Help Center
              </span>
            </div>
            <h1 className="text-3xl font-bold text-center ">
              Do you have a question?
            </h1>
            <div className=" md:w-2/5 mx-auto">
              <p className="text-center text-[15px]">
                Our support team will get assistance from AI-powered
                suggestions, making it quicker than ever to handle support
                requests.
              </p>
            </div>
          </div>
        </div>
        {/* second */}
        <div>
          <div className="flex flex-col gap-4">
            {AllFAQ.map((faq, e) => (
              <div className="flex shadow ounded-md flex-col gap-2" key={e}>
                <div
                  className="flex justify-between items-center px-6 bg-blue-100 hover:bg-[#EBEBF4] cursor-pointer py-5 rounded-md"
                  onClick={handelOpen}
                >
                  <h3>{faq.title}</h3>
                  <IoIosArrowDown className="cursor-pointer w-5 h-5" />
                </div>
                {open && (
                  <div className="bg-white  p-6  ">
                    <p>{faq.subtitle}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="text-md font-light text-[15px] dark:text-white ">
          If you need further information,{" "}
          <a href="#contact" className="font-semibold text-secondary ">
            please contact us.
          </a>
        </p>
      </div>
    </div>
  );
}

export default FAQ