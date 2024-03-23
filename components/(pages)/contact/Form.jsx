import React from 'react'
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

const Form = () => {
    return (
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

            <div className='w-full my-auto'>
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
    )
}

export default Form