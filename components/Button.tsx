import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

type ButtonType ={
    navigate: string;
    name: string;
    addflex?:boolean
}
const Button:React.FC<ButtonType> = ({navigate,name,addflex}) => {
  return (
    <motion.button  className={` ${addflex && 'flx-row-center'} border-[1px]  py-3 px-10 tracking-widest font-header text-xl`} whileHover={{scale:1.2}} transition={{duration:0.3}}>{name}</motion.button>
  )
}

export default Button