"use client"
import { useState } from "react"
import Header from "../../components/Header";
import Image from "next/image";

const Applications = () => {
  
  return (
    <div className=' py-40 '>
        <Header heading="Applications"/>
        <div className='flex flex-col gap-5 large-container'>
            
            <div className="p-5 rounded-2xl border-light border-2 flex md:flex-row flex-col justify-between items-center gap-5 font-header">
                <Image src="" alt="campaign image" className="w-16 h-16 rounded-full border-2"/>
                <div className="md:w-1/3 text-center">
                    <p className="font-serif text-xl">Campaign Name</p>
                </div>
                <p className="text-xl">12-Feb-2023</p>
                <div className="md:w-1/3 text-right space-x-4">
                    <button className="rounded-md px-5 py-2 bg-green-600">Accept</button>
                    <button className="rounded-md px-5 py-2 bg-red-400 ">Reject</button>
                </div>
            </div>

        </div>
    </div>
  );
};
export default Applications
