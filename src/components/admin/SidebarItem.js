import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarItem({ title, icon, link }) {
  const active = useLocation().pathname === link;
  const isActive = active
    ? "bg-green text-white duration-300"
    : "text-green hover:text-white hover:bg-lightGreen duration-300";
  return (
    <Link
      className={`rounded-3xl h-16 w-16 mx-auto flex justify-center items-center text-md font-medium   ${isActive}`}
      to={link}
    >
      {/* <div
        className={`text-green hover:text-white {active ? "text-white" : "text-green"}`}
      > */}
      {icon}
      {/* </div> */}
      {/* <span>{title}</span> */}
    </Link>
  );
}
