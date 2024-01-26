"use client";

import React from "react";
import ItemList from "../../data/collections/omori/items.json";
import ItemCard from "../../components/ItemCard";

const omori = () => {
  return (
    <div className="grid grid-cols-6 gap-4 justify-center items-center text-center bg-white text-black p-20">
      {ItemList.map((item, index) => (
        <div key={index}>
          <ItemCard
            itemImages={[item.images[0]]}
            itemUrl={item.url}
            itemName={item.title}
            itemPrice={item.price}
          />
        </div>
      ))}
    </div>
  );
};

export default omori;
