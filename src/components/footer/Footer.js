'use client'
import React from 'react'
import { Facebook, Instagram, LinkedIn, X, YouTube } from '@mui/icons-material';
function Footer() {
  return (
    <>
    <div className=' bg-slate-200'>
      <div className='md:grid grid-cols-4 p-8 gap-4 space-y-2'>
      <div className=' col-span-1 space-y-2'>
        <img src='https://soundhub.io/wp-content/uploads/2023/08/SoundHub-Logo-2048x410.png' 
        alt='icon logo'
        className='w-64' ></img>
        <p >Subscribe to our email alerts!</p>
        <input
        type=''
        placeholder='Enter your E-mail ID'
        className='rounded-xl '
        >
        </input>
         </div>
      <div className='col-span-1'>
        <p className='text-l font-bold'>Shop</p>
        <ul className='text-[16px] font-light'>
          <li>True Wireless Earbuds</li>
          <li>Wired Headphones</li>
          <li>Home Audio</li>
          <li>Smart Watches</li>
          <li>Wireless Headphones</li>
          <li>Wireless Speakers</li>
        </ul>
         </div>
      <div className='col-span-1'>
         <p className='text-l font-bold'>Help</p>
         <ul className='text-[16px] font-light'>
          <li>Track Your Order</li>
          <li>Warranty & Support</li>
          <li>Return Policy</li>
          <li>Service Centers</li>
          <li>Bulk Orders</li>
          <li>FAQs</li>
          <li>Why Buy Direct</li>
        </ul>
      </div>
      <div className=' col-span-1'>
        <p className='text-l font-bold'>Company</p>
        <ul className='text-[16px] font-light'>
          <li>About boAt</li>
          <li>News</li>
          <li>Read Our Blog</li>
          <li>Careers</li>
          <li>Security</li>
          <li>Investors Relations</li>
          <li>Social Responsibility</li>
          <li>Warranty Policy</li>
        </ul> 
        </div>
      </div>
    </div>


    <div className=' w-full bg-slate-100 p-8'>
      <div className='flex md:justify-center gap-3'>
<p className='text-[16px] font-light'>Lets Get Social</p>
<Facebook onClick={''}/>
<X/>
<Instagram/>
<YouTube className='cursor-pointer' onClick={()=> window.open('https://www.youtube.com/@nitishyadav0507')}/>
<LinkedIn className='cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/nitish-yadav-68073720b/', '_blank')} />
      </div>

        <div className='md:flex items-center justify-center gap-2'>
            <p className='text-[16px] font-light'>Privacy Policy</p>
            <p className='text-[16px] font-light'>Terms & Conditions</p>
        </div>
    <div className='md:flex justify-center'>
      <p className='text-[16px] font-light'>2024 TechPyro Marketing Limited. All Rights Reserved.</p>
    </div>
    <div className='md:flex justify-center'>
      <p className='text-[16px] font-light'> For queries contact us: Nitish Yadav, TechPyro Limited Unit, Ranipur, Haridwar, 249404.</p>
    </div> 
    <div className='md:flex justify-center'>
    <p className='text-[16px] font-light'>Corporate Avenue: Ranipur, Haridwar, 249404, Uttarakhand, India.</p>
    </div>
    </div>
   
    </>
  )
}

export default Footer;