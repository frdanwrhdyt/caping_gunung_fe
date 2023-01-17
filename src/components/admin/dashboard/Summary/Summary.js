import React from "react";
import Chart from "./Chart";

export default function Summary() {
  return (
    <div className="bg-white w-full h-full rounded-lg p-5 shadow-md">
      <div className="flex flex-col w-full h-full">
        <div className="text-lg font-medium">Rangkuman</div>
        <div className="flex space-x-10 items-center w-full h-full  ">
          <Chart />
          <div className="flex flex-col space-y-2 justify-center">
            <div className="w-fit">
              <div>Pendapatan Hari Ini</div>
              <div>Rp3.000.000</div>
            </div>
            <div>
              <div>Pengeluaran Hari Ini</div>
              <div>Rp100.000</div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 justify-center">
            <div className="w-fit">
              <div>Pendapatan Bulan Ini</div>
              <div>Rp30.000.000</div>
            </div>
            <div>
              <div>Pengeluaran Bulan Ini</div>
              <div>Rp10.000.000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
