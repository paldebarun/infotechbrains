import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import heroimage1 from '../../../public/images/aboutusheroimage2.jpeg'
import heroimage2 from '../../../public/images/aboutus-hero-image.jpeg'
import Image from '@/node_modules/next/image';


const Hero = () => {
  return (
    <div className='py-10'>
    <div className='flex flex-col justify-center items-center gap-5 md:gap-6'>
        <div className='w-full h-auto flex justify-center items-center text-3xl sm:text-4xl md:text-6xl text-black font-bold'>
          About Us
        </div>
        <div className=''>
            <IoIosArrowDown />
        </div>
</div>

  <div className='w-full px-10 py-12 sm:py-24 flex flex-col gap-16 lg:gap-0  lg:flex-row'>
    <div className='w-full lg:w-6/12 sm:px-6 flex flex-col gap-6'>
       <div className='font-semibold text-sm'>DIGITAL SAFETY</div>
       <h1 className='font-semibold text-2xl sm:text-3xl md:text-5xl'>
       We revolutionize fintech systems
       </h1>

       <div className='w-full '>
       <p className='text-slate-400 w-11/12'>
       Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.
       </p>
       </div>

       <div className='progress-bars flex flex-col gap-6'>
          <div className='w-full flex flex-col gap-2'>
            <h2 className='font-bold'>Design</h2>
            <div className='w-11/12 relative rounded-full h-2  bg-slate-300'>
            <div className='absolute h-full  bg-blue-500 rounded-full w-9/12'></div>
            </div>


          </div>

          <div className='w-full flex flex-col gap-2'>
            <h2 className='font-bold'>
              Development
            </h2>
            
            <div className='w-11/12 relative rounded-full h-2  bg-slate-300'>
            <div className='absolute h-full  bg-blue-500 rounded-full w-10/12'></div>
            </div>

          </div>
       </div>


    </div>

    <div className='w-full flex justify-center  lg:w-9/12 h-auto'>
    <Image src={heroimage2} width={300} height={200} className="translate-y-12 z-10 w-[170px]  sm:w-[300px] h-[200px] sm:h-[350px] translate-x-14 sm:translate-x-24 rounded-lg " />
   <Image src={heroimage1} width={300} height={200} className="rounded-lg w-[170px] sm:w-[300px] h-[200px] sm:h-[350px]  -translate-x-12" />
   
    </div>


  </div>

  <div className='flex lg:flex-row flex-col gap-10 lg:gap-6 justify-between  sm:px-16 py-16 items-center'>
    
    <div className='flex flex-col gap-5 w-10/12 lg:w-7/12'>
      <span className='text-sm font-semibold'>CORPORATE SERVICE</span>
      <span><h1 className='text-3xl md:text-6xl font-semibold text-black'> Meet our top clients and partners</h1></span>
    </div>

    

    <div className='flex flex-col gap-6 w-10/12 lg:w-7/12'>

    <div>
      <p className='text-slate-500'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>

    <div>
      <p className='text-slate-500'>Adipiscing elit, sed do eiusmod tempor incididunt utn labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>

    </div>


  </div>


    </div>
  )
}

export default Hero