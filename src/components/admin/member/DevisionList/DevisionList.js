import React from "react";
import Header from "./Header";
import Table from "./Table";

export default function DevisionList() {
  return (
    <div className="flex flex-col space-y-3 h-full w-4/12">
      <Header />
      <Table />
    </div>
  );
}
