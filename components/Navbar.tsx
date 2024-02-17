"use client"
import React,{useState} from 'react'
import { RiMenuFoldFill } from "react-icons/ri";
import {motion} from 'framer-motion';

import Logo from './Logo';
import Button from './Button';

import { Navlinks } from '../routes.config';
import Link from 'next/link';
import { truncate } from 'fs/promises';

const style={
  wrapper:`flex flex-row justify-between items-center primary-container font-header text-xl shadow-light shadow-sm fixed w-full backdrop-blur-sm z-10`
}
const Linkable=motion(Link)
const Header = () => {
  const [sidebar,setSidebar]=useState<boolean>(false);
  return (
    <div className='font-header'>
      <section className={`lg:flex hidden ${style.wrapper}`}>
          <div className=' flex flex-row items-center space-x-10'>
            <div className=''>
              <Logo/>
            </div>
            <div className='space-x-10'>
              {Navlinks.map(item=><Linkable href={item.path} key={item.name} whileHover={{underlinePosition:10}} className='tracking-widest'>{item.name}</Linkable>)}
            </div>
          </div>
          <div className=' text-right'>
            <Button navigate="/auth/login" name="Login"/>
          </div>
      </section>
      <section className={`lg:hidden ${style.wrapper}`}>
          <div className=''>
            <Logo/>
          </div>
          <button className='text-4xl' onClick={()=>setSidebar(!sidebar)}><RiMenuFoldFill/></button>
          
      </section>
      {sidebar && 
        <div className=' h-full w-80 flex flex-col gap-10 z-20 fixed p-10 bg-dark text-2xl'>
          <div className='mx-auto '>
            <Logo/>
          </div>          
          {Navlinks.map(item=><Link href={item.path} key={item.name} className='tracking-widest'>{item.name}</Link>)}
          <div className='flex-grow' />
          <div className='w-full relative bottom-0'><Button navigate="/auth/login" name="Login" addflex={true} /></div>
        </div>}
    </div>
  )
}

export default Header