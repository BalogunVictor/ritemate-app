import React, { MouseEventHandler, useEffect, useState } from 'react';
import Nav from '@ui/Nav';
import { HandlePayment } from '@ui/Utils/PaystackInterface';
import Script from 'next/script';
import { Layout } from 'src/layouts';

import { Button } from '../components/buttons';

const Checkout = () => {
  const [info, setInfo] = useState<any>({});
  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      const userData = JSON.parse(storedData);
      setInfo(userData);
    }
  }, []);

  console.log(info);

  const handlePaymentClick: MouseEventHandler<HTMLButtonElement> = () => {
    // Call the HandlePayment function with the desired parameters
    HandlePayment(info.email, info.amount);
  };
  return (
    <Layout>
      <Script src="https://js.paystack.co/v1/inline.js" />
      <Nav invert />
      <div className="container mx-[10%]">
        <h1 className="py-8 text-4xl font-medium">You are almost done!</h1>
        <p className="text-lg font-medium">Review & Checkout</p>
        <div className="gap flex gap-10 py-10">
          <div className="h-[503px] w-[514px] rounded-lg bg-white p-6 shadow-md">
            <div className="p-5">
              <h1 className="pb-10 text-lg">Product</h1>
              <p className="text-xl">{info.accountType} Registration for</p>
              <p className="text-xl">Rotary Club of Gbagada, District 9110</p>
              <div className="flex gap-4 pt-10">
                <div className="h-[252px} w-[447px] rounded-md border border-solid border-black bg-yellow-100 p-6">
                  <p className="text-lg">Paying for</p>
                  <div className="pt-5">
                    <li>
                      <span>{info.fullName}</span>
                    </li>
                  </div>
                </div>
                <div className="flex h-[57px] items-center justify-center rounded-md border border-solid border-black bg-yellow-100 p-6">
                  <p>Cancel/Modify</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[461px] w-[419px] rounded-lg bg-gradient-to-b from-blue-900 via-white to-white shadow-md">
            <div className="flex flex-col items-center gap-5 px-10">
              <h1 className="py-8 text-2xl font-medium">Order Summary</h1>
              <div className="w-[80%]">
                <div className="flex justify-between">
                  <p>Order ID</p>
                  <p>000000</p>
                </div>
                <hr className="my-3 bg-black" />
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>₦{info.amount}.00</p>
                </div>
                <hr className="my-3 bg-black" />
                <div className="flex justify-between">
                  <p>Transaction Fee</p>
                  <p>₦0.00</p>
                </div>
                <hr className="my-3 bg-black" />
              </div>
              <p>Total</p>
              <h1 className="text-2xl font-medium">₦{info.amount}.00</h1>
              <Button onClick={handlePaymentClick} variants="tertiary">
                Pay Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
