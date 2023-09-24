import React from "react";
import Vehicles from "./Vehicles";
import VehiclesSideBar from "./VehiclesSideBar";

const VehiclesPage = () => {
  return (
    <section className="grid  lg:grid-cols-4 grid-cols-1 max-w-screen-2xl mx-auto  place-items-center gap-5">
      <VehiclesSideBar />
      <Vehicles />
    </section>
  );
};

export default VehiclesPage;
