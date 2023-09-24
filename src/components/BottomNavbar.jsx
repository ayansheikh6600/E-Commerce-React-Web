import React from 'react'
import { NavLink } from 'react-router-dom'

const BottomNavbar = () => {
  return (
    <ul className='justify-between py-2 px-4 flex  sm:hidden sticky bottom-0 bg-white'>
        <li>
            <NavLink to="/" className={({isActive})=>{
                        return isActive? "w-full border-b-2 border-[#fc8937]" : ""
                    }}>
                <i className="fa-solid fa-house"></i>
            </NavLink>
        </li>
        <li>
        <NavLink to="/about" className={({isActive})=>{
                        return isActive? "w-full border-b-2 border-[#fc8937]" : ""
                    }}>
                <i className="fa-solid fa-circle-info"></i>
            </NavLink>
        </li>
        <li>
        <NavLink to="/contact" className={({isActive})=>{
                        return isActive? "w-full border-b-2 border-[#fc8937]" : ""
                    }}>
                <i className="fa-solid fa-phone"></i>
            </NavLink>
        </li>
        <li className='border-2 border-black'>
        <NavLink to="/products" className={({isActive})=>{
                        return isActive? "w-full border-b-2 border-[#fc8937]" : "p-3"
                    }}>
                <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
        </li>
    </ul>
  )
}

export default BottomNavbar