'use client';

import { getUser, logoutUser, updateUser } from '@/redux/slices/auth';
import { Avatar, Box, Button, Divider, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { deleteOrder, getOrder } from '@/redux/slices/order';

const Order = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { orders } = useSelector((state) => state.order);

  const [skeletonState, setSkeletonState] = useState(true); // Corrected state name
  const [orderDetail, setOrderDetail] = useState({});
  const [filters, setFilters] = useState({
    status: 'success',
    userId: user?.user?.id || null,
  });

  const handleLogout = async () => {
    localStorage.removeItem('accessToken');
    await dispatch(logoutUser());
    router.push('/login');
  };

  const fetchUser = async () => {
    const result = await dispatch(getUser());
    if (result) console.log(user);
  };

  const fetchOrder = async () => {
    setSkeletonState(true);
    const result = await dispatch(getOrder(1, 10));
    console.log(result, 'result');
    if (result) {
      setSkeletonState(false);
    }
  };

  const fetchOrderDetail = async () => {
    let arr;
    for (const order of orders || []) {
      for (const k of order.products || []) {
        if (k) arr = { ...k };
      }
    }
    setOrderDetail({ ...arr });
  };

  console.log(
    orderDetail?.orderStatus?.orderConfirm?.isConfirmed,
    'Order Confirmation Status'
  );

  useEffect(() => {
    fetchUser();
    fetchOrder();
    fetchOrderDetail();
  }, []);

  const handleClick = (id) => {
    router.push(`/orderDetails/${id}`);
  };

  return (
    <div className="bg-white">
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            width: '80%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px',
            gap: '40px',
          }}
        >
          {/* Sidebar */}
          <Box
            sx={{
              flexDirection: 'column',
              width: '300px',
              height: '415px',
              background: 'white',
              border: '1px solid rgba(0,0,0,0.3)',
              borderRadius: '2px',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Box
              sx={{
                padding: '20px',
                display: 'flex',
                gap: '30px',
              }}
              className="bg-slate-300"
            >
              <Typography sx={{ color: 'black' }}>
                <Avatar />
              </Typography>
              <Box>
                <Typography sx={{ color: 'black' }}>{user?.name}</Typography>
                <Typography sx={{ color: 'black', fontSize: '13px' }}>
                  {user?.email}
                </Typography>
              </Box>
            </Box>
            <Divider />
            {['Profile', 'Orders', 'Wishlist', 'Saved Address', 'Contact Us'].map(
              (item, index) => (
                <React.Fragment key={index}>
                  <Typography sx={{ fontWeight: '400', fontSize: '16px', padding: '15px' }}>
                    {item}
                  </Typography>
                  <Divider />
                </React.Fragment>
              )
            )}
            <Typography
              onClick={handleLogout}
              sx={{
                fontWeight: '400',
                fontSize: '16px',
                padding: '15px',
                cursor: 'pointer',
              }}
            >
              Logout
            </Typography>
          </Box>

          {/* Main Content */}
          {skeletonState ? (
            <Box
              sx={{
                width: { xs: '100%', md: '70%' },
                gap: '20px',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(0,0,0,0.3)',
                padding: '10px',
              }}
            >
              {[...Array(3)].map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    border: '1px solid rgba(0,0,0,0.1)',
                    padding: '15px',
                    gap: '40px',
                    flexDirection: 'column',
                    height: { xs: 'auto', md: '320px' },
                  }}
                >
                  <Box sx={{ display: 'flex', gap: '40px' }}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        width: { xs: '100%', md: '170px' },
                        height: '200px',
                      }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <Skeleton
                        variant="rectangular"
                        sx={{
                          width: { xs: '100%', md: '250px' },
                          height: '20px',
                        }}
                      />
                      <Skeleton
                        variant="rectangular"
                        sx={{
                          width: { xs: '100%', md: '200px' },
                          height: '20px',
                        }}
                      />
                      <Skeleton
                        variant="rectangular"
                        sx={{
                          width: { xs: '100%', md: '150px' },
                          height: '20px',
                        }}
                      />
                    </Box>
                  </Box>
                  <Skeleton
                    variant="rectangular"
                    sx={{ width: { xs: '100%', md: '200px' }, height: '30px' }}
                  />
                </Box>
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                width: { xs: '100%', md: '70%' },
                gap: '20px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  border: '1px solid rgba(0,0,0,0.1)',
                  padding: '20px',
                  marginBottom: '20px',
                }}
                className='bg-slate-300'
              >
                <Typography variant="h6" >ORDERS</Typography>
              </Box>
              {orders && orders.length > 0 ? (
                orders.map((order) =>
                  order.products.map((cart) => (
                    <Box
                      key={`${order.id}-${cart.id}`}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid rgba(0,0,0,0.1)',
                        padding: '15px',
                        gap: '20px',
                        height: { xs: 'auto', md: '300px' },
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        marginBottom: '10px',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          borderBottom: '1px solid rgba(0,0,0,0.1)',
                          padding: '10px',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography>Order id No - {order.id}</Typography>
                        <Typography
                          onClick={() => handleClick(cart.id)}
                          sx={{ cursor: 'pointer' }}
                          className='underline text-blue-500'
                        >
                          Order Details
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', gap: '20px' }} >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            src={
                              cart.productId?.image ||
                              'https://via.placeholder.com/130x170'
                            }
                            alt="Product"
                            style={{
                              width: '130px',
                              height: '170px',
                              objectFit: 'cover',
                            }}
                          />
                          <Button variant="outlined" sx={{ width: '200px', height: '30px'  }}>
                            Cancel Order
                          </Button>
                        </Box>
                        <Box>
                          <Typography className='font-bold'>
                            {cart.productId?.title?.shortTitle || 'Unknown Title'}
                          </Typography>
                          <Typography>Boat</Typography>
                          <Typography className='text-[color:#6495ED]'>₹{cart.productId?.price?.cost || 'N/A'}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))
                )
              ) : (
                <Typography sx={{ textAlign: 'center', marginTop: '20px' }}>
                  No Orders Found
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Order;
