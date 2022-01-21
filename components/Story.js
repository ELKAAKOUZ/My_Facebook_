import Image from "next/image";
import React from "react";

const Story = ({ name, src, profile }) => {
  return (
    <div className="relative w-28 transition duration-200 ease-in-out hover:scale-105  h-44 flex-none ">
      <Image
        className="absolute top-7 z-40 rounded-full"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
      />
      <Image
        className="rounded-t-2xl rounded-b-2xl filter brightness-75"
        src={src}
        layout="fill"
      />
      <p className="absolute truncate w-5/6 bottom-2 text-white font-bold text-sm">
        {name}
      </p>
    </div>
  );
};

export default Story;
