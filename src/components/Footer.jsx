import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
function Footer() {
  return (
    <div className="bg-[#212731] h-[100%] w-screen flex gap-32 justify-center pt-12 pb-32 flex-wrap " >

      <div className="flex flex-col  gap-3">
      <div className="text-[#FFFFFF] font-[400] text-[16px]">Categories</div>
      <div className="text-[#B6BDC4] text-[14px]">Web Builder</div>
      <div className="text-[#B6BDC4] text-[14px]">Hosting</div>
      <div className="text-[#B6BDC4] text-[14px]">Data Center</div>
      <div className="text-[#B6BDC4] text-[14px]">Robotic-Automation</div>
      </div>
      <div className="flex flex-col  gap-3">
      <div className="text-[#FFFFFF] font-[400] text-[16px]">Contact</div>
      <div className="text-[#B6BDC4] text-[14px]">Contact</div>
      <div className="text-[#B6BDC4] text-[14px]">Privacy Policy</div>
      <div className="text-[#B6BDC4] text-[14px]">Terms Of Service</div>
      <div className="text-[#B6BDC4] text-[14px]">Categories</div>
      <div className="text-[#B6BDC4] text-[14px]">About</div>
      </div>
     <div className="flex items-center gap-1">
      <div className="text-[#D1D6DA] text-[14px]"> United States</div>
      <IoIosArrowDown color="#D1D6DA"/>
      </div>
      </div>

  )
}

export default Footer
