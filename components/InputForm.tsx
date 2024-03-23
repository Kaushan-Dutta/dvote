import React from 'react'
import Image from 'next/image'
import Button from './Button'

type Form={
  type:string,
  placeholder:string,
  label:string,
  onChange:(e:any)=>void,
  value:any
}

interface Input{
  title:string,
  form:Form[],
  onSubmit:(e:any)=>void
}
const InputForm:React.FC<Input> = ({title,form,onSubmit}) => {
  return (
    <div className='w-96 '>

      <div className='w-32 h-32 rounded-full p-2 shadow-md mx-auto flx-row-center translate-y-10 bg-primary'>
        <Image src="" alt="logo" className='bg-light bg-cover border-2 w-28 h-28 rounded-full'/>
      </div>

      <div className='bg-dark rounded-3xl shadow-md  p-10 flex-col flex gap-5 '>
        <p className='text-center text-3xl mt-10 font-header'>{title}</p>
        <form className='flex-col flex gap-5' onSubmit={onSubmit}>
          {form.map((item,id)=>(
            <div className='gap-3 flex-col flex '>
              <label className='text-xl'><b>{item.label}</b></label>
              <input {...item} className='w-full bg-dark '/>   
            </div>
          ))}
        
          <div className='my-5 mx-auto'>
            <Button name={title} />
          </div> 
        </form>    
      </div>
    </div>
  )
}

export default InputForm