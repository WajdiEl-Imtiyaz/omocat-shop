"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import SearchTab from "./SearchTab";
import AccountTab from "./AccountTab";
import CartTab from "./CartTab";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 ">
      <div className="flex justify-between items-center bg-white h-24">
        <div></div>{" "}
        {/* This empty div is needed to balance the space distribution */}
        <div className="pl-64 flex justify-center items-center">
          <Link href="/">
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
          </Link>
        </div>
        <div className=" flex flex-row items-center justify justify-between ">
          <div className="flex justify-center p-6">
            <SearchTab />
          </div>
          <div className="flex justify-center p-6 ">
            <AccountTab />
          </div>
          <div className="flex justify-center p-6">
            <CartTab />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-row justify-between items-center sticky top-20 z-10 px-96 bg-white text-black">
        <div className="flex justify-center items-center p-4 relative group w-[200px]">
          <p className="text-sm group-hover:opacity-50">ALL</p>
        </div>
        <div className="flex justify-center items-center p-4 relative group w-[200px]">
          <p className="text-sm  flex items-center group-hover:opacity-50">
            COLLECTIONS <ChevronDown />
          </p>
          <div className="hidden absolute bg-white top-full p-4 space-y-2 group-hover:block w-[200px] transition">
            <Link
              href="/collections/omori"
              className="text-sm block py-1  hover:opacity-50"
            >
              OMORI
            </Link>
            <Link href="#" className="text-sm block py-1 ">
              HOLOLIVE GAMERS
            </Link>
            <Link href="#" className="text-sm block py-1 ">
              HOLOLIVE MEET
            </Link>
            <Link href="#" className="text-sm block py-1  ">
              HOLOLIVE EN
            </Link>
            <Link href="#" className="text-sm block py-1  ">
              BANG DREAM!
            </Link>
            <Link href="#" className="text-sm block py-1  ">
              HATSUNE MIKU
            </Link>
            <Link href="#" className="text-sm block py-1  ">
              ORIGINAL
            </Link>
            <Link
              href="https://www.pokemoncenter.com/omocat"
              className="text-sm block py-1 "
            >
              Pokémon© Center
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 relative group w-[200px]">
          <p className="text-sm flex items-center group-hover:opacity-50">
            APPAREL <ChevronDown />
          </p>
          <div className="hidden absolute bg-white top-full p-4 space-y-2 group-hover:block w-[200px] ">
            <p className="text-sm block py-1 ">SHIRTS</p>
            <p className="text-sm block py-1 ">SWEATERS</p>
            <p className="text-sm block py-1 ">JACKET & HOODIES</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 relative group w-[200px]">
          <p className="text-sm flex items-center group-hover:opacity-50">
            ACCESSORIES <ChevronDown />
          </p>
          <div className="hidden absolute bg-white top-full p-4 space-y-2 group-hover:block w-[200px]">
            <p className="text-sm block py-1 ">HATS</p>
            <p className="text-sm block py-1 ">PLUSHIES</p>
            <p className="text-sm block py-1 ">KEYCHAINS & STANDS</p>
            <p className="text-sm block py-1 ">PINS</p>
            <p className="text-sm block py-1 ">STICKERS</p>
            <p className="text-sm block py-1 ">SKATE DECKS</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 relative group w-[250px]">
          <p className="text-sm  flex items-center group-hover:opacity-50">
            PRINTED MATTER <ChevronDown />
          </p>
          <div className="hidden absolute bg-white top-full p-4 space-y-2 group-hover:block w-[200px]">
            <p className="text-sm block py-1 ">BOOKS & BOOKLETS</p>
            <p className="text-sm block py-1 ">POSTERS & PRINTS</p>
          </div>
        </div>
        <div className="flex justify-center items-center p-4 relative group w-[200px]">
          <p className="text-sm flex items-center group-hover:opacity-50">
            SHOWCASE <ChevronDown />
          </p>
          <div className="hidden absolute bg-white top-full p-4 space-y-2 group-hover:block w-[200px]">
            <p className="text-sm block py-1 ">EVENTS</p>
            <p className="text-sm block py-1 ">RETAILERS</p>
          </div>
        </div>
        <div className="flex justify-center items-center p-4 relative group w-[200px]">
          <p className="text-sm flex items-center group-hover:opacity-50">
            INFO <ChevronDown />
          </p>
          <div className="hidden absolute bg-white top-full p-4 space-y-2 group-hover:block w-[200px]">
            <p className="text-sm block py-1 ">ABOUT OMOCAT</p>
            <p className="text-sm block py-1 ">CONTACT US</p>
            <p className="text-sm block py-1 ">FAQ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
