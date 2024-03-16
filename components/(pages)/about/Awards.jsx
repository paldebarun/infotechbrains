import React from 'react'
import { IoArrowForwardSharp } from "react-icons/io5";

const Awards = () => {
    return (
        <section className="py-32">
          <div className='heading px-5 sm:px-10 flex flex-col gap-4'>
           <p className='font-semibold'>ACHIEVEMENTS</p>
           <div className='w-full flex sm:flex-row flex-col sm:items-center gap-5 sm:gap-0 sm:justify-between'>
           <p className='md:text-6xl text-4xl sm:text-5xl font-bold'>Our awards</p>
           <span className='flex items-center gap-3'>
            <p className='font-semibold'>View More</p>
           <IoArrowForwardSharp className="w-[24px] h-[24px]" />
           </span>
           
           </div>
          </div>
        
        </section>
    )
}

export default Awards