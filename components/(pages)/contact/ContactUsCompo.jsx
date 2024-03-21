"use client";

import React, {useState, useEffect} from "react";
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
      <div className="lg:m-[90px] m-4 mb-4 flex md:flex-row flex-col">
        <div className="lg:m-3 md:mr-8 md:w-full">
          <section className="mt-12 mb-4">
            <p
              className="uppercase text-[13px] text-[#696969] font-semibold py-1 lg:text-[15px] lg:leading-[18px] leading-[16px] md:tracking-[1.8px] tracking-normal lg:m-3"
              style={{ fontFamily: "stolzl, sans-serif" }}
            >
              Contact Us
            </p>
            <h1
              className="lg:text-[57px] md:text-[38px] py-1 text-[30px] font-bold text-[#1f1f1f] lg:leading-[68px] md:leading-[42px] leading-[34px] md:tracking-[-1.8px] tracking-[-1px] lg:m-3"
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
          <form className="mt-8 md:w-full">
            <div className="sm:flex sm:flex-row">
              <div className="sm:mr-2 md:mr-3 lg:mr-5">
                <div className="hover-underline-animation flex items-center mb-5 md:mb-7 border-b-2 py-2 px-3 w-full relative">
                  <FiUser
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    size={22}
                    color="#696969"
                  />
                  <input
                    className="border-none focus:outline-none w-full pl-10 font-normal"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="hover-underline-animation flex items-center mb-5 md:mb-7 border-b-2 py-2 px-3 w-full relative">
                  <FiMail
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    size={22}
                    color="#696969"
                  />
                  <input
                    className="border-none focus:outline-none w-full pl-10 font-normal"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
              <div className="sm:ml-2 md:ml-3 lg:ml-5">
                <div className="hover-underline-animation flex items-center mb-5 md:mb-7 border-b-2 py-2 px-3 w-full relative">
                  <FiPhone
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    size={22}
                    color="#696969"
                  />
                  <input
                    className="border-none focus:outline-none w-full pl-10 font-normal"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    required
                  />
                </div>
                <div className="hover-underline-animation flex items-center mb-5 md:mb-7 border-b-2 py-2 px-3 w-full relative">
                  <FiFileText
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    size={22}
                    color="#696969"
                  />
                  <input
                    className="border-none focus:outline-none w-full pl-10 font-normal"
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="hover-underline-animation flex items-center mb-5 border-b-2 py-2 px-3 w-full relative">
              <FiMessageSquare
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
                size={22}
                color="#696969"
              />
              <input
                className="border-none focus:outline-none w-full pl-10 font-normal h-[36px]"
                id="message"
                name="message"
                // rows="4"
                placeholder="How can we help you? Feel free to get in touch!"
                required
              />
            </div>
            <div className="mb-5 flex items-center">
              <input
                className="check mr-2"
                type="checkbox"
                id="terms"
                name="terms"
                required
              />
              <label className="text-[#696969] text-sm" htmlFor="terms">
                I accept that my data is <a href="#privacy_policy">collected</a>
              </label>
            </div>
            <button
              className="bg-[#70af69] text-white py-2 px-6 rounded-[25px] hover:bg-[#63975e] transition-colors duration-300"
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
      <div
        className="text-[#1f1f1f] m-8"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <h3 className="text-[40px] px-2 py-2 lg:text-[42px] font-semibold leading-[46px]">
          Our core values
        </h3>
        <div className="flex md:flex-row flex-col m-3">
          <section className="border-[1px] md:border-r-[0px] border-[#121] mb-3 h-[412px] md:h-[460px] lg:h-[420px]">
            <div className="flex items-center justify-start m-4">
              <Image src="/corevalues1.png" width="64" height="64" />
            </div>
            <div className="m-8">
              <h4 className="text-[30px] lg:text-[23.4px] leading-[46px] md:leading-[40px] lg:leading-[32px] mb-4">
                Flexibility
              </h4>
              <ol className="list-disc text-[16px] leading-[28px] md:leading-[20px] lg:leading-[21px] tracking-normal px-6">
                <li className="py-2">
                  We place a priority on communication and trust rather than
                  formalities.
                </li>
                <li className="py-2">
                  Being ready for changes is much more important than following
                  the ground plan.
                </li>
              </ol>
            </div>
          </section>
          <section className="border-[1px] md:border-r-[0px] border-[#121] mb-3 h-[412px] md:h-[460px] lg:h-[420px]">
            <div className="flex items-center justify-start m-4">
              <Image src="/corevalues2.png" width="64" height="64" />
            </div>
            <div className="m-8">
              <h4 className="text-[30px] lg:text-[23.4px] leading-[46px] md:leading-[40px] lg:leading-[32px] mb-4">
                Cooperation
              </h4>
              <ol className="list-disc text-[16px] leading-[28px] md:leading-[20px] lg:leading-[21px] tracking-normal px-6">
                <li className="py-2">
                  We always act proactively, taking into account the interests
                  of the Client and the Company.
                </li>
                <li className="py-2">
                  People and teamwork are much more important than processes and
                  tools.
                </li>
              </ol>
            </div>
          </section>
          <section className="border-[1px] border-[#121] mb-3 h-[412px] md:h-[460px] lg:h-[420px]">
            <div className="flex items-center justify-start m-4">
              <Image src="/corevalues3.png" width="64" height="64" />
            </div>
            <div className="m-8">
              <h4 className="text-[30px] lg:text-[23.4px] leading-[46px] md:leading-[40px] lg:leading-[32px] mb-4">
                Result
              </h4>
              <ol className="list-disc text-[16px] leading-[28px] md:leading-[20px] lg:leading-[21px] tracking-normal px-6">
                <li className="py-2">
                  “Working” products are outcome measures whereas optimal
                  solutions are the priority!
                </li>
                <li className="py-2">
                  Everyone has the responsibility for the team’s results.
                </li>
              </ol>
            </div>
          </section>
        </div>
      </div>
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
    </section>
  );
};

export default ContactUsCompo;
