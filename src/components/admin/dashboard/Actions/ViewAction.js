import React, { Fragment, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { HiDocumentSearch } from "react-icons/hi";
import SeparatedNumber from "../../../../constants/separatedNumber";

export default function ViewAction({ size, data, keys }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isData, setIsData] = useState([]);

  function SetData() {
    setIsData(data);
    SetOpen();
  }
  function SetOpen() {
    setIsOpen(true);
  }

  function SetClose() {
    setIsOpen(false);
  }
  function InfoDialog() {
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-auto" onClose={SetClose}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Data Pesanan
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="text-sm text-gray-500">
                      <div className="flex space-x-5 w-full">
                        <div className="w-1/4 flex flex-col space-y-1 font-semibold">
                          <div>Nama</div>
                          <div>Lokasi</div>
                          <div>Masuk</div>
                          <div>Pesanan</div>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <div>{isData?.name}</div>
                          <div>{isData?.location}</div>
                          <div>{isData?.createdAt}</div>
                          {isData.order?.map((o, i) => (
                            <div key={i} className="flex flex-col space-y-1">
                              <div>
                                {o.amount}
                                {` `}
                                {o.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-5 w-full">
                        <div className="w-1/4 flex flex-col space-y-1 font-semibold">
                          <div>Tagihan</div>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <div>{SeparatedNumber(isData?.bill)}</div>
                        </div>
                      </div>
                      <div
                        className={`font-semibold pt-2 ${
                          isData?.paid ? "text-lightGreen" : "text-red-500"
                        }`}
                      >
                        {isData?.paid ? "Terbayar" : "Belum Bayar"}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      disabled={isData?.paid}
                      type="button"
                      className={`
                      ${isData?.paid ? "hidden" : ""}
                      inline-flex  w-full justify-center rounded-md border 
                      border-transparent bg-blue-100 px-4 py-2 text-sm 
                      font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 duration-300`}
                      onClick={SetClose}
                    >
                      Bayar{" "}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  }
  return (
    <>
      <button
        onClick={() => {
          SetData();
        }}
        className="text-yellow-500 hover:text-white hover:bg-yellow-500 duration-200 rounded-full p-2"
      >
        <HiDocumentSearch size={size} />
      </button>
      {InfoDialog()}
    </>
  );
}
