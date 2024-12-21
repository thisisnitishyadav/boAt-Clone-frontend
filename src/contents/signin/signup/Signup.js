'use client'
import { Button } from '@mui/material';
import { useFormik } from "formik";
import React , { useState } from 'react'
import { SignUpSchema } from "../../../schema";
import { useDispatch } from "react-redux";
import { register } from '@/redux/slices/auth';
import { useRouter } from 'next/navigation';



const Signup = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const initialValue = {
  name:"",
  email:"",
  password:"",
};

  const { values,errors,touched, handleChange, handleBlur, handleSubmit } = useFormik({
    validationSchema: SignUpSchema,
    initialValues: initialValue,
    onSubmit: async(values, action) => {
      const{name,email,password}= values
      const data = {name,email,password}
      const result  = await dispatch(register(data))
      console.log(result)
      if (result){
        alert("Registered Successfully")
        router.push("/login")
        action.resetForm();
      }
      
    },
  });
  

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
    <form onSubmit={handleSubmit}>
    <div className=' mx-8 space-y-8 my-12'>
            <div className="flex border justify-center items-center h-[50px]">
         <input
          // value={userData.name}
          // onChange={(e)=>setuserData((prev)=>({...prev,name:e.target.value}))}
          value= {values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          name='name'
          type="name"
          placeholder="Enter Name "
          className="flex justify-center w-full h-full text-center ">
          </input>
          {errors.name && touched.name && <div style={{color:'red'}}>{errors.name}</div>}
            </div>

            <div className="flex border justify-center items-center h-[50px]">
         <input
         // value={userData.email}
         // onChange={(e)=>setuserData((prev)=>({...prev,email:e.target.value}))}
          value={values.email}
          onChange={handleChange}
          name='email'
          onBlur={handleBlur}
          type="email"
          placeholder="Enter Email ID or Username "
          className="flex justify-center w-full h-full text-center ">
          </input>
          {errors.email && touched.email && <div style={{color:'red'}}>{errors.email}</div>}
            </div>

            <div className="flex border justify-center items-center h-[50px]">
         <input
         // value={userData.password}
         // onChange={(e)=>setuserData((prev)=>({...prev,password:e.target.value}))}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          name='password'
          type="password"
          placeholder="Create Password "
          className="flex justify-center w-full h-full  text-center ">
          </input>
          {errors.password && touched.password && <div style={{color:'red'}}>{errors.password}</div>}
            </div>

            </div>  
            
     <div className='flex items-center justify-center my-20 h-[50px]'> 
     <Button variant="outlined" type='submit'>Signup</Button>
     </div>
     </form>
    <div className='flex justify-center gap-2'>
      Already have an account?
      <p className='text-blue-500 underline underline-offset-2 cursor-pointer'onClick={() => router.push('/login')}>Login</p>
    </div> 
   
        </div>
        </div>
        </> 
  )
}

export default Signup;
