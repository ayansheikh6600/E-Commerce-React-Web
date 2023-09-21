import React from "react";
import Button from "./Button";

const Card = (props) => {
  const { title, price,image } = props;
  return (
    <div className="relative mt-10 mx-auto flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-[#fc8937] to-[#fc8937]">
        <img src={image||""} className="w-full h-full" alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title || "Tailwind card"}{" "}
        </h5>
        <p className="block font-sans font-bold text-base leading-relaxed text-inherit antialiased">
          Price: ${price || "Price"}
        </p>
      </div>
      <div className="p-6 pt-0">
        <Button title="Add to cart" />
      </div>
    </div>
  );
};

export default Card;
