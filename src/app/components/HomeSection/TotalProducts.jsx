"use client";
import React, { useEffect } from 'react'
import CountUp, {useCountUp} from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";
const TotalProducts = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <section style={{backgroundImage: `url(${"/background.jpg"})`}} className="md:h-[300px] grid md:grid-cols-5 grid-cols-1 place-items-center my-36" data-aos="Fade-up">
         <div className="bg-sky-950 bg-opacity-90 w-full flex flex-col justify-center items-center h-full py-10" data-aos="slide-up">
        <p className="text-white text-4xl" data-aos="slide-right"><CountUpAnimated  end={100} id="carCounter" /><span className="text-yellow-200">+</span></p>
        <hr className=" border-white border-2 w-4 mt-3 border-dashed"/>
          <p className="text-blue-400 mt-3 text-lg" data-aos="slide-right">Types of Cars</p>
        </div>
        <div className="bg-sky-950 bg-opacity-90 w-full flex flex-col justify-center items-center h-full py-10" data-aos="slide-up">
        <p className="text-white text-4xl" data-aos="slide-right"><CountUpAnimated end={50} id="bikeCounter" /><span className="text-yellow-200">+</span></p>
        <hr className=" border-white border-2 w-4 mt-3 border-dashed"/>
          <p className="text-blue-400 mt-3 text-lg"data-aos="slide-right">Types of Bikes</p>
        </div>
        <div className="bg-sky-950 bg-opacity-90 w-full flex flex-col justify-center items-center h-full py-10" data-aos="slide-up">
        <p className="text-white text-4xl" data-aos="slide-right"><CountUpAnimated end={500} id="otherCounter" /><span className="text-yellow-200">+</span></p>
        <hr className=" border-white border-2 w-4 mt-3 border-dashed"/>
          <p className="text-blue-400 mt-3 text-lg"data-aos="slide-right">Others Types of Vehicles</p>
        </div>
        <div className="bg-sky-950 bg-opacity-90 w-full flex flex-col justify-center items-center h-full py-10" data-aos="slide-up">
        <p className="text-white text-4xl" data-aos="slide-right"><CountUpAnimated end={3000} id="rentedVehicle" /><span className="text-yellow-200">+</span></p>
        <hr className=" border-white border-2 w-4 mt-3 border-dashed"/>
          <p className="text-blue-400 mt-3 text-lg"data-aos="slide-right">Rented Vehicles</p>
        </div>

        <div className="bg-sky-950 bg-opacity-90 w-full flex flex-col justify-center items-center h-full py-10" data-aos="slide-up">
        <p className="text-white text-4xl" data-aos="slide-right"><CountUpAnimated end={2000} id="clients" /><span className="text-yellow-200">+</span></p>
        <hr className=" border-white border-2 w-4 mt-3 border-dashed"/>
          <p className="text-blue-400 mt-3 text-lg"data-aos="slide-right">Happy Clients</p>
        </div>

       
    </section>
  )
}

const CountUpAnimated = ({end, id}) => {
    useCountUp({
      ref: id,
      end: end,
      enableScrollSpy: true,
      scrollSpyDelay: 1000,
    });
  
    return <span id={id} />;
  };
  
export default TotalProducts