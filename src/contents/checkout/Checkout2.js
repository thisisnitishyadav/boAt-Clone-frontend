'use client'
import axios from 'axios'
import React from 'react'
import Confirmation from './Confirmation'
import Script from 'next/script'
import { Box, Button, Checkbox, Dialog, Popover, Typography } from '@mui/material'
import { useDispatch } from '@/redux/store/store'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { deleteMany } from '@/redux/slices/cart'
import { createOrder } from '@/redux/slices/order'


const Checkout2 = ({total, address, setOpen}) => {

  const user= useSelector((state)=>state.auth);
  const {carts}= useSelector ((state)=>state.cart);
  const dispatch =useDispatch();
  const [show,setShow]=useState(false);
  // console.log("hello",handlePlaceOrder,"hello")
 
  const handleClearAll = async() => {
    let ids=[]
    for(let k of carts)
    ids.push(k.id);
    console.log("ids", k.id)
      await dispatch(deleteMany(ids))
    }

   
    const handleClick = async() => {
      let products=carts.map((cart)=>{
        return{
          'productId':cart.products[0].productId,
          'qty':cart.products[0].qty
        }
      })
      console.log(products,'products')
      
     
  
      let data={
        userId:user.id,
        products,
        address,
        status:'pending'
      }
  
      const result = await dispatch(createOrder(data));
      console.log("hello data")
      setShow(true)
      if(result){
       
        
       
    }
      else
      alert('some error occured')
        
    }

    const handleClose = () => {
      setShow(false)
  }

  const totalPrice = ((total)*100)
  console.log(totalPrice)

  const handlePay = async () =>{
  console.log("hello pay")

  const option = {
    amount : '100000',
    currency : 'INR'
  }

  const {data} = await axios.post('http://localhost:5001/userapp/payment/checkout',option, {
    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    
});

if(data.status==='SUCCESS'){
  alert("You will redirect to Payment Gateway")
  
     handleClearAll()
  
   }
   else
    return false;


  const options = {
    key:process.env.NEXT_PUBLIC_RAZORPAY_API_ID,
    "amount": data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": 'Nitish Yadav',
    "description": "Test Transaction",
    "image": "https://avatars.githubusercontent.com/u/101405119?v=4",
    "order_id": data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "http://localhost:5001/userapp/payment/paymentVerify",
    "prefill": {
        "name":user.name,
        "email":user.email,
        "contact":user.phone
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
   var rzp1 = new window.Razorpay(options);
    rzp1.open();

}

  return (
    <>
     <Dialog open={show}
          anchorOrigin={{
             vertical:'top',
             horizontal:'center'
           }}
           transformOrigin={{
             vertical:'top',
             horizontal:'center'
           }}
  >
         <Confirmation/>
     
        </Dialog>
    <Script src="https://checkout.razorpay.com/v1/checkout.js "></Script>
    
       <Box sx={{height:'300px',width:'400px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'20px'}}>
       
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Typography sx={{fontSize:'25px'}}>
        Pay Online
        </Typography>
        </Box>
        <Button onClick={handlePay} variant='outlined'>Online Payment</Button>


        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
         <Typography sx={{fontSize:'25px'}}>
             <Checkbox/>Cash On Delivery
         </Typography>
        <Box>

         <Button onClick={handleClick}  variant='outlined'>Confirm your order</Button>
        
             </Box>  
        </Box>
       </Box>
     </>
  )
}

export default Checkout2
