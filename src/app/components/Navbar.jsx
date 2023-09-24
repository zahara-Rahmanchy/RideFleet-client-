"use client";
import {useSession} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserProfile from "../UserProfile/UserProfile";
import UserInfo from "./UserInfo";
// import favicon from "../../app/favicon.png";

const Navbar = () => {
  const {data: session} = useSession();
  // console.log("sesssion: " ,session)
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap flex-row justify-between bg-slate-100 items-center   p-4">
          <a href="https://flowbite.com" className="flex items-center">
            <span className="flex text-gray-600 flex-row justify-end items-end self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ride
              <Image src="/favicon.png" width={24} height={24} alt="logo" />
              Fleet
            </span>
          </a>
          {/* {session?"signed in":"not signed"} */}
          <div className="flex flex-row md:justify-around justify-end items-center md:space-x-2  space-x-4 w-52 ">
            <a
              href="tel:5541251234"
              className=" text-sm  text-gray-500 dark:text-white hover:underline hover:text-red-600"
            >
              (555) 412-1234
            </a>
            {session?.user ? (
              <UserInfo />
            ) : (
              <Link
                href="/Login"
                className="text-md md:me-5 text-blue-600 dark:text-blue-500  hover:text-red-600 hover:underline"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
      <nav className=" bg-gray-800 dark:bg-gray-700">
        <div className="max-w-screen-xl px-1 md:py-3 md:px-4 py-5 md:mx-auto">
          <div
            className="  max-w-screen-xl  md:mx-auto justify-between  z-10 w-full "
            id="navbar-cta"
          >
            <ul className="flex flex-row font-medium mt-0 md:mr-6 md:space-x-8 space-x-5 text-xs flex-wrap ">
              <li>
                <Link
                  href="#"
                  className="text-white dark:text-white hover:underline text-xs md:text-base"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/About"
                  className="text-white dark:text-white hover:underline text-xs md:text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Vehicles"
                  className="text-white dark:text-white hover:underline text-xs md:text-base"
                >
                  Vehicles
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/Types"
                  className="text-white dark:text-white hover:underline text-xs md:text-base"
                >
                  Types
                </Link>
              </li> */}
              <li>
                <Link
                  href="/Services"
                  className="text-white dark:text-white hover:underline text-xs md:text-base"
                >
                  Drivers
                </Link>
              </li>

              <li>
                <Link
                  href="/Booking"
                  className="text-white dark:text-white hover:underline text-xs md:text-base "
                >
                  Booking
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
