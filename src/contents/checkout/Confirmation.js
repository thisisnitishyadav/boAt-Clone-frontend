'use client'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from '@/redux/store/store'

const Confirmation = () => {
  const router=useRouter();
  const dispatch =useDispatch();
  
  const handleOrderDetail=()=>{
    
   router.push('/orders')
  }
  return (
    <>
    <Box sx={{height:'100px',width:'400px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      <Typography>Your order is successfull</Typography>
      <Button onClick={()=>handleOrderDetail() } variant='outlined'>Check Your Order Status</Button>
    </Box>

    </>
  )
}

export default Confirmation
