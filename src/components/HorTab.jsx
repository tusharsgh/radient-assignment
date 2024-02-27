import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { GoTrophy } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { LiaStarSolid } from "react-icons/lia";
import { IoIosArrowUp } from "react-icons/io";
function HorTab() {
  const [ShowInfo,setShowInfo]=useState(false);
  
 
const Tab=[{
    id:1,
    best_choice:true,
    main_heading:{
     bold_text:"WixPro 72-Inch Responsive Website Builder",
     normal_text:"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
    },
    hightlights:{
        text:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
    },
    review:{
    stars:"9.8" ,   
    rating:"Exceptional"
    },
    img:{
        heading:"Builder 1",
        path:"../img/img1.png"
    }
},
    {
        id:2,
        best_choice:true,
        main_heading:{
            bold_text:"SiteCraft 68-Inch Ultimate Web Design Studio",
            normal_text:"Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    },
    hightlights:{
        text:"[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
    },
    review:{
        stars:"9.5" ,   
        rating:"Excellent"
        },
        img:{
            heading:"Builder ",
            path:"../img/img1.png"
        }


},
{
    id:3,
    best_choice:false,
    main_heading:{
        bold_text:"WixPro 72-Inch Responsive Website Builder",
        normal_text:"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
},
hightlights:{
    text:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
},
review:{
    stars:"9.3" ,   
    rating:"Exceptional"
    },
    img:{
        heading:"Builder 1 ",
        path:"../img/img1.png"
    }


},
{
    id:4,
    best_choice:false,
    discount:"20%",
    main_heading:{
        bold_text:"CDK Resposive Builder:",
        normal_text:"An extensive library of widgets and apps, and detailed step-by-step guides",
},
point_highlight:[
  {
    id:1,
    points:"9.9",
    review:"Building responsive"
  },
  {
    id:2,
    points:"8.9",
    review:"Cool"
  },
  {
    id:3,
    points:"8.9",
    review:"Docs"
  }

],
point_text:[
"Documentation",
"Easy Use",
"Out of box"
],
review:{
    stars:"9.1" ,   
    rating:"Very Good"
    },
img:{
        heading:"CDK ",
        path:"../img/img1.png"
    }


}
   
];

  return (
    <div className="flex flex-col flex-1  gap-8" >
      {Tab.map((item)=>{
       return(
        <div key={item.id}>
        <div className=" bg-[#FFFFFF] rounded-[12px] flex gap-12 pb-3 flex-wrap  lg:hidden  " >
            <div className="flex flex-col items-center gap-1 ">
            
           {item.best_choice?<div className="flex bg-[#FF7724] items-center rounded-r-[7px] p-[4px] px-[6px] gap-1 ml-[-30%] mt-[-7%]">
        {item.id==1 ?<GoTrophy color="#FFFFFF" />:<IoDiamondOutline color="#FFFFFF" />} 
        <div className="text-[rgb(255,255,255)] text-[12px] ">Best Choice</div>
           </div>:<div className=" p-[6px]"></div>}

           {<div className="border h-[44px] w-[44px] flex items-center justify-center rounded-[44px] ml-[-100%] mt-[5%] bg-[#ffff] z-2 relative "> 
           <div>{item.id}</div>
           </div>} 
            <img src={require('../img/img1.png')} className="h-24 w-36 mt-[-5%] rounded-[-5%]"/>
           
            <div className="text-[#626E79] text-[13px] mb-5 font-[400] ">{item.img.heading}</div>
            </div>
            <div className="flex flex-col mt-[2%] gap-1">
            <div className="m-1 ">
                <p className="font-[600] text-[14px] text-[#4B5665] max-w-[450px] ">{item.main_heading.bold_text}-
                <span className="text-[#4B5665] text-[13px] font-[400] ">{item.main_heading.normal_text}</span>
                </p>
            </div>
         
                <div className="text-[#2C384A] text-[14px] font-[700]">Main Highlights </div>
                {item.hightlights?<div className="max-w-[450px] text-[13px] font-[400] ml-5 text-[#4B5665] mt-1 mb-1">{item.hightlights.text}</div>:<></>}
             {item.point_highlight?<div className="bg-[#FFF4ED] rounded-[5px] flex flex-col">
             {item.point_highlight.map((p1)=>{return(
              <div className="flex gap-1 items-center m-1">
               <div className="bg-[#FFFFFF] flex rounded-[4px] ">
                <div className="text-[#1B88F4] text-[13px] px-[4px] py-[1px] ">{p1.points}</div>
           
                </div>
                <div className="text-[#4B5665] text-[13px] font-[400]">{p1.review}</div>
                </div>
              
             )})}
             </div>:<></>}
             
              {item.point_text?<div>
                <div className="text-[#2C384A] text-[14px] font-[300] p-1"> Why we love it</div>
                {item.point_text.map((p)=>{return(
                    <div className="flex gap-1 items-center p-[2px]">
                        <RiCheckboxCircleFill  fill="#2C384A" />
                        <div className="text-[13px] text-[#4B5665] font-[300]">{p}</div>
                    </div>
                )})}
                
              </div>:<></>}
                <div className="flex gap-1 items-center p-1">
                 <div className="text-[#1B88F4] text-[14px] ">
                    Show more
                 </div>
                <IoIosArrowDown color="#1B88F4" fontSize="0.7em"/>
                </div>
            </div>
            <div>
                
            </div>
            <div className="flex flex-col items-center mr-5">
          <div className="flex flex-col items-center bg-[#F3F9FF] rounded-b-[6px] mt-[0%] p-5 max-h-[100px]">
            <div className="text-[#074786] text-[25px] font-[300]">{item.review.stars}</div>
            <div className="text-[#074786] text-[14px]">{item.review.rating}</div>
            
            
       
          </div>
          <button className="bg-[#1B88F4] mt-auto px-16 py-2 w-[100%] rounded-[10px] text-[#ffff] text-[13px]">View</button>
          </div>
        </div>

<div className=" bg-[#FFFFFF] rounded-[12px]  flex-wrap m2xl:hidden  2xl:hidden lg:block ">
  <div className="flex flex-col justify-center items-center p-7  ">
  <div className="flex items-center justify-center relative  w-[100%] ">
{item.best_choice?<div className="flex bg-[#FF7724] items-center rounded-r-[7px] p-[4px] px-[6px] gap-1 absolute left-[-5%] top-[-30%]  ">
        {item.id==1 ?<GoTrophy color="#FFFFFF" />:<IoDiamondOutline color="#FFFFFF" />} 
        <div className="text-[rgb(255,255,255)] text-[12px] ">Best Choice</div>
           </div>:<div className="absolute"></div>}
           {<div className="border h-[44px] w-[44px] flex items-center justify-center rounded-[44px] bg-[#ffff]  absolute left-[-8%]  "> 
           <div>{item.id}</div>
           </div>} 
           <div className="flex flex-col items-center ml-[4.4%]">
           <img src={require('../img/img1.png')} className="h-24 w-36 self-center  "/>
            <div className="text-[#626E79] text-[13px] mb-5 font-[400] ">{item.img.heading}</div>
           </div>
            
            <div className="flex flex-col items-center bg-[#F3F9FF] rounded-b-[6px]  right-0  top-[-20%] p-2 max-h-[200px] absolute">
            <div className="text-[#074786] text-[15px] font-[300]">{item.review.stars}</div>
            <div className="text-[#074786] text-[12px]">{item.review.rating}</div>
            </div>
</div>
              
              <div className="flex flex-col gap-1  items-center ">
              <div className="m-1 ">
                <p className="font-[600] text-[14px] text-[#4B5665] w-fit ">{item.main_heading.bold_text}-
                <span className="text-[#4B5665] text-[13px] font-[400] ">{item.main_heading.normal_text}</span>
                </p>
            </div>  
           {ShowInfo?<div className="flex flex-col  gap-1 ">
            
         
                <div className="text-[#2C384A] text-[14px] font-[700]">Main Highlights </div>
                {item.hightlights?<div className="w-fit text-[13px] font-[400] ml-5 text-[#4B5665] mt-1 mb-1">{item.hightlights.text}</div>:<></>}
             {item.point_highlight?<div className="bg-[#FFF4ED] rounded-[5px] flex flex-col self-start">
             {item.point_highlight.map((p1)=>{return(
              <div className="flex gap-1 items-center m-1 self-start ">
               <div className="bg-[#FFFFFF] flex rounded-[4px] ">
                <div className="text-[#1B88F4] text-[13px] px-[4px] py-[1px] ">{p1.points}</div>
           
                </div>
                <div className="text-[#4B5665] text-[13px] font-[400]">{p1.review}</div>
                </div>
              
             )})}
             </div>:<></>}
             
              {item.point_text?<div>
                <div className="text-[#2C384A] text-[14px] font-[300] p-1"> Why we love it</div>
                {item.point_text.map((p)=>{return(
                    <div className="flex gap-1  items-center p-[2px]">
                        <RiCheckboxCircleFill  fill="#2C384A" />
                        <div className="text-[13px] text-[#4B5665] font-[300]">{p}</div>
                    </div>
                )})}
                
              </div>:<></>}
               
            </div>:<></>}
             
              
              <button className="flex gap-1 items-center p-1" onClick={()=>setShowInfo(!ShowInfo)}>
                 <div className="text-[#1B88F4] text-[14px] ">
                    Show {ShowInfo? <span>Less</span>:<span>More</span>}
                 </div>
                 {ShowInfo? <IoIosArrowUp color="#1B88F4" fontSize="0.7em" />: <IoIosArrowDown color="#1B88F4" fontSize="0.7em"/>}
               
                </button>
              </div>
                
             <button className="bg-[#1B88F4] mt-auto px-16 py-2 w-[100%] rounded-[10px] text-[#ffff] text-[13px]">View</button>
</div>
</div>
        </div>)
      })}
    </div>
  )
}

export default HorTab
