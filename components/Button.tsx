import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

type ButtonType ={
    name: string;
    addflex?:'w-full' | '',
    
}
const Button:React.FC<ButtonType> = ({name,addflex=''}) => {
  return (
    <motion.button  className={` ${addflex}  border-[1px]  py-3 px-10 tracking-widest font-header text-xl`} whileHover={{scale:1.2}} transition={{duration:0.3}}
       type="submit"
    >{name}</motion.button>
  )
}

export default Button