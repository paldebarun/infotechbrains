import React from 'react';
import {clientdata} from '../../../data/clientdata';
import Image from 'next/image';

const Clients = () => {
    return (
        <div className='w-full px-10 lg:flex justify-items-center lg:justify-center grid grid-cols-3 md:grid-cols-2 '>
            {
                clientdata.map((client, index) => (
                    <div key={index}>
                        <Image src={client.source} alt="img" className="opacity-30 hover:opacity-100 w-[80px] h-[40px] sm:w-[150px] sm:h-[75px] transition-opacity duration-200" width={300} height={300} />
                    </div>
                ))
            }
        </div>
    );
};

export default Clients;
