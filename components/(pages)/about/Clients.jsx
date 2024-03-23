import React from "react";
import Image from "next/image";

import client1image from "@/public/images/nexio-client-1.webp";
import client2image from "@/public/images/nexio-client-2.webp";
import client3image from "@/public/images/nexio-client-3.webp";
import client4image from "@/public/images/nexio-client-4.webp";
import client5image from "@/public/images/nexio-client-5.webp";
import client6image from "@/public/images/nexio-client-6.webp";

const clientdata = [
    {
        source: client1image,
    },
    {
        source: client2image,
    },
    {
        source: client3image,
    },
    {
        source: client4image,
    },
    {
        source: client5image,
    },
    {
        source: client6image,
    },
];

const Clients = () => {
    return (
        <div className="w-full px-5 lg:flex justify-items-center lg:justify-center grid grid-cols-3 md:grid-cols-2 ">
            {clientdata.map((client, index) => (
                <div key={index} className="w-auto">
                    <Image
                        src={client.source}
                        alt={index}
                        className="opacity-30 hover:opacity-100 w-[90px] h-[40px] sm:w-[155px] sm:h-[65px] transition-opacity duration-200"
                    />
                </div>
            ))}
        </div>
    );
};

export default Clients;
