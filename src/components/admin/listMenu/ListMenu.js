import React from "react";
import ListMenuContent from "./InputMenu/ListMenuContent";
import InputLoc from "./InputLoc/InputLoc";

export default function ListMenu() {
  return (
    <div className="pt-5 h-full w-full flex flex-col space-y-3">
      <div className="hidden w-full h-[200px] bg-white rounded-lg shadow-md items-center justify-center">
        <div className="text-3xl text-gray-500 hover:text-gray-700 duration-300">
          Coming Soon Tax Function
        </div>
      </div>
      <div className="h-full w-full flex space-x-5">
        <ListMenuContent />
        <InputLoc />
      </div>
    </div>
  );
}
