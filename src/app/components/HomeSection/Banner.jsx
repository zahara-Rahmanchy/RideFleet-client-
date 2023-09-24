"use client";
import React, {useEffect} from "react";
import "./banner.css";
import "swiper/css/bundle";
import Image from "next/image";
import car from "@/assets/car.png";
import jeep from "@/assets/jeep.png";
import bike from "@/assets/motorcycle.png";
import {EffectFade, Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <>
      {" "}
      <section
        className="grid md:grid-cols-2  md:gap-4  bg-[#F8F9FD] h-[500px] "
        style={{backgroundImage: `url(${"/background.jpg"})`}}
      >
        <div className="md:col-span-1  col-span-2    w-full order-2 md:order-1">
          <div className="absolute z-1 md:w-1/2 w-full clip  bg-[#073865] bg-opacity-95 md:h-[500px] h-[150px]"></div>
          <div className="relative z-10 top-4/5 lg:left-1/3 md:left-4/5 md:w-[660px] w-[350px] ">
            <Swiper
              slidesPerView={1}
              loop
              effect="flip"
              autoplay
              modules={[EffectFade, Autoplay]}
              onSwiper={swiper => console.log(swiper)}
            >
              <SwiperSlide>
                <Image src={car} className="flip " width={600} alt="car" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={bike} className=" " width={600} alt="bike" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={jeep} className="flip " width={600} alt="jeep" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex flex-col md:ms-10 justify-center md:bg-transparent bg-sky-950 bg-opacity-90 md:order-2 order-1 z-5   md:mb-10 md:col-span-1  col-span-2 place-items-start  md:ps-20 ps-10  pe-0 me-0">
          <h1
            className="md:text-5xl  text-4xl z-10 md:text-sky-950 text-yellow-200 font-bold pb-3 md:ms-6 mt-5 text-wrap"
            data-aos="zoom-in"
          >
            Ready to Hit <br />
            the Road?
          </h1>
          <h2
            className="md:text-2xl   text-xl z-10 md:text-yellow-400 text-white  italic font-medium  md:ms-6 text-wrap "
            data-aos="zoom-in"
            style={{
              textShadow: "3px 3px 2px rgba(253, 224, 71, 0.8)", // Add your desired text shadow properties here
            }}
          >
            {" "}
            Hire Your Perfect Ride with Us Today!
          </h2>
          <button
            className=" md:ms-6   my-4 btn btn-md bg-blue-800 text-white font-medium border-black-700 border-2 w-24 rounded-lg p-2 flex-none"
            data-aos="zoom-in"
          >
            Hire Now
          </button>
        </div>
      </section>
      {/* <Guideline/> */}
    </>
  );
};

export default Banner;
