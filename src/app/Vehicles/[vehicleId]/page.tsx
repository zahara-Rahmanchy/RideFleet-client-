// import {useRouter} from "next/router";

import BlueCloud from "@/components/SVGs/BlueCloud";
import Image from "next/image";
import "../../../app/globals.css";
import Rates from "@/app/components/HomeSection/Rates";
import {join} from "path";
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

  const str =
    "Seating Capacity: 5, Upholstery: Leather, Infotainment: 8.4-inch touchscreen, Apple CarPlay, Android Auto, Climate Control: Dual-zone automatic climate control";

  const formatData = (str: string) => {
    const formattedDetails = str.split(",").map((item, index) => {
      const parts = item.split(":");
      if (parts.length === 2) {
        return (
          <li key={index} className="m-w38">
            <span className="font-medium text-sky-600">{parts[0]}:</span>{" "}
            <span className="text-base text-gray-500">{parts[1]}</span>
          </li>
        );
      } else {
        console.log(item + index);
      }
    });
    return formattedDetails;
  };

  const newformatData = (str: string) => {
    const newS = str.split(":").map((item, index) => {
      console.log("item: ", item);
    });
    return newS;
  };

  console.log("formate4d: ", newformatData(str));
  return (
    <>
      {" "}
      <BlueCloud
        className="absolute -z-10 -left-7 w-[300px] h-[500px] -top-28"
        scaling="translate(100 105)"
      />
      <div className="text-2xl container mx-auto mb-44">
        {/* {params.vehicleId} */}
        <h1 className="text-3xl font-semibold text-sky-900 mt-10">
          {result.data.model} -{" "}
          <span className="text-2xl">
            Features, Pricing, and Rental Information
          </span>
        </h1>
        <div className="mb-80 mt-20 flex items-center">
          {/* left info div */}

          <div className=" w-[300px] flex flex-col top-[40%] space-y-16  h-full">
            {/* <h3 className=" text-base text-gray-500 max-w38">
              {result.data.description}
            </h3> */}

            <div>
              <h2 className="text-lg font-semibold text-sky-900 uppercase">
                performance
              </h2>
              <hr className="text-center text-5xl  border-yellow-400 border-2 ms-[1px] w-24 border-dashed" />

              <ul className=" ms-5 list-disc text-base text-gray-500 max-w38 mt-4 ">
                {formatData(result.data.performance)}
                {/* {formattedDetails} */}

                {/* {result.data.performance} */}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-sky-900 uppercase">
                dimensions
              </h2>
              <hr className="text-center text-5xl  border-yellow-400 border-2 ms-[1px] w-24 border-dashed" />

              <ul className=" ms-5 list-disc text-base text-sky-900 mt-4 m-w38">
                {formatData(result.data.dimensions)}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-sky-900 uppercase">
                fuel Economy
              </h2>
              <hr className="text-center text-5xl  border-yellow-400 border-2 ms-[1px] w-24 border-dashed" />

              <h3 className=" text-base text-gray-500 mt-4 m-w38">
                {result.data.fuelEconomy}
              </h3>
            </div>
            {/* <h3 className=" text-base text-gray-500">
              {result.data.description}
            </h3> */}
          </div>
          <Image
            src={result.data.image}
            width={500}
            height={400}
            alt={"car"}
            className="z-20 scale-150  mx-auto image "
          />
          {/* right info div */}
          <div className="right-0 ms-8 w-[calc(100% - 800px)]] flex flex-col space-y-16  h-full">
            <div>
              <h2 className="text-lg font-semibold text-sky-900 uppercase">
                Interior
                <hr className="text-center text-5xl  border-yellow-400 border-2 mx-6 w-[10%]  border-dashed" />
              </h2>
              {/* <hr className="text-center text-5xl  border-yellow-400 border-2 ms-[1px] w-24 border-dashed" /> */}
              <ul className=" text-base text-gray-500 max-w38 mt-4">
                {formatData(result.data.interior)}
              </ul>
            </div>

            <div>
              {" "}
              <h2
                className="text-lg font-semibold text-sky-900 uppercase "
                // style={{borderWidth: "50%"}}
              >
                safety
                <hr className="text-center text-5xl  border-yellow-400 border-2 w-[20%] border-dashed" />
              </h2>
              <h3 className=" text-base text-sky-900 max-w38 mt-4">
                {result.data.safety}
              </h3>
            </div>

            <div>
              {" "}
              <h2 className="text-lg font-semibold text-sky-900 uppercase">
                additional Features
                <hr className="text-center text-5xl  border-yellow-400 border-2 w-[20%] border-dashed" />
              </h2>
              <h3 className=" text-base text-gray-500 max-w38 mt-4">
                {result.data.additionalFeatures}
              </h3>
            </div>
            {/* <h3 className=" text-base text-gray-500 max-w38">
              {result.data.description}
            </h3> */}
          </div>
        </div>
      </div>
      <Rates />
      <BlueCloud
        className="absolute -z-10 right-0 w-[300px] h-[500px] -bottom-44"
        scaling="translate(180 105) scale(-1, 1)"
      />
    </>
  );
};

export default page;
