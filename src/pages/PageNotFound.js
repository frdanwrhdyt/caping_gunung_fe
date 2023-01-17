import React from "react";
import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

export default function PageNotFound() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <TbError404 size={400} />
      <div className="text-5xl font-semibold">Page Not Found</div>
      <Link
        to={"/"}
        className="text-green font-bold hover:text-white rounded-xl m-5 w-1/2 h-10 justify-center flex items-center border border-lightGreen hover:border-none hover:bg-green duration-300"
      >
        GO HOME
      </Link>
    </div>
  );
}
