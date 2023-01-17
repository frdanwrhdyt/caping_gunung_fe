import React from "react";

import { AiFillPrinter } from "react-icons/ai";
import ViewAction from "./ViewAction";
import EditAction from "./EditAction";

const size = 16;

export default function Actions({ data, keys }) {
  return (
    <>
      <div className="flex w-full justify-center space-x-2">
        <EditAction
          data={{ Nama: data?.name, Tempat: data?.location }}
          size={size}
        />
        <ViewAction data={data} keys={keys} size={size} />
        <button className="text-lightGreen hover:text-white hover:bg-lightGreen duration-200 rounded-full p-2">
          <AiFillPrinter size={size} />
        </button>
      </div>
    </>
  );
}
