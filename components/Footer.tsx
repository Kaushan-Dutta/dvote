"use client"
import React from 'react'

import Logo from './Logo';

import { Navlinks } from '../routes.config';
import Link from 'next/link';


const Header = () => {
  return (
    <section className='flex md:flex-row flex-col gap-5 justify-between items-center primary-container font-header text-xl  border-light border-t-[1px]  '>
        <div className='flx-row-between text-3xl'>
          <Logo/>&nbsp;&nbsp;Vote Verse
        </div>
        <div className='text-center space-x-5 md:space-x-10 '>
           {Navlinks.map(item=><Link href={item.path}>{item.name}</Link>)}
        </div>
        
    </section>
  )
}

export default Header