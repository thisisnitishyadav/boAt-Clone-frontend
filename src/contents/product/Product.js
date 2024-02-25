'use client'
import { Button } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/navigation';



const Products = () => {
  const router = useRouter();
  return (
    
    <div className='bg-white'>
      
      <div className=' md:grid grid-cols-2 mx-8 py-8'>
        
        <div className=' grid-span-1 md:flex gap-3 rounded-xl '>
          <div className=' w-1/10 space-y-3'>
           <div className='rounded-xl border overflow-hidden cursor-pointer'>
            <img src='https://www.boat-lifestyle.com/cdn/shop/products/32011675-2ad8-4b99-9787-895caf201d28_120x.png?v=1642405569' alt='' className=''></img>
            </div>
           <div className='rounded-xl border overflow-hidden cursor-pointer'>
            <img src='https://www.boat-lifestyle.com/cdn/shop/files/131-4_120x.jpg?v=1702008197' alt='' className=''></img>
            </div>
           <div className='rounded-xl border overflow-hidden cursor-pointer'>
            <img src='https://www.boat-lifestyle.com/cdn/shop/products/FeatureImagesAD1314XChargecopy2_120x.jpg?v=1702008197' alt='' className=''></img>
            </div>
           <div className='rounded-xl border overflow-hidden cursor-pointer'>
            <img src='https://www.boat-lifestyle.com/cdn/shop/products/ad131FIAD131TypeCcopy2_120x.jpg?v=1702008197' alt='' className=''></img>
            </div>
           <div className='rounded-xl border overflow-hidden cursor-pointer'>
            <img src='https://www.boat-lifestyle.com/cdn/shop/products/FeatureImagesAD131BV5.0copy2_120x.jpg?v=1702008197' alt='' className=''></img>
            </div>
           <div className='rounded-xl border overflow-hidden cursor-pointer'>
            <img src='https://www.boat-lifestyle.com/cdn/shop/products/FeatureImagesAD131VAcopy2_120x.jpg?v=1702008197' alt='' className=''></img>
            </div>
          </div> 


        <div className='border bg-slate-100 w-8/10 md:flex hidden justify-center items-center rounded-xl cursor-pointer'>
          <img src='https://www.boat-lifestyle.com/cdn/shop/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569'
         alt='boat product'
         className=''>
        </img>
           </div>
          </div>

{/*-----------------------------------half------------------------------------*/}
         <div className=' rounded-lg col-span-1 space-y-6 '> 
          <div className='mt-8 space-y-2 my-2 '>
            <p className='md:mx-8'>4.8 | 1339 reviews</p>
            <p className='text-3xl md:mx-8 font-sans text-[28px] text-[#1A2024] bold'>Airdopes 131</p>
            <p className='font-sans md:mx-8 text-[14px] text-[#4a5157]'>Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case</p>
          </div>

         <div className=' md:flex h-[56px] items-center gap-6'> 
          <div className=' flex items-center md:mx-8 gap-3'>
          <p className='text-[#1A2024] text-2xl'> &#8377;899 </p>
          <p className='text-[#1A2024]'>&#8377;2999</p>
          <p className='text-green-500'>70%Off</p></div>
          <div className='border h-[42px] rounded-l bg-[#F1F5F9] flex items-center'>
            <p className='mx-2'>Ending  In   :   5hours   18min    36sec</p>
          </div>
         </div>
        
       
          <div className='border bg-slate-100 rounded-xl space-y-2  mt-4 md:mx-8  h-[80px]'>
          <div className='flex items-center mx-3 gap-3'>
             <p className='font-medium'>Choose Your Color : </p>
             <p className=''>Light Pink</p>
          </div >
          <div className='flex items-center mx-3 gap-2'>
          <div className='border bg-[#d48f87] rounded-full h-7 w-7'> .</div>
          <div className='border bg-[#22201f] rounded-full h-7 w-7'> .</div>
          <div className='border bg-[#d1d1d1] rounded-full h-7 w-7'> .</div>
          <div className='border bg-[#c5b898] rounded-full h-7 w-7'> .</div>
          <div className='border bg-[#586575] rounded-full h-7 w-7'> .</div>
          <div className='border bg-[#3e5844] rounded-full h-7 w-7'> .</div>
        </div>
        </div>
        


<div className='flex h-[96px] items-center  '>
  <div className='flex h-[80px] gap-5 border items-center bg-slate-100 rounded-lg md:mx-8 '>
<p className='bold ml-3'>Delivering to :</p>
<p className=''> 122028</p>
<div className='border rounded-l text-blue-300 mr-2 cursor-pointer'> Change</div>
</div>
</div>


        <div className=' h-[68px]' >
          <div className='md:mx-8'>
             <p>Make Your Airdopes Personal </p>
             <p>Get A Customised Engraving And Make It Unmistakably Yours</p>
             </div>
        </div>

        <div className=' md:flex mt-4 items-center h-[100px] '>
          <div className='md:flex items-center md:mx-9 gap-8'>
       <Button className="bg-amber-500" variant="contained"onClick={() => router.push('/bag')}>Add to Cart</Button>
       <Button className="bg-lime-600" variant="contained"onClick={() => router.push('/checkout')}>Buy Now</Button>
       </div>
        </div>

         </div>
      </div>

{/*---------------------------------------------------------------------------------------------------*/}
      <div className=' mx-8 py-2 pb-8 '>
          <div className=' md:grid grid-cols-10  '>
           <div className=' col-span-1'> </div>

           <div className=' col-span-2 '>
           <div className='flex items-center justify-center'>
             <img src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334305_small.svg?v=1682336123 " alt=''></img> </div>
           <div className='flex items-center justify-center'>
             <p> 1 Year Warranty</p></div>
            </div>

           <div className=' col-span-2 '> 
         <div className='flex items-center justify-center'>
           <img src='//cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334304_small.svg?v=1682336123' alt=''></img></div>
           <div className='flex items-center justify-center'>
             <p> 7-day Replacement</p></div>
              </div>

           <div className='col-span-2 '>
           <div className='flex items-center justify-center'>
            <img src='//cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334303_small.svg?v=1682336123' alt=''></img> </div> 
            <div className='flex items-center justify-center'>
             <p> Free Shopping</p></div>
              </div>

           <div className=' col-span-2'>
           <div className='flex items-center justify-center'>
            <img src='//cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334302_small.svg?v=1682336123' alt=''></img></div> 
            <div className='flex items-center justify-center'>
             <p> GST Billing</p></div>
             </div>

           <div className='col-span-1'> </div>

          </div>
      </div>
    </div>
  )
}

export default Products;
