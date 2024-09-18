import React from "react";

const VehicleSkeleton = () => {
  return (
    <div className="relative animate-pulse">
      <div className="grid grid-cols-5 ">
        <div className="bg-gray-100 col-span-3 py-3 ps-4 pe-5 rounded-md shadow-lg z-10 flex flex-col space-y-2 w-72 h-72">
          {/* <div className="bg-[#EAF3FE] col-span-3 py-3 ps-4 pe-5 rounded-md shadow-lg z-10 flex flex-col space-y-2"> */}
          <div className="bg-gray-200 h-2 w-full rounded-md mt-6"></div>

          <p className="whitespace-normal w-[80%] text-sm font-normal text-slate-700"></p>

          <hr className=" h-1 border-gray-200 mb-9" />
          <div className="bg-gray-200 h-2 w-[60%] rounded-md mt-6"></div>

          <ul className=" list-disc ms-8 p-2 text-center">
            <li className="text-gray-200">
              <div className="bg-gray-200 h-2 w-full rounded-md"></div>
            </li>
            <li className="text-gray-200">
              <div className="bg-gray-200  h-2 w-full rounded-md"></div>
            </li>
            <li className="text-gray-200 ">
              <div className="bg-gray-200  h-2 w-full rounded-md"></div>
            </li>
          </ul>
          {/* ))} */}

          <button className="bg-gray-200 font-medium p-1 text-gray-200 btn-md text-sm rounded-md w-1/3">
            Details
          </button>
        </div>
        <div className="relative flex  flex-col justify-center right-[30%]  col-span-2 h-full ">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -z-10  -left-14 lg:w-[350px] sm:w-[350px] h-[300px] -top-8"
          >
            <path
              fill="#F3F4F6"
              d="M34.2,-51.5C49.2,-43.6,69.6,-42.3,79.2,-32.8C88.7,-23.3,87.4,-5.5,83,10.6C78.7,26.7,71.2,41,59.3,47.3C47.4,53.5,31.1,51.7,15.9,57.9C0.8,64,-13.2,78.1,-27,79.6C-40.8,81.2,-54.4,70.1,-62.3,56.5C-70.2,42.9,-72.2,26.8,-74.6,10.7C-77,-5.4,-79.7,-21.5,-73.8,-33.4C-67.9,-45.2,-53.3,-52.8,-39.6,-61.3C-25.9,-69.7,-12.9,-79.1,-1.7,-76.5C9.6,-73.9,19.2,-59.4,34.2,-51.5Z"
              transform="translate(100 105)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VehicleSkeleton;
