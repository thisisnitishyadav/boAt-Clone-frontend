'use client'
import { Button } from '@mui/material'
import { useFormik } from "formik";
import React, { useState }  from 'react'
import { LoginSchema } from "../../../schema/Login";
import { useRouter } from 'next/navigation';
import { login,register } from '@/redux/slices/auth';
import { useDispatch } from 'react-redux';

const Login = ({ setDilogOpen }) => {
  const router = useRouter();
  const dispatch = useDispatch();

//   const [loginData,setLoginData] = useState({
//     username:"",
//     password:""
// })

const handleClear = () => {
  setDilogOpen(false);
};

const initialValue = {
  username:"",
  password:"",
};


const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
useFormik({
  initialValues: initialValue,
  validationSchema: LoginSchema,
  onSubmit: async (values, action) => {
    console.log(values);
    const result = await dispatch(login(values));
    if (result) {
      alert("LogIn Successfully");
      localStorage.setItem('accessToken',result.token)
      router.push("/");
      handleClear();
      action.resetForm();
    }
    console.log(result);  
  },
});

// const handleLogin = async() =>{
//   let result = await dispatch(login(loginData))
//   // console.log(result,'hello result')
//   if(result){
//     // alert(result.message);
//    localStorage.setItem('accessToken',result.token)
//    router.push("/")
//    return true
//   }
// }

  return (
    <>
       <div className="flex justify-center items-center min-h-fit bg-slate-100">
        <div className="w-[400px] h-[600px] rounded-l my-16 bg-white ">
        
    <div className=" flex items-center justify-center h-[60px] my-4 border-b-2 text-3xl">
            Login to Account
            </div>
    <form onSubmit={handleSubmit}>
    <div className=' mx-8 space-y-8 my-12'>
            <div className="flex border justify-center items-center h-[50px]">
         <input
         value={values.username}
         onChange={handleChange}
         onBlur={handleBlur}
          name='username'
          // onChange={(e)=>setLoginData((prev)=>({...prev,username:e.target.value}))}
          type="email"
          placeholder="Enter Username or Email ID "
          className="flex justify-center w-full h-full text-center ">
          </input>{errors.username && touched.username && (
              <div style={{ color: "red" }}>{errors.username}</div>
            )}
            </div>

            <div className="flex border justify-center items-center h-[50px]">
         <input
           value={values.password}
           onChange={handleChange}
           onBlur={handleBlur}
           name='password'
          // value={loginData.password}
          // onChange={(e)=>setLoginData((prev)=>({...prev,password:e.target.value}))}
          type="password"
          placeholder="Enter Password "
          className="flex justify-center w-full h-full text-center ">
          </input>{errors.password && touched.password && (
              <div style={{ color: "red" }}>{errors.password}</div>
            )}

            </div>

            </div>  
             
     <div className='flex items-center justify-center my-24 h-[50px]'> 
     <Button variant="outlined" type='submit'>Login</Button>
    </div>
    </form>
    <div className='flex justify-center gap-2'>
      Don't have account?
      <p className='text-blue-500 underline underline-offset-2 cursor-pointer'onClick={() => router.push('/signup')}>Signup</p>
    </div>
        </div>
        </div>
    </>
  )
}

export default Login;
