"use client";
import {signOut} from "next-auth/react";
import React from "react";
import {FaUserCheck} from "react-icons/fa";

const UserProfile = () => {
  return (
    <>
      <button
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
        {session?.user?.name}
        {session?.user?.email}
        <button onClick={() => signOut()}>Logout</button>
      </div>
    </>
  );
};

export default UserProfile;
