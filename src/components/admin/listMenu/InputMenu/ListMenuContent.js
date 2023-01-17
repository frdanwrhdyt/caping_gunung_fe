import React from "react";
import HeaderMenu from "./HeaderMenu";
import Table from "../Action/Table";

export default function ListMenuContent() {
  const tabelMenu = [
    {
      id: 0,
      Nama: "Es teh",
      Harga: 10000,
      Devisi: "Dapur",
    },
    {
      id: 1,
      Nama: "Es teh",
      Harga: 20000,
      Devisi: "Dapur",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full space-y-5 ">
      <HeaderMenu />
      <div className="w-full h-full bg-white rounded-lg shadow-md p-5">
        <Table data={tabelMenu} content={1} />
      </div>
    </div>
  );
}
