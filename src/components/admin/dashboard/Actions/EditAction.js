import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdEdit } from "react-icons/md";
import Input from "../../../../constants/Input";

export default function EditAction({ data, size }) {
  const [isOpen, setIsOpen] = useState(false);
  const isData = data;
  const isKeys = Object.keys(isData);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div
        onClick={() => {
          openModal();
        }}
        className="text-red-500 hover:text-white 
        hover:bg-red-500 rounded-full p-2 focus:ring-red-500 
        focus-visible:ring-2 focus-visible:ring-red-500 
        focus-visible:ring-offset-2 duration-300"
      >
        <MdEdit size={size} />
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
                <Dialog.Panel className="w-full  max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Menu
                  </Dialog.Title>
                  <div className="flex flex-col justify-around space-y-5 h-full">
                    <div>
                      {isKeys.map((k, i) => (
                        <div key={i} className="p-3">
                          {k !== "id" && k !== "Nama" ? (
                            <>
                              <div>{isData["Nama"]}</div>
                              <Input
                                name={k}
                                placeholder={k.toUpperCase()}
                                defaultValue={isData[k]}
                                type={"text"}
                              />
                            </>
                          ) : null}
                        </div>
                      ))}
                    </div>

                    <div className="flex w-full space-x-5">
                      <button
                        type="button"
                        className="inline-flex w-1/2 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Ubah
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-1/2 justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Batal
                      </button>
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
