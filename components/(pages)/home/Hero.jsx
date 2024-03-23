import React from "react";
import Image from "next/image";
import H1 from "@/public/images/home/robo_hand.png";

const Hero = () => {
    return (
        <section className="relative h-screen overflow-hidden">
            <video
                src="/images/home/bg.mp4"
                autoPlay
                loop
                muted
                className="w-full h-screen object-cover"
            >
                Your browser does not support the video tag.
            </video>

            <div className="absolute px-8 md:px-16 space-y-7 flex flex-col bottom-48 lg:bottom-32 max-w-4xl z-10">
                <p className="disket leading-7 text-xl md:text-3xl text-gray-300">
                    WE ARE INFOTECHBRAINS
                </p>
                <h2 className="recoleta text-5xl md:text-6xl font-extrabold mr-6 tracking-wide text-gray-100 lg:text-7xl">
                    AI Solutions Tailored for Your Success
                </h2>
                <p className="recoleta tracking-wider max-w-xl text-2xl lg:text-3xl leading-8 text-gray-200">
                    We provide Products, Custom Software Solutions & Expert Developers
                </p>
            </div>

            <Image
                src={H1}
                alt="robo-hand"
                className="absolute mt-28 w-[30rem] md:w-[35rem] lg:w-[40rem] xl:w-[48rem] z-10 bottom-10 -right-20 lg:-right-36"
            />
        </section>
    );
};

export default Hero;