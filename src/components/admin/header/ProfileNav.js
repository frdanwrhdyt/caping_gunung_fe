import React from "react";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { IoPerson } from "react-icons/io5";
import { Styles } from "../../../constants/styles";
export default function ProfileNav() {
  return (
    <>
      <div>
        <Menu>
          <div className="">
            <Menu.Button className="text-green p-3 rounded-full bg-transparent hover:bg-lightGreen hover:text-white duration-300">
              <IoPerson size={Styles.sizeIconHeader} />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-green text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      href="/#"
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-green text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      href="/#"
                    >
                      Logout
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
}
