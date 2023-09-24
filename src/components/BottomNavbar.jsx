import React from 'react'
import { NavLink } from 'react-router-dom'

const BottomNavbar = () => {
  return (
    <ul className='justify-between px-4 flex h-14 items-center sm:hidden sticky bottom-0 bg-[#fc8937] text-white'>
        <li className='h-full flex items-center'>
            <NavLink to="/" className={({isActive})=>{
                        return isActive? "h-[80%] mb-3  rounded-b-3xl flex items-center w-12 bg-white text-[#fc8937]" : "h-full flex items-center w-10 "
                    }}>
                <i className="fa-solid fa-house mx-auto"></i>
            </NavLink>
        </li>
        <li className='h-full flex items-center'> 
        <NavLink to="/about" className={({isActive})=>{
                        return isActive? "h-[80%] mb-3  rounded-b-3xl flex items-center w-12 bg-white text-[#fc8937]": "h-full flex items-center w-10 "
                    }}>
                <i className="fa-solid fa-circle-info mx-auto"></i>
            </NavLink>
        </li>
        <li className='h-full flex items-center'>
        <NavLink to="/contact" className={({isActive})=>{
                        return isActive? "h-[80%] mb-3  rounded-b-3xl flex items-center w-12 bg-white text-[#fc8937]" : "h-full flex items-center w-10 "
                    }}>
                <i className="fa-solid fa-phone mx-auto"></i>
            </NavLink>
        </li>
        <li className='h-full flex items-center'>
        <NavLink to="/products" className={({isActive})=>{
                        return isActive? "h-[80%] mb-3  rounded-b-3xl flex items-center w-12 bg-white text-[#fc8937]" : "h-full flex items-center w-10 "
                    }}>
                <i className="fa-solid fa-cart-shopping mx-auto"></i>
            </NavLink>
        </li>
    </ul>
  )
}

export default BottomNavbar