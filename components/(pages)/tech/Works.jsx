"use client";
import { workdata } from "../../../data/workdata";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowDownRight } from "react-icons/go";
// import './styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Navigation } from "swiper/modules";

const Works = () => {
  return (
    <div className="bg-black py-7 px-5">
      <p className="text-5xl text-white">
        SOME OF <span className="text-orange-500">OUR WORKS</span>
      </p>
       <div className="swipercontainer relative py-20">
      <Swiper
        
        spaceBetween={0}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
       
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination,Navigation]}
        className=""
      >
        {workdata.map((work, index) => (
          <SwiperSlide key={index} className="group border">
            <div className="text-white h-auto px-10 py-4 flex flex-col gap-10">
            <p className="text-4xl">{work.heading}</p>
              <ul className="flex flex-col gap-10 ">
                {work.points.map((point, index) => (
                  <li key={index} className="text-slate-300">
                    <div className="flex gap-3 items-center">
                      <div className="w-2 h-2 bg-orange-400"></div>
                      <span className="text-lg">{point}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3 items-center py-4 px-10">
              <p className="text-slate-300 text-sm lg:text-xl">SEE FULL CASE STUDY</p>
              <GoArrowDownRight className="text-orange-400 w-10 h-10 group-hover:-rotate-90 group-hover:text-white transition-all duration-200" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="button-Arrangement absolute top-10 right-0">
        <div className="button-swiper w-20 flex justify-between ">
           <div className="swiper-button-prev "></div>
           <div className="swiper-button-next"></div>
           
           
        </div>
      </div>
    </div>

    </div>
  );
};

export default Works;
