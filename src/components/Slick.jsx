import React from "react";


const Tab=[
    'Tools','AWS Builder','Start Build','Build Supplies','Tooling','BlueHosting'
]

  
  
export default function SimpleSlider() {
    const handleScroll = (event) => {
        const container = event.target;
        const scrollAmount = event.deltaY;
        container.scrollTo({
          top: 0,
          left: container.scrollLeft + scrollAmount,
          behavior: 'smooth'
        });
      };
      return (
      <div className="container" onWheel={handleScroll}>
       
        {Tab.map((idx,i)=>{
            return(<button className="item" key={i}>{idx}</button>)
        })}
        
        </div>
      );
}