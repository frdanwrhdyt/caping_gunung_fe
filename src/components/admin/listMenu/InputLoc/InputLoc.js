import React from "react";
import Header from "./Header";
import Table from "../Action/Table";

export default function InputLoc() {
  const data = [{ id: 0, Nama: "K-1" }];

  return (
    <div className="flex flex-col w-full h-full space-y-5 ">
      <Header />
      <div className="w-full h-full bg-white rounded-lg shadow-md p-5">
        <Table data={data} />
      </div>
    </div>
  );
}
