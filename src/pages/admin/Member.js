import React from "react";
import Admin from "../../components/admin/Admin";
import Member from "../../components/admin/member/Member";

export default function MemberPage() {
  return (
    <div className="h-screen w-screen">
      <Admin title="Member" prop=<Member /> />
    </div>
  );
}
