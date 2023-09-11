"use client";
import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Parallax } from 'react-parallax'
// lex flex-col justify-center items-center
// "linear-gradient(45deg, rgba(97,97,97,1) 0%, rgba(2,56,117,1) 50%, rgba(15,39,57,1) 100%)
const LoginPage = () => {
  return (
    <div className="bg-gray-100 h-screen w-full ">
      <section className="grid grid-cols-2 h-full w-full">

        <div className="bg-blue-300 h-screen z-1 flex justify-center items-center" style={{background: 
          "linear-gradient(45deg, rgba(31,41,55,1) 0%, rgba(9,49,94,1) 50%, rgba(0,17,31,1) 100%)"}}>
           {/* <Image src={}/> */}
           <Player
              src="login2.json"
              className="player"
              loop
              autoplay
              style={{ height: '400px', width: '500px' }}
            />
             </div>
        
        {/* form div */}
        <div className="rounded-md bg-stone-50 shadow-2xl w-1/3 h-1/2 z-5 absolute left-[45%] flex flex-col justify-center items-center place-self-center">

          
          <form className="  w-full mx-10 px-10 h-full py-5">
            <div className="mb-6 mt-6">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
            </div>
            <div className="mb-6">
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            
            <button type="submit" className="text-white shadow-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-yellow-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
          </form>

        </div>
        <label>Already have an account? Please <Link
              href="/SignUp"
              className="text-sm  text-blue-600 dark:text-blue-500  hover:text-red-600 hover:underline"
            >
              Sign Up
            </Link></label>
      </section>

    </div>
  )
}

export default LoginPage