// import {useRouter} from "next/router";

import Cloud from "@/components/SVGs/Cloud";
import Image from "next/image";
import "../../../app/globals.css";
import Rates from "@/app/components/HomeSection/Rates";
import {join} from "path";
import Prices from "@/components/Vehicles/Prices";
import Title from "@/app/UtilComponents/Title";
import {formatData} from "@/utils/fomatData";

// import Aos from "aos";
// import "aos/dist/aos.css";
interface IVehicleId {
  params: {
    vehicleId: string;
  };
}
const page = async ({params}: IVehicleId) => {
  //   Aos.init({duration: 1000});
  console.log("param: ", params.vehicleId);
  const url = process.env.NEXT_PUBLIC_BACKEND_API_URL;
  const res = await fetch(`${url}/vehicle/${params.vehicleId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: accessToken ? String(accessToken) : "",
    },

    cache: "no-store",
  });
  const result = await res.json();
  console.dir(result, {depth: null, colors: true});

  return (
    <>
      {" "}
      <Cloud
        className="absolute -z-10 -left-7 w-[300px] h-[500px] -top-28"
        scaling="translate(100 105)"
        fill="#F6FC3C"
      />
      <div className="text-2xl container mx-auto mb-44">
        {/* {params.vehicleId} */}
        {/* <h1 className="text-2xl lg:text-3xl font-semibold text-sky-900 mt-10 mx-4">
          {result.data.model} -{" "}
          <span className="lg:text-2xl text-xl">Features and Pricing</span>
        </h1> */}
        <Title title={`${result.data.model} - Features and Pricing`} />
        <div className="mb-80 mt-20 flex lg:flex-row flex-col items-center lg:justify-normal justify-center">
          {/* left info div */}

          <div className="lg:w-[300px] w-full mx-auto p-4 flex flex-col  lg:items-start items-center top-[40%] space-y-16  h-full lg:order-1 order-2">
            <div className="shadow-lg bg-gray-100 p-5 lg:w-auto w-full">
              <h2 className="text-lg font-semibold text-sky-900 uppercase lg:text-left text-center">
                performance
              </h2>
              <hr className="text-center text-5xl  border-yellow-400 border-2 mx-auto lg:ms-[1px] w-[8.5rem] border-dashed" />

              <ul
                className=" ms-5 list-disc text-base text-blue-800 lg:max-w38 mt-4 "
                style={{lineHeight: "2.5rem"}}
              >
                {formatData(result.data.performance)}
              </ul>
            </div>
            {/* Dimension */}
            <div className="shadow-lg bg-[#eef4fb] p-5 lg:w-auto w-full">
              <h2 className="text-lg font-semibold text-sky-900 uppercase lg:text-left text-center">
                dimensions
              </h2>
              <hr className="text-center text-5xl  border-yellow-400 border-2 mx-auto lg:ms-[1px] w-28 border-dashed" />

              <ul
                className=" ms-5 list-disc text-base text-blue-800 lg:max-w38 mt-4 "
                style={{lineHeight: "2.5rem"}}
              >
                {formatData(result.data.dimensions)}
              </ul>
            </div>

            {/* fuel economy */}
            <div className="shadow-lg bg-gray-100 p-5 lg:w-auto w-full">
              <h2 className="text-lg font-semibold text-sky-900 uppercase lg:text-left text-center">
                fuel Economy
              </h2>
              <hr className="text-center text-5xl  border-yellow-400 border-2 mx-auto lg:mx-[1px] w-[8.75rem] border-dashed" />

              <ul
                className=" ms-5 list-disc text-base text-blue-800 lg:max-w38 mt-4 "
                style={{lineHeight: "2.5rem"}}
              >
                {formatData(result.data.fuelEconomy)}
              </ul>
            </div>

            {/* <h3 className=" text-base text-gray-500">
              {result.data.description}
            </h3> */}
          </div>
          <div className="z-20 perspective-[1000px] lg:mb-30 mb-10 w-full mx-auto image lg:order-2 order-1">
            <Image
              src={result.data.image}
              width={500}
              height={400}
              alt={"car"}
              className="lg:animate-scaleUp scale-100 md:scale-125  mx-auto"
            />
          </div>
          {/* right info div */}
          <div className=" right-0 lg:ms-8 mx-auto p-4 mt-9 lg:mt-auto  w-full lg:w-[calc(100% - 800px)]] flex flex-col lg:items-start items-center space-y-16  h-full  order-3">
            <div className="shadow-lg bg-[#eef4fb] p-5 lg:w-auto w-full">
              <h2 className="text-lg font-semibold text-sky-900 uppercase text-center lg:text-left">
                Interior
              </h2>
              <hr className="text-center text-5xl  border-yellow-400 border-2 lg:mx-[1px] mx-auto w-[5rem] border-dashed" />

              <ul
                className=" ms-5 list-disc text-base text-blue-800 lg:max-w38 mt-4 "
                style={{lineHeight: "2.5rem"}}
              >
                {formatData(result.data.interior)}
              </ul>
            </div>

            {/* safety */}
            <div className="shadow-lg bg-gray-100 p-5 lg:w-auto w-full">
              <h2 className="text-lg font-semibold text-sky-900 uppercase text-center lg:text-left">
                safety
              </h2>
              <hr className="text-center text-5xl  border-yellow-400 border-2 lg:m-[1px] mx-auto w-[4rem] border-dashed" />

              <ul
                className=" ms-5 list-disc text-base text-blue-800 lg:max-w38 mt-4 "
                style={{lineHeight: "2.5rem"}}
              >
                {formatData(result.data.safety)}
              </ul>
            </div>

            {/* additonal info */}
            <div className="shadow-lg bg-[#eef4fb] p-5 lg:w-auto  w-full">
              <h2 className="text-lg font-semibold text-sky-900 uppercase text-center lg:text-left">
                additional Features
              </h2>
              <hr className="text-center text-5xl  border-yellow-400 border-2 lg:mx-[1px] mx-auto w-52 border-dashed" />

              <ul
                className=" ms-5 list-disc text-base text-blue-800 lg:max-w38 mt-4 "
                style={{lineHeight: "2.5rem"}}
              >
                {formatData(result.data.additionalFeatures)}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Prices
        rates={result.data.rent}
        category={result.data.category as string}
      />
      <Cloud
        className="absolute -z-10 right-0 w-[300px] h-[500px] -bottom-44"
        scaling="translate(180 105) scale(-1, 1)"
        fill="#fcff84"
      />
      <Cloud
        className="absolute -z-10  w-[300px] h-[500px] -bottom-[35rem] "
        scaling="translate(0 105) scale(1, -1)"
        fill="#EAF3FE"
      />
    </>
  );
};

export default page;
