import React from 'react'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Services = () => {
  return (
    <div>
     <div className='heading py-24 items-center flex flex-col gap-6 sm:gap-10 px-2'>
        <div className='text-center w-full font-semibold'>OUR PRODUCTS</div>
        <div className='text-3xl text-slate-700 sm:text-4xl md:text-5xl text-center w-full font-semibold'>We’re a product and experience  creative agency</div>
        <div><MdKeyboardDoubleArrowDown className="w-[24px] h-[24px]"/></div>
     </div>

    </div>
  )
}

export default Services