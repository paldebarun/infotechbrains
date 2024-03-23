"use client";

import React, {useState, useEffect} from "react";
import Image from 'next/image'

const Locations = () => {
    const [indianTime, setIndianTime] = useState('');
    const [usTime, setUsTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();

            // Setting Indian time
            const indianTime = now.toLocaleTimeString('en-US', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            });

            // Setting US time
            const usTime = now.toLocaleTimeString('en-US', {
                timeZone: 'America/New_York',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            });

            setIndianTime(indianTime);
            setUsTime(usTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{ fontFamily: "Satoshi" }}
            className="flex flex-col sm:flex-row md:flex-row m-3 md:m-8 lg:justify-center"
        >
            <section className="text-[#000000] m-9 sm:m-3 sm:border-r-[0.1px] border-[#999999] lg:mr-[59px] lg:pr-[70px]">
                <span className="flex items-center mb-8">
                    <div className="m-3">
                        <h2 className="text-[44px] leading-[52px] sm:text-[45px] sm:leading-[54px] lg:text-[60px] lg:leading-[72px] tracking-normal font-bold">
                            India
                        </h2>
                        <p className="text-[20px] leading-[24px] tracking-normal font-semibold">
                            {indianTime}
                        </p>
                    </div>
                    <Image
                        src="/india_design_studio_leo9_studio.svg"
                        alt="india_design_studio"
                        width="172"
                        height="122"
                        className="w-[150px] h-[100px] md:w-[172px] md:h-[122px]"
                    />
                </span>
                <p className="text-[16px] lg:text-[18px] leading-[24px]  tracking-normal my-3">
                    Office No.202, 2nd Floor, Techno Park, Eksar, Link Road,Borivali
                    &#40;W&#41;, Mumbai: 400 092.
                </p>
                <p className="text-[16px] lg:text-[18px] leading-[24px] tracking-normal">
                    44, 2nd floor, 2nd Main Road,3rd Cross Guru Raghavendra Nagar, JP
                    Nagar 7th Phase Bangalore, Karnataka 560078
                </p>
            </section>
            <section className="text-[#000000] m-9 sm:m-3">
                <span className="flex items-center mb-8">
                    <div>
                        <h2 className="text-[44px] leading-[52px] sm:text-[45px] sm:leading-[54px] lg:text-[60px] lg:leading-[72px] tracking-normal font-bold">
                            USA
                        </h2>
                        <p className="text-[20px] leading-[24px] tracking-normal font-semibold">
                            {usTime}
                        </p>
                    </div>
                    <Image
                        src="/usa_design_studio_leo9_studio.svg"
                        alt="usa_design_studio"
                        width="172"
                        height="122"
                        className="w-[150px] h-[100px] md:w-[172px] md:h-[122px]"
                    />
                </span>
                <p className="text-[16px] lg:text-[18px] leading-[24px] tracking-normal my-3">
                    16 Madison Ave, Lake Hiawatha, NJ 07034,
                    <br /> United States
                </p>
            </section>
        </div>
    )
}

export default Locations