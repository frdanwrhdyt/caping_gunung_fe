import React from "react";
import Edit from "./Actions/Edit";
import Delete from "./Actions/Delete";

function Actions({ data, content }) {
  return (
    <div className="flex space-x-2 justify-center">
      <Edit data={data} content={content} />
      <Delete />
    </div>
  );
}

export default function Table() {
  const data = [
    {
      id: 0,
      name: "Coffee Corner",
    },
    {
      id: 1,
      name: "Dapur",
    },
    {
      id: 2,
      name: "Waiters",
    },
  ];
  return (
    <div className="h-full bg-white rounded-lg shadow-md p-5">
      <table className="divide-y w-full">
        <thead className="bg-transparent">
          <tr className="text-center">
            <th className="py-2 text-xs text-gray-500">No</th>
            <th className="py-2 text-xs text-gray-500">Nama</th>
            <th className="py-2 text-xs text-gray-500">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.map((d, i) => (
            <tr key={i} className="whitespace-nowrap text-center">
              <td className="text-xs py-2">{d.id + 1}</td>
              <td className="text-xs py-2">{d.name}</td>
              <td className="text-xs py-2">
                <Actions data={d} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
