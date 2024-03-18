import React from "react";
import Image from "next/image";
import "./OnHoverLink.css";
import {
  FiMapPin,
  FiUser,
  FiMail,
  FiPhone,
  FiFileText,
  FiMessageSquare,
} from "react-icons/fi";
import { MdPhoneAndroid } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import { GrMailOption } from "react-icons/gr";
import Link from "next/link";

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
              <p>
                176 W Street, New York, <br />
                NY 10014
              </p>
              <p className="link">
                <a href="#">Check Location</a>
              </p>
            </article>
          </div>
          <div className="text-center lg:mr-14">
            <Image
              className="w-[75px] mx-auto mb-4"
              src="/customer-care-svgrepo-com.svg"
              width="10"
              height="10"
            />
            <h1 className="font-bold text-[#1f1f1f] text-[22px]">
              Get in touch
            </h1>
            <article
              className="text-[#696969] text-[17px]"
              style={{ fontFamily: "DM Sans" }}
            >
              <p>Telephone: +1&#40;800&#41;123-4566</p>
              <p>Email: info@yoursite.com</p>
              <p className="link">
                <a href="#">Contact Form</a>
              </p>
            </article>
          </div>
        </section>
      </div>
      <div className="mt-6 mb-4">
        <iframe
          className="w-full lg:h-[600px] h-[300px] md:h-[400px]"
          aria-hidden="false"
          frameborder="0"
          tabindex="-1"
          src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1s51.503325,-0.119545!5e0!6i12"
        ></iframe>{" "}
      </div>
      <div className="lg:m-[100px] m-4 flex lg:flex-row flex-col">
        <div className="lg:m-3">
          <section className="mt-12 mb-4">
            <p
              className="uppercase text-[13px] text-[#696969] font-semibold py-1 lg:text-[15px] lg:leading-[18px] leading-[16px] md:tracking-[1.8px] tracking-normal lg:m-3"
              style={{ fontFamily: "stolzl, sans-serif" }}
            >
              Contact Us
            </p>
            <h1
              className="lg:text-[57px] md:text-[35px] py-1 text-[30px] font-bold text-[#1f1f1f] lg:leading-[68px] leading-[34px] tracking-[-1px] lg:m-3"
              style={{ fontFamily: "stolzl, sans-serif" }}
            >
              Have questions? Get in touch!
            </h1>
            <p
              className="lg:leading-[27px] leading-[22.4px] py-1 text-[#696969] text-[17px] tracking-normal lg:m-3"
              style={{ fontFamily: "DM Sans" }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates,
              <br /> tenetur. Lorem, ipsum.
            </p>
          </section>
          <section>
            <div className="flex flex-row items-center mb-2 lg:m-3">
              <FiMapPin color="#70af69" size="17px" />
              <p className="text-[17px] text-[#696969] font-normal ml-2">
                785 15h Street, Office 478 Berlin
              </p>
            </div>
            <div className="flex flex-row items-center mb-2 lg:m-3">
              <MdPhoneAndroid color="#70af69" size="17px" />
              <p className="text-[18px] ml-2 text-[#1f1f1f] font-bold">
                +1 840 841 25 69
              </p>
            </div>
            <div className="flex flex-row items-center mb-2 lg:m-3">
              <GrMailOption color="#70af69" size="17px" />
              <p className="link text-[17px] text-[#696969] font-normal ml-2">
                <a href="mailto:info@email.com">info@email.com</a>
              </p>
            </div>
          </section>
        </div>
        <div>
          <form className="mt-8">
            <div className="hover-underline-animation flex items-center mb-4 border-b-2 rounded-md py-2 px-3 w-full relative">
              <FiUser
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
                size={22}
                color="#696969"
              />
              <input
                className="border-none focus:outline-none w-full pl-10"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                />
            </div>
            <div className="hover-underline-animation flex items-center mb-4 border-b-2 rounded-md py-2 px-3 w-full relative">
              <FiMail
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
                size={22}
                color="#696969"
              />
              <input
                className="border-none focus:outline-none w-full pl-10"
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                />
            </div>
            <div className="hover-underline-animation flex items-center mb-4 border-b-2 rounded-md py-2 px-3 w-full relative">
              <FiPhone
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
                size={22}
                color="#696969"
              />
              <input
                className="border-none focus:outline-none w-full pl-10"
                type="tel"
                id="phone" 
                name="phone"
                placeholder="Phone"
                />
            </div>
            <div className="hover-underline-animation flex items-center mb-4 border-b-2 rounded-md py-2 px-3 w-full relative">
              <FiFileText
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
                size={22}
                color="#696969"
              />
              <input
                className="border-none focus:outline-none w-full pl-10"
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="Subject"
                />
            </div>
            <div className="hover-underline-animation flex items-center mb-4 border-b-2 rounded-md py-2 px-3 w-full relative">
              <FiMessageSquare className="absolute left-2 top-1/2 transform -translate-y-1/2"
                size={22}
                color="#696969" />
              <textarea
                className="border-none focus:outline-none w-full pl-10"
                id="message"
                name="message"
                rows="4"
                placeholder="How can we help you? Feel free to get in touch!"
              ></textarea>
            </div>
            <div className="mb-4 flex items-center">
              <input className="mr-2" type="checkbox" id="terms" name="terms" />
              <label className="text-[#696969] text-sm" htmlFor="terms">
                I accept that my data is <a href="#privacy_policy">collected</a>
              </label>
            </div>
            <button
              className="bg-[#70af69] text-white py-2 px-6 rounded-[25px] hover:bg-green-600 transition-colors duration-300"
              type="submit"
            >
              <span className="flex items-center">
                <BsSend />
                <p className="p-2">Get in touch</p>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsCompo;
