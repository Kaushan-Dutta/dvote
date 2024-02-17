
import React from 'react'
import Logo from './Logo';

const Loader = () => {
  return (
    <div className='popup-window flx-row-center font-header text-4xl z-40'>
      <Logo loader={true}/>&nbsp;&nbsp;Loading...
    </div>
  )
}

export default Loader