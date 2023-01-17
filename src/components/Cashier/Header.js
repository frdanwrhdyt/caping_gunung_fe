import React, { Component } from "react";
import AddOrder from "../../constants/actions/AddOrder";
export default class Header extends Component {
  render() {
    return (
      <div className="h-fit w-full px-3  ">
        <div className="border-b border-gray-800 flex justify-between">
          <div className="flex items-center">
            <div className="w-16">
              <a href="/">
                <img src="./logo.png" alt="logo_cg" />
              </a>
            </div>
            <div className="text-lg font-semibold">Kasir Caping Gunung</div>
          </div>
          <div className="flex items-center">
            <AddOrder />
          </div>
        </div>
      </div>
    );
  }
}
