import React from "react";
import Image from "next/image";
import ItemCard from "../components/ItemCard";

const omoripg1 = () => {
  const ItemList = [
    {
      itemImage: "/img/omori-page/3anniprocess00.jpg",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/221028_Omocat_0042.jpg",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/mug1.jpg",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/OMORI_Scarf_Something.jpg",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/DW_acrylic_keychains_front.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/DW_acrylic_stand_front.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },

    {
      itemImage: "/img/omori-page/FA_acrylic_stand_front.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/omori_1.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/aubrey_1.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/kel_1.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/hero_1.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/basil_1.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/mari_1.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/box_1.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/omori_preorder_switch.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/ost_1.jpg",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/dw_print_1.jpg",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/fa_print_1_1100x.jpg",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },

    {
      itemImage: "/img/omori-page/OMORI_Calendar_maincopy.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/OMORI_plush_edits00.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/OMORI_plush_edits01.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/OMORI_plush_edits02.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage: "/img/omori-page/OMORI_plush_edits03.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
    {
      itemImage:
        "/img/omori-page/OMORI_plush_edits05_988fb4aa-916e-4b8b-8a73-a2ba9905a2cc.png",
      itemName: "OMORI 3rd Anniversary Print",
      itemPrice: "143.00",
    },
  ];

  return (
    <div className="grid grid-cols-6 gap-4 justify-center items-center text-center bg-white text-black p-10">
      {ItemList.map((item, index) => (
        <div key={index}>
          <ItemCard
            itemImage={item.itemImage}
            itemName={item.itemName}
            itemPrice={item.itemPrice}
          />
        </div>
      ))}
    </div>
  );
};

export default omoripg1;
