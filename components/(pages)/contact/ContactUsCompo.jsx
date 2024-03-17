import React from "react";
import Image from "next/image";
import "./OnHoverLink.css";

const ContactUsCompo = () => {
  return (
    <section>
      <div
        className="text-center mt-8"
        style={{ fontFamily: "stolzl, sans-serif" }}
      >
        <p className="text-[30px] font-bold text-[#1f1f1f] mb-0">Contacts</p>
        <svg
          className="w-4 h-8 ml-[47%] md:ml-[49%]"
          viewBox="0 0 320 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
        </svg>
        <section className="flex flex-col md:flex-row lg:flex-row justify-center items-center mt-8 md:ml-8 md:mr-8 lg:ml-[150px] lg:mr-[150px]">
          <div className="text-center mb-4 md:mr-12 md:mb-0 lg:ml-14">
            <Image
              className="w-[65px] mx-auto mb-4"
              src="/clock-svgrepo-com.svg"
              width="10"
              height="10"
            />
            <h1 className="font-bold text-[#1f1f1f] text-[22px]">Open hours</h1>
            <article
              className="text-[#696969] text-[17px]"
              style={{ fontFamily: "DM Sans" }}
            >
              <p>Mon-Fri: 9 AM - 6 PM</p>
              <p>Saturday: 9 AM - 6 PM</p>
              <p>Sunday: Closed</p>
            </article>
          </div>
          <div className="text-center mb-4 md:mr-12 md:mb-0 lg:mx-auto">
            <Image
              className="w-[65px] mx-auto mb-4"
              src="/map-pointer-svgrepo-com.svg"
              width="10"
              height="10"
            />
            <h1 className="font-bold text-[#1f1f1f] text-[22px]">Address</h1>
            <article
              className="text-[#696969] text-[17px]"
              style={{ fontFamily: "DM Sans" }}
            >
              <p>176 W Street, New York, <br/>NY 10014</p>
              <p className="link"><a href="#">Check Location</a></p>
            </article>
          </div>
          <div className="text-center lg:mr-14">
            <Image
              className="w-[75px] mx-auto mb-4"
              src="/customer-care-svgrepo-com.svg"
              width="10"
              height="10"
            />
            <h1 className="font-bold text-[#1f1f1f] text-[22px]">Get in touch</h1>
            <article
              className="text-[#696969] text-[17px]"
              style={{ fontFamily: "DM Sans" }}
            >
              <p>Telephone: +1&#40;800&#41;123-4566</p>
              <p>Email: info@yoursite.com</p>
              <p className="link"><a href="#">Contact Form</a></p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactUsCompo;
