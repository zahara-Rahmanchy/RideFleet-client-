"use client";
import React from "react";
import { Parallax } from "react-parallax";
import service from "@/assets/serviceimage.jpg";

const Guideline = () => {
  return (
    <section className="md:my-32 my-20 max-w-7xl mx-auto">
      <Parallax bgImage="/serviceimage.jpg" strength={500}>
        <div className="grid grid-cols-2">
          <div className="md:col-span-1 col-span-2 bg-sky-950 bg-opacity-80 flex justify-center items-center">
            <h3 className="py-10 px-5 ms-10 md:text-7xl text-6xl font-semibold text-yellow-200 text-wrap">
              How Does it Work?
            </h3>
          </div>
          <div className="md:col-span-1 col-span-2 py-10 px-10 bg-sky-950 bg-opacity-80">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    className="w-2.5 h-2.5 text-blue-900 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-yellow-200 dark:text-white">
                  Browse Our Fleet
                </h3>
                <p className="mb-4 text-base font-normal text-white dark:text-gray-400">
                  Explore our diverse vehicle options to find the perfect match
                  for your journey.
                </p>
              </li>
              <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className="mb-1 text-xl font-semibold text-yellow-200 dark:text-white"> Choose Your Date and Time</h3>
           <p className="text-base font-normal text-white dark:text-gray-400">Choose the date and time you want to start your journey. Our booking system allows you to specify when you need the vehicle, ensuring it&apos;s ready when you are.</p>
        </li>
        <li className="ml-6 mb-10">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-yellow-200 dark:text-white"> Select Your Preference</h3>
           <p className="text-base font-normal text-white dark:text-gray-400">At RideFleet, we offer you the choice to drive yourself or opt for a chauffeur-driven experience. Select your preference during the booking process, depending on whether you want to take the wheel or relax as a passenger.</p>
        </li>
        <li className="ml-6 mb-10">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-yellow-200 dark:text-white"> Review and Confirm</h3>
           <p className="text-base font-normal text-white dark:text-gray-400">Double-check your booking details to ensure everything is accurate. Review your vehicle choice, rental period, and any additional services you&apos;ve selected. Once you&apos;re satisfied, confirm your reservation</p>
        </li>
        <li className="ml-6 mb-10">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-yellow-200 dark:text-white"> Vehicle Delivery</h3>
           <p className="text-base font-normal text-white dark:text-gray-400">On the day of your booking, our professional driver will arrive at the specified location with your selected vehicle. Our team ensures a seamless delivery process.</p>
        </li>
            </ol>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Guideline;
