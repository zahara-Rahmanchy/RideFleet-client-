
"use client";
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./banner.css"
import 'swiper/css';
import Image from 'next/image';
import WaveHaikei from './WaveHaikei';
const HomeVehicles = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
      // Fetch data from the JSON file
      fetch('/vehicles.json')
        .then((response) => response.json())
        .then((data) => {
          setVehicles(data);
          console.log(vehicles)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [vehicles]);
  return (
    <div className='grid grid-cols-6 max-w-8xl mx-auto place-items-center  mb-10  h-full'>
    <div className='md:col-span-2 col-span-6 md:py-20 shadow-sm'><h1 className='text-6xl text-wrap font-bold text-gray-800 p-10'>Choose Your Journey!</h1> <button className='mx-12 btn btn-md bg-blue-800 rounded-md p-3 text-white'>See More</button></div>
    
    <div className=
   "md:col-span-4  col-span-6 md:py-20 py-5 w-full min-h-[400px] place-items-center px-6">
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
            //   spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
            //   spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
            //   spaceBetween: 50,
            },
          }}
        // navigation={{
        //     clickable:true
        // }}
        modules={[Navigation,Pagination]}
        className="mySwiper my-3"
      >
  
  
      {vehicles.map((vehicle, index) => (
      <SwiperSlide>
         
<div  className="max-w-md  bg-gray-100 h-[400px] w-full border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 mb-8 "
style={{backgroundImage: `url(${"/wave-haikei.svg"}`}}>

     <h5 className=" float-right mb-2 text-2xl font-bold tracking-tight text-yellow-200 p-3 dark:text-white">{vehicle.name}</h5>
        
  
        <Image className="rounded-t-lg " src={vehicle.image} width={275} height={250} alt={vehicle.name}/>
    
    <div className=" flex flex-col  h-full mx-3">
        
        <p className="z-10 mb-3  font-normal text-gray-700 dark:text-gray-400 capitalize">{vehicle.price}/<subscript className="text-sm font-light">Day</subscript></p>
        <a href="#" className="z-10 inline-flex w-[30%] items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             Hire
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
    </SwiperSlide> 
   ))}   </Swiper>
   
   </div></div>
  )
}

export default HomeVehicles;