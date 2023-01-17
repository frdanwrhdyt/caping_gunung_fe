import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Dapur", "Coffee Corner"],
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ["rgba(15, 61, 62, 1)", "rgba(239, 211, 69, 1)"],
      borderColor: ["rgba(15, 61, 62, 1)", "rgba(239, 211, 69, 1)"],
      borderWidth: 1,
      hoverOffset: 20,
      offset: 10,
    },
  ],
};
export const options = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  plugins: {
    legend: {
      display: false,
    },
    outlabels: {
      display: false,
    },
  },
};
export default function Chart() {
  return (
    <div className="p-5 h-96 text-center">
      <Doughnut data={data} options={options} />
      <div>Performasi Defisi</div>
    </div>
  );
}
