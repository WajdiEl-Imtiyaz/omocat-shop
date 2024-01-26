import React from "react";
import { Facebook, Twitter, InstagramIcon } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="relative inset-x-0 bottom-0">
        <div className="py-10 flex flex-col lg:flex-row bg-white text-black">
          <div className="text-center items-center lg:border-b-0 border-b-2 p-6 border-gray-200 basis-1/3">
            <p className="text-2xl p-4">INFO</p>
            <p className="text-sm p-1">About OMOCAT</p>
            <p className="text-sm p-1">Contact Us</p>
            <p className="text-sm p-1">FAQ</p>
          </div>

          <div className="text-center items-center lg:border-b-0 border-b-2 p-6 border-gray-200 basis-1/3">
            <p className="text-2xl p-4">NEWSLETTER</p>
            <div></div>
            <div>
              <input
                className="border-b p-3 border-black w-72"
                placeholder="email@example.com"
              />
              <div className="p-6">
                <button className="bg-black text-white text-center text-sm py-4 w-24">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          <div className="text-center items-center lg:border-b-0 basis-1/3">
            <p className="text-center items-center text-2xl p-6">SNS</p>
            <div className=" flex flex-row justify-center items-center">
              <div className="px-5">
                <a href="https://www.facebook.com/officialomocat">
                  <Facebook />
                </a>
              </div>
              <div className="px-5">
                <a href="https://twitter.com/_omocat">
                  <Twitter />
                </a>
              </div>
              <div className="px-5">
                <a href="https://www.instagram.com/omocat/">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <a href="/">
          <div className="pt-32 pb-8 bg-white">
            <p className="text-center text-sm text-black">© 2024, OMOCAT</p>
          </div>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
