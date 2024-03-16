"use client";

import React, { useState, useEffect, useRef } from "react";
import "./ContactButton.css";

const ServicesSubCards = [
  {
    title: "AI/ML",
    subpara: "Artificial Intelligence(AI) Development Services.",
    initialbgCol: "#f593b2",
    childServices: [
      "AI Consulting",
      "AI Software Development",
      "AIaas(AI as a Service)",
      "AI App Development",
      "Chatbot Development",
      "Natural Language Processing",
      "Generative AI Development",
      "Smart Ai Assistants & chatbots",
      "Computer Vision",
    ],
  },
  {
    title: "AI Solutions.",
    subpara: "Handcraft the user experience",
    initialbgCol: "#c993f5",
    childServices: [
      "Decision Management Solutions",
      "Natural Language Generation Software",
      "Recommendation Engine",
      "Deep Learning Solutions",
      "Natural Language Understanding Software",
      "Model Integration and Deployment",
      "Edge AI Solutions",
      "Fine-Tuning Models",
      "Expert Systems",
    ],
  },
  {
    title: "Industry Specific Use-Cases.",
    subpara: "Handcraft the user experience",
    initialbgCol: "#9aafe3",
    childServices: [
      "Finance",
      "Healthcare",
      "Retail",
      "Manufacturing",
      "Transportation",
      "Marketing and Advertising",
      "Education",
      "Legal",
    ],
  },
];

const AboutSubCards = [
  {
    title: "About us.",
    subpara: "Handcraft the user experience",
    initialbgCol: "#f593b2",
  },
  {
    title: "Team.",
    subpara: "Handcraft the user experience",
    initialbgCol: "#c993f5",
  },
  {
    title: "Career.",
    subpara: "Handcraft the user experience",
    initialbgCol: "#9aafe3",
  },
];

const Card = ({ setIsDropdownOpen, subCardArr }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="group relative m-3 sm:m-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 ${
          isHovered ? "scale-105" : ""
        }`}
        style={{ backgroundColor: subCardArr.initialbgCol }}
      >
        <h2 className="text-gray-800 text-[27px] font-bold mb-2">
          {subCardArr.title}
        </h2>
        <p className="text-gray-600 font-semibold text-[16px] sm:mr-8">
          {subCardArr.subpara}
        </p>
        {isHovered && (
          <div
            className="left-0 w-full rounded py-2 px-4 mt-3"
            style={{ backgroundColor: subCardArr.initialbgCol }}
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {subCardArr.childServices?.map((service, index) => (
                <a
                  key={index}
                  href={`#${service}`}
                  className="text-gray-800 hover:text-[#ef2168] text-sm"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CardMob = ({ setIsDropdownOpen, subCardArr }) => {
  const [isOnClick, setIsOnClick] = useState(false);

  const handleClick = () => {
    setIsOnClick(!isOnClick);
  };

  return (
    <div
      className="group relative m-3 sm:m-3 hover:cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`relative p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 ${
          isOnClick ? "scale-105" : ""
        }`}
        style={{ backgroundColor: subCardArr.initialbgCol }}
      >
        <h2 className="text-gray-800 text-[27px] font-bold mb-2">
          {subCardArr.title}
        </h2>
        <p className="text-gray-600 font-semibold text-[16px] sm:mr-8">
          {subCardArr.subpara}
        </p>
        {isOnClick && (
          <div
            className="left-0 w-full rounded py-2 px-4 mt-4 mb-3"
            style={{ backgroundColor: subCardArr.initialbgCol }}
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {subCardArr.childServices?.map((service, index) => (
                <a
                  key={index}
                  href={`#${service}`}
                  className="text-gray-800 hover:text-[#ef2168] text-sm"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const handleServicesDropdownToggle = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsAboutDropdownOpen(false);
  };

  const handleAboutDropdownToggle = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsServicesDropdownOpen(false);
  };

  const handleNavLinkClick = () => {
    setIsServicesDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsServicesDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-[#ffffff] py-4 border-b-2 border-[#000000] lg:hidden">
        {" "}
        {/* Adjusted class for smaller screens */}
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-[#000000] text-xl md:right-[100%] font-bold hidden md:block">
            InfoTechBrains
          </a>
          <button
            onClick={toggleMenu}
            className="text-[#000000] hover:text-[#ef2168] ml-[90%] md:ml-[70%] focus:outline-none lg:hidden"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-7 h-7 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div
            className={`fixed top-0 left-0 w-screen h-screen bg-white z-50 overflow-y-auto ${
              isOpen ? "block md:w-[50%] md:ml-[50%]" : "hidden"
            }`}
          >
            <button
              onClick={() => setIsOpen(false)} // Use a function to set isOpen to false
              className="text-[#000000] duration-75 hover:text-[#ef2168] focus:outline-none lg:hidden"
            >
              {/* Cross Icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-[34px] h-[34px] md:w-[38px] md:h-[38px] m-2 text-[#ef2168]"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                strokeWidth="2"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6 6L18 18"
                    stroke="#000000"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M18 6L6 18"
                    stroke="#000000"
                    strokeLinecap="round"
                  ></path>
                </g>
              </svg>
            </button>
            <div className="container mx-auto md:m-0 py-4">
              <ul className="space-y-4 m-[10px]">
                <li>
                  <a
                    href="#"
                    className="text-[#000000] text-xl font-bold md:hidden"
                  >
                    InfoTechBrains
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#000000] text-[24px] font-bold hover:text-[#ef2168] block"
                  >
                    Work
                  </a>
                </li>
                <li className="relative">
                  <button
                    onClick={handleServicesDropdownToggle}
                    className={`text-[24px] font-bold hover:text-[#ef2168] block ${
                      isServicesDropdownOpen
                        ? "text-[#ef2168] "
                        : "text-[#000000]"
                    }`}
                  >
                    Services
                    <svg
                      className={`icon ml-1 transition transform ${
                        isServicesDropdownOpen ? "rotate-180" : ""
                      }`}
                      width="14"
                      height="16"
                      viewBox="0 0 320 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
                    </svg>
                  </button>
                  {/* Services Dropdown */}
                  <div
                    className={`top-full left-0 w-full bg-white py-2 px-4 ${
                      isServicesDropdownOpen ? "block" : "hidden"
                    }`}
                  >
                    {ServicesSubCards.map((subCard, index) => (
                      <CardMob
                        key={index}
                        setIsDropdownOpen={setIsServicesDropdownOpen}
                        subCardArr={subCard}
                      />
                    ))}
                  </div>
                </li>
                <li className="relative">
                  <button
                    onClick={handleAboutDropdownToggle}
                    className={`text-[24px] font-bold hover:text-[#ef2168] block ${
                      isAboutDropdownOpen ? "text-[#ef2168]" : "text-[#000000]"
                    }`}
                  >
                    About
                    <svg
                      className={`icon ml-1 transition transform ${
                        isAboutDropdownOpen ? "rotate-180" : ""
                      }`}
                      width="14"
                      height="16"
                      viewBox="0 0 320 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
                    </svg>
                  </button>
                  {/* About Dropdown */}
                  <div
                    className={`top-full left-0 w-full bg-white py-2 px-4 ${
                      isAboutDropdownOpen ? "block" : "hidden"
                    }`}
                  >
                    {AboutSubCards.map((subCard, index) => (
                      <CardMob
                        key={index}
                        setIsDropdownOpen={setIsAboutDropdownOpen}
                        subCardArr={subCard}
                      />
                    ))}
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#000000] text-[24px] font-bold hover:text-[#ef2168] block"
                  >
                    Clients
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#000000] text-[24px] font-bold hover:text-[#ef2168] block"
                  >
                    Knowledge
                  </a>
                </li>
                <li>
                  <div class="button">
                    <span class="label-up">Contact</span>
                    <span class="label-up">Contact</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-[#ffffff] py-4 border-b-2 border-[#000000] hidden lg:block">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-[#000000] text-xl font-bold">
            InfoTechBrains
          </a>
          <div className="flex items-center justify-center flex-1">
            <a
              href="#"
              className="text-[#000000] mr-6 hover:text-[#ef2168] ml-2"
              onClick={handleNavLinkClick}
            >
              Work
            </a>
            <div
              className="relative group"
              onClick={handleServicesDropdownToggle}
            >
              <button
                className={`mr-6 hover:text-[#ef2168] flex items-center ml-2 ${
                  isServicesDropdownOpen ? "text-[#ef2168]" : "text-[#000000]"
                }`}
              >
                Services
                <svg
                  className={`icon ml-1 transition transform ${
                    isServicesDropdownOpen ? "rotate-180" : ""
                  }`}
                  width="14"
                  height="16"
                  viewBox="0 0 320 512"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
                </svg>
              </button>
              <div
                className={`absolute w-[1562px] mr-5 bg-white border-b-2 border-[#000000] py-2 px-4 top-12 left-[170px] transform -translate-x-1/2 ${
                  isServicesDropdownOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                } transition duration-300`}
              >
                <div className="flex flex-row justify-center">
                  {ServicesSubCards?.map((subCard, index) => (
                    <Card
                      key={index}
                      setIsDropdownOpen={setIsServicesDropdownOpen}
                      subCardArr={subCard}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group" onClick={handleAboutDropdownToggle}>
              <button
                className={`mr-6 hover:text-[#ef2168] flex items-center ml-2 ${
                  isAboutDropdownOpen ? "text-[#ef2168]" : "text-[#000000]"
                }`}
              >
                About
                <svg
                  className={`icon ml-1 transition transform ${
                    isAboutDropdownOpen ? "rotate-180" : ""
                  }`}
                  width="14"
                  height="16"
                  viewBox="0 0 320 512"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
                </svg>
              </button>
              <div
                className={`absolute w-[1562px] bg-white border-b-2 border-[#000000] py-2 px-4 top-12 left-[20%] transform -translate-x-1/2 ${
                  isAboutDropdownOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                } transition duration-300`}
              >
                <div className="flex flex-row justify-center">
                  {AboutSubCards.map((subCard, index) => (
                    <Card
                      key={index}
                      setIsDropdownOpen={setIsAboutDropdownOpen}
                      subCardArr={subCard}
                    />
                  ))}
                </div>
              </div>
            </div>
            <a
              href="#"
              className="text-[#000000] mr-6 hover:text-[#ef2168] ml-2"
              onClick={handleNavLinkClick}
            >
              Clients
            </a>
            <a
              href="#"
              className="text-[#000000] mr-6 hover:text-[#ef2168] ml-2"
              onClick={handleNavLinkClick}
            >
              Knowledge
            </a>
            <div class="button">
              <span class="label-up">Contact</span>
              <span class="label-up">Contact</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
