"use client";
import { workdata } from "../../../data/workdata";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowDownRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";


const Works = () => {
  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }

  return (
    <section className="w-full bg-[#1c1e24] py-16 px-5 relative">
      <p className=" w-full text-3xl md:text-5xl text-white px-6">
        SOME OF <span className="text-orange-500">OUR WORKS</span>
      </p>

      <div className="absolute bg-gradient-to-r from-gray-900 w-16 top-0 z-50 h-full left-0"></div>
      <Button goToNextSlide={goToNextSlide} goToPreviousSlide={goToPreviousSlide} />
      <div className="py-20 -translate-x-6">

        <Swiper
          spaceBetween={0}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            820: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          onSwiper={(swiper) => { swiperRef.current = swiper }}
          modules={[FreeMode]}
          className="flex flex-col"
          style={{
            overflow: "visible",
        }}
        >


          <div>
            {workdata.map((work, index) => (
              <SwiperSlide
                key={index}
                className="group border group p-8 md:p-12  border-slate-400"
              >
                <div className=" relative isolate w-full h-auto ">
                  <div className="text-white h-[600px] lg:h-[470px] flex flex-col justify-between gap-16">
                    <a href={work.url} className="text-2xl md:text-3xl">
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
                            {/* <span className="w-3 box-border h-3  bg-orange-400"></span> */}
                            {/* <FaSquareFull className="w-3 h-3 text-orange-400" /> */}
                            <span className="xl:text-xl md:text-md text-slate-300">
                              {point}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex sm:px-8 md:px-10">
                    <p className="text-slate-300 text-sm sm:text-md md:text-lg ">
                      SEE FULL CASE STUDY
                    </p>
                    <GoArrowDownRight className="text-orange-400 w-6 h-6 group-hover:-rotate-90 group-hover:text-white transition-all duration-200" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

        {/* <div className="button-Arrangement absolute top-10 right-0">
        <div className="button-swiper w-20 flex justify-between ">
           <div className="swiper-button-prev "></div>
           <div className="swiper-button-next"></div>
           
           
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default Works;


const Button = ({ goToNextSlide, goToPreviousSlide }) => {
  // const swiper = useSwiper();

  return (
    <div className="flex md:absolute top-10 py-10 px-7 md:px-0 md:py-0 items-start right-10 flex-row gap-4 z-50">
      <button onClick={goToNextSlide}>
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
          className="w-16 h-16 rounded-full border hover:text-orange-400 hover:border-orange-400 text-slate-400"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button onClick={goToPreviousSlide}>
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
          className="w-16 h-16 rounded-full border hover:text-orange-400 hover:border-orange-400 text-slate-400"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};
