import Image from "next/image";
import Banner from "./components/HomeSection/Banner";
import Guideline from "./components/HomeSection/Guideline";
import HomeVehicles from "./components/HomeSection/HomeVehicles";
import Booking from "./components/HomeSection/Booking";
import WhyChoose from "./components/HomeSection/WhyChoose";
import Rates from "./components/HomeSection/Rates";
import Discount from "./components/HomeSection/Discount";

export default function Home() {
  return (
    <main className="">
       <Banner/>
       <Guideline/>
       <HomeVehicles/>
       <WhyChoose/>
       <Discount/>
       <Rates/>
       
       <Booking/>
    </main>
  );
}
