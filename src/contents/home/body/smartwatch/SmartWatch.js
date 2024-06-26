import { Data2 } from '@/constants/productSliderData/Data2'
import { Button } from '@mui/material'
import React from 'react'
import SliderProduct from '../../homeslider/Slider'

const SmartWatch = () => {
  return (
    <>
      {/*---------------------------------------------Smart Watches--------------------------------------------------------*/}
   <div className=' w-full bg-gradient-to-r from-[#ffffff] to-[#fff1d6]'>
    <div className='md:grid md:grid-cols-2 flex flex-col w-full'> 
       <div className='md:grid md:col-span-1 md:mx-8 '>
         <img src='https://www.boat-lifestyle.com/cdn/shop/files/img_2_mob_390x.png?v=1686117497'
          alt='Smart Watches image'
          className=''>
          </img>
          </div> 
       <div className='md:grid md:col-span-1 '> 
       <p className='text-8xl font-light'>Smart Watches</p>
       <p className='text-2xl font-light'>Starting from &#8377; 999</p>
     
       </div> 
    </div>
    
    <SliderProduct Data={Data2}/>
    <div className='mx-8'>
    <p className="font-metropolis text-4xl bold py-3">Best Sellers</p>
    <div className="flex justify-between gap-8 ">
  <div className="border border-current rounded-2xl overflow-hidden"> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Storm.jpg?v=1682583585" 
  alt=""
  className=" ">
  </img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'>&#8377; 899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p></div>
   </div>

   <div className="border border-current rounded-2xl overflow-hidden"> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Call.jpg?v=1682408982" 
  alt=""
  className=" ">
  </img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'>&#8377; 899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p></div>
   </div>

   <div className="border border-current rounded-2xl overflow-hidden"> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Storm.jpg?v=1682583585" 
  alt=""
  className=" ">
  </img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'>&#8377; 899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p></div>
   </div>
  
  <div className="border border-current rounded-2xl  overflow-hidden"> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Xtend_6a57e3cd-0fa0-47ac-a46e-ea788a526627.jpg?v=1682583585" 
  alt=""
  className=" "></img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'>&#8377; 899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p></div>
  </div>

  
   </div>
   </div>
   </div>

    </>
  )
}

export default SmartWatch
