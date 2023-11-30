import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";


const Testimonial = () => {
  const AllTestimonial = [
    {
      contact : "Working with Jubba ICT Solutions was a strategic decision for our business. Their consultancy services played a pivotal role in our digital transformation journey. Their insights, dedication, and ability to execute complex projects were instrumental in achieving our objectives.",
      image : <IoPersonCircleSharp className='w-9 h-10' />,
      title : "Abdikadir qulle",
      subtitle : "Software engineer",
      fbIcon : <IoLogoFacebook />,
      XICon : <BsTwitterX />
    },
    {
      contact : "We engaged Jubba ICT Solutions for our software modernization project, and the results were phenomenal! Their innovative approach, coupled with seamless integration of new technologies, revitalized our systems and streamlined our processes. Their dedication and expertise exceeded our expectations.",
         image : <IoPersonCircleSharp className='w-9 h-10' />,
      title : "Duran Ali",
      subtitle : "Software engineer",
      fbIcon : <IoLogoFacebook />,
      XICon : <BsTwitterX />
    },
    {
      contact : "We partnered with Jubba ICT Solutions to develop our IoT platform, and the collaboration was exceptional. Their team's in-depth knowledge and attention to detail ensured a scalable and robust solution. Their commitment to delivering on time and within budget made the entire process smooth and efficient.",
       image : <IoPersonCircleSharp className='w-9 h-10' />,
      title : "Emily Chen",
      subtitle : " Smart Connect IoT",
      fbIcon : <IoLogoFacebook />,
      XICon : <BsTwitterX />
    },
  ]
  return (
    <div className="flex flex-col gap-10">
      <div className='flex flex-col gap-2'>
        <h3 className="text-secondary dark:text-yellow-500 font-semibold text-2xl text-center">
          Testimonials
        </h3>
        <p className="text-center  dark:text-white">
          Hear What Our Clients Have to Say
        </p>
      </div>
      <div className="flex flex-col md:flex-row bg-[] items-center gap-14">
        {AllTestimonial.map((testimonial, e) => (
          <div
            className=" shadow-lg bg-[#F5F5FE] flex grow   p-6 max-md:mt-8 max-md:px-5"
            key={e}
          >
            <div>
              <p className="text-black text-lg leading-7">
                &quot;{testimonial.contact} &quot;
              </p>
              <div className="flex    gap-5 mt-14 max-md:mt-10">
                <div className="flex grow  flex-col">
                  {testimonial.image}
                  <h3 className="text-black text-base font-medium leading-6 tracking-normal self-stretch mt-4">
                    {testimonial.title}
                  </h3>
                  <span className="text-indigo-600 text-sm leading-5 self-stretch">
                    {testimonial.subtitle}
                  </span>
                </div>
                <div className="items-stretch flex gap-4 mt-28 self-end max-md:mt-10">
                  {testimonial.fbIcon}
                  {testimonial.XICon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial