import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CartItem } from "../interfaces/CartStore";
import { observer } from "mobx-react";

const CartDisplay = observer(() => {
  const [clientcart, setClientCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedcart = localStorage.getItem("cartItems");
    setClientCart(storedcart ? JSON.parse(storedcart) : []);
  }, []);

  const subtotal = clientcart.reduce(
    (total, item) => total + Number(item.itemPrice) * Number(item.quantity),
    0
  );
  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <div>
      {clientcart.map((item, index) => (
        <div key={index} className="flex items-center pt-6">
          <Image
            src={item.itemImage}
            alt="omocat"
            width={0}
            height={0}
            sizes="100vw"
            className="rounded"
            style={{
              width: "10%",
              height: "10%",
            }}
          />
          <div className="ml-4 text-sm flex-grow">
            <h2>{item.itemName}</h2>
            <div className="flex justify-between">
              <p>Quantity: {item.quantity}</p>
              <p>
                ${(Number(item.itemPrice) * Number(item.quantity)).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex py-6">
        <input
          className="border rounded p-2 text-sm flex-grow"
          placeholder="Discount code or gift card"
        />
        <button className="bg-gray-300 text-gray-600 p-2 rounded ml-2">
          Apply
        </button>
      </div>
      <div className="flex justify-between py-6">
        <div>
          <p className="text-sm">Subtotal</p>
          <p className="text-sm">Shipping</p>
          <p className="font-bold">Total</p>
        </div>
        <div className="text-right">
          <p className="font-bold">${subtotal.toFixed(2)}</p>
          <p>${shipping.toFixed(2)}</p>
          <p>USD ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
});

export default CartDisplay;
