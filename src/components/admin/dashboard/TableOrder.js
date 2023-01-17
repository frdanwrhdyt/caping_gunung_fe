import React from "react";
import Actions from "./Actions/Actions";
import SeparatedNumber from "../../../constants/separatedNumber";

const data = [
  {
    id: 0,
    name: "Farid",
    createdAt: "10:12 12-09-2022",
    location: "K-1",
    bill: 400000,
    paid: 1,
    order: [
      {
        id: 0,
        name: "Mie Ayam",
        amount: 1,
        res: "kitchen",
      },
      {
        id: 1,
        name: "Es Teh",
        amount: 1,
        res: "kitchen",
      },
      {
        id: 2,
        name: "Machiato",
        amount: 1,
        res: "cc",
      },
    ],
    status: {
      kitchen: 1,
      cc: 1,
    },
  },
  {
    id: 1,
    name: "Anwar",
    createdAt: "12:15 12-09-2022",
    location: "K-1",
    paid: 0,
    bill: 40000,
    order: [
      {
        id: 0,
        name: "Mie Ayam",
        amount: 1,
        res: "kitchen",
      },
      {
        id: 1,
        name: "Es Teh",
        amount: 1,
        res: "kitchen",
      },
      {
        id: 2,
        name: "Machiato",
        amount: 1,
        res: "cc",
      },
      {
        id: 3,
        name: "Robusta",
        amount: 10,
        res: "cc",
      },
    ],
    status: {
      kitchen: 1,
      cc: 0,
    },
  },
];

export default function TableOrder() {
  return (
    <div className="bg-white w-full h-fit rounded-lg shadow-md p-5">
      <div>Order List</div>
      <div className="flex flex-col p-3">
        <div className="w-full">
          <table className="divide-y w-full">
            <thead className="bg-transparent">
              <tr className="text-center">
                <th className=" py-2 text-xs text-gray-500">No</th>
                <th className=" py-2 text-xs text-gray-500">Waktu</th>
                <th className=" py-2 text-xs text-gray-500">Name</th>
                <th className=" py-2 text-xs text-gray-500">Lokasi</th>
                <th className=" py-2 text-xs text-gray-500">Tagihan</th>
                <th className=" py-2 text-xs text-gray-500">Status</th>
                <th className=" py-2 text-xs text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody className=" divide-y ">
              {data.map((d, i) => (
                <tr key={i} className="whitespace-nowrap text-center">
                  <td className="text-xs py-2">{d.id + 1}</td>
                  <td className="text-xs py-2">{d.createdAt}</td>
                  <td className="text-xs py-2">{d.name}</td>
                  <td className="text-xs py-2">{d.location}</td>
                  <td className="text-xs py-2">{SeparatedNumber(d.bill)}</td>
                  <td className="text-xs py-2">
                    {d.paid ? "Terbayar" : "Belum Bayar"}
                  </td>
                  <td className="text-xs py-2">
                    <Actions data={d} keys={i} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
