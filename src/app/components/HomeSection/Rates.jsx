"use client";
import React, { useEffect, useState } from 'react'

const Rates = () => {
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
        <h2 className='text-5xl font-semibold text-sky-900 text-center mb-16'>Our Rental Plans</h2>
     <div className='grid md:grid-cols-3 grid-cols-1 w-full mx-auto place-items-center gap-4 '>{rates.map((plan) => (
        <div key={plan.name} className='border-[1px] border-sky-900 p-6 w-4/5'>
            <h2 className='text-sky-600 font-semibold text-2xl text-center mb-4 mt-2'>{plan.name}</h2>
          {plan.vehicles.map((vehicle) => (
            
            <div key={vehicle.type} className='bg-gray-800 bg-opacity-75 w-full'style={{backgroundImage: `url(${"/background.jpg"})`}}>
            <div  className='flex flex-col justify-center items-center bg-sky-950 p-3 bg-opacity-90'>
             
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