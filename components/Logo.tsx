import React from 'react'
import { SiBlockchaindotcom } from "react-icons/si";
import Link from 'next/link';

type Property={
  loader?:boolean
}
const Logo = ({loader}:Property) => {
  return (
    <Link href="/" className={`${loader?'text-6xl':'text-4xl'} font-primary `}><SiBlockchaindotcom/></Link>
  )
}

export default Logo