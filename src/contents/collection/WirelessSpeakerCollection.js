'use client'
import { WirelessSpeakersData } from '@/constants/collection/WirelessSpeakerData';
import React from 'react'
import { useRouter } from 'next/navigation';
const WirelessSpeakerCollection = () => {
   const router =useRouter();
  return (
    <>
      <div className='border md:ml-[300px] mx-8 rounded-l'>
      <div className='m-2 md:grid grid-cols-3 bg-gray-100 rounded-xl'>
      {WirelessSpeakersData.map((item) => (
        <div key={item.id}>
        <div className='border rounded-xl overflow-hidden grid-span-1'>
        <img src={item.image} alt={item.name} className='cursor-pointer'onClick={() => router.push('/product')}>
        </img>
        <div className='flex bg-yellow-400 justify-center items-center'>
          <p className='text-black'>{item.tagline}</p>
        </div>
        </div>
      
        <div className='grid-span-1 m-2 space-y-4'>
        <div className=''>
          <p className='font-bold text-xl cursor-pointer'onClick={() => router.push('/product')}> {item.name}</p>
        </div>
        <div className='flex gap-3'> 
          <p className='font-bold text-xl text-[#1A2024]'>&#8377;{item.price.mrp}</p>
          <p className='text-[#1A2024] line-through'> &#8377;{item.price.cost}</p>
          <p className='text-green-500'>{item.price.offer}</p>
        </div>
        <div className='bg-black flex rounded-lg items-center h-9 justify-center cursor-pointer'>
         <p className='text-white'>Add To Cart</p>
        </div>
  
        </div>
         </div>
        ))}
         </div>
      </div>
    </>
  )
}

export default WirelessSpeakerCollection