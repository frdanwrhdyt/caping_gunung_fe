import React from "react";
import Sidebar from "./Sidebar";
import Header from "./header/Header";

export default function Admin({ title, prop }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col w-full h-screen p-3 ml-20">
        <Header title={title} />
        {prop}
      </div>
    </div>
  );
}
