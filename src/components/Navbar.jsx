import  React,{ useCallback,useState,us } from "react"; 
import { FiSearch } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useTrail, a } from '@react-spring/web'
import Hamburger from 'hamburger-react'



const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 40 : 0,
    from: { opacity: 0, height: 0 },
  })
  return (
    <div  className="flex flex-col items-center">
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="relative    text-white   overflow-hidden" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}



function Navbar() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="bg-[#212731]  ">
      <div className=" w-screen  flex items-center justify-center h-18 gap-20 p-4 lg:hidden ">
<div className="flex bg-[#ffff] w-[15rem] items-center p-1 rounded-[6px]" >
<CiSearch size={'1.6em'} />
    <input className="flex-1 outline-none border-none"/>
 
    </div>
    <div className="font-[300px] text-0.875 text-[#D1D6DA]">Categories</div>
    <div className="font-[300px] text-0.875 text-[#D1D6DA]" >Website Builders</div>
    <div className="font-[300px] text-0.875 text-[#D1D6DA]" >Today's Deal</div>

    </div>
    <div className="h-18 gap-20 p-2  m2xl:hidden 2xl:hidden  lg:block">
    <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
    <div className={isOpen? "w-screen h-[50%] bg-[#212731] flex items-center justify-center  " :"bg-[#212731] w-screen "}>
    <Trail open={isOpen}>
    <div className="flex bg-[#ffff]  items-center p-1 rounded-[6px] " >
<CiSearch  color="black"size={'1.6em'} />
    <input className="flex-1 outline-none border-none text-black"/>
 
    </div>
    <div className="font-[300px] text-0.875 text-[#D1D6DA] ">Categories</div>
    <div className="font-[300px] text-0.875 text-[#D1D6DA]" >Website Builders</div>
    <div className="font-[300px] text-0.875 text-[#D1D6DA]" >Today's Deal</div>
      </Trail>
    </div>
    </div>
    </div>
  )
}

export default Navbar
