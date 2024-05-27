import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { sliderImgs } from "../constants";

const MySlider = () => {
  const [progress,setProgress] = useState(0);
  const [slideToShow, setSlideToShow] = useState(3);

  const setSlides = () =>{
    if(window.innerWidth <= 1040 && window.innerWidth > 768){
      setSlideToShow(2);
    }else if(window.innerWidth <=  768){
      setSlideToShow(1);
    }
  };

  useEffect(()=>{
    const result = 100 / (sliderImgs.length - slideToShow + 1);
    setProgress(result);
    window.addEventListener("resize", setSlides);
  },[]);

  var settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {breakpoint: 1040, settings: {slidesToShow: 2}},
      {breakpoint: 768, settings: {slidesToShow: 1}}
    ],
    afterChange: current =>{
      const result = 100 / (sliderImgs.length - slideToShow + 1) * (current + 1);
      setProgress(result);
    }
  };

  return (
    <div className="relative text-center">
      <div className="mx-10">
        <Slider {...settings}>
          {sliderImgs.map((singleImg,i)=>(
            <div key={i} className="p-2">
              <img src={singleImg} alt="transaction image" className="bg-white" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="h-[3px] bg-gray-300 max-md:w-[200px] md:w-[500px] lg:w-[900px] xl:w-[1150px] absolute -bottom-[32px] left-[120px] z-30">
        <div className="bg-gray-900 absolute h-[3px] transition-all cursor-pointer" style={{width: `${progress}%`}}></div>
      </div>
    </div>
  )
}

export default MySlider