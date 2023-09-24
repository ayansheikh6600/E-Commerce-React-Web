import React from "react";
import vitelogo from "../../assets/react.svg";
import HomeCard from "../HomeCard";
import ControlledCarousal from "../ControlledCarousal";

const Body = () => {
  return (
    <>
     <ControlledCarousal/>
      <div className="container mt-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <HomeCard
            title="New Bags"
            custom="bg-[url('assets/bag.jpg')]"
            desc="Best Selling Deals"
          />
          <HomeCard
            title="Accesories"
            custom="bg-[url('assets/watch.jpg')]"
            desc="Hot Trends"
          />
          <HomeCard
            title="For Him"
            custom="bg-[url('assets/men.jpg')]"
            desc="New Collection"
          />
        </div>
      </div>
    </>
  );
};

export default Body;
