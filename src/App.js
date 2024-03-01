
import './App.css';
import { Navbar,Midsec,HorTab,VerTab,Footer } from './components';
import {data} from './vertdata';
import {Tab} from'./hordata';
import { useScroll } from "@use-gesture/react";
import {  animated, useSpring } from '@react-spring/web'

import Slick from "../src/components/Slick";


function App() {
  
  return (
    <div className="bg-[#FBFCFD] h-[100%] w-screen ">
    <div className="flex flex-col  gap-4 mmd:items-center">
     <Navbar />
    
      <div className="flex flex-col gap-10 lg:p-[1rem] ">
    <Midsec/>
  
   <HorTab />
   
    

    <div className="flex flex-col gap-2 flex-wrap">
    <div className="margin-left-auto text-[#2C384A] text-[32px] md:p-1 md:pl-2">Related deals you might like for</div>
    <div className="flex gap-4 flex-1 flex-wrap md:flex-col md:items-center">
    { data.map((item,i)=>{ 
      return(
    
      <VerTab item={item} key={item.id} />)
        
      })
    }
    </div>
    
    
    
    </div>
    <div className="flex flex-1 pb-1 flex-wrap items-center">
  <div className="text-[#5C6874] text-[32px] max-w-[400px]">Sign up and get exclusive special deals</div>
  <div className="flex ml-auto ">
    <input className="bg-[#FFFFFF]   rounded-l-[10px] outline-none"></input>
    <button className="bg-[#1B88F4] rounded-r-[8px]   text-[#ffffff] p-3 text-[13px]">Sign Up</button>

  </div>
    </div>
    
    </div>
    <Footer/>
    </div>
   
    </div>
 
  );
  
}

export default App;
