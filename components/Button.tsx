import React from 'react'
import Link from 'next/link'

type ButtonType ={
    navigate: string;
    name: string;
}
const Button:React.FC<ButtonType> = ({navigate,name}) => {
  return (
    <Link href={navigate} className=' border-[1px] py-3 px-10 tracking-widest font-header text-xl'>{name}</Link>
  )
}

export default Button