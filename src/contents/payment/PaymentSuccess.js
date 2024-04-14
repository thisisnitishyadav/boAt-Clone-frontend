'use client'
import { getOrder, updateOrder } from '@/redux/slices/order';
import { useDispatch, useSelector } from '@/redux/store/store';
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useState } from 'react';



const PaymentSuccess = () => {
  const router = useRouter();
//   let paymentId = router.query.payment_id
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);
//   const {orders} = useSelector((state)=> state.order);
   

//     let cost = 0;

//     for(let order of orders){
//       for(let product of order.products){
//         cost += (product.productId.price.cost)
//       }
      
//     }
   
//     let totalPrice = ((cost))
//     console.log(totalPrice)
    
//     const checkOrder = async() => {
//       const filters = {"$and":[{"userId":user && user.id},{"paymentId":paymentId}]}
//       let result = await dispatch(getOrder(1,10,filters))
//       console.log(result)
//       if( result.status === 'RECORD_NOT_FOUND' && result.data === null){
//         let data = {
//           "paymentId": `${paymentId}`,
//           "status":"success",
//           products:[]
          
//         }
//         orders && orders.length>0 && orders[0]?.products.map((item)=>{
//            data.products.push({
//             "productId": `${item?.productId?.id}`,
//             "qty": `${item.qty}`,
//             "status": "pending",
//             "orderStatus": {
//             "orderConfirm": {
//             "isConfirmed": true,
//             "date": new Date()
//             },
//             "shipped": {
//               "isConfirmed": false,
//             },
//             "outForDelivery": {
//               "isConfirmed": false,
//             },
//             "delivered": {
//               "isConfirmed": false,
//             },
//             "cancel": {
//               "isConfirmed": false,
//             },
//             "refunded": {
//               "isConfirmed": false,
//             }
//           }
//       })
//     })
// console.log(data)
//       let update = await dispatch(updateOrder(data , orders && orders.length> 0 && orders[0].id))
//       if(update){
//           return true
//       }
//     }
//    }


//    useEffect(() => {
//        checkOrder()
//    },[paymentId, user && user.id])

  return (
    <div className='bg-white min-h-full'>
      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'600px',gap:'30px'}}>
        <Typography sx={{fontSize:'25px',fontWeight:'600'}}>Your Payment is Successfull</Typography>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5uvshf555mowrIo6ToJ0jd2ed1AQ9OUPLtwudUJkFMg&s' style={{height:'400px',width:'400px'}}/>
        <Button onClick={() => router.push('/')} variant='outlined' sx={{width:'400px'}}>Continue Shopping</Button>
      </Box>
    </div>
  )
}

export default PaymentSuccess
