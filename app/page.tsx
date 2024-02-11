import React from 'react'
import Button from '../components/Button'
import Underline from '../public/underline1.png'
import Underline1 from '../public/underline2.png'
import Image from 'next/image'

const HelpList=[
  {
    title:"Get Tokens",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.  iure necessitatibus explicabo quas esse ad eum.",
    position:''
  },
  {
    title:"Create Campaign",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.  iure necessitatibus explicabo quas esse ad eum.",
    position:'-reverse'
  }
]
const Transaction=[
  {
    token:"ETH",
    value:"0.001",
    transaction:"0xade2636fc3623892"
  },
  {
    token:"ETH",
    value:"0.001",
    transaction:"0xade2636fc3623892"
  },
  {
    token:"ETH",
    value:"0.001",
    transaction:"0xade2636fc3623892"
  },
  {
    token:"ETH",
    value:"0.001",
    transaction:"0xade2636fc3623892"
  }
]
const Home = () => {
  return (
    <div className='home' id="home">
      <section className=' flx-row-center text-center h-[100vh]'>
        <div className=' w-2/3 flex flex-col gap-5'>
            <h1 className='font-header text-8xl tracking-widest'><b>VOTE VERSE</b></h1>
            <p className='text-4xl font-serif '>Decentralized voting application</p>
            <p className='text-2xl font-mono text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  iure necessitatibus explicabo quas esse ad eum.</p>
            <div className='my-10'>
              <Button navigate="/auth/login" name="Visit Campaigns"/>
            </div>
        </div>
      </section>

      <div className='w-full relative -translate-y-20'>
          <Image src={Underline}  alt="underline" className='w-full'/>
      </div>

      <section className='text-center'>
          <h1 className='font-header text-4xl tracking-widest'><b>HOW CAN WE HELP YOU</b></h1>
          <p className='text-2xl font-mono text-light my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div className='flex flex-col gap-5 primary-container'>
              {
                HelpList.map((item,index)=>(
                  <div key={index} className={`p-5 flex flex-row${item.position} justify-between items-center space-x-10`}>
                    <Image src="" alt="Help Image" className='border-2 rounded-lg h-full w-1/2'/>
                    <div className='text-left w-1/2 flex flex-col gap-5'>
                        <h1 className='font-serif text-4xl tracking-widest'>{item.title}</h1>
                        <p className='text-xl font-mono text-light'>{item.description}</p>
                        <div className='my-5'>
                          <Button navigate="/auth/login" name="Get Tokens"/>
                        </div>
                    </div>
                  </div>
                ))
              }
          </div>  
      </section>

      <div className='w-full relative -translate-y-20'>
          <Image src={Underline}  alt="underline" className='w-full'/>
      </div>
      
      <div className='text-center large-container'>
          <h1 className='font-header text-4xl tracking-widest'><b>HOW CAN WE HELP YOU</b></h1>
          <p className='text-2xl font-mono text-light my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <br/>
          <table className=' shadow-light shadow-sm border-[1px] border-light rounded-lg  w-full font-header text-xl tracking-widest p-5'>
            <tbody className='px-5 w-[90%]'>
              <tr className='flex flex-row justify-around items-center py-5 text-light'>
                <th className='w-1/4 text-center'>Currency</th>
                <th className='w-1/4 text-center'>Amount</th>
                <th className='w-1/4 text-center'>Transaction</th>
                <th className='w-1/4 text-center'>View</th>
              </tr>
              {Transaction.map((item, index) =>(
                <tr className='flex flex-row justify-around items-center py-10 border-b-[1px] border-light'>
                  <td className='w-1/4 text-center'>{item.token}</td>
                  <td className='w-1/4 text-center'>{item.value}</td>
                  <td className='w-1/4 text-center'>{item.transaction}</td>
                  <td className='w-1/4 text-center'> <Button navigate="/auth/login" name="View"/></td>
                </tr> 
              ))}
              
              
            </tbody>
           
          </table>
          <div className='text-center font-mono text-xl my-10'>
              <p>Page No. 1</p>
          </div>
      </div>
      
    </div>
  )
}

export default Home