'use client'
import { Button } from '@mui/material';
import React , { useState } from 'react'
import { useDispatch } from "react-redux";
import { register } from '@/redux/slices/auth';
import { useRouter } from 'next/navigation';


const Signup = () => {
  const router = useRouter();

  const [userData,setUserData] = useState({
    name:"",
    email:"",
    password:""
  })

  const dispatch = useDispatch();
        
  const handleSubmit = async()=>{
  const result = await dispatch(register(userData))
  if(result){
  setSignup(false)
  }
  }

  const handleLogin =() =>{
    router.push("/login")
  }

  return (
    <>
        <div className="flex justify-center  items-center min-h-fit bg-slate-100">
        <div className="w-[400px] h-[600px] rounded-l my-16 bg-white ">
        
    <div className="flex items-center justify-center h-[60px] my-4 border-b-2 text-3xl">
            Sign Up /Create Account
            </div>
    
    <div className=' mx-8 space-y-8 my-12'>
            <div className="flex border justify-center items-center h-[50px]">
         <input
          value= {userData.name}
          onChange={(e)=>setUserData((prev)=>({...prev,name:e.target.value}))}
          type="name"
          placeholder="Enter Name "
          className="flex justify-center w-full h-full text-center ">
          </input>
            </div>

            <div className="flex border justify-center items-center h-[50px]">
         <input
          value={userData.email}
          onChange={(e)=>setUserData((prev)=>({...prev,email:e.target.value}))}
          type="email"
          placeholder="Enter Email ID or Username "
          className="flex justify-center w-full h-full text-center ">
          </input>
            </div>

            <div className="flex border justify-center items-center h-[50px]">
         <input
          value= {userData.password}
          onChange={(e)=>setUserData((prev)=>({...prev,password:e.target.value}))}
          type="password"
          placeholder="Create Password "
          className="flex justify-center w-full h-full  text-center ">
          </input>
            </div>

            </div>  
             
     <div className='flex items-center justify-center my-32 h-[50px]'> 
     <Button variant="outlined">Signup</Button>
    </div>
        </div>
        </div>
        </> 
  )
}

export default Signup;
