"use client"
import { useState } from "react"
import Header from "../../../components/Header";
import axios from 'axios';
import InputForm from "../../../components/InputForm";
import {useRouter} from 'next/navigation';


const Register = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [name, setName] = useState<string>();
  const router = useRouter();

  const inputList = [
    {
      type: 'text',
      placeholder: 'Enter username',
      label: 'Your name:',
      onChange: (e: any) => setName(e.target.value),
      value: name
    },
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
    },
    
  ];
  const handleRegister=async(e:any)=>{
    e.preventDefault();
    try{
      console.log(email,password)
      const res=await axios.post(`http://localhost:3000/api/auth/register`,{name,email,password},
        {
          headers:{
            'Content-Type':'application/json'
          },
          
        });
        router.push('/auth/login');
    }
    catch(err:any){
      throw new Error(err.message);
    }
  }
  return (
    <div className=' py-40 '>
        <Header heading="Register / SignUp"/>
        <div className='flx-row-center '>
            <InputForm title="Register" form={inputList} onSubmit={handleRegister}/>
        </div>
    </div>
  );
};
export default Register
