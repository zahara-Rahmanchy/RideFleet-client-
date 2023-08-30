"use client";
import React, { useEffect } from 'react'
import { Parallax } from 'react-parallax'
import Aos from "aos";
import "aos/dist/aos.css";

 
const Booking = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <Parallax bgImage="/blue-jeep.jpg" strength={500} className="min-h-[400px] mb-10">
<section className="grid grid-cols-3 bg-sky-950 bg-opacity-70 h-full ">
<section className="md:col-span-2 col-span-3 md:p-20 p-5 md:order-1 order-2 w-full" ><form className='md:w-[90%] w-full bg-sky-950 bg-opacity-50 rounded-md p-5' data-aos="fade-up">
<div className="relative z-0 md:w-4/5 w-full mb-6 group" data-aos="slide-up">
        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-blue-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
    </div>
  <div className="relative z-0 w-4/5 mb-6 group" data-aos="slide-up">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-blue-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-blue-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-4/5 mb-6 group" data-aos="slide-up">
      <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-blue-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-blue-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
</div>
  
 
 
  
  <button type="submit" className="text-white bg-yellow-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto md:px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book</button>
</form>
</section>
  <section data-aos="fade-up" className='md:col-span-1 col-span-3 md:order-2 order-1 flex flex-col  justify-center p-4'><h2 className='text-4xl text-yellow-200 font-semibold mt-10'>Making your Booking.</h2>
   <p className='mt-3 text-md text-white text-wrap' data-aos="slide-up">Fiil up the form with your details and get the ride at your doorstep</p>

  <div className='flex flex-row items-center space-x-3' data-aos="slide-up">
  <hr className='w-1/2' /> <p className='text-yellow-200'> OR</p> <hr className='w-1/2'/>
  </div>

  <button  data-aos="slide-up" className='btn bg-yellow-200 font-medium text-xl p-4 rounded-lg text-sky-900 mt-3 w-4/5 mx-auto'>Call us On: 0132889798</button>
   </section>
 
</section>
    </Parallax>
        

    
  )
}

export default Booking