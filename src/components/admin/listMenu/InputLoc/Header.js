import React from "react";
import Input from "../../../../constants/Input";

export default function Header() {
  return (
    <div className="w-full h-fit bg-white rounded-lg shadow-md p-5">
      <div>Tambah Tempat</div>
      <div className="flex flex-col ">
        <div className="flex space-x-3 items-center">
          <div className="w-full">
            <Input placeholder={"Nama"} isRequired />
          </div>
        </div>
        <button
          type="button"
          className={`
            inline-flex  w-full justify-center rounded-md border 
            border-transparent bg-blue-100 px-4 py-2 text-sm 
            font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 duration-300`}
        >
          Tambah
        </button>
      </div>
    </div>
  );
}
