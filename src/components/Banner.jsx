"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";

import bookImg from "../assets/book-open-pages-close-up-600nw-2562942291.webp";
import bookImg2 from "../assets/bookimg2.jpg";
import bookImg3 from "../assets/bookimg3.jpg";
import BookMarquee from "./BookMarquee ";

const Banner = () => {
  return (
    <section className="bg-linear-to-l from-purple-500 to-purple-800 py-8">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left text-white space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Find Your Next Favorite Book
                </h1>

                <p className="text-lg text-gray-200 ">
                  Discover thousands of books across different categories.
                  Borrow, read, and explore the world of knowledge anytime.
                </p>

                <Link href="/all-books">
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                    Browse Now
                  </button>
                </Link>
              </div>

              <div>
                <Image src={bookImg} alt="Books" className="w-full " priority />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left text-white space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Borrow Books Easily
                </h1>

                <p className="text-lg text-gray-200">
                  Borrow books online and continue your reading journey
                  effortlessly.
                </p>

                <Link href="/all-books">
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                    Start Reading
                  </button>
                </Link>
              </div>

              <div>
                <Image src={bookImg2} alt="Library" className="w-full" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left text-white space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Discover New Worlds
                </h1>

                <p className="text-lg text-gray-200 ">
                  Explore Story, Tech, and Science books all in one place.
                </p>

                <Link href="/all-books">
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                    Explore Now
                  </button>
                </Link>
              </div>

              <div>
                <Image src={bookImg3} alt="Reading" className="w-full" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <BookMarquee />
      </div>
    </section>
  );
};

export default Banner;
