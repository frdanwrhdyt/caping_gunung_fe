import React from "react";
import SeparatedNumber from "../../../../constants/separatedNumber";
import Action from "./Action";
export default function Table({ data, content }) {
  const keys = Object.keys(data[0]);
  return (
    <div className="w-full">
      <table className="divide-y w-full">
        <thead className="bg-transparent">
          <tr className="text-center">
            {keys.map((k, i) => (
              <th className="py-2 text-xs text-gray-500" key={i}>
                {k}
              </th>
            ))}
            <th className="py-2 text-xs text-gray-500">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.map((d, i) => (
            <>
              <tr className="whitespace-nowrap text-center" key={i}>
                {keys.map((k, j) => (
                  <td key={j} className="text-xs py-2">
                    {k === "id"
                      ? d[k] + 1
                      : k === "Harga"
                      ? SeparatedNumber(d[k])
                      : d[k]}
                  </td>
                ))}
                <td>
                  <Action data={d} content={content} />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
