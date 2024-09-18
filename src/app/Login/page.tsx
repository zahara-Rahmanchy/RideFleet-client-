"use client";
import {Player} from "@lottiefiles/react-lottie-player";
import {signIn} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import {FieldValues, useForm} from "react-hook-form";
import {Parallax} from "react-parallax";
import {FcGoogle} from "react-icons/fc";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: {errors},
  } = useForm();
  //   to check pass
  const [error, setError] = useState<string | undefined>();
  const router = useRouter();
  const password = watch("password");

  // credentials signin
  const onSubmit = async (data: FieldValues) => {
    console.log("input", data);

    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      console.log(response);
      if (response?.error) {
        setError("Invalid email or password!. Please check again");
        return;
      }

      if (response?.ok) {
        alert("Logged In");
        reset();
        router.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // google signin https://ride-fleet-client-l6a9.vercel.app
  const handleGoogleSignIn = () => {
    signIn("google", {
      callbackUrl: "http://localhost:3000",
    });
    // alert("Welcome to RideFleet!");
  };
  return (
    <div className="bg-gray-100 h-screen w-full ">
      <section className="grid md:grid-cols-2 grid-cols-1 h-full w-full mb-32">
        <div
          className="bg-blue-300 md:h-screen h-1/2 z-1  flex flex-col justify-center items-center"
          style={{
            background:
              "linear-gradient(45deg, rgba(31,41,55,1) 0%, rgba(9,49,94,1) 50%, rgba(0,17,31,1) 100%)",
          }}
        >
          {/* <Image src={}/> */}
          <h2 className="italic font-semibold text-3xl text-yellow-300 md:mt-0 mt-10">
            Please Sign In
          </h2>
          <Player
            src="login2.json"
            className="player md:h-[400px] md:w-[500px] h-[150px] lg:-top-[10%] relative"
            loop
            autoplay
          />
        </div>

        {/* form div */}
        <div className="rounded-md bg-stone-50 shadow-2xl lg:w-1/3   z-5   absolute md:left-[45%] lg:top-[35%] top-1/2  flex flex-col justify-center items-center place-self-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="  w-full mx-10 px-10 h-full py-5  "
          >
            <div className="mb-6 mt-10">
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
                required
                {...register("email", {required: "Email is required"})}
              />
              {errors.email && (
                <span className="text-rose-500 text-xs m-1">
                  {errors.email.message as string}
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
                {...register("password", {required: "Password is required"})}
              />
              {errors.email && (
                <span className="text-rose-500 text-xs m-1">
                  {errors.email.message as string}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="text-white shadow-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center bg-yellow-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In
            </button>
          </form>
          {error && <span className="text-rose-500 text-sm m-1">{error}</span>}
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px mt-2 mb-6 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              OR
            </span>
          </div>
          {/* onClick={() => signIn("google")} */}
          <button
            onClick={handleGoogleSignIn}
            className="border-sky-400 border-2 hover:bg-sky-200 bg-slate-100 w-1/2 rounded-md p-2 mb-2   flex flex-row items-center justify-evenly"
          >
            <FcGoogle className="text-xl opacity-100" /> Sign In With Google
          </button>

          <label className="mb-6 text-sm pb-4 ">
            Already have an account? Please{" "}
            <Link
              href="/SignUp"
              className="text-sm  text-blue-600 dark:text-blue-500  hover:text-red-600 hover:underline"
            >
              Sign Up
            </Link>
          </label>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
