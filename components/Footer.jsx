import Image from "next/image";
import React from "react";
import { footerdata } from "../data/footerdata";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import londonlight from "../public/images/city-london-light.png" 
import lisbanlight from "../public/images/city-lisbon-light.png" 
import milanlight from "../public/images/city-milan-light.png" 
import logo2 from '../public/images/review-clutch.svg'
import logo3 from '../public/images/review-pme-22.svg'
import mainlogo from '../public/images/logoalter.svg'

const Footer = () => {
  return (
    <div className="bg-gray-900 overflow-x-hidden">
      <div className="w-screen bg-gray-800 flex justify-center flex-col md:flex-row gap-[70px] md:gap-[80px]  px-[20px] sm:px-[20px] lg:px-[100px] py-[100px] ">
        <div className="w-full md:w-[40%]  flex   flex-col md:justify-end  gap-[40px]">
          <div className="text-white flex gap-[10px] items-center  ">
            <figure>
              <Image
                width={20}
                height={20}
                alt="logo png"
                src={mainlogo}
              />
            </figure>

            <div className="text-xl">alter.io</div>
          </div>

          <p className="text-white text-5xl lg:text-6xl font-bold">
            Let&apos;s talk about <br /> your projects
          </p>
          <a
            href="#schedule-a-call-ref"
            className="border-pink-500 hover:bg-pink-500 transition-colors duration-200  w-[200px] flex items-center justify-center border-4 text-white rounded-full py-[15px]"
          >
            <span>schedule a call</span>
          </a>

          <figure className="flex gap-[20px] items-center">
            <Image
              width={100}
              height={100}
              alt="footer image"
              src={logo2}
            />

              <Image
              width={70}
              height={70}
              alt="footer image"
              src={logo3}
            />

          </figure>
        </div>

        <div className="flex flex-col  justify-start items-start md:justify-end gap-[50px] lg:gap-[50px] md:gap-[30px]">
          <div className="flex flex-col  md:flex-row gap-[20px] items-start md:items-end">
            <figure>
              <Image
                width={130}
                height={130}
                alt="footer image 2"
                src={lisbanlight}
                className=""
              />
            </figure>

            <div>
              <div className="flex flex-col gap-[20px]">
                <div className="text-white text-xl font-bold">Lisbon</div>

                <div className="text-white sm:text-md text-[12px]">
                  Address: R. Adriano C. de Oliveira 4A, 1600-312
                </div>
              </div>

              <div className="text-white flex items-center sm:text-md text-[12px]">
                <div>Phone:</div>
                <a href="tel:+351930944995" className="text-pink-500 hover:text-slate-500 cursor-pointer">
                  +351 930944995
                </a>
              </div>

              <div className="text-white flex items-center gap-[5px] sm:text-md text-[12px]">
                <div>Email:</div>
                <a href="mailto:lisbon@altar.io" className="text-pink-500 hover:text-slate-500 cursor-pointer">
                  lisbon@altar.io
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[20px] items-start md:items-end">
            <figure>
              <Image
                width={120}
                height={120}
                alt="footer image 3"
                src={
                  londonlight
                }
                className=""
              />
            </figure>

            <div>
              <div className="flex flex-col gap-[20px]">
                <div className="text-white text-xl font-bold">London</div>

                <div className="text-white sm:text-md text-[12px]">
                  Address: 36 Wharf Road, N1 7GR
                </div>
              </div>

              <div className="text-white flex items-center sm:text-md text-[12px]">
                <div>Phone:</div>
                <a href="tel:+447802685611" className="text-pink-500 hover:text-slate-500 cursor-pointer">
                  +44 7802685611
                </a>
              </div>

              <div className="text-white flex items-center gap-[5px] sm:text-md text-[12px]">
                <div>Email:</div>
                <a href="mailto:london@altar.io" className="text-pink-500 hover:text-slate-500 cursor-pointer">
                  london@altar.io
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-[20px] flex-col md:flex-row items-start  md:items-end">
            <figure>
              <Image
                width={120}
                height={120}
                alt="footer image 5"
                src={milanlight}
                className=""
              />
            </figure>

            <div>
              <div className="flex flex-col gap-[20px]">
                <div className="text-white text-xl font-bold">MILAN</div>

                <div className="text-white sm:text-md text-[12px]">
                  Address: Via orti 14, 20122
                </div>
              </div>

              <div className="text-white flex items-center sm:text-md text-[12px]">
                <div>Phone:</div>
                <a href="tel:+393318853562" className="text-pink-500 hover:text-slate-500 cursor-pointer">
                  +39 3318853562
                </a>
              </div>

              <div className="text-white flex items-center gap-[5px] sm:text-md text-[12px]">
                <div>Email:</div>
                <a href="mailto:milan@altar.io" className="text-pink-500 hover:text-slate-500 cursor-pointer">
                  {" "}
                  milan@altar.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 flex lg:flex-row flex-col md:justify-center gap-[70px] px-[20px] lg:px-[100px] py-[100px]">
        <a href="/">
          <figure>
            <Image
              width={60}
              alt="footer image 2"
              height={70}
              src={
                mainlogo
              }
              className="w-[60px] h-[70px]"
            />
          </figure>
        </a>

        <div className="flex lg:flex-row flex-col gap-[70px] ">
          <div className="flex justify-between md:gap-[50px] md:w-auto w-full">
            <div className="flex flex-col gap-[20px]">
              <p className="text-white text-[20px] font-bold">Global</p>
              <ul className="flex flex-col gap-[30px]">
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

            <div className="flex flex-col gap-[20px]">
              <p className="text-white text-[20px] font-bold">Technology</p>
              <ul className="flex flex-col gap-[30px]">
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

          <div className="flex justify-between md:gap-[50px] md:w-auto w-full">
            <div className="flex flex-col gap-[20px]">
              <p className="text-white text-[20px] font-bold">Services</p>
              <ul className="flex flex-col gap-[30px]">
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

            <div className="flex flex-col gap-[20px]">
              <p className="text-white text-[20px] font-bold">Build</p>
              <ul className="flex flex-col gap-[30px]">
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

      <div className="w-full  px-[30px] flex flex-col  ">
        <div className="w-full h-[1px] rounded-full bg-gray-500"></div>

        <div className="flex md:flex-row flex-col items-center gap-[20px] md:gap-0 md:justify-between py-[20px]">
          <div className="text-gray-500 lg:inline hidden">
            © 2024 Altar.io all rights reserved.
          </div>

          <div className="flex gap-[10px] items-center text-gray-500">
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

          <div className="flex gap-[10px] items-center justify-center">
            <a href="#linkedin">
              <FaLinkedin className="text-gray-400 w-[24px] h-[24px] hover:text-red-500 transition-colors duration-200 " />
            </a>
            <a href="#facebook">
              <IoLogoFacebook className="text-gray-400 w-[24px] h-[24px] hover:text-red-500 transition-colors duration-200 " />
            </a>
            <a href="#youtube">
              <FaYoutube className="text-gray-400 w-[24px] h-[24px] hover:text-red-500 transition-colors duration-200 " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
