"use client"
import React,{useState} from 'react'
import { CiSearch } from "react-icons/ci";
import Campaign from './Campaign';

const Campaigns = () => {
  const array=[1,2,3,4,5,6]
  const [nav,setNav]=useState<string>('ongoing');

  return (
    <div className='min-h-[100vh] py-40 '>
        <div className='flx-row-center'>
            <div className='flx-row-between w-1/2  p-5 rounded-lg space-x-2 '>
                <input type='text' placeholder='Search Campaign' className='  w-full  bg-primary'/>
                <CiSearch className='text-4xl'/>
            </div>
        </div>
        <div className='text-center flx-row-center space-x-10 font-header text-xl my-5'>
            <li className={`${nav=='ongoing' && 'border-b-[1px]'} p-3 w-[200px]`} onClick={()=>setNav('ongoing')} >Ongoing Campaign</li>
            <li className={` ${nav=='past' && 'border-b-[1px]'} p-3 w-[200px]`} onClick={()=>setNav('past')}>Past Campaign</li>
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