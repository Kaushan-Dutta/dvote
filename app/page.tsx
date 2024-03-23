"use client"
import React,{useState} from 'react'
import Button from '../components/Button'
import Underline from '../public/underline1.png'
import Underline1 from '../public/underline2.png'
import Image from 'next/image'
import {motion} from 'framer-motion';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  return (
    <div className='home' id="home">
      <section className=' flx-row-center text-center h-[100vh] relative translate-y-10'>
        <motion.div className=' md:w-2/3 w-full flex flex-col gap-5' initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
            <h1 className='font-header text-5xl md:text-8xl tracking-widest'><b>VOTE VERSE</b></h1>
            <p className='text-3xl md:text-4xl font-serif '>Decentralized voting application</p>
            <p className='text-2xl font-mono text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  iure necessitatibus explicabo quas esse ad eum.</p>
            <div className='my-10'>
              <Button navigate="/auth/login" name="Visit Campaigns"/>
            </div>
        </motion.div>
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
                  <div key={index} className={`p-5 flex md:flex-row flex-col gap-5 justify-between items-center md:space-x-10`}>
                    <Image src="" alt="Help Image" className='border-2 rounded-lg h-full md:w-1/2 w-full'/>
                    <div className='text-left md:w-1/2 flex flex-col gap-5'>
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

      <div className='w-full relative '>
          <Image src={Underline}  alt="underline" className='w-full'/>
      </div>
      
      <div className='text-center large-container '>
          <h1 className='font-header text-4xl tracking-widest'><b>HOW CAN WE HELP YOU</b></h1>
          <p className='text-2xl font-mono text-light my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <br/>
          <div className='overflow-x-auto'>

          <table className=' shadow-light shadow-sm border-[1px] border-light rounded-lg  w-full font-header text-xl tracking-widest p-5 overflow-x-auto'>
            <tbody className='px-5 '>
              <tr className='flex flex-row justify-around items-center py-5 text-light  overflow-x-auto'>
                <th className='lg:w-1/4 text-center '>Currency</th>
                <th className='lg:w-1/4 text-center '>Amount</th>
                <th className='lg:w-1/4 text-center '>Transaction</th>
                <th className='lg:w-1/4 text-center '>View</th>
              </tr>
              {Transaction.map((item, index) =>(
                <tr className='flex flex-row justify-around items-center py-10 border-b-[1px] border-light overflow-x-auto'>
                  <td className='lg:w-1/4 text-center mx-5'>{item.token}</td>
                  <td className='lg:w-1/4 text-center mx-5'>{item.value}</td>
                  <td className='lg:w-1/4 text-center mx-5'>{item.transaction}</td>
                  <td className='lg:w-1/4 text-center mx-5'> <Button navigate="/auth/login" name="View"/></td>
                </tr> 
              ))}
              
              
            </tbody>
           
          </table>
          </div>
          <div className='text-center font-mono text-xl my-10'>
              <p>Page No. 1</p>
          </div>
      </div>
      
    </div>
  )
}

export default Home