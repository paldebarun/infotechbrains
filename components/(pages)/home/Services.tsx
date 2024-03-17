import React from "react";
import Image from "next/image";
import Left from "@/public/images/home/bg-prop-1-left.svg";
import Right from "@/public/images/home/bg-prop-1-right.svg";

const features = [
    {
        id: 1,
        title: "Push to deploy",
        para: "The Structured Process Behind Successful Product Development",
        href: "#",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                viewBox="0 0 64 66"
                fill="none"
            >
                <path
                    id="Vector"
                    d="M32.0001 63.5413L62.1108 25.6371L47.0555 2.45874M32.0001 63.5413L1.88933 25.6371L16.9447 2.45874M32.0001 63.5413L47.0555 2.45874M32.0001 63.5413L16.9447 2.45874M16.9447 2.45874L47.0555 2.45874M60.6231 25.3059H1.88916"
                    stroke="#0FA4EA"
                    strokeWidth="3.44505"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>
        ),
    },
    {
        id: 2,
        title: "SSL certificates",
        para: "The Structured Process Behind Successful Product Development",
        href: "#",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                viewBox="0 0 66 74"
                fill="none"
            >
                <path
                    id="Vector"
                    d="M2.59026 19.4326L33.17 36.9997M33.17 36.9997L63.0993 19.4331M33.17 36.9997L33.1702 72.1342M2.59009 19.4426L33.0445 1.86572L63.41 19.3931V54.4479L33.0445 71.972L2.67912 54.4479L2.59009 19.4426Z"
                    stroke="#E7107E"
                    strokeWidth="3.25832"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>
        ),
    },
    {
        id: 3,
        title: "Simple queues",
        para: "The Structured Process Behind Successful Product Development",
        href: "#",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                viewBox="0 0 64 74"
                fill="none"
            >
                <path
                    id="Vector"
                    d="M1.81787 54.3569L32.0015 2.08948L62.1819 54.3569M62.1819 54.3569L32.0015 36.9343L1.81788 54.4059L32.0015 71.7793L62.1819 54.3569ZM31.6084 2.08948L31.6084 71.9106"
                    stroke="#F6D200"
                    strokeWidth="3.25832"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>
        ),
    },
    {
        id: 4,
        title: "SSL certificates",
        para: "The Structured Process Behind Successful Product Development",
        href: "#",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                viewBox="0 0 64 72"
                fill="none"
            >
                <g id="Vector">
                    <path
                        d="M22.5793 35.8477L42.0349 69.8438H61.4905L42.0349 35.8477H22.5793Z"
                        stroke="#7B5AB4"
                        strokeWidth="3.17109"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M2.50952 69.8438L22.1699 35.8477H41.8303L22.1699 69.8438H2.50952Z"
                        stroke="#7B5AB4"
                        strokeWidth="3.17109"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M45.7093 16.0127C45.7093 8.35991 39.5055 2.15613 31.8528 2.15613C24.2 2.15613 17.9962 8.35991 17.9962 16.0127C17.9962 23.6654 24.2 29.8692 31.8528 29.8692C39.5055 29.8692 45.7093 23.6654 45.7093 16.0127Z"
                        stroke="#7B5AB4"
                        strokeWidth="3.17109"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </g>
            </svg>
        ),
    },
    {
        id: 5,
        title: "Simple queues",
        para: "The Structured Process Behind Successful Product Development",
        href: "#",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                viewBox="0 0 60 60"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.6964 0C30.3263 0 29.9745 0.161073 29.7326 0.441264L4.70222 29.44C4.28676 29.9213 4.29011 30.6354 4.71006 31.1128L29.7405 59.5677C29.9817 59.842 30.3291 59.9994 30.6944 60C31.0597 60.0006 31.4076 59.8442 31.6497 59.5708L44.1649 45.4339L44.1702 45.4279L56.6854 31.1097C57.1029 30.6322 57.1051 29.9201 56.6906 29.44L31.6602 0.441264C31.4184 0.161073 31.0666 0 30.6964 0ZM53.5793 29.7323L31.9696 38.0254V4.69666L53.5793 29.7323ZM29.4233 4.69666V38.0254L7.81357 29.7323L29.4233 4.69666ZM10.0367 33.3129L27.0832 39.8548L18.56 43.0023L10.0367 33.3129ZM20.3622 45.0511L29.4233 41.705V55.3518L20.3622 45.0511ZM31.9696 55.368V41.7175L41.0331 45.1301L31.9696 55.368ZM34.2794 39.8663L42.834 43.0874L51.3887 33.3004L34.2794 39.8663Z"
                    fill="#49B0B0"
                ></path>
            </svg>
        ),
    },
];

const Services = () => {
    return (
        <section className="bg-white relative isolate border-t py-16 lg:py-24">
            <Image src={Left} alt="left" className="absolute -top-6 -z-10" />
            <div className="mt-10 z-10 max-w-7xl space-y-8 mx-auto lg:px-8 px-6">
                <div className="max-w-3xl">
                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        What we do
                    </h2>
                    <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
                        We help entrepreneurs and business leaders build and launch
                        innovative custom software solutions to the market across a range of
                        verticals & industries. We can help you turn your vision into a
                        successful product together, whether it&apos;s in the form of a
                        Minimum Viable Product, UX/UI services, full product custom software
                        development or help to scale your company.
                    </p>
                </div>

                <div className="flex flex-wrap mx-auto items-center justify-center">
                    {features.map((feature) => (
                        <a
                            href={feature.href}
                            key={feature.id}
                            className="mx-3 flex bg-white lg:h-[18rem] rounded-2xl shadow-2xl border p-6 mt-10 w-[90%] md:w-[40%] lg:w-[31%]"
                        >
                            <div className="flex my-auto flex-col space-y-5">
                                {feature.svg}
                                <h3 className="text-2xl font-bold">{feature.title}</h3>
                                <p className="flex-auto text-gray-600">{feature.para}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Image
                src={Right}
                alt="right"
                className="absolute right-0 bottom-24 -z-10"
            />
        </section>
    );
};

export default Services;
