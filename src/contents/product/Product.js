'use client';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '@/redux/slices/product';
import { createCart } from '@/redux/slices/cart';
import { getUser } from '@/redux/slices/auth';

const Products = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const { product } = useSelector((state) => state.product);
  const params = useParams();

  const fetchProductDetail = async () => {
    let result = await dispatch(getProduct(params.productItem));
    if (result) {
      return true;
    }
  };

  const handleGetUser = async () => {
    let result = await dispatch(getUser());
    if (result) {
      return true;
    }
  };

  const handleCreateCart = async (productId) => {
    const data = {
      userId: user?.id,
      products: [
        {
          productId: productId,
          qty: 1,
        },
      ],
    };
    let result = await dispatch(createCart(data));
    if (result) {
      router.push(`/cart/${product?.id}`);
      return true;
    }
  };

  useEffect(() => {
    fetchProductDetail();
    handleGetUser();
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-8 py-8 gap-6">
          {/* Product Images (Vertical small images + Main Image) */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            {/* Small Product Images (Hidden on mobile) */}
            <div className="flex flex-col gap-4 w-1/4 hidden md:block">
              {product?.productImages &&
                product?.productImages.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border overflow-hidden cursor-pointer h-[80px] w-[80px] md:h-[100px] md:w-[100px]"
                  >
                    <img src={item?.path} alt="" className="h-full w-full" />
                  </div>
                ))}
            </div>

            {/* Main Product Image */}
            <div className="border bg-slate-100 flex justify-center items-center rounded-xl cursor-pointer w-full md:w-3/4">
              <img src={product?.image} alt="" className="max-h-[400px] w-full" />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-gray-500">4.8 | 1339 reviews</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-800">
                {product?.title?.shortTitle}
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP
                Technology, 650mAh Charging Case
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <p className="text-2xl font-semibold text-gray-800">
                  &#8377;{product?.price?.mrp}
                </p>
                <p className="line-through text-gray-500">
                  &#8377;{product?.price?.cost}
                </p>
                <p className="text-green-500">{product?.price?.discount}</p>
              </div>
              <div className="border h-[42px] px-3 flex items-center rounded-lg bg-gray-100">
                <p>Ending In: 5 hours 18 min 36 sec</p>
              </div>
            </div>

            <div className="border bg-slate-100 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <p className="font-medium">Choose Your Color:</p>
                <p>Light Pink</p>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="border bg-[#d48f87] rounded-full h-7 w-7"></div>
                <div className="border bg-[#22201f] rounded-full h-7 w-7"></div>
                <div className="border bg-[#d1d1d1] rounded-full h-7 w-7"></div>
                <div className="border bg-[#c5b898] rounded-full h-7 w-7"></div>
                <div className="border bg-[#586575] rounded-full h-7 w-7"></div>
                <div className="border bg-[#3e5844] rounded-full h-7 w-7"></div>
              </div>
            </div>

            <div className="flex items-center border p-4 rounded-lg bg-slate-100">
              <p className="font-medium">Delivering to:</p>
              <p className="ml-3">122028</p>
              <span className="ml-auto text-blue-500 cursor-pointer">Change</span>
            </div>

            <div className="space-y-2">
              <p>Make Your Airdopes Personal</p>
              <p className="text-gray-500">
                Get a Customized Engraving And Make It Unmistakably Yours
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                className="bg-amber-500"
                variant="contained"
                onClick={() => handleCreateCart(product?.id)}
              >
                Add to Cart
              </Button>
              <Button
                className="bg-lime-600"
                variant="contained"
                onClick={() => router.push('/checkout')}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 md:mx-8 py-8">
          {[
            {
              img: '//cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334305_small.svg?v=1682336123',
              text: '1 Year Warranty',
            },
            {
              img: '//cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334304_small.svg?v=1682336123',
              text: '7-day Replacement',
            },
            {
              img: '//cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334303_small.svg?v=1682336123',
              text: 'Free Shipping',
            },
            {
              img: '//cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334302_small.svg?v=1682336123',
              text: 'GST Billing',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <img src={item.img} alt={item.text} className="h-12" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
