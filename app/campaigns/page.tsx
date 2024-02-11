import React from 'react'
import { CiSearch } from "react-icons/ci";
import Campaign from './Campaign';

const Campaigns = () => {
  const array=[1,2,3,4,5,6]
  return (
    <div className='min-h-[100vh] py-40 '>
        <div className='flx-row-center'>
            <div className='flx-row-between w-1/2  p-5 rounded-lg space-x-2 '>
                <input type='text' placeholder='Search Campaign' className='  w-full  bg-primary'/>
                <CiSearch className='text-4xl'/>
            </div>
        </div>
        <div className='text-center flx-row-center space-x-10 font-header text-xl my-5'>
            <li className='border-b-[1px] p-3 w-[200px]'>Ongoing Campaign</li>
            <li className=' p-3 w-[200px]'>Past Campaign</li>
        </div>
        <div className='large-container flx-row-between flex-wrap '>
            {array.map((item,id)=>(
                <Campaign key={id}/>
            ))}
        </div>
    </div>
  )
}

export default Campaigns