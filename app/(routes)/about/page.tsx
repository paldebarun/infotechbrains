import React from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/(pages)/about/Hero';
import Clients from '@/components/(pages)/about/Clients';
import Services from '@/components/(pages)/about/Services';
import Awards from '@/components/(pages)/about/Awards';

const page = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Hero />
                <Clients />
                <Services />
                <Awards />
            </main>
            <Footer />
        </>
    )
}

export default page