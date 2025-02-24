"use client";
import { workdata } from "../../../data/workdata";
import React, { forwardRef, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowDownRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
const Button = forwardRef(function Index( props , ref ){
  const { goToNextSlide, goToPreviousSlide, isBeginning, isEnd } = props;


  const prevButtonStyle = isBeginning ? 'opacity-50 cursor-not-allowed' : 'opacity-100';
  const nextButtonStyle = isEnd ? 'opacity-50 cursor-not-allowed' : 'opacity-100';
   return (
     <div className="flex   py-10 px-7 md:px-0 md:py-0 items-start  flex-row gap-6 z-50">

         <button 
          onClick={goToPreviousSlide}
          className={`${prevButtonStyle} w-12 h-12 rounded-full border hover:text-orange-400 hover:border-orange-400 text-slate-400}`}
          disabled={isBeginning}
          >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="1"
             strokeLinecap="round"
             strokeLinejoin="round"
             className="w-12 h-12 rounded-full  hover:text-orange-400 hover:border-orange-400 text-slate-400"
           >
             <path d="m15 18-6-6 6-6" />
           </svg>
         </button>
    
         <button onClick={goToNextSlide}
        className={`${nextButtonStyle} w-12 h-12 rounded-full border hover:text-orange-400 hover:border-orange-400 text-slate-400}`}
        disabled={isEnd}>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="1"
             strokeLinecap="round"
             strokeLinejoin="round"
             className="w-12 h-12 rounded-full  hover:text-orange-400 hover:border-orange-400 text-slate-400"
           >
             <path d="m9 18 6-6-6-6" />
           </svg>
         </button>
    
     </div>
   );
 })
 

const Works = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const goToNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const goToPreviousSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const updateSwiperStatus = () => {
    setIsBeginning(swiperRef.current.isBeginning);
    setIsEnd(swiperRef.current.isEnd);
  };

  return (
    <section className="w-full bg-[#1c1e24] py-16 px-5 relative">
    <div className="flex md:flex-row flex-col justify-between relative w-full items-start md:items-center ">
      <p className="  text-3xl md:text-5xl text-white px-6">
        SOME OF <span className="text-orange-500">OUR WORKS</span>
      </p>
      <div className="md:w-auto w-full flex justify-start sm:justify-end">
      <Button  goToNextSlide={goToNextSlide}
        goToPreviousSlide={goToPreviousSlide}
        isBeginning={isBeginning}
        isEnd={isEnd} 
        />
      </div>
      
      </div>
       <div className="h-full absolute w-20 sm:w-36  right-0 top-0 z-10 bg-gradient-to-l from-[#1c1e24]"></div>
      
      <div className="py-6 md:py-20 ">

        <Swiper
          spaceBetween={0}
          freeMode={true}
          breakpoints={{
            600: {

              slidesPerView: 1,
              spaceBetween: 0,

            },
            650: {

              slidesPerView: 2,
              spaceBetween: 0,

            },
            700: {

              slidesPerView: 4,
              spaceBetween: 0,
              
            },
          }}
          onSwiper={(swiper) => { swiperRef.current = swiper }}
          modules={[FreeMode]}
          onSlideChange = {updateSwiperStatus}
          className="flex flex-col -translate-x-2 md:-translate-x-3"
          style={{
            overflow: "hidden",
        }}
        >

          <div>
            {workdata.map((work, index) => (
              <SwiperSlide
                key={index}
                className="group border group p-7 md:p-10  border-slate-400"
              >
                <div className=" flex flex-col lg:h-[40rem] gap-52 relative isolate w-full ">
                  <div className="text-white h-[12rem]  md:h-[20rem] gap-12  lg:h-[21rem]  flex flex-col justify-between lg:gap-16 ">
                    <a href={work.url} className="text-[5vw] sm:text-[3vw] md:text-2xl">
                      {work.heading}
                      <span className=" absolute inset-0 h-full"></span>
                    </a>
                    <ul className="flex flex-col gap-10 ">
                      {work.points.map((point, index) => (
                        <li
                          key={index}
                          className=" list-square text-orange-400 "
                        >
                          <div className="flex w-full h-auto gap-3 items-center ">
                            
                            <span className="text-[3.5vw] sm:text-[1.9vw] xl:text-lg md:text-md text-slate-300">
                              {point}
                            </span>

                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center items-center sm:px-8 md:px-10">
                    <p className="text-slate-300 font-semibold text-md  md:text-[2vw] text-[3.5vw] sm:text-[1.5vw] lg:text-[1.3vw] xl:text-[1.2vw] ">
                      SEE FULL CASE STUDY
                    </p>
                    <GoArrowDownRight className="text-orange-400 w-7 h-7 group-hover:-rotate-90 group-hover:text-white transition-all duration-200" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Works;


