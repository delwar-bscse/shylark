import { useState } from "react"
import { heroSectionInfo } from "../constants"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const HeroCard = () => {
  const [controler, setControler] = useState(0);

  const nextBtn = () =>{
    const result = controler === heroSectionInfo.length-1 ? 0 : controler+1;
    setControler(result);
  }
  const prevBtn = () =>{
    const result = controler === 0 ? heroSectionInfo.length-1 : controler-1;
    setControler(result);
  }

  return (
    <div className={`${heroSectionInfo[controler].bgImg} bg-cover bg-center bg-no-repeat duration-500`}>
      <div className="bg-gray-800 opacity-70">
        <div className="max-sm:mx-[10px] sm:mx-[20px] md:mx-[50px] lg:mx-[150px] pt-[100px] md:pt-[150px] text-white">
          <div className="flex justify-between  mb-6">
            <h3 className="text-xl font-poppins">{heroSectionInfo[controler].title}</h3>
            <div className="flex justify-center items-center gap-3 rounded-full bg-gray-200 px-1 py-1 box-content">
              <button onClick={prevBtn} className="w-[16px] h-[14px] rounded-full hover:bg-gray-400 hover:text-white duration-300 text-gray-900 p-[8px] flex justify-center items-center box-content"><FaArrowLeft /></button>
              <button onClick={nextBtn} className="w-[16px] h-[14px] rounded-full hover:bg-gray-400 hover:text-white duration-300 text-gray-900 p-[8px] flex justify-center items-center box-content"><FaArrowRight /></button>
            </div>
          </div>
          <div className="max-w-[650px]">
            <h1 className="text-3xl md:text-5xl mb-5 md:mb-10 lg:mb-16">{heroSectionInfo[controler].aboutTitle}</h1>
            <p className="pb-6 text-md md:text-xl lg:text-2xl lg:tracking-wide">{heroSectionInfo[controler].desc}</p>
            <div className="flex justify-start items-center gap-5 cursor-pointer">
              <span className="w-[14px] h-[14px] rounded-full bg-[#DAAA00] text-white duration-300 p-[8px] flex justify-center items-center box-content"><FaArrowRight /></span>
              <a>LEARN MORE</a>
            </div>
          </div>
          <div className=" py-[50px] md:py-[100px] max-md:text-[10px]">
            <ul className="w-full flex justify-between items-end gap-1 md:gap-6">
              {heroSectionInfo.map((item)=>(
                <li key={item.index} onClick={()=>setControler(item.index)} className={` ${item.index===controler ? "pb-4 text-white" : "pb-6"} uppercase tracking-wider font-poppins font-3xl font-semibold border-b-4 flex-1 hover:pb-4 cursor-pointer text-gray-400 duration-200 hover:text-white`}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard