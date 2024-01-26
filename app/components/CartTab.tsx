import { ShoppingCart, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import ItemData from "../data/collections/omori/items.json";
import Image from "next/image";
import { title } from "process";
import CartStore from "../interfaces/CartStore";
import { observer } from "mobx-react";

const CartTab = observer(() => {
  const [isTabVisible, setTabVisible] = useState(false);
  const tabRef = useRef(null);

  const handleIconClick = () => {
    setTabVisible(!isTabVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        tabRef.current &&
        !(tabRef.current as HTMLElement).contains(event.target)
      ) {
        setTabVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-1/2 flex justify-center">
      <div onClick={handleIconClick} className="hover:opacity-50">
        <ShoppingCart style={{ color: "black" }} />
      </div>

      <div
        ref={tabRef}
        className={`your-tab-styles bg-white border border-black p-4 fixed top-0 right-0 w-[750px] h-screen z-20 transform transition-transform duration-500 ease-in-out ${
          isTabVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center pb-8">
          <p className="text-black">SHOPPING CART</p>
          <button onClick={() => setTabVisible(false)} className="">
            <X style={{ color: "black" }} />
          </button>
        </div>
        <div className="text-center text-black w-full">
          {CartStore.cartItems.length === 0 ? (
            <p>Your cart is currently empty.</p>
          ) : (
            CartStore.cartItems.map((item, index) => (
              <div key={index} className="flex items-center w-full">
                <Image
                  src={item.itemImage}
                  alt="omocat"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "10%",
                    height: "10%",
                  }}
                />
                <div className="ml-4 text-center w-full">
                  <p>{item.itemName}</p>
                  <p>{item.itemPrice}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
});

export default CartTab;
