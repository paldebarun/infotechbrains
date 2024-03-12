"use client";

import React, { useState } from "react";
import "./ContactButton.css";

const ServicesSubCards = [
  {
    title: "AI/ML",
    subpara: "Artificial Intelligence(AI) Development Services.",
    initialbgCol: "#f593b2",
    childServices: ["AI Consulting", "AI Software Development", "AIaas(AI as a Service)", "AI App Development Services", "Chatbot Development Services", "Natural Language Processing Services", "Generative AI Development Services", "Smart Ai Assistants & chatbots", "Computer Vision"]
  },
  {
    title: "AI Solutions.",
    subpara: "Handcraft the user experience",
    initialbgCol: "#c993f5",
    childServices: ["Decision Management Solutions", "Deep Learning Solutions", "Expert Systems", "Natural Language Generation Software", "Natural Language Understanding Software", "Edge AI Solutions", "Fine-Tuning Models", "Model Integration and Deployment", "Recommendation Engine"]
  },
  {
    title: "Industry Specific Use-Cases.",
    subpara: "Handcraft the user experience",
    initialbgCol: "#9aafe3",
    childServices: ["Finance", "Healthcare", "Retail", "Manufacturing", "Transportation", "Marketing and Advertising", "Education", "Legal"]
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
      className="group relative m-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative p-6 shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${
          isHovered ? "scale-105 rounded-t-lg" : "rounded-lg"
        }`}
        style={{ backgroundColor: subCardArr.initialbgCol }}
      >
        <h2 className="text-gray-800 text-[27px] font-bold mb-2">
          {subCardArr.title}
        </h2>
        <p className="text-gray-600 font-semibold text-[16px] mr-8">
          {subCardArr.subpara}
        </p>
        {isHovered && (
          <div 
            className="absolute top-full left-0 w-full rounded-b-lg shadow-md py-2 px-4"
            style={{ backgroundColor: subCardArr.initialbgCol }}
          >
            {/* Render services */}
            <div className="flex flex-wrap gap-2">
              {subCardArr.childServices?.map((service, index) => (
                <button
                  key={index}
                  className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md text-sm text-gray-800"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
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

  return (
    <nav className="bg-[#ffffff] py-4 border-b-2 border-[#000000]">
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
            <button className="text-[#000000] mr-6 hover:text-[#ef2168] flex items-center ml-2">
              Services
              <svg
                className="icon ml-1 transition transform group-hover:rotate-180"
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
            <button className="text-[#000000] mr-6 hover:text-[#ef2168] flex items-center ml-2">
              About
              <svg
                className="icon ml-1 transition transform group-hover:rotate-180"
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
  );
};

export { Navbar };
