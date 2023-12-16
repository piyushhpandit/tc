import React from 'react'
import logo from "../assets/logo (1).png"
const navbar2 = () => {
    return (
        <div className='flex h-[100%]'>
            <div>
                <img className='ml-[100px] w-[50%]' src={logo} alt="logo" />
            </div>
            <div className='flex w-[70%] gap-5 text-sm mt-[5px]'>
                <h1 className='border cursor-pointer  p-2 hover:bg-[#202434] hover:text-white rounded'>HOME</h1>
                <h1 className='border  cursor-pointer p-2 hover:bg-[#202434] hover:text-white rounded'>WHO WE ARE</h1>
                <h1 className='border cursor-pointer p-2  hover:bg-[#202434] hover:text-white rounded'>OUR SOLUTIONS</h1>
                <h1 className='border cursor-pointer p-2 hover:bg-[#202434] hover:text-white rounded'>OUR EXPERTISE</h1>
                <h1 className='border cursor-pointer p-2 hover:bg-[#202434] hover:text-white rounded'>EXPERIENCE</h1>
                <h1 className='border  cursor-pointer p-2 hover:bg-[#202434] hover:text-white rounded'>CONTACT US</h1>
                <button className='bg-[#202434] p-2 text-white hover:bg-white hover:text-black'>REQUEST A CALL</button>
            </div>

        </div>

    )
}

export default navbar2
