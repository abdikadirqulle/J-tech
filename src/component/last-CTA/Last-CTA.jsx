import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/Context';
// import { motion } from "framer-motion";

const LastCTA = () => {
  const {currentPage ,setCurrentPage} = useAuth()

  return (
    <div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="max-w-6xl mx-auto bg-[#5F5FFF] text-white rounded-lg">
      <div className="flex flex-col items-center py-16 px-4 gap-5 ">
        <h3 className='text-center font-semibold text-white/90'> Crafting Your Digital Success Story</h3>
        <div className='flex items-center flex-col gap-7'>
          <h1 className='font-semibold text-2xl text-center md:w-3/4'>
            Crafting a comprehensive ICT strategy is key to achieving your
            technology objectives
          </h1>
          <Link to="/contact" onClick={() => setCurrentPage("contact")}>
          <button className=' px-6 py-2 text-sm font-medium bg-white hover:bg-[#EBEBEB] text-black rounded-lg'>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LastCTA