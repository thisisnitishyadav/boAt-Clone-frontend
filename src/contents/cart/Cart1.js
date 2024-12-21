'use client'
import { Box, Button, Stack, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useState } from "react";
import { deleteCart, readCart } from '@/redux/slices/cart';
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from '@/redux/store/store'

const Cart1 = () => {
   const router = useRouter();
   const dispatch = useDispatch();
   const { carts } = useSelector((state) => state.cart);
   const user = useSelector((state) => state.auth);
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(10);
   const [filters, setFilters] = useState({ 'isDeleted': false, 'userId': user?.user?.id });

   const fetchCart = async () => {
    try {
        let result = await dispatch(readCart(page, limit, filters));
        console.log(result);
        return true;
    } catch (error) {
        console.error('Error', error);
        return false;
    }
};

   const handleDelete = async (cartId) => {
    await dispatch(deleteCart(cartId));
   };

   const handleCreateOrder = async () => {
    router.push(`/checkout/${carts?.id}`);
  }

   useEffect(() => {
    fetchCart();
   }, [page, filters]);

   let total = 0;
   for (let cart of carts) {
     for (let product of cart.products) {
       total += (product.productId?.price?.cost || 0);
     }
   }

   return (
    <div className="bg-white">
      <div className="mx-4 md:mx-8 py-8">
        {carts && carts.length > 0 && carts.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row border mb-6 p-4 md:p-6">
            {/* Product Image */}
            <img src={item.products[0].productId.image} alt="" className="w-full md:w-[200px] h-auto object-cover" />

            {/* Product Details */}
            <div className="flex flex-col justify-between ml-0 md:ml-6 mt-4 md:mt-0">
              <div>
                <p className="text-2xl">{item?.products[0]?.productId?.title?.shortTitle}</p>
                <p className="text-sm md:text-base text-gray-500">{item?.products[0]?.productId?.title?.longTitle}</p>
              </div>

              <div className="flex gap-3 mt-4">
                <p className="font-bold text-xl text-[#1A2024]">
                  &#8377;{item?.products[0]?.productId?.price?.cost}
                </p>
                <p className="text-[#1A2024] line-through">
                  &#8377;{item?.products[0]?.productId?.price?.mrp}
                </p>
                <p className="text-green-500">20% off</p>
              </div>

              {/* Quantity Input */}
              <Box component="form" sx={{ '& .MuiTextField-root': { my: 1, width: '50%' } }} noValidate autoComplete="off">
                <TextField
                  id="outlined-number"
                  label="No. of Items"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>

              {/* Remove Button */}
              <Stack direction="row" spacing={2} className="mt-4">
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(item?.id)}>
                  Remove
                </Button>
              </Stack>
            </div>
          </div>
        ))}

        {/* Total Payable Amount Section */}
        <div className="flex justify-between items-center border-t pt-6">
          <div className="text-2xl font-semibold">
            Total Payable Amount : &#8377; {total}
          </div>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" className="h-[50px]" onClick={handleCreateOrder} endIcon={<SendIcon />}>
              Place Order
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Cart1;
