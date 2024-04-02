'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { Data1 } from '@/constants/productSliderData/Data1';
import SliderProduct from '../homeslider/Slider';


const Body=()=> {
  const router = useRouter();
  return (
    <div className='relative'>
    {/*-----------------------------------BestSeller------------------------*/}
    <div className=' bg-gradient-to-r from-[#edfefe] to-[#eeffff]'>
    <div className=' md:grid md:grid-cols-2 flex flex-col w-full '>
      <div className=' md:grid md:col-span-1 md:mx-8 ' >
      <p className='text-8xl font-light'>True Wireless Earbuds</p>
      <p className='text-2xl font-light'>Starting from &#8377; 999</p>
     
      </div>
      <div className='md:grid md:col-span-1 '>
    <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_1_desktop_4c81b094-8292-4d54-8b20-5eb3b823a4e6_2800x.png?v=1686650857" 
    alt=" bluetooth image "
    className='w-full'>
    </img>
    </div>
   </div>
      <SliderProduct Data={Data1}/>
   <div className='mx-8'>
    <p className="font-metropolis text-4xl bold py-3">Best Sellers</p>
    <div className="flex justify-between gap-8 ">

  <div className="border border-current rounded-2xl overflow-hidden"> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049" 
  alt=""
  className="cursor-pointer "onClick={() => router.push('/product')}>
  </img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'>  &#8377; 899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p></div>
  </div>

  <div className="border border-current rounded-2xl overflow-hidden "> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141.png?v=1703145765" 
  alt=""
  className="cursor-pointer "onClick={() => router.push('/product')}></img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'> &#8377; 899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p>
   </div>
  </div>

  <div className="border border-current rounded-2xl hidden overflow-hidden "> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049" 
  alt=""
  className=" cursor-pointer"onClick={() => router.push('/product')}></img>
  <p className='text-light font-bold mx-3'>Airpodes 131</p>
  <p className='text-light font-bold mx-3'> &#8377; 899</p>
  <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer">
   <p className='font-light'>Add to Cart</p>
   </div>
  </div>

  <div className="border border-current rounded-2xl hidden overflow-hidden"> 
  <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917" 
  alt=""
  className="cursor-pointer "onClick={() => router.push('/product')}></img>
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

export default Body;