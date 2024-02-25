'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import SliderProduct from '../home/homeslider/Slider';
import { Data1 } from '@/constants/productSliderData/Data1';
const Cart1 = () => {
  const router =useRouter();
  return (
    <div className='bg-white md:flex'>
      
      <div className='border mx-8 rounded-xl bg-gray-100 grid grid-cols-2'>
        <div className='border rounded-xl overflow-hidden grid-span-1'>
        <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_235_V2_ac99fe3f-ea0d-4a97-ae36-ee20e835dbe8.png?v=1688047719 '
        alt=''
        className='cursor-pointer'onClick={() => router.push('/product')}>
        </img>
        <div className='flex bg-yellow-400 justify-center items-center'>
          <p className='text-black'>8 Hours Playback</p>
          </div>
        
        </div>
        {/*--------------------------------------half------------------------------------------------------------------*/}
        <div className='border grid-span-1'>

        <div className=''>
          <p className='font-bold text-xl cursor-pointer'onClick={() => router.push('/product')}> Rockerz 235 V2</p>
        </div>
        
        <div className='flex gap-3'> 
          <p className='font-bold text-xl text-[#1A2024]'>&#8377;999</p>
          <p className='text-[#1A2024]'> &#8377;2990</p>
          <p className='text-green-500'>67% off</p>
        </div>

        <div className='flex'>
          <p> </p>
          <p> </p>
        </div>

        <div className='bg-black flex rounded-lg items-center justify-center '>
         <p className='text-white'>Add To Cart</p>
        </div>
      
       
        </div>
      </div>

      <div className='border mx-8 rounded-xl bg-gray-100 grid grid-cols-2'>
        <div className='border rounded-xl overflow-hidden grid-span-1'>
        <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_235_V2_ac99fe3f-ea0d-4a97-ae36-ee20e835dbe8.png?v=1688047719 '
        alt=''
        className='cursor-pointer'onClick={() => router.push('/product')}>
        </img>
        <div className='flex bg-yellow-400 justify-center items-center'>
          <p className='text-black'>8 Hours Playback</p>
          </div>
        
        </div>
        {/*--------------------------------------half------------------------------------------------------------------*/}
        <div className='border grid-span-1'>

        <div className=''>
          <p className='font-bold text-xl cursor-pointer'onClick={() => router.push('/product')}> Rockerz 235 V2</p>
        </div>
        
        <div className='flex gap-3'> 
          <p className='font-bold text-xl text-[#1A2024]'>&#8377;999</p>
          <p className='text-[#1A2024]'> &#8377;2990</p>
          <p className='text-green-500'>67% off</p>
        </div>

        <div className='flex'>
          <p> </p>
          <p> </p>
        </div>

        <div className='bg-black flex rounded-lg items-center justify-center '>
         <p className='text-white'>Add To Cart</p>
        </div>
      
       
        </div>
      </div>

      <div className='border mx-8 rounded-xl bg-gray-100 grid grid-cols-2'>
        <div className='border rounded-xl overflow-hidden grid-span-1'>
        <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_235_V2_ac99fe3f-ea0d-4a97-ae36-ee20e835dbe8.png?v=1688047719 '
        alt=''
        className='cursor-pointer'onClick={() => router.push('/product')}>
        </img>
        <div className='flex bg-yellow-400 justify-center items-center'>
          <p className='text-black'>8 Hours Playback</p>
          </div>
        
        </div>
        {/*--------------------------------------half------------------------------------------------------------------*/}
        <div className='border grid-span-1'>

        <div className=''>
          <p className='font-bold text-xl cursor-pointer'onClick={() => router.push('/product')}> Rockerz 235 V2</p>
        </div>
        
        <div className='flex gap-3'> 
          <p className='font-bold text-xl text-[#1A2024]'>&#8377;999</p>
          <p className='text-[#1A2024]'> &#8377;2990</p>
          <p className='text-green-500'>67% off</p>
        </div>

        <div className='flex'>
          <p> </p>
          <p> </p>
        </div>

        <div className='bg-black flex rounded-lg items-center justify-center '>
         <p className='text-white'>Add To Cart</p>
        </div>
      
       
        </div>
      </div>
    </div>
  )
}

export default Cart1
