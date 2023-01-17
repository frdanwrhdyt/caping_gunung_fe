import React from "react";
import Header from "./Header";
import Table from "./Table";

export default function MemberList() {
  return (
    <div className="flex flex-col space-y-3 h-full w-8/12">
      <Header />
      <Table />
    </div>
  );
}
