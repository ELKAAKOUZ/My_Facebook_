import {
  BellIcon,
  HomeIcon,
  MenuAlt1Icon,
  PlayIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-evenly bg-white shadow-md sticky bottom-0 p-3 ">
      <div className="text-blue-900 p-2 border-t-2 border-blue-600">
        <HomeIcon className="w-7 h-7" />
      </div>
      <UserGroupIcon className="w-7 h-7" />
      <PlayIcon className="w-7 h-7" />
      <BellIcon className="w-7 h-7" />
      <MenuAlt1Icon className="w-7 h-7" />
    </div>
  );
};

export default Footer;
