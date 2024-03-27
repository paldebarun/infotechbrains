import React from 'react';
import {clientdata} from './clientdata';
import Image from 'next/image';

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
