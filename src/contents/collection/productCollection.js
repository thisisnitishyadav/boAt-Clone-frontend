'use client'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '@/redux/slices/product';


const ProductCollection = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const {product} = useSelector((state)=>state.product)
  const data = useSelector((state)=>state.product.products)
  console.log("data product", data)
  const params = useParams()

  const [state, setState] = React.useState({
    ab:false,
    bc:false,
    cd:false,
    de:false,
    ef:false,
    fg:false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  

  const handleProductQuery = (value) => {
    setPrice(value)
    
  }

console.log(state)
  useEffect(()=>{
    console.log(params)
    const getProductData = async()=>{

        let price = {"$or":[] }

        const filteredData = Object.entries(state)
        .map(([key, value],index) => value===true && price.$or.push({"price.mrp":{"$gte":index*1000,"$lte":(index+1)*1000}}));
      
      console.log(price)
      let query = {"$and":[{"category":{"$regex":params.productId,"$options":"i"}},price]}

      const getData = await dispatch(getProducts(1, 9,query))
      console.log(getData, "hekko")
    }
    getProductData()
  }, [params ,state])
  
 
  return (
    <div className=' md:flex bg-white '>
    <div className='md:w-1/5 space-y-4 mx-8 mt-8'>
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
       <FormControlLabel control={<Checkbox />} label="Wireless Earbuds" />
       <FormControlLabel control={<Checkbox />} label="Smart Watches" />
       <FormControlLabel control={<Checkbox />} label="Neckbands" />
       <FormControlLabel control={<Checkbox />} label="Headphones" />
       <FormControlLabel control={<Checkbox />} label="Wireless Speakers" />
       <FormControlLabel control={<Checkbox />} label="Party Speakers" />
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
       <FormControlLabel control={<Checkbox checked={state.ab} onChange={handleChange} name='ab' />} label="Under 1000 Rs"  onClick={() => handleProductQuery({ "price.mrp": { "$gte": 0, "$lte": 1000 } })} />
       <FormControlLabel control={<Checkbox checked={state.bc} onChange={handleChange} name='bc' />} label="1000 to 2000 Rs" onClick={() => handleProductQuery({ "price.mrp": { "$gte": 1000, "$lte": 2000 } })} />
       <FormControlLabel control={<Checkbox checked={state.cd} onChange={handleChange} name='cd' />} label="2000 to 3000 Rs"onClick={() => handleProductQuery({ "price.mrp": { "$gte": 2000, "$lte": 3000 } })} />
       <FormControlLabel control={<Checkbox checked={state.de} onChange={handleChange} name='de' />} label="3000 to 4000 Rs"onClick={() => handleProductQuery({ "price.mrp": { "$gte": 3000, "$lte": 4000 } })} />
       <FormControlLabel control={<Checkbox checked={state.ef} onChange={handleChange} name='ef' />} label="4000 to 5000 Rs" onClick={() => handleProductQuery({ "price.mrp": { "$gte": 4000, "$lte": 5000 } })} />
       <FormControlLabel control={<Checkbox checked={state.fg} onChange={handleChange} name='fg' />} label="Above 5000 Rs"onClick={() => handleProductQuery({ "price.mrp": { "$gte": 5000, "$lte": 10000 } })}  />
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
      <div className='flex items-center w-screen md:w-4/5 mr-8 mt-8 rounded-l'>
        <div className=''>
      <div className='mx-2 md:grid grid-cols-3 bg-gray-100 rounded-xl'>
      {data && data?.map((item) => (
        <div key={item.id}>
        <div className='border h-[460px]  rounded-xl overflow-hidden grid-span-1'>
        <img src={item.image} alt={item.name} className='cursor-pointer object-cover h-[100%]'onClick={() => router.push(`/product/${item?.id}`)}>
        </img>
        <div className='flex bg-yellow-400 justify-center items-center'>
          <p className='text-black'>{item.title.longTitle}</p>
        </div>
        </div>
      
        <div className='grid-span-1 m-2 space-y-4'>
        <div className=''>
          <p className='font-bold text-xl cursor-pointer'onClick={() => router.push(`/product`)}> {item?.title?.shortTitle}</p>
        </div>
        <div className='flex gap-3'> 
          <p className='font-bold text-xl text-[#1A2024]'>&#8377;{item.price.mrp}</p>
          <p className='text-[#1A2024] line-through'> &#8377;{item.price.cost}</p>
          <p className='text-green-500'>{item.price.discount}</p>
        </div>
        <div className='bg-black flex rounded-lg items-center h-9 justify-center cursor-pointer '>
         <p className='text-white'>Add To Cart</p>
        </div>
  
        </div>
         </div>
        ))}
         </div></div>
      </div>
    </div>
  )
}

export default ProductCollection
