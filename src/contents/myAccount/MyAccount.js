'use client'
import { getUser, logoutUser, updateUser } from '@/redux/slices/auth'
import {  Avatar, Box, Button, Divider, Tab, Tabs, TextField, Typography } from '@mui/material'
import {  useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


const initialValues  = {
    phone:"",
    name:"",
    lastName:"",
    email:"",
    password:"",
    date:"",
    sex:"",
 };
 
const MyAccount = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const handleLogout = async () => {

          localStorage.removeItem('accessToken');
          await dispatch(logoutUser())
          router.push('/signup')
           }
     
    const fetchUser = async() =>{
        let result = await dispatch(getUser())
        if(result)
        console.log(user)
    }
    useEffect(()=>{
          fetchUser()
    },[dispatch])

    const {values ,  handleBlur,handleChange,handleSubmit} = useFormik({

        initialValues: initialValues,
        // validationSchema: signupSchema,
    
        onSubmit : async (values,action) =>{
          const {firstName, lastName, sex, date} = values;
          let data = {firstName, lastName, sex, date}
    
          const result = await dispatch(updateUser(data,user.id));
          console.log(result);
           if(result){
          
           router.push("/");
           }
     
        },
        
        
      });
      
  
  return (
    <div className='bg-white min-h-screen'>
     <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
        <Box sx={{width:'80%',display:'flex',justifyContent:'center',marginTop:'40px',gap:'40px'}}>


        <Box  sx={{flexDirection:'column',width:'300px',background:'white',border:'1px solid rgba(0,0,0,0.3)',borderRadius:'2px'}}>

<Box sx={{padding:'20px',display:'flex',gap:'30px',}} className='bg-slate-400'>
 <Typography sx={{color:'black'}}><Avatar/></Typography>
 <Box >
   <Typography sx={{color:'black'}}>{user.name} {user.lastName}</Typography>
   <Typography sx={{color:'black',fontSize:'13px'}}>{user.email}</Typography>
    
 </Box>
</Box>
<Divider/>





<Typography sx={{fontWeight:'400',fontSize:'16px',padding:'15px'}}>Profile</Typography>
<Divider/>

<Typography onClick={() => router.push('/orders')} sx={{fontWeight:'400',fontSize:'16px',padding:'15px',cursor:'pointer'}}>Orders</Typography>
<Divider/>

<Typography sx={{fontWeight:'400',fontSize:'16px',padding:'15px'}}>Wishlist</Typography>
<Divider/>


<Typography sx={{fontWeight:'400',fontSize:'16px',padding:'15px'}}>Saved Address</Typography>
<Divider/>

<Typography sx={{fontWeight:'400',fontSize:'16px',padding:'15px'}}>Contact Us</Typography>
<Divider/>



<Typography onClick={handleLogout} sx={{fontWeight:'400',fontSize:'16px',padding:'15px',cursor:'pointer'}}>Logout</Typography>



</Box>








<Box sx={{width:'70%',border:'1px solid black'}}>

<form onSubmit={handleSubmit} autoComplete="off" style={{width:'100%',display:'flex',flexDirection:'column'}}>

<Box sx={{padding:'15px'}} className='bg-slate-400'>
    <Typography sx={{color:'black',fontWeight:'400'}}>EDIT PROFILE</Typography>
</Box>

<Box sx={{padding:'15px',justifyContent:'right',display:'flex'}}>
    <Typography sx={{color:'blue',fontSize:'12px'}}>Change Password</Typography>
</Box>

<Box sx={{padding:'15px'}}>
    <TextField variant='standard' label='email' type='email' name='email' value={user.email}  onChange={handleChange} onBlur={handleBlur} autoFocus='false' sx={{width:'100%'}} ></TextField>
           
                 </Box>

<Box sx={{padding:'15px',display:'flex',gap:'30px'}}>
<TextField variant='standard' label={user.name} type='text' name='firstName' value={values.name}  onChange={handleChange} onBlur={handleBlur}  sx={{width:'100%'}} ></TextField>

<TextField variant='standard' label={user.lastName} type='text' name='lastName' value={values.lastName} onChange={handleChange} onBlur={handleBlur} autoFocus='false' sx={{width:'100%'}} ></TextField>
</Box>

<Box sx={{padding:'15px',display:'flex',gap:'30px'}}>
<TextField variant='standard'  type='date' name='date' value={values.date} onChange={handleChange} onBlur={handleBlur} autoFocus='false' sx={{width:'100%'}} ></TextField>
 <TextField variant='standard' label='phone' type='number' name='phone' value={user.phone} onChange={handleChange} onBlur={handleBlur} autoFocus='false' sx={{width:'100%'}} ></TextField>
</Box>
 

<Box sx={{padding:'15px'}}>
<TextField variant='standard' label={user.sex} type='text' name='sex' value={values.sex} onChange={handleChange} onBlur={handleBlur} autoFocus='false' sx={{width:'50%'}} ></TextField>
</Box>


 <Box sx={{padding:'10px'}}>
      <Button type='submit' variant='outlined'>SAVE</Button>
 </Box>
 </form>
</Box>




</Box>

        </Box>

  
    </div>
  )
}

export default MyAccount
