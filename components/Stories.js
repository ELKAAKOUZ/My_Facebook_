import React from "react";
import Story from "./Story";
const usersimages = [
  {
    id: "1",
    name: "Ahmed Beh Mahfoz",
    src: "/bruder.jpg",
    profile: "/ahmedprof.jpg",
  },
  {
    id: "2",
    name: "Mahfoz Awad",
    src: "/vater.jpg",
    profile: "/vaterprof.jpg",
  },
  {
    id: "3",
    name: "Tiya A Samir",
    src: "/tiya.jpeg",
    profile: "/tiyaprof.jpeg",
  },
  {
    id: "4",
    name: "Rehab Mahfoz",
    src: "/mutter.jpg",
    profile: "/rehabprof.jpg",
  },
  ,
  {
    id: "5",
    name: "Celia Mahfoz",
    src: "/celia.jpg",
    profile: "/celiaprof.JPG",
  },
  {
    id: "6",
    name: "Adham",
    src: "/adham.jpeg",
    profile: "/adhamlogo.jpeg",
  },
];

const Stories = () => {
  return (
    <div className="flex items-center p-5 space-x-3 overflow-x-scroll scrollbar-hide">
      {usersimages.map((user) => (
        <Story
          key={user.id}
          name={user.name}
          profile={user.profile}
          src={user.src}
        />
      ))}
    </div>
  );
};

export default Stories;
