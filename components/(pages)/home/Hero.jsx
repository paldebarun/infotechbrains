
"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import H1 from '@/public/images/home/robo_hand.png'



const Hero = () => {

    return (
        <section className="relative overflow-hidden">
            <div className="">
                <video src="/images/home/bg.mp4" autoPlay loop muted>
                    Your browser does not support the video tag.
                </video>
            </div>
            <Image
                src={H1}
                alt='sdf'
                className=" absolute mt-28 w-[48rem] z-10 bottom-20 -right-28"
            />
        </section>
    );
};

export default Hero;