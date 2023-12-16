import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const navbar = () => {
    return (
        <div>
            <div className='bg-[#202434] text-white flex'>
                <div className='flex p-4 gap-5 border-white border border-[1px] w-[15%]'>

                    <FaLinkedin />
                    <FaInstagramSquare />
                    <FaFacebook />
                    <FaTwitter />

                </div>
                <div>
                    <h2 className='w-[100%] mt-[5px] ml-[5px]'>Sat Dec 16 20232:51 PM </h2>
                </div>



            </div>
        </div>
    )
}

export default navbar
