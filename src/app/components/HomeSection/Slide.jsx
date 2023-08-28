"use client";
import React from 'react'

import "./banner.css"
import Image from "next/image";
import car from "@/assets/car.png"
import { Swiper, SwiperSlide } from 'swiper/react';
const Slide = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Image src={car} className="flip " width={600} /></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
     
    </Swiper>
  )
}

export default Slide