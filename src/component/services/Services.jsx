import React from 'react'
import { BsFileEarmarkCode } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { BsCloudUpload } from "react-icons/bs";
import { BsPersonVideo3 } from "react-icons/bs";
import { TbDeviceMobileCode } from "react-icons/tb";
import { RiCodeSSlashFill } from "react-icons/ri";

const Services = () => {
  const AllServices = [
    {
      icon: <BsFileEarmarkCode className="w-9 h-9 text-secondary" />  ,
      name: "Software Development",
      contant: "Our expert developers can create tailor-made software solutions that align with your unique requirements.",
    },
    {
      icon: <CiLock className="w-9 h-9 text-secondary" />      ,
      name: "Cybersecurity",
      contant: "Safeguard your data and systems with our state-of-the-art services.",
    },
    {
      icon: <BsCloudUpload className="w-9 h-9 text-secondary" />,
      name: "Cloud Services",
      contant: "Optimize your operations by migrating to the cloud, increasing scalability and efficiency",
    },
    {
      icon: <BsPersonVideo3 className="w-9 h-9 text-secondary" />,
      name: "Consulting Services",
      contant: "Count on us for expert advice and guidance to make informed ICT decisions.",
    },
    {
      icon: <TbDeviceMobileCode className="w-9 h-9 text-secondary" />,
      name: "Mobile App Development",
      contant: "Build performant, scalable, and securemobile applicationsforiOSandAndroiddevices.",
    },
    {
      icon: <RiCodeSSlashFill className="w-9 h-9 text-secondary" />,
      name: "Web Design and Development",
      contant: "Creating websites, web applications, and user interfaces tailored to specific needs, focusing on user experience and visual design.",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto  mt-10">
      <div className="flex  flex-col gap-10">
        {/* title */}
        <div className="flex flex-col gap-2">
          <h3 className="text-secondary dark:text-yellow-500 font-semibold text-2xl text-center">
            Services
          </h3>
          <p className="text-neutral-700 dark:text-white text-md text-center font-medium  leading-20">
            WHAT CAN WE DO?
          </p>
        </div>

        {/* services list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10">
          {AllServices.map((Services, e) => (
            <div
              className="  flex flex-col cursor-pointer hover:-translate-y-1 duration-100  bg-blue-50 h-full   shadow-lg rounded-md px-3 py-4 gap-10"
              key={e}
            >
              {Services.icon}
              <div>
                <h3 className="text-xl font-semibold">{Services.name}</h3>
                <p className="font-light ">{Services.contant}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services

