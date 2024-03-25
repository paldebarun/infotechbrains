import Image from "next/image";
import React from "react";
import { footerdata } from "../data/footerdata";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import londonlight from "../public/images/city-london-light.png";
import lisbanlight from "../public/images/city-lisbon-light.png";
import milanlight from "../public/images/city-milan-light.png";
import logo2 from "../public/images/review-clutch.svg";
import logo3 from "../public/images/review-pme-22.svg";
import mainlogo from "../public/images/logoalter.svg";

const Footer = () => {
  return (
    <div className="bg-gray-900 relative isolate overflow-x-hidden">
      <div className="w-screen bg-gray-800 flex justify-center flex-col md:flex-row gap-16 md:gap-7 px-10 sm:px-10  py-52 ">
        <div className="w-full md:w-[40%]  flex   flex-col md:justify-end  gap-12">
          <div className="text-white flex gap-5 items-center  ">
            <figure>
              <Image width={20} height={20} alt="logo png" src={mainlogo} className=" h-auto" />
            </figure>

            <div className="text-xl">alter.io</div>
          </div>

          <p className="text-white text-5xl lg:text-6xl font-bold">
            Let&apos;s talk about <br /> your projects
          </p>
          <a
            href="#schedule-a-call-ref"
            className="border-pink-500 hover:bg-pink-500 transition-colors duration-200 w-52 flex items-center justify-center border-4 text-white rounded-full py-4"
          >
            <span>schedule a call</span>
          </a>

          <figure className="flex gap-9 items-center">
            <Image width={100} height={100} alt="footer image" src={logo2} style={{ width: 'auto' }} />

            <Image width={70} height={70} alt="footer image" src={logo3} style={{ width: 'auto' }} />
          </figure>
        </div>

        <div className="flex flex-col  justify-start items-start md:justify-end gap-16 md:gap-10">
          <div className="flex flex-col  md:flex-row gap-10 items-start md:items-end">
            <figure>
              <Image
                width={130}
                height={130}
                alt="footer image 2"
                src={lisbanlight}
                className=""
                style={{ width: 'auto' }}
              />
            </figure>

            <div>
              <div className="flex flex-col gap-10">
                <div className="text-white text-xl font-bold">Lisbon</div>

                <div className="text-white sm:text-md text-sm">
                  Address: R. Adriano C. de Oliveira 4A, 1600-312
                </div>
              </div>

              <div className="text-white flex items-center sm:text-md text-sm">
                <div>Phone:</div>
                <a
                  href="tel:+351930944995"
                  className="text-pink-500 hover:text-slate-500 cursor-pointer"
                >
                  +351 930944995
                </a>
              </div>

              <div className="text-white flex items-center gap-3 sm:text-md text-sm">
                <div>Email:</div>
                <a
                  href="mailto:lisbon@altar.io"
                  className="text-pink-500 hover:text-slate-500 cursor-pointer"
                >
                  lisbon@altar.io
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-start md:items-end">
            <figure>
              <Image
                width={120}
                height={120}
                alt="footer image 3"
                src={londonlight}
                style={{ width: 'auto' }}
              />
            </figure>

            <div>
              <div className="flex flex-col gap-10">
                <div className="text-white text-xl font-bold">London</div>

                <div className="text-white sm:text-md text-sm">
                  Address: 36 Wharf Road, N1 7GR
                </div>
              </div>

              <div className="text-white flex items-center sm:text-md text-sm">
                <div>Phone:</div>
                <a
                  href="tel:+447802685611"
                  className="text-pink-500 hover:text-slate-500 cursor-pointer"
                >
                  +44 7802685611
                </a>
              </div>

              <div className="text-white flex items-center gap-3 sm:text-md text-sm">
                <div>Email:</div>
                <a
                  href="mailto:london@altar.io"
                  className="text-pink-500 hover:text-slate-500 cursor-pointer"
                >
                  london@altar.io
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-10 flex-col md:flex-row items-start  md:items-end">
            <figure>
              <Image
                width={120}
                height={120}
                alt="footer image 5"
                src={milanlight}
                className=""
                style={{ width: 'auto' }}
              />
            </figure>

            <div>
              <div className="flex flex-col gap-10">
                <div className="text-white text-xl font-bold">MILAN</div>

                <div className="text-white sm:text-md text-sm">
                  Address: Via orti 14, 20122
                </div>
              </div>

              <div className="text-white flex items-center sm:text-md text-sm">
                <div>Phone:</div>
                <a
                  href="tel:+393318853562"
                  className="text-pink-500 hover:text-slate-500 cursor-pointer"
                >
                  +39 3318853562
                </a>
              </div>

              <div className="text-white flex items-center gap-3 sm:text-md text-sm">
                <div>Email:</div>
                <a
                  href="mailto:milan@altar.io"
                  className="text-pink-500 hover:text-slate-500 cursor-pointer"
                >
                  {" "}
                  milan@altar.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 flex lg:flex-row flex-col md:justify-center gap-20 px-9 lg:px-40 py-32">
        <a href="/">
          <figure>
            <Image
              width={60}
              alt="footer image 2"
              height={70}
              src={mainlogo}
              className=" w-10 h-10"
              style={{ width: 'auto'
              
               }}
            />
          </figure>
        </a>

        <div className="flex lg:flex-row flex-col gap-32 ">
          <div className="flex justify-between md:gap-16 md:w-auto w-full">
            <div className="flex flex-col gap-10">
              <p className="text-white text-lg font-bold">Global</p>
              <ul className="flex flex-col gap-7">
                {footerdata.Globaldata.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.url}
                      className="text-white hover:text-gray-400  transition-colors duration-200 "
                    >
                      {data.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-10">
              <p className="text-white text-lg font-bold">Technology</p>
              <ul className="flex flex-col gap-7">
                {footerdata.Technologydata.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.url}
                      className="text-white hover:text-gray-400  transition-colors duration-200"
                    >
                      {data.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-between md:gap-16 md:w-auto w-full">
            <div className="flex flex-col gap-10">
              <p className="text-white text-lg font-bold">Services</p>
              <ul className="flex flex-col gap-7">
                {footerdata.Servicedata.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.url}
                      className="text-white hover:text-gray-400  transition-colors duration-200"
                    >
                      {data.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-10">
              <p className="text-white text-lg font-bold">Build</p>
              <ul className="flex flex-col gap-7">
                {footerdata.Buildata.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.url}
                      className="text-white   hover:text-gray-400 transition-colors duration-200"
                    >
                      {data.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  px-10 flex flex-col  ">
        <div className="w-full h-0.5 rounded-full bg-gray-500"></div>

        <div className="flex md:flex-row flex-col items-center gap-10 md:gap-0 md:justify-between py-10">
          <div className="text-gray-500 lg:inline hidden">
            © 2024 Altar.io all rights reserved.
          </div>

          <div className="flex gap-2 items-center text-gray-500">
            <a
              href="#privacy-policy-ref"
              className="text-gray-500  hover:text-white transition-colors duration-200 text-[10px] sm:text-[15px]"
            >
              Privacy policy
            </a>
            <div className="text-[10px] sm:text-[15px]">|</div>
            <a
              href="#security-ref"
              className="text-gray-500  hover:text-white transition-colors duration-200 text-[10px] sm:text-[15px]"
            >
              Security
            </a>
            <div className="text-[10px] sm:text-[15px]">|</div>
            <a
              href="#term-of-services-ref"
              className="text-gray-500  hover:text-white transition-colors duration-200 text-[10px] sm:text-[15px]"
            >
              Terms of services
            </a>
          </div>

          <div className="flex gap-3 items-center justify-center">
            <a href="#linkedin">
              <FaLinkedin className="text-gray-400 w-7 h-7 hover:text-red-500 transition-colors duration-200 " />
            </a>
            <a href="#facebook">
              <IoLogoFacebook className="text-gray-400 w-7 h-7 hover:text-red-500 transition-colors duration-200 " />
            </a>
            <a href="#youtube">
              <FaYoutube className="text-gray-400 w-7 h-7 hover:text-red-500 transition-colors duration-200 " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
