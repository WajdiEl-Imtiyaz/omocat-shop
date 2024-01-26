import React, { useState } from "react";
import { observer } from "mobx-react";
import CartStore, { CartItem } from "../interfaces/CartStore";

const Quantity = observer(({ itemId }: { itemId: CartItem }) => {
  const [value, setValue] = useState(1);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-start py-4">
        <button onClick={decrement} className="px-4">
          -
        </button>
        <p className="px-4">{value}</p>
        <button onClick={increment} className="px-4">
          +
        </button>
      </div>
      <button
        className="bg-black w-full py-3 text-sm text-white text-center hover:opacity-50"
        onClick={() => CartStore.addtoCart(itemId)}
      >
        ADD TO CART
      </button>
    </div>
  );
});

export default Quantity;
