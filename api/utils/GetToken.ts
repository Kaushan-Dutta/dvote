import React, { useState } from 'react';

export  function ReceiveTokens() {
 /*  const [amount, setAmount] = useState<number>();
  const [address, setAddress] = useState<string>(); */

  const inputList = [
    {
      type: 'number',
      placeholder: 'Enter token amount',
      label: 'Token Amount:',
      //onChange: (e: any) => setAmount(e.target.value),
      //value: amount
    },
    {
      type: 'text',
      placeholder: 'Enter wallet address',
      label: 'Address:',
      //onChange: (e: any) => setAddress(e.target.value),
      //value: address
    }
  ];

  return {inputList};
};

