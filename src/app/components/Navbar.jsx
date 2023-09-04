// "use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import favicon from "../../app/favicon.png";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" className="flex items-center">
            <span className="flex text-gray-600 flex-row justify-end items-end self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ride
              <Image src="/favicon.png" width={24} height={24} alt="logo" />
              Fleet
            </span>
          </a>
          <div className="flex items-center">
            <a
              href="tel:5541251234"
              className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline hover:text-red-600"
            >
              (555) 412-1234
            </a>
            <Link
              href="#"
              className="text-sm  text-blue-600 dark:text-blue-500  hover:text-red-600 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <nav className=" bg-gray-800 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-white dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Vehicles"
                  className="text-white dark:text-white hover:underline"
                >
                  Vehicles
                </Link>
              </li>
              <li>
                <Link
                  href="/Types"
                  className="text-white dark:text-white hover:underline"
                >
                  Types
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="text-white dark:text-white hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/Booking"
                  className="text-white dark:text-white hover:underline"
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="text-white dark:text-white hover:underline"
                >
                  About Us
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
