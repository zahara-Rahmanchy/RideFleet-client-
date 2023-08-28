"use client";
import React from 'react'

const Discount = () => {
  return (
    <div className='h-[400px]' style={{backgroundImage: `url(${"/background.jpg"})`}}>
        <div className='bg-gray-950 bg-opacity-70 h-[400px] flex md:flex-row justify-center items-center'>
            <h2 className='text-4xl text-white font-semibold text-wrap '> Get 25% Discount <br/> On Your First Ride </h2>
        </div>
    </div>
  )
}

export default Discount