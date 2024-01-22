import React from "react";
import Image from "next/image";

interface ItemCardProps {
  itemImage: string;
  itemName: string;
  itemPrice: string;
}

const ItemCard = ({ itemImage, itemName, itemPrice }: ItemCardProps) => {
  return (
    <div className="pl-10 w-[250px]">
      <Image
        src={itemImage}
        alt="itemImage"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
        }}
      />

      <p className="">{itemName}</p>
      <p>$ {itemPrice}</p>
    </div>
  );
};

export default ItemCard;
