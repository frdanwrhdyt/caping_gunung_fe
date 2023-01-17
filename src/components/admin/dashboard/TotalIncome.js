import React from "react";

export default function TotalIncome() {
  return (
    <div className="bg-white flex flex-col justify-center w-full h-[200px] rounded-lg shadow-md p-5 space-y-5 text-gray-500">
      <div className="text-center">
        <div className="text-lg font-medium">Total Pendapatan Bulan Ini</div>
        <div className="text-3xl font-bold">Rp30.000.000</div>
      </div>
      <div className="text-center">
        <div className="text-lg font-medium">Total Pendapatan Hari Ini</div>
        <div className="text-3xl font-bold">Rp3.000.000</div>
      </div>
    </div>
  );
}
