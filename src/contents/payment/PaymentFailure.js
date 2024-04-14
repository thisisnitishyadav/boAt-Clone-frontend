'use client'
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'


const PaymentFailure = () => {
    const router = useRouter();

  return (
    <div className='bg-white min-h-full'>
      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'600px',gap:'30px'}}>
        <Typography sx={{fontSize:'25px',fontWeight:'400',color:'red'}}>Some Error Occured</Typography>
        <img src='https://t3.ftcdn.net/jpg/05/83/87/88/360_F_583878813_lQ9MoaTWRBSjxourBrYYn8DNjM0xmHwA.jpg' style={{height:'400px',width:'400px'}}/>
        <Button onClick={() => router.push('/')} variant='outlined' sx={{width:'400px'}}>Continue Shopping</Button>
      </Box>
    </div>
  )
}

export default PaymentFailure
