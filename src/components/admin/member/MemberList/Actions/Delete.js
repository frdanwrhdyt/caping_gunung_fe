import React from "react";
import { MdDelete } from "react-icons/md";

export default function Delete() {
  return (
    <div className="text-red-500 hover:text-white hover:bg-red-500 rounded-full p-1 focus:ring-red-500 duration-300">
      <MdDelete />
    </div>
  );
}
