"use client";
import React from "react";
import {Background, Parallax} from "react-parallax";

const BookingForm = () => {
  return (
    <section className="mb-20">
      <Parallax
        bgImage="/carbooking.jpg"
        strength={300}
        // bgClassName={{
        //   backgroundPosition: "center",
        //   backgroundSize: "contain",
        // }}
        bgImageStyle={{height: "500px", width: "100%"}}
        className="z-20"
      >
        <div className="bg-sky-900 bg-opacity-30 h-[400px] z-20 "></div>
      </Parallax>

      <div className="flex justify-center items-center mb-10">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-10 flex justify-center left-36 w-[250px] h-[300px]  opacity-30 "
        >
          <path
            fill="#53cbe0"
            d="M34.2,-51.5C49.2,-43.6,69.6,-42.3,79.2,-32.8C88.7,-23.3,87.4,-5.5,83,10.6C78.7,26.7,71.2,41,59.3,47.3C47.4,53.5,31.1,51.7,15.9,57.9C0.8,64,-13.2,78.1,-27,79.6C-40.8,81.2,-54.4,70.1,-62.3,56.5C-70.2,42.9,-72.2,26.8,-74.6,10.7C-77,-5.4,-79.7,-21.5,-73.8,-33.4C-67.9,-45.2,-53.3,-52.8,-39.6,-61.3C-25.9,-69.7,-12.9,-79.1,-1.7,-76.5C9.6,-73.9,19.2,-59.4,34.2,-51.5Z"
            transform="translate(100 105)"
          />
        </svg>
        <form
          className=" shadow md:w-[90%] w-full mb-32 bg-sky-950 bg-opacity-80  border-b-4 rounded-lg border-sky-800 mx-auto absolute bottom-0 z-30  p-5"
          data-aos="fade-up"
        >
          <fieldset className="flex md:flex-row flex-col justify-between space-x-8">
            <div
              className="relative z-0 md:w-4/5 w-full mb-6 group"
              data-aos="slide-up"
            >
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-lg peer-focus:-translate-y-6"
              >
                Your Name
              </label>
            </div>
            <div className="relative z-0 w-4/5 mb-6 group" data-aos="slide-up">
              <input
                type="number"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-blue-700 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium  peer-focus:text-lg absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6"
              >
                Mobile
              </label>
            </div>
          </fieldset>
          <fieldset className="flex md:flex-row flex-col justify-between space-x-8">
            <div className="relative z-0 w-4/5 mb-6 group" data-aos="slide-up">
              <input
                type="textarea"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-blue-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium peer-focus:text-lg absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6"
              >
                Vehicle Name
              </label>
            </div>
            <div className="relative z-0 w-4/5 mb-6 group" data-aos="slide-up">
              <input
                type="textarea"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-blue-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium  peer-focus:text-lg absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6"
              >
                Vehicle Type
              </label>
            </div>
          </fieldset>
          <fieldset className="flex md:flex-row flex-col justify-between space-x-8">
            <div className="relative z-0 w-4/5 mb-6 group" data-aos="slide-up">
              <input
                type="datetime-local"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-cyan-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-md text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-lg peer-focus:-translate-y-6"
              >
                Pickup Date and Time
              </label>
            </div>
            <div className="relative z-0 w-4/5 mb-6 group" data-aos="slide-up">
              <input
                type="datetime-local"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-cyan-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-md text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-lg peer-focus:-translate-y-6"
              >
                Drop off Date and Time
              </label>
            </div>
            <div className="relative z-0 w-4/5 mb-6 group" data-aos="slide-up">
              <input
                type="textarea"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-blue-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-normal peer-focus:text-lg absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6"
              >
                Pickup Address
              </label>
            </div>
          </fieldset>
          <fieldset className="flex md:flex-row flex-col justify-between space-x-8">
            <div className="relative z-0 w-4/5 mb-6 group" data-aos="slide-up">
              <input
                type="textarea"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-blue-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-normal peer-focus:text-lg absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6"
              >
                Destination
              </label>
            </div>
            <div className="relative z-0 w-4/5 mb-6 group" data-aos="slide-up">
              <input
                type="textarea"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-blue-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-normal peer-focus:text-lg absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-200 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6"
              >
                Other Note
              </label>
            </div>
          </fieldset>

          <div className="flex md:flex-row-reverse bg-slate-0  mx-auto justify-between flex-col space-x-3">
            <button
              type="submit"
              className="text-white w-1/2 bg-yellow-400 shadow shadow-yellow-200 hover:bg-cyan-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto md:px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Book
            </button>
            <button
              type="submit"
              className="text-white bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto md:px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Select Vehicle
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
