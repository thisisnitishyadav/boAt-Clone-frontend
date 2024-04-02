'use client'
import { Favorite, Person, Search, ShoppingBag } from '@mui/icons-material';
import { Box, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Navbar =()=> {
  const router = useRouter();
  const [isVisible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };


  return (
    <div className='bg-white border-b'>
    <div className=' grid mx-8 shadow-xl h-[83px] items-center'>
         <div className=" flex h-[41px] items-center justify-between">
    
       <div className=''>
        <img src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434" 
        alt="boAt icon" 
        className="h-[40px] cursor-pointer"onClick={() => router.push('/')}>
        </img>
        </div>

        <div className=' md:flex md:items-center gap-8 h-[41px] hidden '>
         <div className=" cursor-pointer " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <p className='text-[16px] font-light hover:font-medium ' >Categories</p>
          {isVisible && (
            <div className=" bg-slate-100 p-4 rounded-md absolute top-0 left-0 mt-12 ml-8 z-10">
              <div className='grid grid-cols-3'>
              <div className='grid-span-1'>
              <div className='flex items-center 'onClick={() => router.push('/collection/wireless-earbuds')}>
                <img
                src="https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062"
                alt="Image"
                className="mt-4"
              />
              <p className='mt-6'>Wireless Earbuds</p>
              </div>

              <div className='flex items-center 'onClick={() => router.push('/collection2')}>
                <img
                src="https://www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287"
                alt="Image"
                className="mt-4"
              />
              <p className='mt-6'>Neckbands</p>
              </div>
              </div>

              <div className='grid-span-1'>
              <div className='flex items-center 'onClick={() => router.push('/collection/smart-watches')}>
                <img
                src="https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668"
                alt="Image"
                className="mt-4"
              />
              <p className='mt-6'>Smart Watches</p>
              </div>
            
              <div className='flex items-center 'onClick={() => router.push('/collection/headphones')}>
                <img
                src="https://www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051"
                alt="Image"
                className="mt-4"
              />
              <p className='mt-6'>Headphones</p>
              </div>
              </div>

              <div className='grid-span-1'>
              <div className='flex items-center 'onClick={() => router.push('/collection/wireless-speakers')}>
                <img
                src="https://www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751"
                alt="Image"
                className="mt-4"
              />
              <p className='mt-6'>Wireless Speakers</p>
              </div>

              <div className='flex items-center 'onClick={() => router.push('/collection/party-speakers')}>
                <img
                src="https://www.boat-lifestyle.com/cdn/shop/collections/sound_bar_4f111a6a-2482-41c8-87f2-db7e0ee19e69_1_100x.webp?v=1684827961"
                alt="Image"
                className="mt-4"
              />
              <p className='mt-6'>Party Speakers</p>
              </div>
              </div>
              </div>
            </div>
          )}
         </div>
         <div className=" cursor-pointer ">
          <p className='text-[16px] font-light hover:font-medium'>boAt Personalisation</p>
        </div>
         <div className=" cursor-pointer ">
          <p className='text-[16px] font-light hover:font-medium'>Gift with boAt</p>
        </div>
         <div className="cursor-pointer">
          <p className='text-[16px] font-light hover:font-medium'>Corporates Order</p>
        </div>
         <div className=" cursor-pointer">
          <p className='text-[16px] font-light hover:font-medium'>More</p>
        </div>
        </div>
  

    <div className=' md:flex hidden'>
        <Box>
                 <TextField variant='outlined' size='small'   
                 InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search/>
                    </InputAdornment>
                  )
                }} placeholder='Search' sx={{width:'300px','& fieldset':{borderRadius:'20px'}}}/>      
        </Box>
    </div>


    <div className="flex justify-between items-center gap-6">
          <div className='cursor-pointer'onClick={() => router.push('/login')}><Person/></div>
          <div className='cursor-pointer'><Favorite/></div>
          <div className='cursor-pointer'onClick={() => router.push('/cart')}><ShoppingBag/></div>
        </div>
    </div>
   
       
        </div>
    </div>
  )
}

export default Navbar;