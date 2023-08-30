"use client";
import React, { useEffect, useState } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
const Rates = () => {
 

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
    const [rates, setRates] = useState([]);

    useEffect(() => {
      // Fetch data from the JSON file
      fetch('/rates.json')
        .then((response) => response.json())
        .then((data) => {
          setRates(data);
          console.log(rates)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  return (
    <section className='max-w-7xl mx-auto  my-32'>
        <h2 className='text-5xl font-semibold text-sky-900 text-center'>Our Rental Plans</h2>
        <hr className="text-center text-5xl  border-yellow-400 border-2 mx-auto w-24 mt-3 border-dashed mb-16"/>
     <div className='grid lg:grid-cols-3 grid-cols-1 w-full mx-auto place-items-center lg:gap-4 gap-6 '>{rates.map((plan) => (
        <div key={plan.name} className='border-[2px] border-sky-900 p-6 w-4/5' data-aos="slide-up">
            <h2 className='text-sky-600 font-semibold text-2xl text-center mb-4 mt-2' data-aos="slide-up">{plan.name}</h2>
          {plan.vehicles.map((vehicle) => (
            
            <div data-aos="slide-up" key={vehicle.type} className='bg-gray-800 bg-opacity-75 w-full'style={{backgroundImage: `url(${"/background.jpg"})`}}>
            <div  className='flex flex-col justify-center items-center bg-sky-950 p-3 bg-opacity-80'>
             
              <h4 className='text-center font-medium text-xl my-3 text-yellow-200'>{vehicle.type}</h4>
              <ul className=' list-disc '>
              <li className='text-gray-200 text-sm font-medium'>{vehicle.daily} BDT/<span className='text-sm text-center mt-3  '>Day</span></li>              
              <li className='text-gray-200 text-sm font-medium'>{vehicle.weekly} BDT/<span className='text-sm text-center   mt-3 '>Week</span></li>
              <li className='text-gray-200 text-sm font-medium'>{vehicle.monthly} BDT/<span className='text-sm text-center  mt-3 '>Month</span></li>
              </ul></div>
            </div>
          ))}
        </div>
      ))}</div>
    </section>
  )
}

export default Rates