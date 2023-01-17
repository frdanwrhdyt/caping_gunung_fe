import React from "react";
import { MdDelete } from "react-icons/md";
import Edit from "./Edit";

export default function Action({ data, content }) {
  return (
    <div className="flex space-x-3 justify-center">
      <Edit data={data} content={content} />
      <div className="text-red-500 hover:text-white hover:bg-red-500 rounded-full p-1 focus:ring-red-500 duration-300">
        <MdDelete />
      </div>
    </div>
  );
}
