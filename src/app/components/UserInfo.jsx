"use client";
import {signOut, useSession} from "next-auth/react";
import React, {useState} from "react";
import {FaUserCheck} from "react-icons/fa";
// import "../../global.css";
const UserInfo = () => {
  const {data: session} = useSession();
  const [state, setState] = useState(false);
  return (
    <div className="z-30">
      {/* <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className="text-white  hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <FaUserCheck className="text-sky-800 text-2xl hover:text-blue-700 " />
      </button>

      <div
        id="dropdownHover"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <button onClick={() => signOut()}>Logout</button>
      </div> */}

      <button
        className={` cursor pointer`}
        id="modalbtn"
        onMouseEnter={() => setState(true)}
        onClick={() => setState(!state)}
      >
        <FaUserCheck className="text-sky-800 text-2xl hover:text-blue-700 " />
      </button>
      {/* transform translate-y-2 transition-transform duration-300 ease-linear */}
      {state && (
        <div
          id="modal"
          className={`text-sky-900 flex flex-col justify-center items-center top-[8%] bg-stone-50 border-b-4  border-r-4  border-sky-900 rounded-md opacity-100 h-[300px] w-[250px]  space-y-5 right-[5%]   absolute  `}
        >
          <h2 className="capitalize text-lg font-semibold">
            {session?.user?.name}
          </h2>
          <h2>{session?.user?.email}</h2>
          <button
            onClick={() => signOut()}
            className="bg-yellow-300 text-white p-2 btn btn-sm rounded-md"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
