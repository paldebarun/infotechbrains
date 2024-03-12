'use client'
import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

import posts from '@/data/blogs';

const Blog = () => {

    return (
        <section className="relative bg-[#f4fafe] py-8 md:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-2xl text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Blogs
                    </h2>
                    <p className="mt-3 text-lg leading-8 text-gray-600">
                        Read the latest stories from our world.
                    </p>
                </div>
            </div>

            <div className="relative px-6 md:px-10 overflow-x-hidden ml-6">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    freeMode={true}
                    breakpoints={{
                        // 640: {
                        //   slidesPerView: 2,
                        //   spaceBetween: 20,
                        // },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[FreeMode]}
                    className="mySwiper overscroll-x-none -translate-x-2 md:-translate-x-4"
                    style={{
                        overflow: "visible",
                    }}
                >
                    <Button />

                    {posts.map((post) => (
                        <SwiperSlide key={post.id}>
                            <article className="flex z-20 flex-col items-start bg-white mt-16 border p-8 rounded-2xl h-[27rem]">
                                <div className="my-auto">
                                    <div className="relative w-full">
                                        {post.svg}
                                    </div>
                                    <div className="mt-6 max-w-xl">
                                        <div className="relative">
                                            <h3 className="mt-3 text-3xl font-semibold  text-gray-900 group-hover:text-gray-600">
                                                <a href={post.href}>
                                                    <span className="absolute inset-0" />
                                                    {post.title}
                                                </a>
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-base leading-6 text-gray-700">
                                                {post.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Blog;


const Button = () => {
    const swiper = useSwiper();

    return (

        <div className='flex absolute top-0 items-start right-0 flex-row gap-4 z-50'>
            <button onClick={() => swiper.slidePrev()}>
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
                    className='w-8 h-8 rounded-full bg-pink-500 hover:bg-pink-700 text-white'
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
            </button>

            <button onClick={() => swiper.slideNext()}>
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
                    className='w-8 h-8 rounded-full bg-pink-500 hover:bg-pink-700 text-white'
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>
        </div>
    )
}