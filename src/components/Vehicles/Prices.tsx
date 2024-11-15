import Title from "@/app/UtilComponents/Title";
import React from "react";
interface Rates {
  perDay: number;
  perWeek: number;
  perMonth: number;
}

interface PricesProps {
  rates: Rates;
  category: string;
}

const Prices: React.FC<PricesProps> = ({rates, category}) => {
  return (
    <section className="max-w-7xl mx-auto mb-32">
      <Title title="Our Rental Plans" />
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full mx-auto place-items-center lg:gap-4 gap-6">
        {/* Daily Plan */}
        <div
          className="border-[2px] border-sky-900 p-6 w-4/5"
          data-aos="slide-up"
        >
          <h2
            className="text-sky-600 font-semibold text-2xl text-center mb-4"
            data-aos="slide-up"
          >
            Daily
          </h2>
          <div
            className="bg-gray-800 bg-opacity-75 w-full"
            style={{backgroundImage: `url(${"/background.jpg"})`}}
          >
            <div
              data-aos="slide-up"
              className="flex flex-col justify-center items-center bg-sky-950 p-3 bg-opacity-80"
            >
              <h4 className="text-center font-medium text-xl my-3 text-yellow-200">
                {category}
              </h4>
              <div className="text-gray-200 text-sm font-medium">
                {rates.perDay} BDT / <span className="text-sm">Day</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Plan */}
        <div
          className="border-[2px] border-sky-900 p-6 w-4/5"
          data-aos="slide-up"
        >
          <h2
            className="text-sky-600 font-semibold text-2xl text-center mb-4 "
            data-aos="slide-up"
          >
            Weekly
          </h2>
          <div
            className="bg-gray-800 bg-opacity-75 w-full"
            style={{backgroundImage: `url(${"/background.jpg"})`}}
          >
            <div
              data-aos="slide-up"
              className="flex flex-col justify-center items-center bg-sky-950 p-3 bg-opacity-80"
            >
              <h4 className="text-center font-medium text-xl my-3 text-yellow-200">
                {category}
              </h4>
              <div className="text-gray-200 text-sm font-medium">
                {rates.perWeek} BDT / <span className="text-sm">Week</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Plan */}
        <div
          className="border-[2px] border-sky-900 p-6 w-4/5"
          data-aos="slide-up"
        >
          <h2
            className="text-sky-600 font-semibold text-2xl text-center mb-4"
            data-aos="slide-up"
          >
            Monthly
          </h2>
          <div
            className="bg-gray-800 bg-opacity-75 w-full"
            style={{backgroundImage: `url(${"/background.jpg"})`}}
          >
            <div
              data-aos="slide-up"
              className="flex flex-col justify-center items-center bg-sky-950 p-3 bg-opacity-80"
            >
              <h4 className="text-center font-medium text-xl my-3 text-yellow-200">
                {category}
              </h4>
              <div className="text-gray-200 text-sm font-medium">
                {rates.perMonth} BDT / <span className="text-sm">Month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
