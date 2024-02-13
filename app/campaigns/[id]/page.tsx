import React from 'react'
import Image from 'next/image'
import Button from '../../../components/Button'

const Campaign = () => {
  return (
    <div className='h-[100vh]  large-container'>
        <div className='py-40 flex flex-col gap-5'>
            <div className=''>
                <Image src="" className="border-2 w-full rounded-2xl" alt="Campaign Banner"/>
            </div>
            <div className='flx-row-between flex-wrap '>
                <div className='w-2/3'>
                    <h1 className='text-4xl font-header'><b>Campaign Title</b></h1>
                    <p className='text-xl font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  iure necessitatibus explicabo quas esse ad eum.</p>
                </div>
                <div className='w-1/3 border-light border-[1px] rounded-xl'>
                     <h1 className='text-2xl font-header text-center p-5'><b>Canditaes</b></h1>
                     <div className='flx-row-between text-xl p-5'>
                        <Image src="" alt="Profile" className='w-20 h-20 rounded-full border-2'/>
                        <div className='w-1/2'>
                            <p className='text-left'>Canditate 1</p>  
                        </div>
                        <Button navigate="/auth/login" name="Vote"/>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Campaign