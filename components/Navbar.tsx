"use client"
import React from 'react'

import Logo from './Logo';
import Button from './Button';

import { Navlinks } from '../routes.config';
import Link from 'next/link';


const Header = () => {
  return (
    <section className='flx-row-between primary-container font-header text-xl shadow-light shadow-sm fixed w-full backdrop-blur-sm'>
        <div className='w-2/3 flex flex-row items-center space-x-20'>
          <div className=''>
            <Logo/>
          </div>
          <div className='space-x-10'>
            {Navlinks.map(item=><Link href={item.path} key={item.name} className='tracking-widest'>{item.name}</Link>)}
          </div>
        </div>
        <div className='w-1/3 text-right'>
           <Button navigate="/auth/login" name="Login"/>
        </div>
    </section>
  )
}

export default Header