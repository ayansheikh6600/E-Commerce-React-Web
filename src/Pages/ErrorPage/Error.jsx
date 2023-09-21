import React from "react";
import { Link } from "react-router-dom";
import Body from "../../components/Body/Body";

const Error = () => {
  return (
    <div className="bg-[#fc8937]">
      <div className="gradient text-white min-h-screen flex items-center">
        <div className="container mx-auto p-4">
          <div className="w-full md:w-7/12 text-center md:text-left p-4 mx-auto">
            <div className="text-6xl font-medium">404</div>
            <div className="text-xl md:text-3xl font-medium mb-4">
              Oops. This page has gone missing.
            </div>
            <div className="text-lg mb-8">
              You may have mistyped the address or the page may have moved.
            </div>
            <Link className="border-2 border-white p-2 rounded-lg" to="/">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
