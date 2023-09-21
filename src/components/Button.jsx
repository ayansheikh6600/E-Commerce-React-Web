import React from "react";

const Button = (props) => {
const {title} = props
    return (
        <button className="border-2 border-[#fc8937] relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#964f29] before:to-[#fc8937] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
           {title||"Button"}
        </button>

    )
}

export default Button