import React from 'react'
import { RiCheckboxCircleLine } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function Midsec() {
  return (
 

      <div className="flex flex-col flex-1 flex-wrap lg:items-center  ">
      <div className="text-[#2C384A] text-[38px] font-[400px] pt-5 ">
        Best Website builder in the US
      </div>
      <div className="border-b-[2.33px] border-[#E1E4E6] border-opacity-40 w-full"></div>
      <div className="flex gap-3 items-center p-1 flex-1">
        <div className="flex items-center gap-1">
        <RiCheckboxCircleLine/>
        <div className="text-[#4B5665] text-[13px]">Last Updated</div>
        <div className="w-[6px] font-light">-</div>
        </div>
       <div className="text-[#4B5665] text-[13px]">February 22, 2020 </div>
       <div className="flex items-center gap-1">
       <IoIosInformationCircleOutline />
       <div className="text-[#4B5665] text-[13px]" >Advertising Disclosure</div>
       </div>
       <div className="flex items-center gap-1 ml-auto " >
        <div className="text-[#4B5665] text-[13px] " > Top Relevant</div>
       <IoIosArrowDown/>

       </div>

      </div>
      <div className="border-b-[2.33px] border-[#E1E4E6] border-opacity-40 w-full"></div>
 
        <div className="flex gap-5 items-start pt-5 flex-wrap">
      <button className="text-[#4B5665] text-[13px] bg-[#ffffff]  text-left rounded-[6px] max-w-[7rem] max-h-[2rem] px-4 py-2">Tools </button>
      < button className="text-[#4B5665] text-[13px] bg-[#ffffff]  text-left rounded-[6px] max-w-[7rem] max-h-[2rem] px-4 py-2">AWS Builder </button>
      <button className="text-[#4B5665] text-[13px] bg-[#ffffff]  text-left rounded-[6px] max-w-[7rem] max-h-[2rem] px-4 py-2">Start Build </button>
      <button className="text-[#4B5665] text-[13px] bg-[#ffffff]  text-left rounded-[6px] max-w-[10rem] h-[2rem] px-4 py-2">Build Supplies </button>
      <button className="text-[#4B5665] text-[13px] bg-[#ffffff]  text-left rounded-[6px] max-w-[7rem] h-[2rem] px-4 py-2">Tooling </button>
      <button className="text-[#4B5665] text-[13px] bg-[#ffffff]  text-left rounded-[6px] max-w-[7rem] h-[2rem] px-4 py-2">BlueHosting </button>
      </div>
      <div className="flex gap-5 items-start pt-5 flex-wrap">
      <div className="flex text-[#727D87] text-[13px]">Home</div>
      <div className="flex text-[#727D87] text-[13px]">{'>'}</div>
      <div className="flex text-[#727D87] text-[13px]">Hosting for all</div>
      <div className="flex text-[#727D87] text-[13px]">{'>'}</div>
      <div className="flex text-[#727D87] text-[13px]">Hosting</div>
      <div className="flex text-[#727D87] text-[13px]">{'>'}</div>
      <div className="flex text-[#727D87] text-[13px]">Hosting6</div>
      <div className="flex text-[#727D87] text-[13px]">{'>'}</div>
      <div className="flex text-[#727D87] text-[13px]">Hosting5</div>
      </div>
      
      </div>

    
  )
}

export default Midsec
