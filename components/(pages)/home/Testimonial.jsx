import React from 'react'
import Image from 'next/image'
import Hero1 from '@/public/images/home/s1.png'

const feedback = [
    {
        name: "Judith Black",
        para: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.",
        social: "@judithblack",
        image: Hero1,
    },
    {
        name: "Judith Black",
        para: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.",
        social: "@judithblack",
        image: Hero1,
    },
    {
        name: "Judith Black",
        para: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.",
        social: "@judithblack",
        image: Hero1,
    },
]
const Testimonial = () => {

    const data = [...feedback, ...feedback];

    return (
        <section className="relative isolate bg-white py-16 md:py-24">
            <div className="mx-auto">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Infotechbrains grows with <span className='text-blue-600'>you!</span>
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="mx-auto mt-20 gap-4 overflow-x-scroll">
                    <div className='flex gap-4 mx-auto animate-carousel'>
                        {data.map((feed, i) => (
                            <article
                                key={i}
                                className="relative aspect-square h-[60vh] max-h-[340px] w-2/3 max-w-[36rem] mx-10 flex-none md:w-[44%]"
                            >
                                <figure className="items-center gap-8 border bg-gray-50 border-gray-200 shadow-xl p-3 rounded-2xl">
                                    <div className="my-4">
                                        <blockquote className="text-center text-xl text-black font-light sm:text-xl sm:leading-7">
                                            <p>
                                                {feed.para}
                                            </p>
                                        </blockquote>

                                        <figcaption className="mx-auto mt-8 flex justify-center">
                                            <Image
                                                src={feed.image}
                                                alt="profile-1"
                                                className="h-12 w-12 rounded-full object-cover"
                                            />
                                            <div className="ml-5">
                                                <div className="text-lg text-black font-semibold">
                                                    {feed.name}
                                                </div>
                                                <a href="#" className='text-sm tracking-wide font-semibold text-indigo-700'>
                                                    {feed.social}
                                                </a>
                                            </div>
                                        </figcaption>
                                    </div>
                                </figure>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial