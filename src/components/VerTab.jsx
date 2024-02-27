import React from 'react'

function VerTab({item }) {
  return (
    <div className="flex flex-col items-center bg-[#FFFFFF] p-4 rounded-[10px] gap-2 " key={item.id} >
        <img src={require('../img/img1.png')} className="h-[103px] w-[141px] mb-10"/>
       
       <div className="flex gap-1 self-start">
        {
        item.offer.map((idx)=>{

      return(
            <div className="bg-[#F2F4F7] text-[11px] text-[#074786] px-[9px] py-[4px] rounded-[4px] ">{idx}</div>
        )
        
        })
       
        }
        </div>
        <div className="text-[#626E79] text-[13px] font-[700]">{item.name}</div>
        <div className="text-[#626E79] text-[14px] max-w-[270px] self-start">{item.text}</div>
        <div className="flex self-start items-end gap-2">   
        <div className="text-[#5C6874] ">{item.discounted_price}</div>
         <div className="text-[#9FA9B3] text-[11px]">{item.original_price}</div>
         <div className="text-[#fa4545] text-[11px]">{item.discount}</div>
        </div>
        <button className="bg-[#1B88F4] mt-auto w-[100%] py-2 rounded-[10px] text-[#ffff] text-[13px]">View</button>
    </div>
  )
}

export default VerTab
