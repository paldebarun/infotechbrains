"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsX } from "react-icons/bs";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
import { MdInfo } from "react-icons/md";

import Hero1 from "@/public/images/contact/newsletter-fillerimg.jpg";
import S1 from "@/public/images/contact/s1.png";
import S2 from "@/public/images/contact/s2.svg";

const options = [
    {
        id: 1,
        title: "Fintech Application",
    },
    {
        id: 2,
        title: "Data Mining Tool",
    },
    {
        id: 3,
        title: "Open Banking App",
    },
    {
        id: 4,
        title: "Markteplace",
    },
    {
        id: 5,
        title: "API",
    },
    {
        id: 6,
        title: "Aritificial Intelligence Application",
    },
];

const Contact = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [services, setServices] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleServiceChange = (e) => {
        setServices(e.target.value);
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setStep(1);
        document.body.style.overflow = isOpen ? "auto" : "hidden";
    };

    return (
        <Form
            email={email}
            emailChange={handleEmailChange}
            name={name}
            nameChange={handleNameChange}
            phone={phone}
            phoneChange={handlePhoneChange}
            services={services}
            servicesChange={handleServiceChange}
            step={step}
            onNext={nextStep}
            onPrev={prevStep}
            isOpen={isOpen}
            toggleModal={toggleModal}
        />
    );
};

const Form = ({
    email,
    emailChange,
    name,
    nameChange,
    phone,
    phoneChange,
    services,
    servicesChange,
    step,
    onNext,
    onPrev,
    isOpen,
    toggleModal,
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (document.getElementById("subscribe-checkbox").checked) {
            toggleModal();
        }
        onNext();
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        onNext();
    };

    const renderStepContent = () => {
        switch (step) {
            case 2:
                return (
                    <>
                        <div className="isolate p-5 relative z-10 overflow-hidden flex flex-col">
                            <p className="my-2">
                                Hello,{" "}
                                <span className="text-blue-500 font-semibold text-sm">
                                    {email}
                                </span>
                            </p>
                            <h3 className="my-2 text-3xl font-semibold">Add your details.</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Praesent egestas, nisl eu pretium mattis, tortor dolor rutrum
                                dui, a fringilla nulla erat sed justo.
                            </p>
                            <Image
                                src={S1}
                                alt="bg"
                                className="absolute bottom-0 left-0 w-40 overflow-hidden rounded-bl-2xl -z-10 rotate-90"
                            />

                            <form
                                onSubmit={handleSubmit2}
                                className="mt-4 flex flex-col gap-y-2"
                            >
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <input
                                    type="name"
                                    value={name}
                                    onChange={nameChange}
                                    autoComplete="name"
                                    required
                                    className="min-w-0 flex-auto rounded-xl border-0 bg-gray-50/50 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/20 focus:ring-inset sm:text-sm sm:leading-6"
                                    placeholder="Enter your name"
                                />
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Phone{" "}
                                    <span className="text-[0.7rem] text-gray-300 ml-3 inline-flex gap-x-2 my-auto items-center">
                                        <MdInfo /> 00000 00000
                                    </span>
                                </label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={phoneChange}
                                    autoComplete="tel"
                                    required
                                    pattern="^\d{10}$"
                                    className="min-w-0 flex-auto rounded-xl border-0 bg-gray-50/50 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/20 focus:ring-inset sm:text-sm sm:leading-6"
                                    placeholder="Enter your mobile number"
                                />
                                <div className="mt-10 flex items-center gap-x-4 ml-auto">
                                    <button
                                        type="button"
                                        onClick={toggleModal}
                                        className="mx-auto inline-flex items-center gap-3 p-1 text-gray-400 hover:text-blue-600 font-semibold"
                                    >
                                        <FaArrowLeft className="w-3 h-3" />
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="mx-auto border rounded-2xl px-3 py-2 bg-blue-600 text-white hover:bg-blue-700"
                                    >
                                        Next Step
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="isolate p-5 relative z-10 overflow-hidden flex flex-col">
                            <h3 className="my-2 text-3xl font-semibold">
                                Pick your type of project.
                            </h3>
                            <p className="text-base text-gray-500">
                                Praesent egestas, nisl eu pretium mattis, tortor dolor rutrum
                                dui, a fringilla nulla erat sed justo.
                            </p>

                            <Image
                                src={S2}
                                alt="bg"
                                className="absolute bottom-0 left-0 w-28 rotate-180 overflow-hidden rounded-bl-2xl -z-10 "
                            />

                            <form
                                onSubmit={handleSubmit2}
                                className="mt-4 flex flex-col gap-y-2"
                            >
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="month"
                                    >
                                        Services
                                    </label>
                                    <select
                                        className="w-full flex-auto rounded-xl border-0 bg-gray-50/50 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/20 focus:ring-inset sm:text-sm sm:leading-6"
                                        id="month"
                                        required
                                        onChange={servicesChange}
                                        value={services}
                                    >
                                        <option>Pick your type of project here</option>

                                        {options.map((service) => (
                                            <option key={service.id} value={service.title}>
                                                {service.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mt-10 flex items-center gap-x-4 ml-auto">
                                    <button
                                        type="button"
                                        onClick={onPrev}
                                        className="mx-auto inline-flex items-center gap-3 p-1 text-gray-400 hover:text-blue-600 font-semibold"
                                    >
                                        <FaArrowLeft className="w-3 h-3" />
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="mx-auto border rounded-2xl px-3 py-2 bg-blue-600 text-white hover:bg-blue-700"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <div className="isolate p-5 relative z-10 overflow-hidden flex flex-col">
                            <h3 className="my-2 text-3xl font-semibold">Confirmation</h3>

                            <div className="flex flex-col">
                                <span>Email: {email}</span>
                                <span>Name: {name}</span>
                                <span>Phone: {phone}</span>
                                <span>Services: {services}</span>
                            </div>

                            <div className="mt-10 flex gap-x-4 ml-auto items-end">
                                <button
                                    type="button"
                                    onClick={onPrev}
                                    className="mx-auto border rounded-full p-1 hover:bg-gray-200"
                                >
                                    <FaArrowLeft className="w-4 h-4 text-gray-800 hover:text-black" />
                                </button>
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="mx-auto border rounded-full p-1 hover:bg-gray-200"
                                >
                                    <FaChevronRight className="w-4 h-4 text-gray-800 hover:text-black" />
                                </button>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <section className="relative isolate bg-[#1f1c31]">
                <div className="mx-auto grid max-w-full grid-cols-12 gap-y-10 lg:gap-8 lg:gap-y-0">
                    <div className="col-span-12 py-10 md:py-20 lg:py-20 xl:col-span-6">
                        <div className="mx-auto max-w-full px-6 md:max-w-2xl lg:px-8">
                            <button>
                                <a
                                    className="rounded-md max-w-md mx-auto font-semibold px-3.5 tracking-wide py-2.5 text-sm text-white shadow-sm bg-gradient-to-r from-purple-500 to-indigo-600"
                                    href="#"
                                >
                                    Get in Touch
                                </a>
                            </button>
                            <h1 className="mt-8 text-2xl font-semibold md:text-5xl text-white">
                                Initiated a project? <br />
                                <span className=" bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-600">
                                    Let&apos;s Talk
                                </span>
                            </h1>
                            <p className="mt-8 text-base text-gray-400 lg:text-base">
                                Praesent egestas, nisl eu pretium mattis, tortor dolor rutrum
                                dui, a fringilla nulla erat sed justo. Vestibulum maximus
                                pretium massa fringilla fermentum. Aliquam laoreet blandit
                                pellentesque. Phasellus efficitur ante ante. Vivamus nec felis
                                semper dignissim id ut enim. Aliquam consequat blandit felis
                                vitae posuere.
                            </p>

                            <div className="mx-auto mt-10 gap-x-6">
                                <form
                                    onSubmit={handleSubmit}
                                    className="col-span-12 w-full max-w-md lg:col-span-5 lg:mx-0"
                                >
                                    <div className="flex flex-col gap-y-4">
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            value={email}
                                            onChange={emailChange}
                                            autoComplete="email"
                                            required
                                            className="min-w-0 flex-auto rounded-xl border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-black/30 focus:ring-inset sm:text-sm sm:leading-6"
                                            placeholder="Enter your email"
                                        />
                                        <div className="flex space-x-6 items-center">
                                            <button
                                                type="submit"
                                                className="rounded-2xl bg-purple-700 px-5 py-3 text-sm font-semibold tracking-wide text-white shadow-sm"
                                            >
                                                Send mail
                                            </button>
                                            <div className="flex items-center">
                                                <input
                                                    id="subscribe-checkbox"
                                                    name="subscribe"
                                                    type="checkbox"
                                                    required
                                                    className="rounded border-gray-300 text-purple-600 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                                                />
                                                <label
                                                    htmlFor="subscribe-checkbox"
                                                    className="ml-3 text-sm text-gray-300"
                                                >
                                                    I accept all your terms and condition
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="relative col-span-12 xl:col-span-6">
                        <Image
                            src={Hero1}
                            alt="hero image 1"
                            priority={true}
                            className="lg:aspect-auto aspect-[3/2] w-full h-full object-cover object-bottom lg:absolute lg:inset-0 "
                        />
                    </div>
                </div>
            </section>

            {isOpen && (
                <>
                    <div className="overflow-y-auto flex mx-auto my-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0 bg-black bg-opacity-50 animate-fadeIn px-6 sm:px-0">
                        <div className="relative w-full max-w-xl isolate bg-white bg-clip-padding backdrop-filter bg-opacity-[0.985] backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                            <div className="z-50">
                                <div className="">
                                    <button
                                        onClick={toggleModal}
                                        className="text-white pt-5 pr-5 flex ml-auto"
                                    >
                                        <BsX className="w-8 h-8 text-black" />
                                    </button>

                                    {renderStepContent()}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Contact;
