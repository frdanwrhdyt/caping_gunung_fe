import React from "react";
import MemberList from "./MemberList/MemberList";
import DevisionList from "./DevisionList/DevisionList";

export default function Member() {
  return (
    <div className="flex h-full space-x-5 w-full pt-5">
      <MemberList />
      <DevisionList />
    </div>
  );
}
