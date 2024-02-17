"use client"
import React, { useState } from 'react'
import Header from '../../components/Header'
import { ImCross } from "react-icons/im";
import Button from '../../components/Button';

type Candidate={
    candidate: string,
    address:string
}
const CreateCampaign = () => {
  const [campaign,setCampaign]=useState<string>();
  const [description,setDescription]=useState<string>();
  const [candidates,setCandidates]=useState<Candidate[] >([]);
  const [date,setDate]=useState<string>();

  const handleAddCandidate = (e:any) => {
    e.preventDefault();
    const candidateNameInput = document.getElementById('candidate') as HTMLInputElement;
    const candidateAddressInput = document.getElementById('address') as HTMLInputElement; 

    if (candidateNameInput.value && candidateAddressInput.value) {
        const newCandidate: Candidate = {
            candidate: candidateNameInput.value,
            address: candidateAddressInput.value
        };
        setCandidates([...candidates, newCandidate]);

        candidateNameInput.value = '';
        candidateAddressInput.value = '';
    }
};
  
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
        <form className='gap-20 flex-col flex large-container text-3xl'>
            {createForm.map((item,id)=>(
                <div key={id}>
                    <label className=''><b>{item.label}</b></label>
                    <input className='w-full bg-primary py-5 text-3xl' {...item}/>
                </div>
            ))} 
            <div className=''> 
                <label className=''><b>Add Canditates</b></label>
                <div className='my-5 flex flex-row items-center space-x-5 flex-wrap'>
                    {candidates.map(item=>
                    <div className='border-[1px] rounded-full  flx-row-between px-5 py-2 w-[250px] text-xl'>
                        <p>{item.candidate}</p>
                        <button className=' text-light' onClick={()=>{
                            const filterCandidates=candidates.filter(candidate=> candidate.candidate!=item.candidate);
                            setCandidates(filterCandidates);
                        }}><ImCross/></button>
                    </div>)}
                    
                </div>
                <div className='flx-row-between lg:space-x-5 flex-wrap'>
                    <input type="text" className='w-2/5 bg-primary py-5 text-3xl ' placeholder='Canditate Name' id="candidate" />   
                    <input type="text" className='w-2/5 bg-primary py-5 text-3xl' placeholder='Wallet Address' id="address"/>  
                    <button className='p-5 border-light  bg-dark rounded-lg' onClick={handleAddCandidate}>+</button> 
                </div>
            </div>
            <div className='my-5 mx-auto'>
                <Button navigate="/auth/login" name="SUMBIT"/>
            </div> 
        </form>
    </div>
  )
}

export default CreateCampaign