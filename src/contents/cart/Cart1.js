'use client'
import { Box, Button, Stack, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React from "react";
import { deleteCart, readCart } from '@/redux/slices/cart';
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from '@/redux/store/store'
import { useEffect, useState } from 'react'



const Cart1 = () => {
   const router =useRouter();
   const dispatch = useDispatch();
   const {carts,cartsPaginator} = useSelector((state)=>state.cart);
   const user = useSelector((state)=> state.auth);
   const [page,setPage] =useState(1);
   const [limit,setLimit]=useState(10);
   const [productDetail,setProductDetail]=useState({});
   const [backdrop,setBackdrop]=useState();
   const[filters,setFilters]=useState({'isDeleted':false,'userId':user && user.user && user.user.id})

   const fetchCart = async () => {
    try {
        let result = await dispatch(readCart(page, limit, filters));
        console.log(result);
        if (result) {
            return true;
        }
    } catch (error) {
        console.error('Error', error);
        return false; 
    }
};

   const handleDelete =async(cartId)=>{
    setBackdrop(true)
    await dispatch (deleteCart(cartId))
    setBackdrop(false)
   };

  
   const fetchDetail =async()=>{
    let arr;
    for(let cart of carts){
      for(let k of cart.products){
        if(k)
        arr ={...k}
      }
    }
    setProductDetail({...arr})
   }
   console.log(productDetail)

   const handleCreateOrder =async()=>{
    router.push(`/checkout/${carts?.id}`)
  }
  

   useEffect(()=>{
    fetchCart()
    fetchDetail()
   },[page,filters])

   const handleChangePage =(event,page)=>{
    console.log(value);
    setPage(value);
   }
  let mrp =0;
  let cost =0;

  for(let cart of carts){
    for (let product of cart.products){
      mrp+= (product.productId && product.productId.price && product.productId.price.mrp)
      cost+=(product.productId && product.productId.cost && product.productId.price.cost)
    }
  }
  let discount=((mrp)-(cost))
  let total =(cost)
  console.log(total)

  
  return (
    <div className=" bg-white">
      <div className="border mx-8  ">
      {carts && carts.length >0 && carts.map((item,index)=>(
        <div className="border flex w-2/3 items-center h-[250px] ">
          <img src={item.products[0].productId.image} alt="" className="w-[200px]"></img>
          
        <div className="mx-6">

        <div className=" "> 
          <p className="text-2xl">{item && item.products[0] && item.products[0].productId && item.products[0].productId.title && item.products[0].productId.title.shortTitle}</p>
          <p>{item && item.products[0] && item.products[0].productId && item.products[0].productId.title && item.products[0].productId.title.longTitle}</p>
        </div>

        <div className='flex gap-3'> 
          <p className='font-bold text-xl text-[#1A2024]'>&#8377;{item && item.products[0] && item.products[0].productId && item.products[0].productId.price && item.products[0].productId.price.cost}</p>
          <p className='text-[#1A2024] line-through'> &#8377;{item && item.products[0] && item.products[0].productId && item.products[0].productId.price && item.products[0].productId.price.cost}</p>
          <p className='text-green-500'>20% off</p>
        </div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '15ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="w-[20px]"><TextField
          id="outlined-number"
          label="No. of Items"
          type="number"
          
          InputLabelProps={{
            shrink: true,
          }}
        /></div>
    </Box>
        
        <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}onClick={() => handleDelete(item?.id)}>
        Remove
      </Button>
      
    </Stack>
        </div>

        </div>
      ))}

{/* ---------------------------------------------------------------------------------------------- */}
        <div className="border w-1/3"> </div>
      </div>
      
      <div className="mx-8 border flex items-center h-[100px]">
      <div className=" flex justify-between items-center w-2/3 h-[50px]">
        <div className="text-2xl" total={total}>
        Total Payable Amount : &#8377; {total}
        </div>
      <Stack direction="row" spacing={2}>
      <Button variant="outlined" className="h-[50px]" onClick={()=> handleCreateOrder(carts?.id)} endIcon={<SendIcon />}>
        Place Order
      </Button>
      </Stack>
      </div>
      </div>

    </div>
  );
};

export default Cart1;
