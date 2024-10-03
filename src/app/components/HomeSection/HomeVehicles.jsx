"use client";
import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";
import "swiper/css";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import {useRouter} from "next/navigation";
// <a target="_blank" href="https://icons8.com/icon/WsJDFFpdTETX/choose">Choose</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
const HomeVehicles = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  const [vehicles, setVehicles] = useState([]);
  const router = useRouter();
  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/vehicles.json")
      .then(response => response.json())
      .then(data => {
        setVehicles(data);
        console.log(vehicles);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div
      className="grid grid-cols-6 max-w-8xl mx-auto place-items-center  mb-10 "
      data-aos="fade-up"
    >
      <div
        className="md:col-span-2 col-span-6 h-[300px]   md:pb-10  items-start justify-start"
        style={{
          backgroundImage: `url(${"/blobs.svg"})`,
          backgroundColor: "transparent",
        }}
      >
        <div className="flex flex-row items-center justify-evenly ms-9">
          <h1
            className="ps-10 text-6xl text-wrap font-bold text-sky-950 pb-10"
            data-aos="slide-up"
          >
            Find Your Journey!
          </h1>
        </div>

        <button
          data-aos="fade-up"
          onClick={() => router.push("/Vehicles")}
          className="cursor-pointer ms-20 btn btn-md bg-yellow-300 rounded-md p-2 text-sky-950 hover:bg-blue-800 hover:text-white text-lg font-semibold w-1/2"
        >
          See More
        </button>
      </div>

      <div className=" md:col-span-4  col-span-6  py-5 w-full h-[500px] place-items-center px-6 mx-4">
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
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper my-3"
        >
          {vehicles.map((vehicle, index) => (
            <SwiperSlide key={index}>
              <div
                className=" flex flex-col max-w-md overflow-clip h-[400px] w-full border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 mb-8 transform transition-transform hover:-translate-y-6  duration-300 hover:border-sky-800 hover:border-b-8 "
                data-aos="zoom-in"
                style={{
                  backgroundImage: `url(${"/wave-haikei.svg"})`,
                  backgroundColor: "red",
                  backgroundPosition: "top-left",
                  backgroundSize: "cover",
                }}
              >
                <h5
                  className=" float-right mb-2 text-2xl font-bold tracking-tight text-yellow-200 p-3 dark:text-white"
                  data-aos="slide-up"
                >
                  {vehicle.name}
                </h5>

                <Image
                  className="rounded-t-lg "
                  src={vehicle.image}
                  width={275}
                  height={250}
                  alt={vehicle.name}
                />

                <div className="  mt-auto mb-6 mx-6" data-aos="slide-up">
                  <p className="justify-end mt-7 z-10 mb-3 text-lg font-semibold text-sky-900 dark:text-gray-400 capitalize">
                    {vehicle.price}/
                    <subscript className="text-sm font-light">Day</subscript>
                  </p>
                  <button className="hover:bg-sky-900 bg-yellow-300 btn rounded-md py-1 px-4 text-white">
                    Hire
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}{" "}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeVehicles;
