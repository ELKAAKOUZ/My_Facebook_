import Image from "next/image";
import React from "react";

const CreatePost = () => {
  return (
    <div className="p-2 flex items-center  space-x-3 shadow-sm">
      <Image
        className="rounded-full"
        src="/my.jpeg"
        width={50}
        height={50}
        layout="fixed"
      />

      <input
        className="outline-none placeholder:font-bold placeholder:text-black"
        type="text"
        placeholder="What are you doing now ? "
      />
    </div>
  );
};

export default CreatePost;
