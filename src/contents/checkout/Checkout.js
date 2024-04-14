'use client'
import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Button,Box, Checkbox,Stack, FormControlLabel, FormGroup, TextField, Dialog } from '@mui/material';
import { useSelector,useDispatch } from '@/redux/store/store';
import { useFormik } from 'formik';
import { createOrder } from '@/redux/slices/order';
import { getUser,updateUser } from '@/redux/slices/auth';
import { useEffect } from 'react';
import Checkout2 from './Checkout2';
import { readCart } from '@/redux/slices/cart';
 
const initialValues ={
  locality:"",
  city:"",
  state:"",
  zipcode:""

}

const Checkout = () => {
  //redux setup
  const dispatch =useDispatch();
  const {carts}= useSelector ((state)=>state.cart);
  const {user} =useSelector((state)=>state.auth);
  const orders=useSelector ((state)=>state.order);
  const [addressDetail,setAddressDetail]=useState({});
  const [open ,setOpen]=useState();
  const [close,setClose]=useState();
  // console.log(addressDetail)
  console.log(carts,'carts')
  let address = (user && user?.address)
  console.log(address,'address');
   
  const fetchUser =async ()=>{
    let result =await dispatch(getUser(1,10))
    if (result){
      return true
    }
    else
    return false
  }

  const fetchCarts = async() => {
    let result = await dispatch(readCart())
    if(result){
      return true
    }
  }

  const {values, errors, handleBlur, handleChange ,handleSubmit}=useFormik({
    initialValues:initialValues,

    onSubmit : async (values,action) =>{
      const {locality,city,state,zipcode}=values;

      let address={address:[values]}

      console.log(address,'address')
      if(address){
        alert("Address Saved Successfully");
      }

      const result =await dispatch(updateUser(address,user.id))
      console.log(result)
      if(result){
        action.resetForm();
        setClose(false);
      }
      
    }

  });

  

  const handleOpen =()=>{
    setOpen(true);
  }
  const handleOpenDrawer=()=>{
    setClose(true);
  }
  const handleClose=()=>{
    // setOpen(false);
  }
  const handleCloseDrawer=()=>{
    setClose(false);
  }

  let mrp=0;
  let cost=0;

  for(let cart of carts){
    for (let product of cart.products){
        mrp+=(product.productId.price.mrp)
        cost+=(product.productId.price.cost)
    }
  }

  let discount =((mrp)-(cost))
  let total =(cost)

  useEffect(()=>{
    fetchUser()
    fetchCarts()
  },[])

  return (
    
    <div className='bg-slate-100 min-h-screen'>
      <div className='md:flex md:mx-32'>
    
       <div className=' my-12 md:flex-1 space-y-3'>
        
          <div className='flex items-center cursor-pointer'>
              <Accordion className='w-full'>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header" >
              <Typography>1. LOGIN OR SIGNUP</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className='space-y-3 ' >
              <div className='w-'>
              <TextField id="standard-basic" label="Enter Email ID or Phone No." variant="standard" /></div>
                <div className=' '>
                <Button variant="outlined">Continue Checkout</Button>
                </div>
              </div>
              </Typography>
              </AccordionDetails>
              </Accordion>
            </div>
        {/*-----------------------------------address------------------------------------------------------  */}
        <form onSubmit={handleSubmit}>
            <div className='flex items-center cursor-pointer '>
           
                <Accordion  className='w-full'>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header">
                  <Typography>2. DELIVERY ADDRESS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className='space-y-3'>
                    <div className=' w-full flex gap-3'>
                  <div><TextField required id="outlined-basic" label="Name" variant="outlined" name='name' onChange={handleChange} value={user && user.firstName}/> </div>
                  <div><TextField required id="outlined-basic" label="10 digit Mobile Number" name='phone' variant="outlined" onChange={handleChange}  value={user && user.phone}/> </div>
                  <div className='w-1/2'>
                      <div className=' flex items-center justify-end'>
                        <Stack direction="row" spacing={2}> 
                          <Button variant="outlined" onClick={handleOpenDrawer}>Change</Button>
                        </Stack></div> </div>
                  </div>
                  <div className='flex gap-3'>
                  <div> <TextField required id="outlined-number" label="Pincode" type="number" name='zipcode' InputLabelProps={{ shrink: true, }} onChange={handleChange} onBlur={handleBlur} value={values.zipcode}/></div>
                  <div><TextField id="outlined-basic" label="Locality" variant="outlined" name='locality'  /></div>
                  </div>
                <div className=''>
                    <TextField required id="outlined-multiline-flexible" label="Address (Area or Street)" multiline maxRows={4} className=' md:w-[400px]' name='locality' onChange={handleChange}  value={values.locality}  />
                    </div> 
                    <div className='flex gap-3'>
                      <div><TextField required id="outlined-required" label="District" defaultValue="Haridwar" name='city' onChange={handleChange} onBlur={handleBlur}   value={values.city}  /> </div>
                      <div><TextField required id="outlined-basic" label="State" variant="outlined" name='state' onChange={handleChange} onBlur={handleBlur}  value={values.state} /> </div>
                    </div>
                    <div className='flex gap-3'>
                      <div><TextField id="outlined-basic" label="Landmark (Optional)" variant="outlined" />  </div>
                      <div><TextField id="outlined-basic" label="Alternate Phone Number" variant="outlined" />  </div>
                    </div>
                  <div className='flex gap-3'>
                  <div><Button variant="outlined" size="large" type='submit' >
                    Save And Deliver Here
                  </Button></div> 
                  <div><Button variant="text"onClick={handleCloseDrawer}>Cancel</Button></div>
                    </div>
                    </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                
            </div>
            </form>
{/* --------------------------------------payment--------------------------------------------------------------------- */}
          <div className='flex items-center cursor-pointer '>
            
            <Accordion  className='w-full'>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography onClick={handleOpen} >3. PAYMENTS OPTIONS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              <FormGroup>
                 <FormControlLabel control={<Checkbox defaultChecked />} label="UPI" />
                 <FormControlLabel required control={<Checkbox />} label="Credit/ Debit /ATM Card" />
                 <FormControlLabel control={<Checkbox defaultChecked />} label="Net Banking" />
                 <FormControlLabel control={<Checkbox defaultChecked />} label="Cash On Delivery"></FormControlLabel>
                 <Box sx={{display:Object.keys({address}).length !== 0 ? 'block' :'none'}}>
                 <Button onClick={handleOpen}  variant='outlined' sx={{marginTop:'10px',width:'100%'}}>Select Payment Options</Button>
                 <Dialog open={open} onClose={handleClose} >
                   <Checkout2 setOpen={setOpen} address={address}  total={total} />
                 </Dialog>
                  </Box>
              </FormGroup>
              </Typography>
            </AccordionDetails>
        </Accordion>  
       </div>
       
       </div>
  
       

{/* ------------------------------------half------------------------------------------------------------- */}
       <div className='flex-2 my-12 '>
        <div className='flex items-center mx-3 gap-2'>
          <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_5f9216.png'
          alt='logo' 
          className='h-[30px]'>
          </img>
          <div className='md:flex'>
         <p>Safe and Secure Payments.</p>
         <p>Easy Returns.</p>
         </div>
         </div>
       </div>
      </div>
    </div>
  )
}

export default Checkout
