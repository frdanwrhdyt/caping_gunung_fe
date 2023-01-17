import Header from "../components/login/Header";
import Login from "../components/login/Login";
// import Print from "../constants/Print";
// import ReactToPrint, { PrintContextConsumer } from "react-to-print";
// import React, { useRef } from "react";

// const data = {
//   id: 0,
//   name: "Farid",
//   createdAt: "12-09-2022",
//   location: "K-1",
//   bill: 400000,
//   paid: 1,
//   order: [
//     {
//       id: 0,
//       name: "Mie Ayam",
//       amount: 1,
//       price: 10000,
//       res: "kitchen",
//     },
//     {
//       id: 1,
//       name: "Es Teh",
//       amount: 1,
//       price: 3000,
//       res: "kitchen",
//     },
//     {
//       id: 2,
//       name: "Caramel Machiato",
//       amount: 1,
//       price: 20000,
//       res: "cc",
//     },
//   ],
//   status: {
//     kitchen: 1,
//     cc: 1,
//   },
//   cash: 100000,
// };

export default function LoginPage() {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Header heading="Syam Resort Caping Gunung" />
          <Login />
        </div>
      </div>
    </>
  );
}
