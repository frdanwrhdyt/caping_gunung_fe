import React, { useState } from "react";
import SeparatedNumber from "../../constants/separatedNumber";
import Input from "../../constants/Input";

export default function TableOfOrder() {
  const data = [
    {
      id: 0,
      name: "Farid",
      createdAt: "10:10 10-10-2022",
      location: "K-1",
      orders: [
        { id: 0, name: "Mie Ayam", amount: 1, price: 10000 },
        { id: 1, name: "Es teh", amount: 1, price: 3000 },
      ],
    },
    {
      id: 1,
      name: "Farid",
      createdAt: "10:10 10-10-2022",
      location: "K-1",
      orders: [
        { id: 0, name: "Ayam Taliwang", amount: 3, price: 30000 },
        { id: 1, name: "Es teh", amount: 1, price: 3000 },
      ],
    },
  ];
  const [isOrder, setIsOrder] = useState([]);
  const [isTotal, setIsTotal] = useState(0);
  const [isChange, setIsChange] = useState(0);

  function SetOrder(x) {
    let total = [];
    x?.orders.map((d) => {
      const amount = d.price * d.amount;
      total.push(amount);
    });
    total = total.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
    }, 0);
    setIsChange(0);
    setIsTotal(total);
    setIsOrder(x);
  }

  return (
    <div className="w-full flex h-full space-x-5">
      <div className="w-5/12 h-full bg-white shadow-lg rounded-md overflow-auto">
        <div className="h-full bg-white rounded-lg shadow-md p-5">
          <table className="divide-y w-full">
            <thead className="bg-transparent">
              <tr className="text-center">
                <th className="py-2 text-xs text-gray-500">No</th>
                <th className="py-2 text-xs text-gray-500">Nama</th>
                <th className="py-2 text-xs text-gray-500">Lokasi</th>
                <th className="py-2 text-xs text-gray-500">Masuk Pada</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {data.map((d, i) => (
                <tr
                  key={i}
                  className="whitespace-normal text-center hover:bg-gray-100 duration-300"
                  onClick={() => SetOrder(d)}
                >
                  <td className="text-xs py-2">{d.id + 1}</td>
                  <td className="text-xs py-2">{d.name}</td>
                  <td className="text-xs py-2">{d.location}</td>
                  <td className="text-xs py-2">{d.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-7/12 h-fit bg-white shadow-lg rounded-md p-5 flex flex-col justify-between ">
        <div className="h-fit w-full border-b">
          <div className="border-b w-full text-xs">
            <div className="grid grid-cols-3 w-full h-fit">
              <div>
                <div>Nama</div>
                <div>Tempat</div>
                <div>Masuk Pada</div>
              </div>
              <div>
                <div>{isOrder.name}</div>
                <div>{isOrder.location}</div>
                <div>{isOrder.createdAt}</div>
              </div>
              <div className="px-5 py-2 h-fit text-xs ml-auto bg-blue-500 rounded-md shadow-md hover:shadow-xl hover:bg-blue-800 text-white duration-300">
                <button>Edit</button>
              </div>
            </div>
          </div>
          <div className="pt-2 h-full">
            <table className="divide-y w-full h-fit">
              <thead className="bg-transparent">
                <tr className="text-center">
                  <th className="py-2 text-xs text-gray-500">No</th>
                  <th className="py-2 text-xs text-gray-500">Item</th>
                  <th className="py-2 text-xs text-gray-500">Price</th>
                  <th className="py-2 text-xs text-gray-500">Qty</th>
                  <th className="py-2 text-xs text-gray-500">Total</th>
                </tr>
              </thead>
              <tbody className="">
                {isOrder?.orders?.map((d, i) => {
                  return (
                    <tr key={i} className="whitespace-normal text-center">
                      <td className="text-xs py-2">{d.id + 1}</td>
                      <td className="text-xs py-2">{d.name}</td>
                      <td className="text-xs py-2">
                        {SeparatedNumber(d.price)}
                      </td>
                      <td className="text-xs py-2">{d.amount}</td>

                      <td className="text-xs py-2">
                        {SeparatedNumber(d.price * d.amount)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-between w-full px-5">
          <div className="text-xs font-medium">Total</div>
          <div className="text-xs font-medium">{SeparatedNumber(isTotal)}</div>
        </div>
        <div className="flex justify-between w-full px-5 items-center">
          <div className="text-xs font-medium">Cash</div>
          <div className="w-28">
            <Input
              type={"number"}
              defaultValue={0}
              value={isChange}
              handleChange={(e) => setIsChange(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between w-full px-5">
          <div className="text-xs font-medium">Kembalian</div>
          <div className="text-xs font-medium">
            {SeparatedNumber(isChange - isTotal)}
          </div>
        </div>
        <div className="px-5 py-2 text-sm mx-auto bg-lightGreen rounded-md shadow-md hover:shadow-xl hover:bg-green text-white duration-300">
          <button>Selesai</button>
        </div>
      </div>
    </div>
  );
}
