import React from "react";
import Admin from "../../components/admin/Admin";
import ListMenu from "../../components/admin/listMenu/ListMenu";

export default function ListMenuPage() {
  return (
    <>
      <div className="h-screen w-screen">
        <Admin title="List Menu" prop=<ListMenu /> />
      </div>
    </>
  );
}
