"use client";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {FaGasPump} from "react-icons/fa";
const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/AllVehicles.json")
      .then(response => response.json())
      .then(data => {
        setVehicles(data);
        console.log(vehicles);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(...vehicles);
  return (
    <>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -z-10 -left-7 w-[300px] h-[500px] -top-28"
      >
        <path
          fill="#EAF3FE"
          d="M34.2,-51.5C49.2,-43.6,69.6,-42.3,79.2,-32.8C88.7,-23.3,87.4,-5.5,83,10.6C78.7,26.7,71.2,41,59.3,47.3C47.4,53.5,31.1,51.7,15.9,57.9C0.8,64,-13.2,78.1,-27,79.6C-40.8,81.2,-54.4,70.1,-62.3,56.5C-70.2,42.9,-72.2,26.8,-74.6,10.7C-77,-5.4,-79.7,-21.5,-73.8,-33.4C-67.9,-45.2,-53.3,-52.8,-39.6,-61.3C-25.9,-69.7,-12.9,-79.1,-1.7,-76.5C9.6,-73.9,19.2,-59.4,34.2,-51.5Z"
          transform="translate(100 105)"
        />
      </svg>
      <section className="grid lg:grid-cols-2 grid-cols-1 lg:ps-0 ps-20  gap-5 col-span-3 my-20  place-items-center place-content-center">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-semibold text-sky-900">
            Choose Your Ideal Ride!
          </h1>
          <p className=" font-light text-slate-500 text-sm  w-[80%] my-5">
            Our extensive collection of vehicles offers an array of choices,
            each meticulously crafted to deliver exceptional performance, style,
            and comfort. Explore our impressive fleet and find the perfect
            vehicle that suits your needs and preferences.
          </p>
        </div>
        {vehicles.map((vehicle, index) => (
          <article className="grid grid-cols-5 " key={index}>
            <div className="bg-[#EAF3FE] col-span-3 py-3 ps-4 pe-5 rounded-md shadow-lg z-10 flex flex-col space-y-2">
              <h2 className="text-xl font-semibold text-sky-900">
                {" "}
                {vehicle.brand}
              </h2>
              <h3 className="text-lg font-semibold text-[#62B4C3]">
                {vehicle.model}
              </h3>

              <p className="whitespace-normal w-[80%] text-sm font-normal text-slate-700">
                {vehicle.description}
              </p>
              {/* <div className="grid grid-cols-3">
                <h2>
                  <FaGasPump />
                  {}
                </h2>
                <h2>
                  <FaGasPump />
                </h2>
                <h2>
                  <FaGasPump />
                </h2>
                <h2>
                  <FaGasPump />
                </h2>
                <h2>
                  <FaGasPump />
                </h2>
              </div> */}
              <hr className=" h-1 border-[#62B4C3] " />
              <ul className=" list-disc ms-8 p-2 ">
                <li className=" text-blue-700">
                  {vehicle.rent.perDay}
                  <span className="text-xs">/perDay</span>
                </li>
                <li className="text-pink-500">
                  {vehicle.rent.perWeek}
                  <span className="text-xs">/perWeek</span>
                </li>
                <li className="text-green-500">
                  {vehicle.rent.perMonth}
                  <span className="text-xs">/perMonth</span>
                </li>
              </ul>
              <button className="bg-[#4ca5b5] font-medium p-1 text-white btn-md text-sm rounded-md w-1/3">
                Rent
              </button>
            </div>
            <div className="relative flex  flex-col justify-center right-[30%]  col-span-2 h-full ">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -z-10 -left-7 lg:w-[300px] sm:w-[350px] h-[500px] -top-28"
              >
                <path
                  fill="#F6FC3C"
                  d="M34.2,-51.5C49.2,-43.6,69.6,-42.3,79.2,-32.8C88.7,-23.3,87.4,-5.5,83,10.6C78.7,26.7,71.2,41,59.3,47.3C47.4,53.5,31.1,51.7,15.9,57.9C0.8,64,-13.2,78.1,-27,79.6C-40.8,81.2,-54.4,70.1,-62.3,56.5C-70.2,42.9,-72.2,26.8,-74.6,10.7C-77,-5.4,-79.7,-21.5,-73.8,-33.4C-67.9,-45.2,-53.3,-52.8,-39.6,-61.3C-25.9,-69.7,-12.9,-79.1,-1.7,-76.5C9.6,-73.9,19.2,-59.4,34.2,-51.5Z"
                  transform="translate(100 105)"
                />
              </svg>
              <Image
                src={vehicle.image}
                width={300}
                height={400}
                alt={"car"}
                className="  z-20 scale-125 hover:scale-150"
              />
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Vehicles;
