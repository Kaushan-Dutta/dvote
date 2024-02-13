"use client"
import { useState } from "react"
import Header from "../../components/Header";
import InputForm from '../../components/InputForm';

const GetTokens = () => {
  const [amount, setAmount] = useState<number>();
  const [address, setAddress] = useState<string>();

  const inputList = [
    {
      type: 'number',
      placeholder: 'Enter token amount',
      label: 'Token Amount:',
      onChange: (e: any) => setAmount(e.target.value),
      value: amount
    },
    {
      type: 'text',
      placeholder: 'Enter wallet address',
      label: 'Address:',
      onChange: (e: any) => setAddress(e.target.value),
      value: address
    }
  ];

  return (
    <div className=' py-40 '>
        <Header heading="Buy Tokens"/>
        <div className='flx-row-center '>
            <InputForm title="Buy GD Tokens" form={inputList} />
        </div>
    </div>
  );
};
export default GetTokens
