import React from "react";
import Input from "../../../../constants/Input";

export default function Header() {
  return (
    <div className="h-fit bg-white rounded-lg shadow-md p-5">
      <div className="font-medium">Tambah Devisi</div>
      <Input name={"Devisi"} placeholder={"Devisi"} type={"text"} isRequired />
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
  );
}
