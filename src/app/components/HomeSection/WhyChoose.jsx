"use client";
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
const WhyChoose = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <section className="max-w-7xl mx-auto mb-32 md:px-0 px-10">
      <h1 className="text-center text-5xl font-semibold text-sky-950 mt-16" data-aos="fade-up">Why Choose Us?</h1>
      <hr className="text-center text-5xl  border-yellow-400 border-2 mx-auto w-24 mt-3 border-dashed mb-16"/>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8" data-aos="slide-up">
        <div className="shadow-lg bg-gray-100 flex flex-col justify-center p-8">
          <h4 className="text-xl font-bold text-center mb-5 text-sky-900">One-Stop Destination</h4>
          <p className="text-md text-gray-900 text-center">
            Whether it&apos;s a city ride, road trip, or heavy-duty haul,
            our diverse range of vehicles has you sorted. From bikes to trucks,
            we offer affordable options for any occasion.
          </p>
        </div>
        <div className="shadow-lg bg-gray-100 flex flex-col justify-center p-8" data-aos="slide-up">
          <h4 className="text-xl font-bold text-center mb-5 text-sky-900">Affordable Rates</h4>
          <p className="text-md text-gray-900 text-center">
            Enjoy competitive pricing that fits your budget.
            Our rental options ensure you get the best value for your money without compromising on quality.
          </p>
        </div>

        <div className="shadow-lg bg-gray-100 flex flex-col justify-center p-8" data-aos="slide-up">
          <h4 className="text-xl font-bold text-center mb-5 text-sky-900">Ease of Availability</h4>
          <p className="text-md text-gray-900 text-center">
            Need a vehicle on short notice? We&apos;ve got you covered. With a seamless booking process, our vehicles are readily available whenever and wherever you need them.
          </p>
        </div>
        <div className="shadow-lg bg-gray-100 flex flex-col justify-center p-8" data-aos="slide-up">
          <h4 className="text-xl font-bold text-center mb-5 text-sky-900">Safety and Satisfaction Assured</h4>
          <p className="text-md text-gray-900 text-center">
            Your safety and satisfaction are our top priorities. Every vehicle in our fleet undergoes regular maintenance
            and thorough inspections to ensure it&apos;s road-ready and reliable.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
