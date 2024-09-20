"use client";
import VehicleSkeleton from "@/components/Vehicles/VehicleSkeleton";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {FaGasPump} from "react-icons/fa";
interface Vehicle {
  id: string;
  brand: string;
  model: string;
  description: string;
  rent: {name: string; perDay: string; perWeek: string; perMonth: string}[];
  image: StaticImport | string;
}

interface VehiclesProps {
  requests: Vehicle[] | null;
  error?: string;
}
const Vehicles = ({requests, error}: VehiclesProps) => {
  // console.dir("data: ", requests);
  const router = useRouter();
  // console.dir({requests}, {depth: null, colors: true});
  console.log(
    "legnt",
    "A rugged and versatile SUV for outdoor adventures. 5 Passengers, 4 Luggages,..."
      .length
  );

  const handleVehicleDetails = (id: string) => {
    router.push(`/Vehicles/${id}`);
  };
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
      {/* grid lg:grid-cols-2 grid-cols-1 lg:ps-0 ps-20  gap-5 col-span-3 my-20  place-items-center place-content-center */}
      {/* col-span-2 */}
      {/* <section className="lg:col-span-3 col-span-4  w-full ">
        <div className="">
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
        <div className="col-span-2">
          {requests ? (
            requests.map((vehicle: any, index: number) => (
              // <article className="pb-9 bg-blue-100 grid grid-cols-2" key={index}>
              //   <div className="relative bg-[#EAF3FE]  py-6 ps-4 pe-5 rounded-md shadow-lg z-10 flex flex-col space-y-2 h-[350px]">
              //     <h2 className="text-xl font-semibold text-sky-900">
              //       {" "}
              //       {vehicle.brand}
              //     </h2>
              //     <h3 className="text-lg font-semibold text-[#62B4C3]">
              //       {vehicle.model}
              //     </h3>

              //     <p className="whitespace-normal w-[100%] text-sm font-normal text-slate-700">
              //       {vehicle.description.length > 74
              //         ? vehicle.description.slice(0, 74) + "..."
              //         : vehicle.description}
              //     </p>

              //     <hr className=" h-1 border-[#62B4C3] " />

              //     <h3 className="text-md font-semibold text-sky-900">
              //       {vehicle.rent[1].name}
              //     </h3>
              //     <ul className=" list-disc ms-8 p-2 " key={index}>
              //       <li className=" text-blue-700">
              //         {vehicle.rent[1].perDay}
              //         <span className="text-xs">/perDay</span>
              //       </li>
              //       <li className="text-rose-500">
              //         {vehicle.rent[1].perWeek}
              //         <span className="text-xs">/perWeek</span>
              //       </li>
              //       <li className="text-green-500">
              //         {vehicle.rent[1].perMonth}
              //         <span className="text-xs">/perMonth</span>
              //       </li>
              //     </ul>

              //     <button
              //       onClick={() => handleVehicleDetails(vehicle.id)}
              //       className="absolute bottom-4 bg-[hsl(189,42%,50%)] font-medium p-1 text-white btn-md text-sm rounded-md w-1/3"
              //     >
              //       Details
              //     </button>
              //   </div>
              //   {/* <div
              //     className=" relative flex  flex-col justify-center align-middle right-[60%] md:col-span-3 lg:col-span-2 w-[250px] h-full "
              //     // style={{
              //     //   backgroundImage: `url('/images/backgroundCloud.svg')`,
              //     //   //   backgroundSize: "350px",
              //     //   backgroundSize: "cover", // or any desired size
              //     //   //   backgroundPosition: "center", // adjust as needed
              //     //   backgroundRepeat: "no-repeat",
              //     // }}
              //   >
              //     <svg
              //       viewBox="0 0 200 200"
              //       xmlns="http://www.w3.org/2000/svg"
              //       className="absolute -z-10  -left-6 lg:w-[300px] sm:w-[350px] h-[500px] "
              //     >
              //       <path
              //         fill="#F6FC3C"
              //         d="M34.2,-51.5C49.2,-43.6,69.6,-42.3,79.2,-32.8C88.7,-23.3,87.4,-5.5,83,10.6C78.7,26.7,71.2,41,59.3,47.3C47.4,53.5,31.1,51.7,15.9,57.9C0.8,64,-13.2,78.1,-27,79.6C-40.8,81.2,-54.4,70.1,-62.3,56.5C-70.2,42.9,-72.2,26.8,-74.6,10.7C-77,-5.4,-79.7,-21.5,-73.8,-33.4C-67.9,-45.2,-53.3,-52.8,-39.6,-61.3C-25.9,-69.7,-12.9,-79.1,-1.7,-76.5C9.6,-73.9,19.2,-59.4,34.2,-51.5Z"
              //         transform="translate(100 105)"
              //       />
              //     </svg>
              //     <Image
              //       src={vehicle.image}
              //       width={500}
              //       height={400}
              //       alt={"car"}
              //       className="z-20 scale-125 hover:scale-150 "
              //     />
              //   </div> 
              // </article>
              // eslint-disable-next-line react/jsx-key
              <div className="bg-green-300 h-[350px]">
                <h2 className="text-xl font-semibold text-sky-900">
                  {vehicle.brand}
                </h2>
              </div>
            ))
          ) : (
            <VehicleSkeleton />
          )}
        </div>
      </section> */}
      <section className="lg:grid lg:grid-cols-2 grid-cols-1 lg:ps-0 mx-4 lg:col-span-3 my-20  place-items-center place-content-center">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-semibold text-sky-900">
            Choose Your Ideal Ride!
          </h1>
          <p className=" font-light text-slate-500 text-sm   my-5">
            Our extensive collection of vehicles offers an array of choices,
            each meticulously crafted to deliver exceptional performance, style,
            and comfort. Explore our impressive fleet and find the perfect
            vehicle that suits your needs and preferences.
          </p>
        </div>
        {requests ? (
          requests.map((vehicle, index) => (
            <article
              className="md:grid md:grid-cols-5 grid-cols-1 lg:gap-y-5 md:my-12 "
              key={index}
            >
              {/* bg-[#EAF3FE] */}
              <div className=" bg-[#EAF3FE] md:col-span-3 col-span-5 py-3 ps-4 pe-5 w-full rounded-md shadow-lg z-10 flex flex-col space-y-2">
                <h2 className="text-xl font-semibold text-sky-900">
                  {" "}
                  {vehicle.brand}
                </h2>
                <h3 className="text-lg font-semibold text-[#62B4C3]">
                  {vehicle.model}
                </h3>
                <p className="whitespace-normal w-[100%] text-sm font-normal text-slate-700">
                  {vehicle.description.length > 74
                    ? vehicle.description.slice(0, 74) + "..."
                    : vehicle.description}
                </p>

                <hr className=" h-1 border-[#62B4C3] " />

                <h3 className="text-md font-semibold text-sky-900">
                  {vehicle.rent[1].name}
                </h3>
                <ul className=" list-disc ms-8 p-2 " key={index}>
                  <li className=" text-blue-700">
                    {vehicle.rent[1].perDay}
                    <span className="text-xs">/perDay</span>
                  </li>
                  <li className="text-rose-500">
                    {vehicle.rent[1].perWeek}
                    <span className="text-xs">/perWeek</span>
                  </li>
                  <li className="text-green-500">
                    {vehicle.rent[1].perMonth}
                    <span className="text-xs">/perMonth</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleVehicleDetails(vehicle.id)}
                  className="bg-[#4ca5b5] font-medium p-1 text-white btn-md text-sm rounded-md lg:w-1/3 w-1/5"
                >
                  Details
                </button>
              </div>
              <div className="lg:overflow-x-visible overflow-x-clip bg-[url('/images/backgroundCloud.svg')] lg:bg-[length:auto_500px] bg-[length:full_300px] lg:bg-repeat bg-no-repeat  lg:bg-right-top bg-center  relative flex  lg:flex-col flex-col justify-center lg:right-[30%]  md:col-span-2 h-full ">
                {/* inset-0 transform scale-y-[-1] <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -z-10 lg:-left-7 left-9 lg:w-[300px] md:w-[900px] w-[300px] h-[900px] lg:-top-28 -top-64"
                >
                  <path
                    fill="#F6FC3C"
                    d="M34.2,-51.5C49.2,-43.6,69.6,-42.3,79.2,-32.8C88.7,-23.3,87.4,-5.5,83,10.6C78.7,26.7,71.2,41,59.3,47.3C47.4,53.5,31.1,51.7,15.9,57.9C0.8,64,-13.2,78.1,-27,79.6C-40.8,81.2,-54.4,70.1,-62.3,56.5C-70.2,42.9,-72.2,26.8,-74.6,10.7C-77,-5.4,-79.7,-21.5,-73.8,-33.4C-67.9,-45.2,-53.3,-52.8,-39.6,-61.3C-25.9,-69.7,-12.9,-79.1,-1.7,-76.5C9.6,-73.9,19.2,-59.4,34.2,-51.5Z"
                    transform="translate(100 105)"
                  />
                </svg> */}
                <Image
                  src={vehicle.image}
                  width={500}
                  height={400}
                  alt={"car"}
                  className=" relative lg:left-0 lg:bottom-0  left-[2rem] bottom-28 z-20 lg:scale-150 hover:scale-150 "
                />
              </div>
            </article>
          ))
        ) : (
          <VehicleSkeleton />
        )}
      </section>
    </>
  );
};

export default Vehicles;
