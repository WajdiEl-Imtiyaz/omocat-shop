import React, { useState } from "react";
import ItemData from "../data/collections/omori/items.json";
import Image from "next/image";

const ImageChanger = () => {
  const defaultImage = ItemData[0]?.images[0] || ""; // Set a default image if the first item or its image is undefined
  const [selectedImage, setSelectedImage] = useState<string>(defaultImage);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  // Replace 'yourId' with the actual value you're looking for
  const item = ItemData.find((item) => item.id === "yourId");

  if (!item) {
    // Handle the case where the item is not found
    return <div>Item not found</div>;
  }

  return (
    <div className="flex items-center justify-center pr-10 flex-col">
      {selectedImage && (
        <Image
          src={selectedImage}
          alt={item?.images[0]}
          width={0} // Set your desired width
          height={0} // Set your desired height
          sizes="100vw"
          style={{
            width: "90%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
      <div className="grid grid-cols-4 bg-white w-[650px]">
        {Array.isArray(item?.images) &&
          item?.images.map((image, index) => (
            <div
              key={index}
              className="p-2"
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image}
                alt={item?.title}
                width={0} // Set your desired width
                height={0} // Set your desired height
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer", // Add cursor style for indication
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageChanger;
