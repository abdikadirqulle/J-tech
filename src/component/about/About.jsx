import React from 'react'

const About = () => {
  return (
    <div>
      <div class="text-indigo-600 text-xl font-semibold leading-6 tracking-[2px] whitespace-nowrap ml-9 mt-7 self-start max-md:max-w-full">
        ABOUT US
      </div>
      <div className="text-neutral-700 text-3xl font-medium leading-10 w-[794px] max-w-full ml-9 mt-4 self-start">
        we offer a diverse range of services to cater to the needs of
        individuals, startups, small and medium-sized enterprises (SMEs), and
        large corporations.
      </div>
      <div className="self-center w-full max-w-[1239px] mt-1.5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[64%] max-md:w-full max-md:ml-0">
            <div className="text-neutral-700 text-2xl font-medium leading-9 mt-14 max-md:max-w-full max-md:mt-10">
              Jubba ICT Solutions is a dynamic and forward-thinking Information
              and Communication Technology (ICT) company that stands at the
              forefront of technological innovation. Established with a passion
              for cutting-edge technology and a vision for a more interconnected
              world, we have dedicated ourselves to providing comprehensive ICT
              solutions. Our journey is defined by a commitment to excellence,
              customer satisfaction, and a profound understanding of the
              ever-evolving digital landscape.
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8d88339-d9be-4903-96f0-0c1235289f0c?apiKey=26a3fc7bd62a4679ae821796adfc8a8c&"
              className="aspect-[0.88] object-contain object-center w-full items-center overflow-hidden grow max-md:max-w-full max-md:mt-8"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch pr-4 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[62%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col mt-10 max-md:max-w-full max-md:mt-10">
              <div className="text-indigo-600 text-xl font-semibold leading-6 tracking-[2px] whitespace-nowrap max-md:max-w-full">
                OUR WORK
              </div>
              <div className="text-neutral-700 text-xl font-medium leading-8 mt-4 max-md:max-w-full">
                At Jubba ICT Solutions, we are committed to assisting you in
                achieving your technology-related goals. Whether you're looking
                to streamline your operations, enhance your cybersecurity, or
                develop innovative software, we have the expertise and solutions
                to help you succeed. Our dedicated team of ICT professionals is
                ready to work closely with you to understand your specific needs
                and create a customized plan to address them.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3e279dd-5124-407a-a70e-ed3aac348846?apiKey=26a3fc7bd62a4679ae821796adfc8a8c&"
              className="aspect-[0.88] object-contain object-center w-full items-center overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About