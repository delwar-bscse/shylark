import React from 'react'
import { CgArrowLongRight } from "react-icons/cg";

const NextArrow = ({onClick }) => {
  return (
    <div onClick={onClick} className='absolute left-[34px] -bottom-[55px]'>
      <div className='h-[50px] w-[50px] grid place-items-center cursor-pointer text-3xl text-gray-400 hover:text-gray-900 duration-300'>
        <CgArrowLongRight />
      </div>
    </div>
  )
}

export default NextArrow