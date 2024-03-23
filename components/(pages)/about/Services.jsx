import React from 'react';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

import Image from '@/node_modules/next/image';
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import service1 from "@/public/images/servicecard1.jpg";
import service2 from "@/public/images/servicecard2.jpg";
import service3 from "@/public/images/servicecard3.jpg";

 const servicedata = [
    {
        image: service1,
        heading: "Creative approach",
        description:
            "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia.",
        link: "service1-link",
    },
    {
        image: service2,
        heading: "Web design",
        description:
            "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia.",
        link: "service2-link",
    },
    {
        image: service3,
        heading: "Professional support",
        description:
            "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia.",
        link: "service3-link",
    },
];


const Services = () => {
  return (
    <section>
      <div className="heading py-24 items-center flex flex-col gap-6 sm:gap-10 px-2">
        <div className="text-center w-full font-semibold">OUR PRODUCTS</div>
        <div className="text-3xl text-black sm:text-4xl md:text-5xl text-center w-full font-semibold">
          We’re a product and experience creative agency
        </div>
        <div>
          <MdKeyboardDoubleArrowDown className="w-[24px] h-[24px]" />
        </div>
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-2 sm:px-10 mb-20 xl:px-44'>
        {servicedata.map((service, index) => (
          <div key={index} className=" shadow-xl rounded-2xl " >
            <a href={service.link} className="servicecard flex rounded-2xl overflow-hidden flex-col gap-5 items-center">
            <Image src={service.image} alt="serviceimages" width={200} height={200} className="w-full h-auto hover:scale-110 transition-all duration-300"/>
            <div className='px-3 py-10 flex flex-col  items-center gap-10'>
            <p className='heading text-2xl font-bold text-black text-center'>{service.heading}</p>
            
            <p className='text-center text-slate-400 font-light'>{service.description}</p>
            <span className='flex gap-1 '>
            
            <p className='readmore font-bold'>Read More</p>
            
            
            <IoArrowForwardCircleOutline className="servicecard_arrow w-[24px] h-[24px]  "/>
            
            </span>
            
            </div>
            
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
