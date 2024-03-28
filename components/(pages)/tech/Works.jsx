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
    <section className="w-full bg-black py-7 px-5">
      <p className=" w-full text-3xl md:text-5xl text-white">
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
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1088: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination,Navigation]}
        className=""
      >
        {workdata.map((work, index) => (
          <SwiperSlide key={index} className="group border group  border-slate-400">
          <a href={work.url} className="w-full h-auto ">
            <div className="text-white h-[500px] px-10 sm:px-8 lg:px-10 py-16 flex flex-col gap-10">
            <p className="text-xl md:text-2xl lg:text-xl">{work.heading}</p>
              <ul className="flex flex-col gap-10 ">
                {work.points.map((point, index) => (
                  <li key={index} className="text-slate-300 list-square">
                    <div className="flex w-full h-auto gap-3 items-center">
                     
                      <span className="text-sm lg:text-md">{point}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex w-full justify-center  items-center py-10 md:px-10">
              <p className="text-slate-300 text-sm ">SEE FULL CASE STUDY</p>
              <GoArrowDownRight className="text-orange-400 w-6 h-6 group-hover:-rotate-90 group-hover:text-white transition-all duration-200" />
            </div>
            </a>
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

    </section>
  );
};

export default Works;
