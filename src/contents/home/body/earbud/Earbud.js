'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Data1 } from '@/constants/productSliderData/Data1';
import SliderProduct from '../../homeslider/Slider';

const Body = () => {
  const router = useRouter();

  return (
    <div className="relative">
      {/* BestSeller Section */}
      <div className="bg-gradient-to-r from-[#edfefe] to-[#eeffff]">
        {/* Header Section */}
        <div className="md:grid md:grid-cols-2 flex flex-col w-full items-center md:items-start">
          <div className="md:col-span-1 mx-4 md:mx-8 text-center md:text-left ">
            <p className="text-4xl md:text-8xl font-light leading-tight">
              True Wireless Earbuds
            </p>
            <p className="text-lg md:text-2xl font-light mt-2">
              Starting from &#8377; 999
            </p>
          </div>
          <div className="md:col-span-1 flex justify-center md:justify-end mx-4 md:mx-8">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/img_1_desktop_4c81b094-8292-4d54-8b20-5eb3b823a4e6_2800x.png?v=1686650857"
              alt="Bluetooth earbuds"
              className="max-w-full"
            />
          </div>
        </div>

        {/* Slider Section */}
        <SliderProduct Data={Data1} />

        {/* Best Sellers Section */}
        <div className="mx-4 md:mx-8 my-8">
          <p className="font-metropolis text-2xl md:text-4xl bold py-3">
            Best Sellers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
                name: "Airpodes 131",
                price: "₹ 899",
              },
              {
                img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141.png?v=1703145765",
                name: "Airpodes 131",
                price: "₹ 899",
              },
              {
                img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
                name: "Airpodes 131",
                price: "₹ 899",
              },
              {
                img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
                name: "Airpodes 131",
                price: "₹ 899",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="border border-current rounded-2xl overflow-hidden shadow-md"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="cursor-pointer w-full"
                  onClick={() => router.push('/product')}
                />
                <p className="text-base font-bold mx-3 mt-2">{product.name}</p>
                <p className="text-sm font-bold mx-3">{product.price}</p>
                <div className="flex rounded-xl bg-black text-white h-[40px] m-3 items-center justify-center cursor-pointer hover:bg-gray-800 transition">
                  <p className="font-light">Add to Cart</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
