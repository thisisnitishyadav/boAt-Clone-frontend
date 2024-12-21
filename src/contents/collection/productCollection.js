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
  console.log(params)
  const [state, setState] = React.useState({
    ab:false,
    bc:false,
    cd:false,
    de:false,
    ef:false,
    fg:false,
    abc:false,
    bcd:false,
    cde:false,
    def:false,
    efg:false,
    fgh:false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  

  const handleProductQuery = (value) => {
    
    
  }

console.log(state)

  useEffect(()=>{
    console.log(params)
    const getProductData = async()=>{

        let price = {"$or":[] }

        const filteredData = Object.entries(state)
        .map(([key, value],index) => value===true && price.$or.push({"price.mrp":{"$gte":index*1000,"$lte":(index+1)*1000}
      }));
      
      console.log(price)
      let query = {"$and":[{"category":{"$regex":params.productId,"$options":"i"}},price]}

      const getData = await dispatch(getProducts(1, 9,query))
      console.log(getData, "hekko")
    }
    getProductData()
  }, [params ,state])

  useEffect(()=>{
    const fetchProducts = async() => {
      let result = await dispatch(getProducts(1,9,{"title.longTitle":{"$regex":params?.productId},"$options":"i"}));
      if(result){
        return true
      }
    }
    fetchProducts()
  },[params])
  
 
  return (
    <div className='md:flex bg-white'>

    <div className='md:w-1/5 space-y-4 mx-8 mt-8 hidden md:block'>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-aria-controls="panel1-content"
          id="panel1-header"
        >
          Discounts
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
       <FormControlLabel control={<Checkbox  checked={state.abc} onChange={handleChange} name='abc' />} label="Up to 10% off"  onClick={() => handleProductQuery({ "price.mrp": { "$gte": "0% Off", "$lte": "10 Off" } })} />
       <FormControlLabel control={<Checkbox checked={state.bcd} onChange={handleChange} name='bcd' />} label="10 to 20% off" onClick={() => handleProductQuery({ "price.mrp": { "$gte": "10% Off", "$lte": "20 Off" } })} />
       <FormControlLabel control={<Checkbox checked={state.cde} onChange={handleChange} name='cde'/>} label="20 to 30% off" onClick={() => handleProductQuery({ "price.mrp": { "$gte": "20% Off", "$lte": "30 Off" } })}/>
       <FormControlLabel control={<Checkbox checked={state.def} onChange={handleChange} name='def' />} label="30 to 40% off" onClick={() => handleProductQuery({ "price.mrp": { "$gte": "30% Off", "$lte": "40 Off" } })} />
       <FormControlLabel control={<Checkbox checked={state.efg} onChange={handleChange} name='efg'/>} label="40 to 50% off" onClick={() => handleProductQuery({ "price.mrp": { "$gte": "40% Off", "$lte": "50 Off" } })}/>
       <FormControlLabel control={<Checkbox checked={state.fgh} onChange={handleChange} name='fgh'/>} label="Above 50% off" onClick={() => handleProductQuery({ "price.mrp": { "$gte": "50% Off", "$lte": "90 Off" } })}/>
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

    <div className="flex flex-col items-center w-screen px-4 md:flex-row md:w-4/5 md:mr-8 rounded-l">
  <div className="w-full mt-4">
    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 bg-gray-100 p-4 rounded-xl">
      {data &&
        data.map((item) => (
          <div key={item.id} className="flex flex-col border rounded-xl overflow-hidden shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="cursor-pointer object-cover h-[240px] sm:h-[300px] md:h-[400px] w-full"
              onClick={() => router.push(`/product/${item?.id}`)}
            />
            <div className="flex bg-yellow-300 justify-center items-center py-2">
              <p className="text-black text-sm sm:text-base">{item.title.longTitle}</p>
            </div>
            <div className="p-4 space-y-4">
              <p
                className="font-bold text-base sm:text-lg cursor-pointer"
                onClick={() => router.push(`/product`)}
              >
                {item?.title?.shortTitle}
              </p>
              <div className="flex gap-3 items-center">
                <p className="font-bold text-lg text-[#1A2024]">
                  &#8377;{item.price.mrp}
                </p>
                <p className="text-[#1A2024] line-through">
                  &#8377;{item.price.cost}
                </p>
                <p className="text-green-500 text-sm sm:text-base">
                  {item.price.discount}
                </p>
              </div>
              <div className="bg-black flex rounded-lg items-center h-9 justify-center cursor-pointer hover:bg-gray-800">
                <p className="text-white text-sm sm:text-base">Add To Cart</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
</div>

    </div>
  )
}

export default ProductCollection
