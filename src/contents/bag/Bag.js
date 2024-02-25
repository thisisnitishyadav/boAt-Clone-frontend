'use client'
import { PhoneCallback } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react'
import { useRouter } from 'next/navigation';

const Bag = () => {
  const router=useRouter();
  return (
    <div className='bg-white'> 
    <div className='flex justify-center items-center '>
      <img src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' 
      alt='' 
      className=''></img>
    </div>
    <div className=''>
<div className='my-3'>
  <p className='flex justify-center'>Your cart is empty</p>
  <p className='flex justify-center'>Add items to it</p>
</div>
<div className='flex justify-center py-4'>
  <Button variant="outlined"onClick={() => router.push('/')}>Shop Now</Button>
  </div>
    </div>

    </div>
  )
}

export default Bag;
