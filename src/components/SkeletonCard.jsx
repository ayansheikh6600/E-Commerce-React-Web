import React from "react";
import Button from "./Button";

const SkeletonCard = () => {
  return (
    <>
      <div className="animate-pulse relative mt-10 mx-auto flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded  dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </h5>
          <div className="block font-sans font-bold text-base leading-relaxed text-inherit antialiased">
            Price: <span><p className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-14 mb-4"></p></span>
          </div>
        </div>
        <div className="p-6 pt-0">
          <Button title="Add to cart" />
        </div>
      </div>
      
      
    </>
  );
};

export default SkeletonCard;
