'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import SliderProduct from '../home/homeslider/Slider'
import { Data1 } from '@/constants/productSliderData/Data1'

const Cart2 = () => {
    const router=useRouter();
  return (
    <div>
      <SliderProduct Data={Data1}/>
    </div>
  )
}

export default Cart2
