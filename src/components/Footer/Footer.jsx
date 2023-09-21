import React from "react";
import FooterSection2 from "./FooterComponents/FooterSection2";
import FooterComponent from "./FooterComponents/FooterComponent";
import logo from "../../assets/aza.png"

const Footer =()=>{

    return(
        
<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                  <img src={logo} className="h-11 w-[150px] mr-3" alt="Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <FooterComponent title={{one:"Resoureces",two:"E-Commerce", three:"Ayan Sheikh"}} />
              <FooterComponent title={{one:"Follow US",two:"Instagram", three:"Github"}} link={{insta:"https://www.instagram.com/ayansheikh9800/" ,github:"https://github.com/ayansheikh6600"}}/>
              <FooterComponent title={{one:"legal",two:"Privacy Policy", three:"Terms & Condition"}}/>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <FooterSection2/>
    </div>
</footer>

    )
}

export default Footer