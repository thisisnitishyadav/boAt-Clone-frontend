import { Button } from '@mui/material'
import React from 'react'

const NeckBand = () => {
  return (
    <div>
      {/*-----------------------------------------------------NeckBand--------------------------------------------------------*/}
<div className=' bg-gradient-to-r from-[#ffffff] to-[#f2edff]'>
    <div className='md:grid md:grid-cols-2 flex flex-col w-full'> 
    <div className='md:grid md:col-span-1 md:mx-8 '>
       <p className='text-8xl font-light'>Neck Bands</p>
       <p className='text-2xl font-light'>Starting from &#8377; 999</p>
       
       </div>
       <div className='md:grid md:col-span-1 '>
         <img src='https://www.boat-lifestyle.com/cdn/shop/files/img_3_mob_1282x.png?v=1686131082' 
         alt=''
         className=''></img>
         </div>    
    </div>

    <div className='mx-8'>
    <p className="font-metropolis text-4xl bold py-3">Best Sellers</p>
    <div className="flex justify-between gap-8 ">
  <div className="border border-current rounded-2xl overflow-hidden"> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_751_ANC.jpg?v=1698909797" 
  alt=""
  className=" "></img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'> &#8377; 899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p>
   </div>
  </div>

  <div className="border border-current rounded-2xl overflow-hidden"> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_551_ANC_75520e83-ecd9-48d4-8d58-cb6ca3c78374.jpg?v=1698912191" 
  alt=""
  className=" "></img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'>  &#8377; 899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p>
   </div>
  </div>

  <div className="border border-current rounded-2xl overflow-hidden"> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_751_ANC.jpg?v=1698909797" 
  alt=""
  className=" "></img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'> &#8377; 899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p>
   </div>
  </div>

  <div className=" border border-current rounded-2xl overflow-hidden"> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM_400.gif?v=1691387449" 
  alt=""
  className="">
  </img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'> &#8377; 899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p>
   </div>
  </div>

 
   </div>
   </div>
   </div>
    </div>
  )
}

export default NeckBand
