import React from 'react'
import "./Home.css"
// import google from "../"
const Home = () => {

  return (
    <div className="items-center self-stretch flex w-full flex-col mt-4 md:pt-14 pb-9 px-5 max-md:max-w-full ">
     {/* home */}
      <div className="w-full   mx-auto max-w-[1224px] mt- max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col mt-10 max-md:items-stretch max-md:gap-0">
          {/* tile &subtitle & CTA */}
          <div className="flex flex-col w-[47%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-center md:items-start my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-black text-5xl text-center md:text-left font-bold leading-[0px] md:leading-[72px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[69px]">
              Next-Gen Technology Solutions Provider
                <br />
               
              </div>
              <div className="text-black/ text-[20px] font-light self-stretch mt-1 text-center md:text-left max-md:max-w-full">
                Revolutionizing Industries with Advanced Technology and Tailored
                Solutions
              </div>
              <button className="text-white shadow text-xl font-semibold leading-4 items-center bg-secondary w-[172px] max-w-full mt-10 px-6 py-5 rounded-[8px] max-md:mt-10">
                Contact Us
              </button>
            </div>
          </div>
          {/* image */}
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/15b90ee6-5261-484a-8d96-3f07b1db15c0?apiKey=26a3fc7bd62a4679ae821796adfc8a8c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/15b90ee6-5261-484a-8d96-3f07b1db15c0?apiKey=26a3fc7bd62a4679ae821796adfc8a8c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15b90ee6-5261-484a-8d96-3f07b1db15c0?apiKey=26a3fc7bd62a4679ae821796adfc8a8c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/15b90ee6-5261-484a-8d96-3f07b1db15c0?apiKey=26a3fc7bd62a4679ae821796adfc8a8c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/15b90ee6-5261-484a-8d96-3f07b1db15c0?apiKey=26a3fc7bd62a4679ae821796adfc8a8c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15b90ee6-5261-484a-8d96-3f07b1db15c0?apiKey=26a3fc7bd62a4679ae821796adfc8a8c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/15b90ee6-5261-484a-8d96-3f07b1db15c0?apiKey=26a3fc7bd62a4679ae821796adfc8a8c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/15b90ee6-5261-484a-8d96-3f07b1db15c0?apiKey=26a3fc7bd62a4679ae821796adfc8a8c&"
              className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-7"
            />
          </div>
          
        </div>
      </div>
      {/* social proof */}
      <div className="justify-center items-center mx-auto  overflow-hidden self-center flex w-full max-w-[1152px] flex-col px-5 py-12 max-md:max-w-full">
            <div className=" flex w-full  items-start justify- gap-5 max-md:max-w-full z-10">
             
            </div>
          </div>
    </div>
  );
}

export default Home