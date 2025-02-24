import React from "react";
import type { Metadata } from "next";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/(pages)/contact/Hero';
import Map from '@/components/(pages)/contact/Map';
import Form from '@/components/(pages)/contact/Form';
import Values from '@/components/(pages)/contact/Values';
import Locations from '@/components/(pages)/contact/Locations';

export const metadata: Metadata = {
  title: "Contact Us | Info Tech Brains",
  description: "Generated by create next app",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main >
        <Hero />
        <Map />
        <Form />
        <Values />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
