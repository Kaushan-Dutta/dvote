import React from 'react'
import { SiBlockchaindotcom } from "react-icons/si";
import Link from 'next/link';
const Logo = () => {
  return (
    <Link href="/" className='text-4xl font-primary '><SiBlockchaindotcom/></Link>
  )
}

export default Logo