import { CameraIcon, VideoCameraIcon } from "@heroicons/react/outline";
import React from "react";

const CreatePostPartTwo = () => {
  return (
    <div className="flex p-3 items-center border-b-8 justify-center">
      <div className="flex items-center flex-grow justify-center  space-x-2 p-2">
        <VideoCameraIcon className="h-7 text-red-600" />
        <p className="font-bold underline underline-offset-2">Live</p>
      </div>
      <div className="flex items-center flex-grow justify-center  space-x-2 p-2 border-r-2 border-l-2">
        <CameraIcon className="h-7 text-green-500" />
        <p className="font-bold underline underline-offset-2">Upload Photo</p>
      </div>
      <div className="flex items-center flex-grow justify-center  space-x-2 p-2">
        <VideoCameraIcon className="h-7 text-purple-600" />
        <p className="font-bold underline underline-offset-2">Room</p>
      </div>
    </div>
  );
};

export default CreatePostPartTwo;
