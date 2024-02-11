import React from 'react'
import { BiSolidStar } from "react-icons/bi";
import { BiStar } from "react-icons/bi";

const Campaign = () => {
  return (
    <div className='m-5 w-96 h-[400px] flex flex-col gap-4 campaign'>
        <div className='campaign-box-upper bg-dark h-1/2 upper' >
            <div className='relative float-right bg-gray-400 w-[70px] h-[70px] side flx-row-center '>
                <BiSolidStar className='text-4xl text-dark relative translate-x-2 -translate-y-1'/>
            </div>
        </div>
        <div className='bg-dark h-1/2 lower'>

        </div>
    </div>
  )
}

export default Campaign