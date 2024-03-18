import React from "react";
import Image from "next/image";
import "./OnHoverLink.css";
import { FiMapPin } from "react-icons/fi";
import { MdPhoneAndroid } from "react-icons/md";
import { GrMailOption } from "react-icons/gr";



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
      <div className="lg:m-[100px]">
          <div>
          <section className="">
            <p className="uppercase text-[13px] font-light lg:text-[15px] lg:leading-[18px] leading-[16px] md:tracking-[1.8px] tracking-normal lg:m-3" style={{fontFamily: "stolzl, sans-serif"}}>Contact Us</p>
            <h1 className="lg:text-[57px] md:text-[35px] text-[30px] font-bold text-[#1f1f1f] lg:leading-[68px] leading-[34px] tracking-[-1px] lg:m-3" style={{fontFamily: "stolzl, sans-serif"}}>Have questions?<br/>Get in touch!</h1>
            <p className="lg:leading-[27px] leading-[22.4px] text-[#696969] text-[17px] tracking-normal lg:m-3" style={{ fontFamily: "DM Sans" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,<br/> tenetur. Lorem, ipsum.</p>
          </section>
          <section>
            <span className="flex flex-row"><FiMapPin color="#70af69" size="17px"/><p className="text-[17px]">785 15h Street, Office 478 Berlin</p></span>
            <span className="flex flex-row"><MdPhoneAndroid color="#70af69" size="17px"/><p className="text-[17px]">+1 840 841 25 69</p></span>
            <span className="flex flex-row"><GrMailOption color="#70af69" size="17px"/><p className="link text-[17px]"><a href="mailto:info@email.com">info@email.com</a></p></span>
          </section>
          </div>
          <div>

          </div>
      </div>
    </section>
  );
};

export default ContactUsCompo;
