import React from "react";
import ProfileNav from "./ProfileNav";
import AddOrder from "../../../constants/actions/AddOrder";
export default function Header({ title }) {
  return (
    <div className="flex  z-[99] w-full h-fit justify-between  items-center">
      <div className="text-lg font-medium">{title}</div>
      <div className="flex space-x-1">
        <AddOrder />
        <ProfileNav />
      </div>
    </div>
  );
}
