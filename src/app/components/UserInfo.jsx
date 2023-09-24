"use client";
import {signOut, useSession} from "next-auth/react";
import React, {useState} from "react";
import {FaUser, FaUserCheck, FaUserCircle} from "react-icons/fa";
// import "../../global.css";
const UserInfo = () => {
  const {data: session} = useSession();
  const [state, setState] = useState(false);
  return (
    <div className="z-30">
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
          <FaUserCircle className="text-7xl bg-sky-900 text-white rounded-full" />
          <h2 className="capitalize text-lg font-semibold">
            {session?.user?.name}
          </h2>
          <h2>{session?.user?.email}</h2>
          <button
            onClick={() => signOut()}
            className="bg-yellow-300 text-white p-2 btn btn-sm rounded-md hover:bg-blue-800"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
