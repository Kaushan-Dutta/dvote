"use client"
import React, { useState } from 'react'
import Header from '../../components/Header'


const CreateCampaign = () => {
  const [campaign,setCampaign]=useState<string>();
  const [description,setDescription]=useState<string>();
  const [date,setDate]=useState<string>();
  const createForm=[
    {
        label:"Campaign Name",
        type:'text',
        placeholder:"Enter campaign name",
        onchange:(e:any)=>setCampaign(e.target.value),
        value:campaign
    },
    {
        label:"Campaign Description",
        type:'text',
        placeholder:"Enter Details",
        onchange:(e:any)=>setDescription(e.target.value),
        value:description
    },
    {
        label:"End Date",
        type:'date',
        placeholder:"Enter date",
        onchange:(e:any)=>setDate(e.target.value),
        value:date
    },
  ]
  return (
    <div className='py-40 '>
        <Header heading="Create Campaign"/>
        <div className='gap-20 flex-col flex large-container text-3xl'>
            {createForm.map((item,id)=>(
                <div key={id}>
                    <label className=''><b>{item.label}</b></label>
                    <input className='w-full bg-primary py-5 text-3xl' {...item}/>
                </div>
            ))} 
            <div> 
                <label className=''><b>Add Canditates</b></label>
                <div className='flx-row-between space-x-5'>
                    <input type="text" className='w-2/5 bg-primary py-5 text-3xl ' placeholder='Canditate Name'/>   
                    <input type="text" className='w-2/5 bg-primary py-5 text-3xl' placeholder='Wallet Address'/>  
                    <button className='p-5 border-light  bg-dark rounded-lg'>+</button> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateCampaign