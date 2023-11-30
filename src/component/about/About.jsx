// import { motion } from "framer-motion"
import {motion} from "framer-motion"
import img4 from "../../assets/AboutImg/img4.jpg"
import img2 from "../../assets/AboutImg/img2.jpg"
const About = () => {
  return (
    <div className=" flex flex-col  overflow-hidden">
      {/* one */}
      <div className="">
        <div className="flex flex-col gap-2 mb-10 justify-center items-center">
          <h3 class="text-secondary dark:text-yellow-500 text-xl font-semibold text-center ">
            ABOUT US
          </h3>
          <p className="text-neutral-700 text-lg text-center md:text-xl md:w-3/4 px-10 md:px-0  md:font-medium dark:text-white font-normal  ml-2 md:ml-9">
            <span className="text-3xl font-bold">"</span> we offer a diverse
            range of services to cater to the needs of individuals, startups,
            small and medium-sized enterprises (SMEs), and large corporations.
            <span className="text-3xl  font-bold">"</span>
          </p>
        </div>
      </div>
      {/* two */}
      <div className="bg-[#F5F5FE] dark:bg-blue-900 rounded-md py-2 flex flex-col flex-grow gap-4 px-2">
        <div className="gap-5 flex max-md:flex-col ">
          <div className="flex flex-col gap-4 mt-14  max-md:mt-10">
            <h1 className="text-indigo-600 dark:text-yellow-500 text-xl font-semibold tracking-[2px] whitespace-nowrap max-md:max-w-full">
              WHO WE ARE{" "}
            </h1>
            <span className="text-neutral-700 dark:text-white text-lg font-normal ">
              Jubba ICT Solutions is a dynamic and forward-thinking Information
              and Communication Technology (ICT) company that stands at the
              forefront of technological innovation. Established with a passion
              for cutting-edge technology and a vision for a more interconnected
              world, we have dedicated ourselves to providing comprehensive ICT
              solutions. Our journey is defined by a commitment to excellence,
              customer satisfaction, and a profound understanding of the
              ever-evolving digital landscape.
            </span>
          </div>
          <img
            src={img4}
            className="rounded-md w-full md:w-1/2  object-contain "
          />
        </div>
        {/* three */}
        <div className="gap-5 flex max-md:flex-col-reverse mt-10   max-md:mt-10">
          <img
            loading="lazy"
            src={img2}
            className="rounded-md w-full md:w-1/2  object-contain "
          />
          <div className=" flex flex-col ">
            <h1 className="text-indigo-600 dark:text-yellow-500 text-xl font-semibold tracking-[2px] whitespace-nowrap max-md:max-w-full">
              OUR WORK
            </h1>
            <span className="text-neutral-700 text-lg font-normal dark:text-white mt-4 max-md:max-w-full">
              At Jubba ICT Solutions, we are committed to assisting you in
              achieving your technology-related goals. Whether you're looking to
              streamline your operations, enhance your cybersecurity, or develop
              innovative software, we have the expertise and solutions to help
              you succeed. Our dedicated team of ICT professionals is ready to
              work closely with you to understand your specific needs and create
              a customized plan to address them.
            </span>
          </div>
        </div>

        {/* end */}
      </div>
    </div>
  );
};

export default About;
