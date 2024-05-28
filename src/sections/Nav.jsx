import { useState } from "react";
import NavItems from "../components/NavItems"
import { navItems0, navItems1, navItems2 } from "../constants"
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <nav className="fixed w-full max-w-[1440px] top-0 z-30">
      <div className="min-w-[1024px] mx-auto pt-[40px] max-lg:hidden">
        <div className="flex justify-between items-center gap-3 h-[40px] text-white lg:px-20">
          <div className="lg:w-5/12">
            <NavItems items={navItems1}/>
          </div>
          <div className="">
            <h2 className="text-3xl font-bold italic">SKYLARK.</h2>
          </div>
          <div  className="lg:w-5/12">
            <NavItems items={navItems2}/>
          </div>
        </div>
      </div>
      <div className="relative max-w-[1024px] mx-auto lg:hidden">
        <div className="text-white">
          <h2 className="text-3xl text-center bg-[#C2A5F9] py-[20px] font-bold italic">SKYLARK.</h2>
          <div className="absolute right-5 top-[20px]">
            <button onClick={()=>setIsDrawerOpen(!isDrawerOpen)} className="w-[24px] h-[24px]box-content text-white text-4xl">
              { isDrawerOpen ? <IoMdClose /> : <IoIosMenu /> }
            </button>
          </div>
        </div>
        {isDrawerOpen && <div className="text-white lg:hidden">
          <ul className="bg-[#9E78E8] grid max-md:grid-cols-2 md:grid-cols-3 py-6 md:gridBorder">
            {navItems0.map((item,i)=>(
              <li key={i} className="border-r py-2 px-6 sm:px-16 max-md:even:border-none">
                <a href={item.navUrl} className="flex justify-between items-center font-poppins font-light text-sm hover:text-gray-200">
                  <span>{item.name}</span>
                  <span>{ item.arraySign ? <FaArrowRight /> : ""}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>}
      </div>
    </nav>
  )
}

export default Nav