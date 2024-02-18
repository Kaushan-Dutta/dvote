"use client"
import React from 'react'

import Logo from './Logo';
import {motion} from 'framer-motion';

const Loader = () => {

  return (
    <div className='popup-window flx-row-center font-header text-4xl z-40'>
      <motion.div animate={{rotateZ:360}} transition={{duration:1,repeat:Infinity,delay:2}}><Logo loader={true} /></motion.div>&nbsp;&nbsp;Loading...
    </div>
  )
}

export default Loader