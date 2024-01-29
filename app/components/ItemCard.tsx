// components/ItemCard.tsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ItemCardProps {
  itemUrl: string;
  itemImages: string[];
  itemName: string;
  itemPrice: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  itemUrl,
  itemImages,
  itemName,
  itemPrice,
}: ItemCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={itemUrl} passHref>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: "relative" }}
      >
        <Image
          src={
            isHovered && itemImages.length > 1 ? itemImages[1] : itemImages[0]
          }
          alt={itemName}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
          }}
        />
        <h2>{itemName}</h2>
        <p>$ {itemPrice}</p>
      </div>
    </Link>
  );
};

export default ItemCard;
