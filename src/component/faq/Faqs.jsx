import React, { useState } from 'react'
import { IoIosArrowDown , IoIosArrowUp} from "react-icons/io";

const Faqs = ({id, title, subtitle}) => {
    const [open , setOpen] = useState(false)

    const handelOpen = () => {
        setOpen(!open)
      }
    return (
        <div className="flex shadow ounded-md flex-col gap- rounded-md" key={id}>
                <div
                  className={`flex justify-between items-center px-6  hover:bg-[#EBEBF4] bg-blue-100 duration-200 cursor-pointer py-5 ${open ? "rounded-t-md" : "rounded-md "}` }
                  onClick={handelOpen}
                >
                  <h3>{title}</h3>
                  {open ? (
                    <IoIosArrowDown
                      className="cursor-pointer w-5 h-5"
                      // onClick={handelOpen}
                    />
                  ) : (
                    <IoIosArrowUp
                      className="cursor-pointer w-5 h-5"
                      // onClick={handelOpen}
                    />
                  )}
                </div>
                {open && (
                  <div className="bg-white  p-5 rounded-b-md ">
                    <p className={``}>{subtitle}</p>
                  </div>
                )}
              </div>
    )
}

export default Faqs