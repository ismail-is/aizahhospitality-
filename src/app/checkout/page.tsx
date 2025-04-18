'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { format } from 'date-fns';
import Image from 'next/image';
import HeaderOne from '@/components/Header/HeaderOne';
import Footer from '@/components/Footer/Footer';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card');

  const searchParams = useSearchParams();
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const guests = searchParams.get('guests');
  const adults = searchParams.get('adults');
  const children = searchParams.get('children');
  const pets = searchParams.get('pets');
  const totalPrice = searchParams.get('totalPrice');
  const price = searchParams.get('price');

  const formattedStartDate = startDate ? format(new Date(startDate), 'd MMM') : '';
  const formattedEndDate = endDate ? format(new Date(endDate), 'd MMM') : '';
  const formattedRange = `${formattedStartDate} – ${formattedEndDate}`;

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Razorpay payment function
  const handleRazorpayPayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load.');
      return;
    }

    // Here we create a simple order; in production, you would get this from the backend
    const order = {
      amount: totalPrice ? parseInt(totalPrice) * 100 : 10000, // Convert to paise
      currency: 'INR',
    };

    // Razorpay options
    const options = {
      key: 'rzp_test_bKdcA7jkcYfWPf', // Replace with your Razorpay Key ID
      amount: order.amount,
      currency: order.currency,
      name: 'Your Company Name',
      description: 'Booking Payment',
      handler: function (response: any) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // Handle post-payment actions here
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#F37254',
      },
    };

    // Open Razorpay payment modal
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <HeaderOne />
      <div>
      <div className="max-w-12xl mx-auto px-4 py-10 flex flex-col items-center lg:items-start lg:flex-row gap-8 lg:ml-10 lg:mr-10">
        {/* Left Section */}
        <div
          className=" w-full flex-1 bg-white shadow-md p-6 rounded-2xl"
          style={{
            boxShadow: 'rgba(10, 10, 10, 0.22) 0px 3px 9px',
            border: '1px solid rgb(221, 221, 221)',
            borderRadius: '20px',
          }}
        >



            {/* Date and Guest Section */}
            <div className="content-detail border-b border-outline pt-2">
            <div className="container">
              <div className="flex max-lg:flex-col-reverse gap-y-10 justify-between">
                <div className="content xl:w-3/3 lg:w-[100%] lg:pr-[15px] w-full">
                  <div className="gap-6 pb-4">
                    <div className="heading6">Your date</div>

                    <div className="flex justify-between items-start">
                      <div className="body2 text-variant mt-3" style={{ fontWeight: 'bold' }}>
                        Dates<br />
                        <span style={{ fontWeight: 'normal' }}>{formattedRange}</span>
                      </div>
                      <div className="body2 text-variant mt-3">Edit</div>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="body2 text-variant mt-3" style={{ fontWeight: 'bold' }}>
                        Guests<br />
                        <span style={{ fontWeight: 'normal' }}>
                          {guests} guest{guests && Number(guests) > 1 ? 's' : ''}
                        </span>
                      </div>
                      <div className="body2 text-variant mt-3">Edit
                        
                      </div>
                    </div>

                    {adults && (
                      <div className="flex justify-between items-start">
                        <div className="body2 text-variant mt-3" style={{ fontWeight: 'bold' }}>
                          Adults<br />
                          <span style={{ fontWeight: 'normal' }}>{adults}</span>
                        </div>
                      </div>
                    )}

                    {children && (
                      <div className="flex justify-between items-start">
                        <div className="body2 text-variant mt-3" style={{ fontWeight: 'bold' }}>
                          Children<br />
                          <span style={{ fontWeight: 'normal' }}>{children}</span>
                        </div>
                      </div>
                    )}

                    {pets && (
                      <div className="flex justify-between items-start">
                        <div className="body2 text-variant mt-3" style={{ fontWeight: 'bold' }}>
                          Pets<br />
                          <span style={{ fontWeight: 'normal' }}>{pets}</span>
                        </div>
                      </div>
                    )}
                    
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
                  <div className="border-b pb-4 mb-6 mt-4">
                    <h2 className="font-semibold text-lg mb-4">Billing Address</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <input type="text" placeholder="First Name" className="border border-[#3274BD] p-3 rounded-md w-full" />
                      <input type="text" placeholder="Last Name" className="border border-[#3274BD] p-3 rounded-md w-full" />
                      <input type="email" placeholder="Email Address" className="border border-[#3274BD] p-3 rounded-md w-full" />
                      <input type="tel" placeholder="Phone Number" className="border border-[#3274BD] p-3 rounded-md w-full" />
                      <input type="text" placeholder="Street Address" className="border border-[#3274BD] p-3 rounded-md w-full sm:col-span-2" />
                      <input type="text" placeholder="City" className="border border-[#3274BD] p-3 rounded-md w-full" />
                      <input type="text" placeholder="Zip Code" className="border border-[#3274BD] p-3 rounded-md w-full" />
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
             <div className="flex justify-center gap-4 mb-6">
             <button
               onClick={handleRazorpayPayment}
               className="w-32 bg-transparent hover:bg-[#32548E] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
             >
               Pay Now
             </button>
           </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="flex justify-center items-center gap-4 mb-6 h-full">
              <button className="w-32 bg-transparent hover:bg-[#32548E] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Submit
              </button>
            </div>
            
             
            )}

            {/* <button className="w-full bg-red-500 text-black font-semibold py-3 rounded-lg hover:bg-red-600 transition">
              PROCEED TO CHECKOUT
            </button> */}
          </div>
        </div>

        {/* Right Section - Cart Total */}
        <div
          className="w-full lg:w-1/3 bg-white p-6 rounded-2xl"
          style={{
            boxShadow: 'rgba(10, 10, 10, 0.22) 0px 3px 9px',
            border: '1px solid rgb(221, 221, 221)',
            position: 'sticky',
            top: '100px',
          }}
        >
          <div className="border-b border-outline">
            <div className="flex items-center mb-4">
              <img
                src="/images/allimg/rooms/4.png"
                alt="Accommodation"
                className="w-16 h-16 rounded-lg object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold text-sm">Chic 1 BHK</h3>
                <p className="text-sm text-gray-500">In Downtown Dubai Near To Metro Station</p>
                <div className="text-sm text-gray-700 flex items-center gap-2">
                  ⭐ 4.84 (178 reviews)
                </div>
              </div>
            </div>
          </div>

          <div className="heading6 mt-4">Your total</div>
          <div className="text-sm flex justify-between py-2 font-medium text-gray-800">
            <span>{`AED  ${price} * 1 night`}</span>
            <span>{totalPrice}</span>
          </div>

          <div className="text-sm flex justify-between py-2 font-semibold text-gray-900 border-t border-outline">
            <span>Total </span>
            <span>{totalPrice}</span>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
