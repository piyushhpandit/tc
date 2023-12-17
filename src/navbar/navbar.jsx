import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const navbar = () => {
  return (
    <div>
      <div className=" divide-x-2 bg-[#202434] text-white flex">
        <div className=" flex justify-end p-4 gap-5 w-[15%]">
          <a
            href="https://www.linkedin.com/company/tech-centrica/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/techcentrica/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="hover:text-blue-500 cursor-pointer" />
          </a>
          <a
            href="https://www.facebook.com/TechCentrica/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
          </a>
          <a
            href="https://twitter.com/Tech_Centrica"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-blue-500 cursor-pointer" />
          </a>
        </div>
        <div className="flex justify-between w-[100%]">
          <div>
            <h2 className="w-[100%] p-4 text-[12px]">
              Sat Dec 16 2023 2:51 PM{" "}
            </h2>
          </div>

          <div className=" w-[35%] flex gap-4">
            <h2 className=" w-[400px] mt-[15px] text-[12px]">
              Sales Enquiry : +91 9654221960
            </h2>
            <h2 className=" w-[100%] mt-[15px] text-[12px]">
              Job Enquiry : +91 9599200281
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
