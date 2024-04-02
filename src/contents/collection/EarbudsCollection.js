'use client'
import { EarbudData } from '@/constants/collection/EarbudData';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '@/redux/slices/product';

const EarbudsCollection = () => {
  const data = useSelector((state)=>state.product.products)
  console.log("data product", data)
  const dispatch = useDispatch()

  useEffect(()=>{
    const getProductData = async()=>{
      const getData = await dispatch(getProducts(1, 10, {}))
      console.log(getData, "hekko")
    }
    getProductData()
  }, [])
  const router = useRouter();
  return (
    <div className='border flex'>
    <div className='border w-1/5 space-y-4 ml-8 mt-8'>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-aria-controls="panel1-content"
          id="panel1-header"
        >
          Category
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
       <FormControlLabel control={<Checkbox defaultChecked />} label="Gaming Earbud" />
       <FormControlLabel required control={<Checkbox />} label="True Wireless Earbud" />
       </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-aria-controls="panel1-content"
          id="panel1-header"
        >
         Price
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
       <FormControlLabel control={<Checkbox defaultChecked />} label="Under 1000 Rs" />
       <FormControlLabel required control={<Checkbox />} label="1000 to 2000 Rs" />
       <FormControlLabel required control={<Checkbox />} label="2000 to 3000 Rs" />
       <FormControlLabel required control={<Checkbox />} label="3000 to 4000 Rs" />
       <FormControlLabel required control={<Checkbox />} label="4000 to 5000 Rs" />
       <FormControlLabel required control={<Checkbox />} label="Above 5000 Rs" />
       </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-aria-controls="panel1-content"
          id="panel1-header"
        >
          Playback
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
       <FormControlLabel control={<Checkbox defaultChecked />} label="20 to 30 Hours" />
       <FormControlLabel required control={<Checkbox />} label="30 to 40 Hours" />
       <FormControlLabel required control={<Checkbox />} label="40 to 50 Hours" />
       <FormControlLabel required control={<Checkbox />} label="Above 50 Hours" />
       </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-aria-controls="panel1-content"
          id="panel1-header"
        >
          Color
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
       <FormControlLabel control={<Checkbox defaultChecked />} label="Blue " />
       <FormControlLabel required control={<Checkbox />} label="Black" />
       <FormControlLabel required control={<Checkbox />} label="White" />
       <FormControlLabel required control={<Checkbox />} label="Red" />
       <FormControlLabel required control={<Checkbox />} label="Green" />
       </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-aria-controls="panel1-content"
          id="panel1-header"
        >
          Features
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
       <FormControlLabel control={<Checkbox defaultChecked />} label="Fast Charging " />
       <FormControlLabel required control={<Checkbox />} label="Instant Pairing" />
       <FormControlLabel required control={<Checkbox />} label="Noise Cancellation" />
       <FormControlLabel required control={<Checkbox />} label="Water Registant " />
       <FormControlLabel required control={<Checkbox />} label="Voice Assistant" />
       </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
      <div className='border w-4/5 mr-8 mt-8 rounded-l'>
      <div className='mx-2 md:grid grid-cols-3 bg-gray-100 rounded-xl'>
      {EarbudData.map((item) => (
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
        <div className='bg-black flex rounded-lg items-center h-9 justify-center cursor-pointer '>
         <p className='text-white'>Add To Cart</p>
        </div>
  
        </div>
         </div>
        ))}
         </div>
      </div>
    </div>
  )
}

export default EarbudsCollection
