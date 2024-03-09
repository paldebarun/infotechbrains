import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/home/s1.png";

const feedback = [
    {
        name: "Judith Black 1",
        para: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.",
        social: "@judithblack",
        image: Hero1,
    },
    {
        name: "Judith Black 2",
        para: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.",
        social: "@judithblack",
        image: Hero1,
    },
    {
        name: "Judith Black 3",
        para: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.",
        social: "@judithblack",
        image: Hero1,
    },
];

const Testimonial = () => {
    
    const data = [...feedback, ...feedback];

    return (
        <section className="relative isolate bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Infotechbrains grows with <span className="text-blue-600">you!</span>
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Learn how to grow your business with our expert advice.
                </p>
            </div>
            <div className="mx-auto mt-20 gap-4 overflow-x-scroll">
                <div className="flex gap-10 mx-auto animate-carousel mb-16">
                    {data.map((feed, i) => (
                        <figure
                            key={i}
                            className="relative lg:h-full w-2/3 max-w-[700px] flex-none md:w-[45%]"
                        >
                            <div className="h-full my-auto bg-gray-900 shadow-xl p-3 rounded-2xl">
                                <div className="my-4 flex flex-col items-center">
                                    <blockquote className="text-center text-lg lg:text-xl text-white font-light sm:text-xl sm:leading-7">
                                        <p>{feed.para}</p>
                                    </blockquote>

                                    <figcaption className="mx-auto mt-4 flex justify-center">
                                        <Image
                                            src={feed.image}
                                            alt="profile-1"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div className="ml-5">
                                            <div className="text-lg text-white font-semibold">
                                                {feed.name}
                                            </div>
                                            <a
                                                href="#"
                                                className="text-sm tracking-wide font-semibold text-blue-500"
                                            >
                                                {feed.social}
                                            </a>
                                        </div>
                                    </figcaption>
                                </div>
                            </div>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
