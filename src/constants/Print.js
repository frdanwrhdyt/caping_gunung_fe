import React from "react";
import {
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillYoutube,
} from "react-icons/ai";

function Table({ data, cash }) {
  let total = [];
  data.map((d) => {
    let amount = d.price * d.amount;
    total.push(amount);
  });
  total = total.reduce(function (a, b) {
    return a + b;
  }, 0);
  return (
    <>
      <div className="flex flex-col pt-1 border-b border-black py-1">
        <div className="w-full">
          <table className="divide-y w-full">
            <thead className="bg-transparent">
              <tr className="text-center ">
                <th className="text-xs font-medium">Item</th>
                <th className="text-xs font-medium">Price</th>
                <th className="text-xs font-medium">Qty</th>
                <th className="text-xs font-medium">Total</th>
              </tr>
            </thead>
            <tbody className=" ">
              {data.map((d, i) => (
                <tr key={i} className="text-center whitespace-normal">
                  <td className="text-xs font-thin">{d.name}</td>
                  <td className="text-xs font-thin">{d.price}</td>
                  <td className="text-xs font-thin">{d.amount}</td>
                  <td className="text-xs font-thin">{d.price * d.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-2 text-xs">
        <div className="flex justify-between">
          <div>Total</div>
          <div>{total}</div>
        </div>
        <div className="flex justify-between">
          <div>Cash</div>
          <div>{cash}</div>
        </div>
        <div className="flex justify-between">
          <div>Kembalian</div>
          <div>{cash - total}</div>
        </div>
      </div>
    </>
  );
}

export default function Print({ data, ref }) {
  const pesanan = data?.order;
  return (
    <div ref={ref} className="w-[220px] h-fit">
      <div className="w-full text-center">
        <div className="w-20 mx-auto">
          <img src="./logo.png" alt="" />
        </div>
        <div className="font-semibold">INVOICE</div>
      </div>
      <div className="flex text-xs space-x-9 pt-5  border-b border-black">
        <div>
          <div>Tanggal</div>
          <div>Nama</div>
          <div>Tempat</div>
        </div>
        <div>
          <div>: {data?.createdAt}</div>
          <div>: {data?.name}</div>
          <div>: {data?.location}</div>
        </div>
      </div>
      <Table data={pesanan} cash={data?.cash} />
      <div className="pt-10 text-center text-xs">
        <div>Terima kasih atas kunjungan anda</div>
        <div>Find Us</div>
        <div className="flex space-x-1 items-center justify-center">
          <AiOutlineWhatsApp />
          <div>0857 4610 2300</div>
        </div>
        <div className="flex space-x-1 items-center justify-center">
          <AiFillInstagram />
          <div>capinggunung_madiun</div>
        </div>
        <div className="flex space-x-1 items-center justify-center">
          <AiFillYoutube />
          <div>Syam Warung Caping Gunung</div>
        </div>
      </div>
    </div>
  );
}
