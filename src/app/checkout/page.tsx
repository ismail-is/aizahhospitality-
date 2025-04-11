'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import HeaderOne from '@/components/Header/HeaderOne';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card');

  return (
    <>
      <HeaderOne />
      {/* <Breadcrumb img="/images/breadcrumb/1920x320.png" heading="Checkout" subHeading="" /> */}

      <div className="max-w-10xl mx-auto px-4 py-10 flex flex-col items-center lg:items-start lg:flex-row gap-8 lg:ml-10 lg:mr-10">

        {/* Left Section */}
        <div className="flex-1 bg-white shadow-md p-6 rounded-2xl"  style={{
                        boxShadow: 'rgba(10, 10, 10, 0.22) 0px 3px 9px',
                        border: '1px solid rgb(221, 221, 221)',
                        borderRadius: '20px'
                    }}>
          

          <div className="content-detail border-b border-outline pt-2">
                    <div className="container">
                        <div className="flex max-lg:flex-col-reverse gap-y-10 justify-between">
                            <div className="content xl:w-3/3 lg:w-[100%] lg:pr-[15px] w-full">

                                <div className="  gap-6 pb-4">
                                    <div className="heading6">
                                    <div className="heading6">Your date</div>

                                    <div className='flex justify-between items-start'>
  <div className="body2 text-variant mt-3"  style={{fontWeight:'bold'}} >
    Dates<br/>
    <span style={{fontWeight:'normal'}}>1–2 Jun</span>
  </div>
  <div className="body2 text-variant mt-3">Edit</div>
</div>


<div className='flex justify-between items-start'>
                                    <div className="body2 text-variant mt-3"   style={{fontWeight:'bold'}} >Guests<br/>
                                      <span  style={{fontWeight:'normal'}} >1 guest</span>
                                    </div>
                                    <div className="body2 text-variant mt-3">Edit</div>
                                    </div>
                                    
                               
                                    </div>
                                  
                                </div>
                               
                                
                            </div>
                            </div>
                            </div>
                            </div>









          {/* Billing Address */}


          <div className="content-detail border-b border-outline pt-0">
                    <div className="container">
                        <div className="flex max-lg:flex-col-reverse gap-y-10 justify-between">
                            <div className="content xl:w-3/3 lg:w-[100%] lg:pr-[15px] w-full">

                           


                            <div className="border-b pb-4 mb-6 mt-4" >
            <h2 className="font-semibold text-lg mb-4">Billing Address</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-[#3274BD] hover:border-green-500 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-[#3274BD]  hover:border-green-500 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-[#3274BD]  hover:border-green-500 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-[#3274BD]  hover:border-green-500 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Street Address"
                className="border border-[#3274BD]  hover:border-green-500 p-3 rounded-md w-full sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="City"
                className="border border-[#3274BD]  hover:border-green-500 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="border border-[#3274BD]  hover:border-green-500 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* <select
                className="border border-[#3274BD]  hover:border-green-500 p-3 rounded-md w-full sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Country</option>
                <option value="india">India</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="uae">UAE</option>
              </select> */}
            </div>
          </div>
                                
                            </div>
                            </div>
                            </div>
                            </div>

          
         

          {/* Payment Method */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Payment Method</h2>

            <div className="flex flex-wrap gap-4 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="accent-blue-600"
                />
                <span className="text-sm font-medium">Payment By Card</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="accent-blue-600"
                />
                <span className="text-sm font-medium">Pay at Check-in</span>
              </label>
            </div>

            {paymentMethod === 'card' && (
              <>
                {/* Payment Logos */}
                <div className="flex flex-wrap gap-4 mb-6">
  {[
    {
      type: 'visa',
      src: 'data:image/png;base64,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',
    },
    {
      type: 'mastercard',
      src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAlCAYAAAAa0FocAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBNTg4QjI3OThCMThFMzExQkNDRUQ5RTc4RjM4N0M5NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNzAwOTIzRUNBMUQxMUU5QTE5MkMyQTQ2MzQ3NTczQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzAwOTIzRENBMUQxMUU5QTE5MkMyQTQ2MzQ3NTczQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZWJlZmRhZC05NTljLTgzNGEtYTI5ZS1hYWU0ZGNmNDliMGIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplNTExM2U1NC1lODJhLTU2NDItOTQ1ZS0yNmUw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',
    },
    {
      type: 'skrill',
      src: 'data:image/png;base64,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',
    },
    {
      type: 'paypal',
      src: 'data:image/png;base64,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',
    },
  ].map(({ type, src }) => (
    <div
      key={type}
      className="border rounded-xl p-4 flex items-center justify-center w-24 h-16 bg-gray-100 hover:shadow transition-all"
    >
      <Image
        src={src}
        alt={type}
        width={50}
        height={25}
        className="object-contain"
      />
    </div>
  ))}
</div>


                {/* Card Form */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <input
                    type="text"
                    placeholder="Card holder name"
                    className="border border-[#3274BD]  hover:border-green-500 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Card number"
                    className="border border-[#3274BD]  hover:border-green-500 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="border border-[#3274BD]  hover:border-green-500 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Expiry (mm/dd/yyyy)"
                    className="border border-[#3274BD]  hover:border-green-500 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}

            <button className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>

        {/* Right Section - Cart Total */}
        <div
  className="w-full lg:w-1/3 bg-white p-6 rounded-2xl   "
  style={{
    boxShadow: 'rgba(10, 10, 10, 0.22) 0px 3px 9px',
   
    borderRadius: '20px',
    position:'sticky',
    top:'100px'
  }}
>
  <div className=' border-b border-outline'>
  <div className="flex items-center mb-4  ">
    
    <img
      src="/images/allimg/rooms/4.png" // replace with your image path
      alt="Accommodation"
      className="w-16 h-16 rounded-lg object-cover mr-4"
    />
    <div>
      <h3 className="font-semibold text-sm">Chic 1 BHK </h3>
      <p className="text-sm text-gray-500">In Downtown Dubai Near To Metro Station</p>
      <div className="text-sm text-gray-700 flex items-center gap-2">
        ⭐ 4.84 (178 reviews) · <span className="text-xs text-gray-500"></span>
      </div>
    </div>
  </div>
  </div>

  {/* <hr className="my-4" /> */}
  <div className="heading6   mt-4">Your total</div>
  <div className="text-sm flex justify-between py-2 font-medium text-gray-800  ">
    
    <span>AED 200 x 1 night</span>
    <span>₹200</span>
  </div>

  {/* <hr className="my-4" /> */}

  <div className="text-sm flex justify-between py-2 font-semibold text-gray-900  border-t border-outline">
    
    <span>Total </span>
    <span>AED 200</span>
  </div>

  {/* <div className="mt-2 text-sm text-right">
    <a href="#" className="text-gray-800 underline font-medium">
      Price breakdown
    </a>
  </div> */}
</div>
  {/* Right Section - Cart Total */}

      </div>

      <Footer />
    </>
  );
};

export default Checkout;
