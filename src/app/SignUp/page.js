"use client";
import {Player} from "@lottiefiles/react-lottie-player";
import axios from "axios";
import Link from "next/link";
import React from "react";
import {useForm} from "react-hook-form";
import {FaCar} from "react-icons/fa";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: {errors},
  } = useForm();
  //   to check pass

  const password = watch("password");

  const onSubmit = async data => {
    // const name = data.name;
    // const email = data.email;
    // const password = data.password
    console.log("input", data);

    try {
      const response = await axios.post("api/SignUp", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      console.log(response);
      if (response.status === 200) {
        const responseData = await response.data;
        console.log("Response data:", responseData);
        alert("Registered Successfully!");
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 h-screen w-full ">
      <section className="grid md:grid-cols-2 grid-cols-1 h-full w-full">
        <div
          className="bg-blue-300 md:h-screen h-1/2 z-1 flex flex-col  md:justify-center md:items-center sm:justify-start sm:items-start"
          style={{
            background:
              "linear-gradient(45deg, rgba(31,41,55,1) 0%, rgba(9,49,94,1) 50%, rgba(0,17,31,1) 100%)",
          }}
        >
          {/* <Image src={}/> */}
          <h2 className="italic font-semibold text-3xl text-yellow-300 mb-5 text-center">
            Sign Up
          </h2>
          <Player
            src="login1.json"
            className="player lg:h-[350px] md:h-[250px] h-36 md:w-[500px] w-36"
            loop
            autoplay
          />
        </div>

        {/* form div */}
        <div className="border-2 border-dashed mt-10 md:mt-0 border-sky-900 h-fit rounded-md bg-stone-50 shadow-2xl lg:w-1/3 z-5 absolute md:left-[45%] flex flex-col justify-center items-center place-self-center">
          <form
            className="  w-full mx-10 px-10 h-fit py-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-6 mt-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                {...register("name", {required: "Name is required"})}
              />
            </div>

            <div className="mb-6 ">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z][a-zA-Z0-9_-]{2,}@[a-zA-Z0-9](?:[a-zA-Z0-9.-]*[a-zA-Z0-9])+\.[a-zA-Z]{2,}$/,
                    message:
                      "Please enter a valid email (e.g: user123@subdomain.example.co.uk or user@email.com)",
                  },
                })}
              />
              {errors.email && (
                <span className="text-rose-500 text-xs m-1">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9a-zA-Z]).{6,12}$/,
                    message:
                      "Password should include at least one uppercase, one numeric value and one special character",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum Required length is 6",
                  },
                  maxLength: {
                    value: 12,
                    message: "Maximum Required length is 12",
                  },
                })}
              />
              {errors.password && (
                <span className="text-rose-500 text-xs m-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmpassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirmpassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("confirmpassword", {
                  required: "Confirm Password is Required",
                  validate: value =>
                    value === password ||
                    "The passwords do not match! Check properly",
                })}
              />

              {errors.confirmpassword && (
                <span className="text-red-400 text-xs m-1">
                  {errors.confirmpassword.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="text-sky-950  shadow-2xl hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-yellow-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800  "
            >
              Sign Up
            </button>
          </form>
          <label className="text-sm flex-none mb-6">
            Don&apos;t have an account? Please{" "}
            <Link
              href="/Login"
              className="text-sm  text-blue-600 dark:text-blue-500  hover:text-red-600 hover:underline"
            >
              Login
            </Link>
          </label>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
