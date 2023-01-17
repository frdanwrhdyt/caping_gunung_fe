import React from "react";
import AddOrder from "../../../constants/actions/AddOrder";

export default function Cash() {
  return (
    <div className="text-green p-2 rounded-full bg-transparent hover:bg-lightGreen hover:text-white duration-300">
      <AddOrder />
    </div>
  );
}
