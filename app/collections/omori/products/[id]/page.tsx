"use client";

import React, { useEffect, useState } from "react";
import Quantity from "../../../../components/Quantity"; // Assuming your Quantity component is named Page
import ItemData from "../../../../data/collections/omori/items.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin, MailOpen } from "lucide-react";
import { CartItem } from "@/app/interfaces/CartStore";

const OmoriItem = ({ params: { id } }: { params: { id: string } }) => {
  const item = ItemData.find((item) => item.id.toString() === id);

  if (!item) {
    notFound();
  }

  const firstImage = item?.images[0];

  return (
    <div className="bg-white px-32 flex">
      <div className="flex items-center  justify-center pr-10 flex-col">
        <Image
          src={firstImage}
          alt={item?.images[0]}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "90%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div className="grid grid-cols-4 bg-white w-[650px]">
          {Array.isArray(item?.images) &&
            item?.images.map((image, index) => (
              <div key={index} className="p-2">
                <Image
                  src={image}
                  alt={item?.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col h-full bg-gray-100 basis-1/2 text-black p-10 w-auto ">
          <p className="text-lg ">{item?.title}</p>
          <p className="text-2xl py-4">$ {item?.price}</p>
          <p className="text-xs py-4">Quantity</p>
          <Quantity
            itemId={{
              itemName: item?.id,
              itemPrice: item?.price,
              itemImage: item?.images[0],
              quantity: 1, // Add the quantity property with a default value of 1
            }}
          />
          <div className="py-4"></div>
          <div className="flex items-center py-6 border-black border-t border-b">
            <MapPin />
            <p className="text-sm ml-2">
              Free shipping to U.S. for all orders $150 or more
            </p>
          </div>
          <div className="flex items-center py-6 border-black border-b~">
            <MailOpen />
            <p className="flex items-center ml-2 text-sm">
              【日本のお客様へ】ローマ字でご住所をご記入いただきますようお願い申し上げます。ご住所に日本語の文字が含まれている場合、正確な配送が難しい可能性がございますので、ご理解いただけますと幸いです。
            </p>
          </div>
        </div>
        <div className="text-black text-xs p-6">
          {item?.description ? (
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
          ) : (
            <div>Default Text or Empty State</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OmoriItem;
