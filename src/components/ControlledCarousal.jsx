import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Slide3 from "../assets/slide1img.jpg";
import Slide2 from "../assets/slide2img.jpg";
import Slide1 from "../assets/slide3img.jpg";

const ControlledCarousal = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <div className="flex items-center">
          <img className="h-[700px] w-full" src={Slide1} alt="" />
          <div className="absolute w-full text-center border-2 border-black flex items-center h-full bg-[rgb(0,0,0)] bg-opacity-50">
            <h1 className="w-full text-white animate-pulse text-5xl font-serif">Curated Collections, Just for You.</h1>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <div className="flex items-center">
          <img className="h-[700px] w-full" src={Slide2} alt="" />
          <div className="absolute w-full text-center border-2 border-black flex items-center h-full bg-[rgb(0,0,0)] bg-opacity-50">
            <h1 className="w-full text-white animate-pulse">Ayan</h1>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <div className="flex items-center">
          <img className="h-[700px] w-full" src={Slide3} alt="" />
          <div className="absolute w-full text-center border-2 border-black flex items-center h-full bg-[rgb(0,0,0)] bg-opacity-50">
            <h1 className="w-full text-white animate-pulse">Ayan</h1>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousal;
