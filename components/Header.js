import React from "react";
import Image from "next/image";
import { BeakerIcon, ChatIcon, SearchIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="flex bg-white p-2 sticky top-0 z-50 shadow-md items-center justify-between">
      <Image src="/f_logo.png" width={120} height={35} layout="fixed" />
      <div className="flex items-center space-x-3">
        <div className="w-10 p-2 rounded-full bg-gray-300">
          <SearchIcon className="h-7" />
        </div>
        <div className="w-10 p-2 rounded-full bg-gray-300">
          <ChatIcon className="h-7" />
        </div>
      </div>
    </div>
  );
};

export default Header;
