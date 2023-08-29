"use client";
import Image from 'next/image';
import React, { useEffect } from 'react'
import {FaUsers} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Discount = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <section className="h-[400px] grid grid-cols-2 " style={{backgroundImage: `url(${"/brandon.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"}}>

        <div className="bg-sky-950 bg-opacity-80 h-[400px] flex flex-col justify-center items-center" data-aos="fade-up">
        <Image src="/students.png" width={90} height={24} alt="logo" />
            <h2 className="text-lg mb-3 text-white" data-aos="slide-up">Student</h2>
            <h3 className="text-2xl mb-3 text-yellow-200 font-semibold text-wrap" data-aos="slide-up"> Get 30% Discount</h3>
            <p className="text-blue-100 text-center w-1/2 text-wrap" data-aos="fade-up">On first booking,enter your Institute name and confirm with your identity card and phone number</p>
        </div>
        <div className="bg-sky-950  bg-opacity-80 h-[400px] flex flex-col justify-center items-center" data-aos="slide-up">
         <FaUsers className="text-8xl text-blue-500" data-aos="slide-up"/>
         <h2 className="text-lg mb-3 text-white" data-aos="slide-up">Other Users</h2>
            <h2 className="text-2xl mb-3 text-yellow-200 font-semibold text-wrap" data-aos="slide-up"> Get 25% Discount </h2>
            <p className="text-blue-100 text-center w-1/2 text-wrap" data-aos="slide-up">For regular users, get 25% discount on your first booking</p>
        </div>
    </section>
  )
}

export default Discount