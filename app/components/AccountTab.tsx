import { UserRound, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const AccountTab = () => {
  const [isTabVisible, setTabVisible] = useState(false);
  const tabRef = useRef(null);

  const handleIconClick = () => {
    setTabVisible(!isTabVisible);
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
        <UserRound style={{ color: "black" }} />
      </div>

      <div
        ref={tabRef}
        className={`your-tab-styles bg-white border border-black p-4 fixed top-0 right-0 w-[750px] h-screen z-20 transform transition-transform duration-500 ease-in-out ${
          isTabVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center pb-8">
          <p className="text-black">Login</p>
          <button onClick={() => setTabVisible(false)} className="">
            <X style={{ color: "black" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountTab;
