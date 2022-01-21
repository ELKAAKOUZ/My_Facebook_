import {
  GlobeIcon,
  DotsHorizontalIcon,
  XIcon,
  ThumbDownIcon,
  ChatIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { ThumbUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const Post = ({ logo, name, date, image, message, like, share, comment }) => {
  return (
    <div className="p-5 text-gray-500 border-t-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 just">
          <Image
            className="rounded-full"
            src={logo}
            width={40}
            height={40}
            layout="fixed"
          />
          <div>
            <p className="font-bold">{name}</p>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-400">{date}</p>
              <GlobeIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <DotsHorizontalIcon className="text-gray-300 w-7 h-7" />
          <XIcon className="text-gray-300 w-7 h-7" />
        </div>
      </div>
      {message && <div className="p-2 pt-2 text-right">{message}</div>}
      <div className="text-center   m-4">
        <Image src={image} width={320} height={400} layout="fixed" />
      </div>
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center space-x-2">
          <ThumbUpIcon className="text-blue-600 w-5 h-6" />
          <p>{like}</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <p>{comment}</p>
            <p className="underline font-bold">Comments</p>
          </div>
          <div className="flex items-center space-x-2">
            <p>{share}</p>
            <p className="underline font-bold">Share</p>
          </div>
        </div>
      </div>
      <div className="flex border-t-2 cursor-pointer text-gray-500 p-2  border-gray-300 justify-evenly items-center space-x-2">
        <div className="flex  items-center space-x-2">
          <ThumbUpIcon className="h-7 w-7" />
          <p>Like</p>
        </div>
        <div className="flex border-r-2 border-l-2 p-2 items-center space-x-2">
          <ChatIcon className="h-7 w-7" />
          <p>Comment</p>
        </div>
        <div className="flex items-center space-x-2">
          <ShareIcon className="h-7 w-7" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
