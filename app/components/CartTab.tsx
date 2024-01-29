"use client";
import { ShoppingCart, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import CartStore from "../interfaces/CartStore";
import { CartItem } from "../interfaces/CartStore";
import { observer } from "mobx-react";
import Link from "next/link";

const CartTab = observer(() => {
  const [clientcart, setClientCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedcart = localStorage.getItem("cartItems");
    setClientCart(storedcart ? JSON.parse(storedcart) : []);
  }, []);

  const refreshCart = () => {
    setClientCart(JSON.parse(localStorage.getItem("cartItems") || "[]"));
  };

  const [isTabVisible, setTabVisible] = useState(false);
  const tabRef = useRef(null);

  const handleIconClick = () => {
    setTabVisible(!isTabVisible);
    refreshCart();
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
          {clientcart.length === 0 ? (
            <p>Your cart is currently empty.</p>
          ) : (
            <>
              {clientcart.map((item, index) => (
                <div key={index} className="flex items-center w-full">
                  <Image
                    src={item.itemImage}
                    alt="omocat"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "20%",
                      height: "20%",
                    }}
                  />
                  <div className="ml-4 text-center w-full">
                    <p className="p-2 text-sm">{item.itemName}</p>
                    <p className="p-2 text-sm">$ {item.itemPrice}</p>
                    <p className="p-2">Quantity: {item.quantity}</p>
                    <button
                      onClick={() => {
                        CartStore.removeFromCart(item.itemName);
                        refreshCart();
                      }}
                      className="px-4 text-sm underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div>
                <p className="text-xs p-2">SUBTOTAL </p>
                <p className="text-xl p-2">
                  $
                  {clientcart
                    .reduce(
                      (total, item) =>
                        total + Number(item.itemPrice) * Number(item.quantity),
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
              <div className="p-4">
                <Link href="/checkout">
                  <button className="px-8 py-4 bg-black text-white text-sm">
                    CHECK OUT
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
});

export default CartTab;
