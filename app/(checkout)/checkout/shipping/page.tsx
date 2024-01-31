"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import CartDisplay from "../../../components/CartDisplay";
import { useSearchParams, useRouter } from "next/navigation";

const Shipping = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const company = searchParams.get("company");
  const address = searchParams.get("address");
  const apartment = searchParams.get("apartment");
  const postcode = searchParams.get("postcode");
  const city = searchParams.get("city");
  const state = searchParams.get("state");
  const country = searchParams.get("country");

  const handleContinue = () => {
    const queryString = new URLSearchParams({
      email: email || "",
      company: company || "",
      address: address || "",
      apartment: apartment || "",
      postcode: postcode || "",
      city: city || "",
      state: state || "",
      country: country || "",
    }).toString();

    router.push(`/checkout/payment?${queryString}`);
  };

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
            <p className="font-bold"> Shipping </p>
            <p>{"  >  "}</p>
            <p> Payment </p>
          </div>
          <div>
            <div className="p-4 border-gray-300 rounded border text-sm">
              <div className="flex border-b border-gray-300 text-gray-400 p-2">
                <p>Contact</p>
                <p className="text-black pl-6">{email}</p>
              </div>
              <div className="flex text-gray-400 p-2">
                <p>Ship to</p>
                <p className="text-black pl-7">
                  {company} {address} {apartment} {postcode} {city} {state}{" "}
                  {country}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <p className="font-semibold pb-4">Shipping method</p>
            <div className="flex justify-between border-black rounded border bg-gray-200 text-sm">
              <p className=" p-4 ">International</p>
              <p className="p-4 font-semibold">$15.00</p>
            </div>
          </div>
          <div className="flex justify-end pt-8">
            <button
              onClick={handleContinue}
              className="bg-black text-white p-4 rounded text-sm"
            >
              Continue to shipping
            </button>
          </div>
        </div>
      </div>
      <div className="flex basis-1/2 bg-gray-100 pl-12 pt-16 w-full pr-96">
        <CartDisplay />
      </div>
    </div>
  );
};

export default Shipping;
