"use client"
import { useState } from "react"
import Header from "../../../components/Header";

import InputForm from "../../../components/InputForm";

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const inputList = [
    {
      type: 'email',
      placeholder: 'Enter email',
      label: 'Email:',
      onChange: (e: any) => setEmail(e.target.value),
      value: email
    },
    {
      type: 'password',
      placeholder: 'Enter password',
      label: 'Password:',
      onChange: (e: any) => setPassword(e.target.value),
      value: password
    }
  ];

  return (
    <div className=' py-40 '>
        <Header heading="Login / SignIn"/>
        <div className='flx-row-center '>
            <InputForm title="Login Account" form={inputList} />
        </div>
    </div>
  );
};
export default Login
