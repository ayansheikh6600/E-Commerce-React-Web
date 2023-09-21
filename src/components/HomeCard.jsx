import React from "react";


const HomeCard = (props) => {
    const {title , custom ,desc} = props
    return (
        <div className={"h-[740px] bg-cover"+" " + custom}>
            <div className="text-white w-full h-full text-center pt-[370px]  bg-[rgb(0,0,0)] bg-opacity-30">
                <h1 className="h-10  text-3xl font-bold font-serif">{title||"CArd"}</h1>
                <p className="font-bold">{desc||"Short Desc"}</p>
            </div>
        </div>
    )
}
export default HomeCard