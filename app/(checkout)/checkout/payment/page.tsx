"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CartDisplay from "../../../components/CartDisplay";
import { useSearchParams, useRouter } from "next/navigation";
import PaypalButton from "../../../components/PaypalButton";
import { CartItem } from "../../../interfaces/CartStore";

const Payment = () => {
  const [clientcart, setClientCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedcart = localStorage.getItem("cartItems");
    setClientCart(storedcart ? JSON.parse(storedcart) : []);
  }, []);

  const subtotal = clientcart.reduce(
    (total, item) => total + Number(item.itemPrice) * Number(item.quantity),
    0
  );

  const handlePaypalSuccess = (order: any) => {
    // Handle successful PayPal payment
    console.log("PayPal payment success:", order);
  };

  const shipping = 15;
  const totalAmount = subtotal + shipping;

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const company = searchParams.get("company");
  const address = searchParams.get("address");
  const apartment = searchParams.get("apartment");
  const postcode = searchParams.get("postcode");
  const city = searchParams.get("city");
  const state = searchParams.get("state");
  const country = searchParams.get("country");

  return (
    <div className="flex flex-row bg-white text-black h-screen">
      <div className="flex basis-1/2  w-full">
        <div className="flex flex-col item pl-80 w-full pr-10 pt-16">
          <div className="flex">
            <Link href="/">
              <Image
                src="/img/omocat_logo_original_400_53040177-83e4-4a16-bdd6-e5c2f4a7eb5a.png"
                alt="omocat"
                width={60}
                height={40}
                sizes="100vw"
              />
            </Link>
          </div>
          <div className="flex flex-row text-xs py-4">
            <p> Cart </p>
            <p>{"  >  "}</p>
            <p>Information </p>
            <p>{"  >  "}</p>
            <p> Shipping </p>
            <p>{"  >  "}</p>
            <p className="font-bold"> Payment </p>
          </div>
          <div>
            <div className="p-4 border-gray-300 rounded border text-sm">
              <div className="flex border-b border-gray-300 text-gray-400 p-2">
                <p>Contact</p>
                <p className="text-black pl-6">{email}</p>
              </div>
              <div className="flex border-b border-gray-300 text-gray-400 p-2">
                <p>Ship to</p>
                <p className="text-black pl-7">
                  {company} {address} {apartment} {postcode} {city} {state}{" "}
                  {country}{" "}
                </p>
              </div>
              <div className="flex text-gray-400 p-2">
                <p>
                  Shipping <br />
                  method
                </p>
                <p className="text-black pl-5">International · $15.00</p>
              </div>
            </div>
          </div>
          <div className="  py-8">
            <p className="font-semibold">Payment</p>
            <p className="text-gray-400 text-sm">
              All transactions are secure and encrypted
            </p>
          </div>
          <div className="">
            <PaypalButton
              onSuccess={handlePaypalSuccess}
              totalAmount={totalAmount}
            />
          </div>
        </div>
      </div>
      <div className="flex basis-1/2 bg-gray-100 pl-12 pt-16 w-full pr-96">
        <CartDisplay />
      </div>
    </div>
  );
};

export default Payment;
