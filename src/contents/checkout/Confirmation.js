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
    <Box
  sx={{
    height: { xs: 'auto', sm: '100px' },
    width: { xs: '100%', sm: '400px' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    p: { xs: 2, sm: 0 },
    boxShadow: { xs: 'none', sm: 3 },
    backgroundColor: { xs: 'transparent', sm: 'white' },
    textAlign: 'center',
  }}
>
  <Typography
    sx={{
      fontSize: { xs: '16px', sm: '20px' },
      fontWeight: 500,
    }}
  >
    Your order is successful
  </Typography>
  <Button
    onClick={() => handleOrderDetail()}
    variant="outlined"
    sx={{
      fontSize: { xs: '12px', sm: '14px' },
      padding: { xs: '8px 16px', sm: '10px 20px' },
    }}
  >
    Check Your Order Status
  </Button>
</Box>


    </>
  )
}

export default Confirmation
