//@ts-nocheck
"use client"
import { useState } from "react"
import Header from "../../../components/Header";
import axios from 'axios';
import InputForm from "../../../components/InputForm";
import {useRouter} from 'next/navigation'

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router=useRouter();

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
  const handleLogin=async(e:any)=>{
    e.preventDefault();
    try{
      //console.log(email,password)
      const res=await axios.get(`http://localhost:3000/api/auth/login?email=${email}&password=${password}`,
        {
          headers:{
            'Content-Type':'application/json'
          }
        });
      localStorage.setItem('verseToken',res.data.token);
      router.push('/');
    }
    catch(err:any){
      throw new Error(err.message);
    }
  }  

  return (
    <div className=' py-40 '>
        <Header heading="Login / SignIn"/>
        <div className='flx-row-center '>
            <InputForm title="Login" form={inputList} onSubmit={handleLogin}/>
        </div>
    </div>
  );
};
export default Login
