import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaCopyright } from "react-icons/fa6";

const About = () => {
  return (
    <div className='py-5 items-center'>
        <div className="px-10 container md:px-20 mx-auto ">
          <div className="flex flex-col xl:flex-row gap-1 justify-between">
            <p className='font-bold text-2xl'>Tiệm sách Mùa hạ</p>
            <a href='#' className='flex items-center gap-1'>
              <FaFacebook />
              fb.com/tiemsachmuahe
            </a>
            <p className='flex items-center gap-1'>
              <FaPhone />
              1900 8080
            </p>
            <p className='flex items-center gap-1'>
              <FaHouse />
              175 Tây Sơn, Đống Đa, Hà Nội.
            </p>
            <p className='flex items-center gap-1'>
              <FaCopyright />
              2025 Tiệm sách Mùa Hạ.
            </p>
          </div>
        </div>
    </div>
  )
}

export default About