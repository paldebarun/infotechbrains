"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "@/public/images/home/s1.png";
import S2 from "@/public/images/home/s2.png";
import S3 from "@/public/images/home/s3.png";
import S4 from "@/public/images/home/s4.png";
import S5 from "@/public/images/home/s5.png";
import Link from "next/link";

const services = [
    {
        title: "Free consultation",
        description:
            "It's a good time to get info about each other, share values and discuss your project in detail. We will advise you on a solution and try to help to understand if we are a perfect match for you.",
        img: S1,
        link: "#",
    },
    {
        title: "Discovering and feasibility analysis",
        description:
            "One of our core values is flexibility, hence we work with either one page high level requirements or with a full pack of tech docs. At this stage, we need to ensure that we understand the full scope of the project. Receive from you or perform a set of interviews and prepare the following documents: list of features with detailed description and acceptance criteria; list of fields that need to be scraped, solution architecture. Ultimately we make a project plan which we strictly follow. We are a result-oriented company, and that is one of our core values as well.",
        img: S2,
        link: "#",
    },
    {
        title: "Solution development",
        description: "At this stage, we develop the scraping engine core logic. We run multiple tests to ensure that the solution is working properly. We map the fields and run the scraping. While scraping, we keep the full raw data so the final model can be enlarged easily. Ultimately we store data in any database and run quality assurance tests.",
        img: S3,
        link: "#",
    },
    {
        title: "Data delivery",
        description: "After quality assurance tests are completed, we deliver data and solutions to the client. Though we have over 15 years of expertise in data engineering, we expect client’s participation in the project. While developing and crawling data, we provide midterm results so you can always see where we are and provide us with feedback. By the way, a high-level of communication is also our core value.",
        img: S4,
        link: "#",
    },
    {
        title: "Free consultationy",
        description: "It's a good time to get info about each other, share values and discuss your project in detail. We will advise you on a solution and try to help to understand if we are a perfect match for you.",
        img: S5,
        link: "#",
    },
];

const Home = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    };

    return (
        <section className="relative overflow-hidden bg-white lg:py-12 py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col h-auto lg:h-[34rem] lg:space-x-16 space-y-10 lg:flex-row my-10">
                    <div className="flex flex-col justify-between space-y-10 max-w-lg pr-10 leading-10">
                        <h2 className="text-5xl text-gray-900 sm:text-7xl sm:leading-[1.125]">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-violet-400 to-rose-600">
                                Steps of providing
                            </span> data scraping services
                        </h2>

                        <a href="#" className="flex justify-between text-sm py-2 items-center relative overflow-hidden w-[16rem] px-4 ring-1 ring-gray-400 rounded-3xl hover:bg-indigo-950 hover:text-white">
                            How we help companies?
                            <span className="my-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className=" rounded-full border"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </span>
                        </a>

                    </div>

                    <div className="relative w-full flex flex-col lg:justify-between">
                        <div className="space-y-4 text-left">
                            <Image src={services[index].img} alt="temp" className="mb-8" />
                            <span className="text-3xl font-medium">
                                {`Step ${index + 1} of ${services.length}`}
                            </span>
                            <h2 className="text-3xl mb-4">{services[index].title}</h2>
                            <p className="text-gray-700 mb-4 max-w-lg">
                                {services[index].description}
                            </p>
                        </div>
                        <div className="absolute left-[80%] lg:left-0 lg:bottom-0 w-full flex gap-4">
                            <button
                                onClick={prevSlide}
                                className=" rounded-full border border-gray-300 p-1.5 hover:border-gray-400 hover:bg-indigo-950 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className=" rounded-full border border-gray-300 p-1.5 hover:border-gray-400 hover:bg-indigo-950 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
