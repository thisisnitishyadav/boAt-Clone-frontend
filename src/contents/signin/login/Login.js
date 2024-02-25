'use client'
import { Button } from '@mui/material'
import React, { useState }  from 'react'
import { useRouter } from 'next/navigation';
import { login } from '@/redux/slices/auth';
const Login = () => {
  const router = useRouter();

  const [loginData] = useState({
    
    username:"",
    password:""
})

const handleLogin = async() =>{
  let result = await dispatch(login(loginData))
  console.log(result,'hello result')
  if(result){
   localStorage.setItem('accessToken',result.data.token)
   navigate('/')
   return true
  }
}

  return (
    <>
       <div className="flex justify-center  items-center min-h-fit bg-slate-100">
        <div className="w-[400px] h-[600px] rounded-l my-16 bg-white ">
        
    <div className=" flex items-center justify-center h-[60px] my-4 border-b-2 text-3xl">
            Login to Account
            </div>
    
    <div className=' mx-8 space-y-8 my-12'>
            <div className="flex border justify-center items-center h-[50px]">
         <input
          value={loginData.username}
          onChange={(e)=>setLoginData((prev)=>({...prev,username:e.target.value}))}
          type="email"
          placeholder="Enter Username or Email ID "
          className="flex justify-center w-full h-full text-center ">
          </input>
            </div>

            <div className="flex border justify-center items-center h-[50px]">
         <input
          value={loginData.password}
          onChange={(e)=>setLoginData((prev)=>({...prev,password:e.target.value}))}
          type="password"
          placeholder="Enter Password "
          className="flex justify-center w-full h-full text-center ">
          </input>
            </div>

            </div>  
             
     <div className=' flex items-center justify-center my-24 h-[50px]'> 
     <Button variant="outlined"onClick={handleLogin}>Login</Button>
    </div>
    <div className='flex justify-center gap-2'>
      Don't have account?
      <p className='text-blue-500 underline underline-offset-2 cursor-pointer'onClick={() => router.push('/signup')}>Signup</p>
    </div>
        </div>
        </div>
    </>
  )
}

export default Login
