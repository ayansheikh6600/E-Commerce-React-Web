import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/aza.png"

const Navbar = ()=>{

    return(
        <div className="flex p-3 px-5 w-full border-2 border-black justify-between items-center">
            <div className="w-[300px] h-[50px]">
            <Link to='/'><img src={Logo} className="h-[50px]" alt="" /></Link>
            </div>
            <ul className="flex justify-center mx-auto gap-10">
                <li>
                    <NavLink to="/" className={({isActive})=>{
                        return isActive? "w-full border-b-2 border-[#fc8937]" : ""
                    }}>
                        Home
                    </NavLink>
                    {/* <Link to='/'>Home</Link> */}
                </li>
                <li>
                <NavLink to="/about" className={({isActive})=>{
                        return isActive? "w-full border-b-2 border-[#fc8937]" : ""
                    }}>
                        About
                    </NavLink>
                {/* <Link to='/about'>About</Link> */}
                </li>
                <li>
                <NavLink to="/contact" className={({isActive})=>{
                        return isActive? "w-full border-b-2 border-[#fc8937]" : ""
                    }}>
                        Contact
                    </NavLink>
                {/* <Link to='/contact'>Contact</Link> */}
                </li>
                <li>
                <NavLink to="/products" className={({isActive})=>{
                        return isActive? "w-full border-b-2 border-[#fc8937]" : ""
                    }}>
                        Products
                    </NavLink>
                {/* <Link to='/products'>Products</Link> */}
                </li>
            </ul>
        </div>
    )
}

export default Navbar