import React from "react";

import TotalIncome from "./TotalIncome";
import Chart from "./Chart";
import Summary from "./Summary/Summary";
import TableOrder from "./TableOrder";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-fit w-full space-y-5">
      <div className="h-fit w-full flex justify-between space-x-5 pt-5">
        <div className="w-6/12 h-full flex flex-col space-y-5 overflow-visible ">
          <TotalIncome />
          <Chart />
        </div>
        <Summary />
      </div>
      <TableOrder />
    </div>
  );
}
