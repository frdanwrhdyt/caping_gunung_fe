import React from "react";
import Input from "../../../../constants/Input";
import Dropdown from "../../../../constants/Dropdown";

export default function Header() {
  const devisi = ["Coffee Corner", "Dapur", "Waiters", "Cashier"];
  return (
    <div className="h-fit w-full bg-white rounded-lg shadow-md p-5">
      <div className="font-medium">Tambah Anggota</div>
      <div className="flex space-x-3 items-center w-full">
        <div className="w-8/12">
          <Input name={"Nama"} placeholder={"Nama"} type={"text"} isRequired />
        </div>
        <div className="w-4/12">
          <Dropdown title={"Devisi"} content={devisi} />
        </div>
      </div>

      <div className="grid grid-cols-2  space-x-5">
        <Input
          name={"Password"}
          placeholder={"Password"}
          type={"password"}
          isRequired
        />
        <Input
          name={"Konfirmasi Password"}
          placeholder={"Konfirmasi Password"}
          type={"password"}
          isRequired
        />
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
  );
}
