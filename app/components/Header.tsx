import React from "react";
import Image from "next/image";
import { AlignJustify, Search, ShoppingCart, UserRound } from "lucide-react";

const Header = () => {
  return (
    <div>
      <div className=" bg-black ">
        <p className="font-sans text-white text-center py-3 text-sm tracking-wider">
          Due to the holiday season and recent releases, orders may take up to
          3-4 weeks to ship.
        </p>
      </div>
      <div className="bg-white flex flex-row h-24 sticky top-0 z-10">
        <div className="basis-1/3 flex justify-start items-center p-2 lg:hidden">
          <AlignJustify />
        </div>
        <div className="basis-1/3 flex justify-start items-center p-2 sm:flex"></div>
        <div className="basis-1/3 flex justify-center items-center">
          <a href="/">
            <Image
              src="/img/omocat_logo_original_400_53040177-83e4-4a16-bdd6-e5c2f4a7eb5a.png"
              alt="omocat"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "50%",
                height: "50%",
              }}
            />
          </a>
        </div>

        <div className=" basis-1/3 flex flex-row items-center">
          <div className=" basis-1/2 flex justify-center">
            <Search />
          </div>
          <div className="hidden sm:flex">
            <UserRound />
          </div>
          <div className="basis-1/2 flex justify-center">
            <ShoppingCart />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-row justify-between items-center sticky top-20 z-10 px-96 bg-white text-black">
        <div className="flex justify-center items-center p-4 relative group w-[200px]">
          <p className="text-sm">ALL</p>
        </div>
        <div className="flex justify-center items-center p-4 relative group w-[200px]">
          <p className="text-sm">COLLECTIONS</p>
          <div className="hidden absolute bg-white top-full p-4 space-y-2 group-hover:block w-[200px] transition">
            <a href="#" className="text-sm block ">
              HOLOLIVE GAMERS
            </a>
            <a href="#" className="text-sm block ">
              HOLOLIVE MEET
            </a>
            <a href="#" className="text-sm block ">
              HOLOLIVE EN
            </a>
            <a href="/OmoriPage1" className="text-sm block ">
              OMORI
            </a>
            <a href="#" className="text-sm block ">
              BANG DREAM!
            </a>
            <a href="#" className="text-sm block ">
              HATSUNE MIKU
            </a>
            <a href="#" className="text-sm block ">
              ORIGINAL
            </a>
            <a href="#" className="text-sm block ">
              Pokémon© Center
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 relative group w-[200px]">
          <p className="text-sm">APPAREL</p>
          <div className="hidden absolute bg-white top-full p-4 space-y-2 group-hover:block w-[200px] ">
            <p className="text-sm">SHIRTS</p>
            <p className="text-sm">SWEATERS</p>
            <p className="text-sm">JACKET & HOODIES</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 relative group w-[200px]">
          <p className="text-sm">ACCESSORIES</p>
          <div className="hidden absolute bg-white top-full p-4 space-y-2 group-hover:block w-[200px]">
            <p className="text-sm">HATS</p>
            <p className="text-sm">PLUSHIES</p>
            <p className="text-sm">KEYCHAINS & STANDS</p>
            <p className="text-sm">PINS</p>
            <p className="text-sm">STICKERS</p>
            <p className="text-sm">SKATE DECKS</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 relative group w-[200px]">
          <p className="text-sm">PRINTED MATTER</p>
          <div className="hidden absolute bg-white top-full p-4 space-y-2 group-hover:block w-[200px]">
            <p className="text-sm">BOOKS & BOOKLETS</p>
            <p className="text-sm">POSTERS & PRINTS</p>
          </div>
        </div>
        <div className="flex justify-center items-center p-4 relative group w-[200px]">
          <p className="text-sm">SHOWCASE</p>
          <div className="hidden absolute bg-white top-full p-4 space-y-2 group-hover:block w-[200px]">
            <p className="text-sm">EVENTS</p>
            <p className="text-sm">RETAILERS</p>
          </div>
        </div>
        <div className="flex justify-center items-center p-4 relative group w-[200px]">
          <p className="text-sm">INFO</p>
          <div className="hidden absolute bg-white top-full p-4 space-y-2 group-hover:block w-[200px]">
            <p className="text-sm">ABOUT OMOCAT</p>
            <p className="text-sm">CONTACT US</p>
            <p className="text-sm">FAQ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
