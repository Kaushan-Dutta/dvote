import React from 'react'
import Underline from '../public/underline3.png'
import Image from 'next/image'

interface Heading{
    heading: string
}
const Header:React.FC<Heading> = ({heading}) => {
  return (
    <div className='primary-container font-header md:text-4xl text-3xl tracking-widest'>
        <h1 className=' '>{heading}</h1>
        <Image src={Underline} alt="underline" className='hidden lg:flex w-full relative -translate-y-10'/>
    </div>
  )
}

export default Header