import React from "react";
import Header from "./Header";
import TableOfOrder from "./TableOfOrder";
export default function Cashier() {
  return (
    <div className="w-full h-full">
      <div className="h-fit">
        <Header />
      </div>
      <div className="flex space-x-5 h-full p-3">
        <div className="w-full h-full">
          <TableOfOrder />
        </div>
      </div>
    </div>
  );
}
