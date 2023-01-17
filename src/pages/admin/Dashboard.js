import React from "react";
import Admin from "../../components/admin/Admin";
import Dashboard from "../../components/admin/dashboard/Dashboard";
export default function DashboardPage() {
  return (
    <>
      <div className="h-screen w-screen">
        <Admin title="Dashboard" prop=<Dashboard /> />
      </div>
    </>
  );
}
