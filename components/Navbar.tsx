"use client"
import React,{useState} from 'react'
import { RiMenuFoldFill } from "react-icons/ri";
import {motion,AnimatePresence} from 'framer-motion';

import Logo from './Logo';
import Button from './Button';

import { Navlinks } from '../routes.config';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'


const style={
  wrapper:`flex flex-row justify-between items-center primary-container font-header text-xl shadow-light shadow-sm fixed w-full backdrop-blur-sm z-10`
}

const ProfileDrop=()=>(
    <div className='backdrop-blur-sm z-10 profile'>
      <button className='p-2 rounded-md border-2 border-white '>KD</button>
      <div className='hidden absolute rounded-md py-5 px-3 drop_down  w-52 border-2 -translate-x-36 translate-y-2 '>
          <Link href="/profile" className=' hover:border-[1px] p-2 rounded-lg'>Profile</Link>
          <Link href="/create" className=' hover:border-[1px] p-2 rounded-lg'>Create Camp</Link>
          <hr className='mb-2'/>
          <button className='border-2 p-2 rounded-lg'>Wallet Setup</button>
          <hr className='my-2'/>
          <button className='bg-white text-primary rounded-lg p-2 '>Logout</button>
     </div>
    </div>
)
const Header = () => {
  const [sidebar,setSidebar]=useState<boolean>(false);
  const router = usePathname()

  return (
    <div className='font-header'>
      <section className={`lg:flex hidden ${style.wrapper}`}>
          <div className=' flex flex-row items-center space-x-10'>
            <div className=''>
              <Logo/>
            </div>
            <div className='space-x-10'>
              {Navlinks.map(item=><Link href={item.path} key={item.name} className={`tracking-widest ${item.path==router && 'border-b-2 py-3  '}  `}>{item.name}</Link>)}
            </div>
          </div>
          {/* <div className=' text-right'>
            <Button navigate="/auth/login" name="Login"/>
          </div> */}
          <ProfileDrop/>
      </section>
      <section className={`lg:hidden ${style.wrapper}`}>
          <div className=''>
            <Logo/>
          </div>
          <div className='space-x-5 flex-row flex justify-end'>
          <ProfileDrop/>

          <button className='text-4xl' onClick={()=>setSidebar(!sidebar)}><RiMenuFoldFill/></button>
          </div>
      </section>
      {sidebar && 
        <AnimatePresence>
          <motion.div className=' h-full w-80 flex flex-col gap-10 z-20 fixed p-10 bg-dark text-2xl' initial={{x:-90}} animate={{x:-10}}  transition={{stifness:500,type:'spring',ease:'easeOut'}} >
            <div className='mx-auto '>
              <Logo/>
            </div>          
            {Navlinks.map(item=><Link href={item.path} key={item.name} className='tracking-widest'>{item.name}</Link>)}
            <div className='flex-grow' />
            <div className='w-full relative bottom-0'><Button navigate="/auth/login" name="Login" addflex='w-full' /></div>
          </motion.div>
        </AnimatePresence>
}
    </div>
  )
}

export default Header