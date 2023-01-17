import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaCashRegister } from "react-icons/fa";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import SeparatedNumber from "../separatedNumber";
import Input from "../Input";
import Dropdown from "..//Dropdown";
import { type } from "@testing-library/user-event/dist/type";

export default function AddOrder() {
  const data = [
    { id: 0, name: "Mie Ayam", price: 10000 },
    { id: 1, name: "Es Teh", price: 3000 },
    { id: 2, name: "Capucino", price: 20000 },
    { id: 3, name: "Machiato", price: 20000 },
    { id: 4, name: "Robusta Wilis", price: 15000 },
    { id: 5, name: "Arabica", price: 18000 },
  ];
  const tempat = ["K-1", "K-2", "K-3"];
  let initialValues = [];
  data.map((d, i) => {
    initialValues.push({ id: i, value: 0, name: d.name, price: d.price });
  });

  const [isValue, setIsValue] = useState(initialValues);
  const [isOpen, setIsOpen] = useState(false);
  const [isOrder, setIsOrder] = useState([]);

  function closeModal() {
    setIsOrder([]);
    setIsValue(initialValues);
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  let total = [];
  let totalQty = [];
  isOrder.map((d, i) => {
    if (d.value !== 0) {
      total.push(d.total);
      totalQty.push(d.value);
    }
  });

  total = total.reduce(function (a, b) {
    return a + b;
  }, 0);

  function increaseValue(i) {
    let newValue = [];
    let value;
    isValue.map((d, j) => {
      if (j === i) {
        value = d.value + 1;
        newValue.push({
          id: j,
          value: value,
          name: d.name,
          price: d.price,
          total: d.price * value,
        });
        setIsOrder(newValue);
      } else {
        newValue.push({
          id: j,
          value: d.value,
          name: d.name,
          price: d.price,
          total: d.price * d.value,
        });
      }
    });
    setIsValue(newValue);
  }
  function decreaseValue(i) {
    let newValue = [];
    let value;
    isValue.map((d, j) => {
      if (j === i) {
        value = d.value - 1;
        if (value < 0) {
          value = 0;
        }
        newValue.push({
          id: j,
          value: value,
          name: d.name,
          price: d.price,
          total: d.price * value,
        });
        setIsOrder(newValue);
      } else {
        newValue.push({
          id: j,
          value: d.value,
          name: d.name,
          price: d.price,
          total: d.price * d.value,
        });
      }
    });
    setIsValue(newValue);
  }

  return (
    <>
      <div className="relative inset-0 flex items-center justify-center">
        <button
          className="text-green rounded-full p-3 bg-transparent hover:bg-lightGreen hover:text-white duration-300"
          onClick={() => openModal()}
        >
          <FaCashRegister size={18} />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-fit  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Order Baru
                  </Dialog.Title>
                  <div className="flex flex-col justify-between h-full">
                    <div className="mt-2 flex space-x-5  divide-x">
                      <div className="w-2/3 max-h-[500px] overflow-auto">
                        <div className="flex w-full space-x-5 px-1 items-center justify-center">
                          <div className="w-9/12">
                            <Input
                              name={"Nama"}
                              placeholder={"Nama"}
                              type={"text"}
                              isRequired={true}
                            />
                          </div>
                          <div className="w-3/12">
                            <Dropdown title={"Tempat"} content={tempat} />
                          </div>
                        </div>
                        <div className="grid grid-cols-5">
                          {data.map((d, i) => (
                            <div
                              key={i}
                              className="h-32 w-32 shadow-md m-3 rounded-lg p-3 text-center flex flex-col justify-around"
                            >
                              <div>
                                <div>{d.name}</div>
                                <div>{SeparatedNumber(d.price)}</div>
                              </div>
                              <div className="flex space-x-2 justify-center">
                                <button
                                  onClick={() => decreaseValue(i)}
                                  className=" p-1 rounded-full hover:text-white hover:bg-red-500 duration-300"
                                >
                                  <AiOutlineMinus size={20} />
                                </button>
                                <div>{isValue[i].value}</div>
                                <button
                                  onClick={() => increaseValue(i)}
                                  className=" p-1 rounded-full hover:text-white hover:bg-blue-500 duration-300"
                                >
                                  <AiOutlinePlus size={20} />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-1/3 p-3 max-h-[500px] overflow-auto">
                        <div>Pesanan</div>
                        <div className="pt-5">
                          <table className="divide-y w-full h-fit">
                            <thead className="bg-transparent">
                              <tr className="text-center">
                                <th className="py-2 text-xs text-gray-500">
                                  Item
                                </th>
                                <th className="py-2 text-xs text-gray-500">
                                  Price
                                </th>
                                <th className="py-2 text-xs text-gray-500">
                                  Qty
                                </th>
                                <th className="py-2 text-xs text-gray-500">
                                  Total
                                </th>
                              </tr>
                            </thead>
                            <tbody className="">
                              {isOrder.map((d, i) => {
                                return (
                                  <tr
                                    key={i}
                                    className="whitespace-normal text-center"
                                  >
                                    {d?.value ? (
                                      <>
                                        <td className="text-xs py-2">
                                          {d.name}
                                        </td>
                                        <td className="text-xs py-2">
                                          {SeparatedNumber(d.price)}
                                        </td>
                                        <td className="text-xs py-2">
                                          {d.value}
                                        </td>
                                        <td className="text-xs py-2">
                                          {SeparatedNumber(d.total)}
                                        </td>
                                      </>
                                    ) : null}
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full items-center">
                      <div className="w-8/12">
                        <button
                          type="button"
                          className="inline-flex w-1/3 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Selesai
                        </button>
                      </div>
                      <div className="w-4/12 ">
                        <div className="flex justify-between items-center">
                          <div className="font-semibold">Total Items</div>
                          <div>
                            {totalQty.reduce(
                              (partialSum, a) => partialSum + a,
                              0
                            )}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="font-semibold">Total</div>
                          <div>{SeparatedNumber(total)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
