import React from "react";
import vitelogo from "../assets/react.svg";
import HomeCard from "./HomeCard";
import Card from "./Card";
import slide1 from "../assets/slide1img.jpg";
import slide2 from "../assets/slide2img.jpg";
import slide3 from "../assets/slide3img.jpg";

const Carousal = () => {
  return (
    <>
      
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide w-full"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100 h-[700px]" alt="" />
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100 h-[700px]" alt="" />
            </div>
            <div className="carousel-item">
              <img src={slide3} className="d-block w-100 h-[700px]" alt="" />
            </div>
          </div>
          
        </div>
    </>
  );
};

export default Carousal;
