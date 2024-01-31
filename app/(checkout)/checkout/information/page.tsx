"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import InformationForm from "../../../components/InformationForm";
import CartDisplay from "../../../components/CartDisplay";

const checkout = () => {
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
            <p>{" > "}</p>
            <p className="font-bold">Information </p>
            <p>{" > "}</p>
            <p> Shipping </p>
            <p>{" > "}</p>
            <p> Payment </p>
          </div>

          <InformationForm />
        </div>
      </div>
      <div className="flex basis-1/2 bg-gray-100 pl-12 pt-16 w-full pr-96">
        <CartDisplay />
      </div>
    </div>
  );
};

export default checkout;
