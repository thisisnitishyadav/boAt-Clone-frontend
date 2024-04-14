'use client'
import { getUser, logoutUser, updateUser } from '@/redux/slices/auth'
import { Avatar, Box, Button, Divider, Skeleton, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { deleteOrder, getOrder } from '@/redux/slices/order'
import { useState } from 'react'


const Order = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const {orders} = useSelector((state) => state.order)
    const[skeletonstate,setskeletonstate] = useState(true)
    const [orderDetail, setOrderDetail] = useState({})
    const[filters,setFilters] = useState({"status":"success","userId":user && user.user &&  user.user.id})

   console.log(orders,'orders')
    const handleLogout = async () => {
        localStorage.removeItem('accessToken');
        await dispatch(logoutUser())
        router.push('/login')
    }
     
    const fetchUser = async() =>{
        let result = await dispatch(getUser())
        if(result)
        console.log(user)
    }
    const fetchOrder = async() =>{
        setskeletonstate(true)
        let result = await dispatch(getOrder(1,10))
        console.log(result,'result')
        if(result){
          setskeletonstate(false)
        }
        
    }

    const fetchOrderDetail = async() =>{
      let arr;
      for(let order of orders){
      for(let k of order.products){
          if(k)
           arr = {...k}
      }
  }
  setOrderDetail({...arr})

  }

  console.log(orderDetail && orderDetail.orderStatus && orderDetail.orderStatus.orderConfirm.isConfirmed)

    useEffect(()=>{
          fetchUser()
          fetchOrder()
          fetchOrderDetail()
    },[])


    const handleClick = (id) => {
        router.push(`/orderDetails/${id}`)
      };

  
  return (
    <div className='bg-white  '>

     <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
        <Box sx={{width:'80%',display:'flex',justifyContent:'center',marginTop:'40px',gap:'40px'}}>

<Box  sx={{flexDirection:'column',width:'300px',height:'415px',background:'white',border:'1px solid rgba(0,0,0,0.3)',borderRadius:'2px'}}>

<Box sx={{padding:'20px',display:'flex',gap:'30px',}} className="bg-slate-300">
 <Typography sx={{color:'black'}}><Avatar/></Typography>
 <Box >
   <Typography sx={{color:'black'}}>{user.name}</Typography>
   <Typography sx={{color:'black',fontSize:'13px'}}>{user.email}</Typography>
 </Box>
</Box>
<Divider/>

<Typography sx={{fontWeight:'400',fontSize:'16px',padding:'15px'}}>Profile</Typography>
<Divider/>

<Typography sx={{fontWeight:'400',fontSize:'16px',padding:'15px'}}>Orders</Typography>
<Divider/>

<Typography sx={{fontWeight:'400',fontSize:'16px',padding:'15px'}}>Wishlist</Typography>
<Divider/>

<Typography sx={{fontWeight:'400',fontSize:'16px',padding:'15px'}}>Saved Address</Typography>
<Divider/>

<Typography sx={{fontWeight:'400',fontSize:'16px',padding:'15px'}}>Contact Us</Typography>
<Divider/>

<Typography onClick={handleLogout} sx={{fontWeight:'400',fontSize:'16px',padding:'15px',cursor:'pointer'}}>Logout</Typography>


</Box>



{skeletonstate ?

<Box  sx={{width:'70%',gap:'20px',display:'flex',flexDirection:'column',border:'1px solid rgba(0,0,0,0.3)',padding:'10px'}}>
{orders && orders.length>0 && orders.map((item,index)=>(
 item && item.products && item.products.length>0 && item.products.map((cart) =>(
    <Box sx={{display:'flex',border:'1px solid rgba(0,0,0,0.1)',padding:'15px',height:'320px',gap:'40px',flexDirection:'column'}}>
      <Box sx={{display:'flex',gap:'40px'}}>
      <Skeleton variant='rectengular' sx={{width:'170px',height:'200px'}}/>
      <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
      <Skeleton variant='rectengular' sx={{width:'250px',height:'20px'}}/>
      <Skeleton variant='rectengular' sx={{width:'200px',height:'20px'}}/>
      <Skeleton variant='rectengular' sx={{width:'150px',height:'20px'}}/>
      </Box>
      </Box>

      <Box >
      <Skeleton variant='rectengular' sx={{width:'200px',height:'30px'}}/>
      
        </Box>
      </Box>
))
))}
</Box>


:
<Box sx={{width:'70%'}}>

    <Box sx={{display:'flex',border:'1px solid rgba(0,0,0,0.1)',padding:'20px',marginBottom:'20px'}} className='bg-slate-300'>
        <Typography>ORDERS</Typography>
    </Box>


{orders && orders.length>0 && orders.map((item,index)=>(
 item && item.products && item.products.length>0 && item.products.map((cart) =>(
<Box key={index} sx={{display:'flex',flexDirection:'column',border:'1px solid rgba(0,0,0,0.1)',padding:'15px',height:'300px',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',margin:'10px'}}>
                    
<Box sx={{display:'flex',borderBottom:'1px solid rgba(0,0,0,0.1)',padding:'10px',justifyContent:'space-between'}}>
        <Typography>Order id No - {item.id}</Typography>
        <Typography onClick={() => handleClick(cart.id)} sx={{cursor:'pointer'}}>Order Details</Typography>
    </Box>

                    <Box sx={{display:'flex',gap:'20px',marginTop:'10px',}}>
                        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center'}}>

                           <img src={ cart && cart.productId && cart.productId.image && cart.productId.image}    
                           style={{width:'130px',height:'170px'}}/>
                           <Box sx={{display:'flex',justifyContent:'center'}}>
                           <Button variant='outlined' sx={{width:'200px',height:'30px'}}>Cancel Order</Button>
                           </Box>
                        </Box>
 
                        <Box>
                           <Typography>{cart.productId && cart.productId.title && cart.productId.title.shortTitle}</Typography>
                            <Typography>Boat</Typography>
                            <Typography>{cart.productId && cart.productId.title && cart.productId.price.cost}</Typography>
                        </Box>
                    </Box>
                 
               </Box>
               ))
))}


</Box>

 }


</Box>

        </Box>

  
    </div>
  )
}

export default Order
