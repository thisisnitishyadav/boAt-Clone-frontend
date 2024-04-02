import { Button } from '@mui/material'
import React from 'react'

const WirelessSpeakers = () => {
  return (
    <div>
      {/*---------------------------Wireless Speakers---------------------*/}
<div className='bg-gradient-to-r from-[#ffffff] to-[#e6ecff]'>
    <div className='md:grid md:grid-cols-2 flex flex-col w-full'> 
    <div className='md:grid md:col-span-1 md:mx-8 '>
       <p className='text-8xl font-light'>Wireless Speakers</p>
       <p className='text-2xl font-light'>Starting from &#8377; 999</p>
       
       </div>
       <div className='md:grid md:col-span-1 '>
         <img src='https://www.boat-lifestyle.com/cdn/shop/files/img_5_mob_1448x.png?v=1686134163' 
         alt=''>
         </img>
         </div>      
    </div>

    <div className='mx-8'>
    <p className="font-metropolis text-4xl bold py-3">Best Sellers</p>
    <div className="flex justify-between gap-8 ">
  <div className="border border-current rounded-2xl overflow-hidden"> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_350.jpg?v=1701847157" 
  alt=""
  className=" "></img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'>  &#8377; 899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p>
   </div>
  </div>

  <div className="border border-current rounded-2xl overflow-hidden"> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_750.jpg?v=1699500834" 
  alt=""
  className=" "></img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'> &#8377;899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p></div>
  </div>

  <div className="border border-current rounded-2xl hidden overflow-hidden"> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_350.jpg?v=1701847157" 
  alt=""
  className=" "></img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'>  &#8377; 899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p>
   </div>
  </div>

  <div className="border border-current rounded-2xl hidden overflow-hidden "> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone-105.jpg?v=1695273592" 
  alt=""
  className=" "></img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'>&#8377;899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p></div>
  </div>

 
   </div>
   </div>
   </div>
    </div>
  )
}

export default WirelessSpeakers
