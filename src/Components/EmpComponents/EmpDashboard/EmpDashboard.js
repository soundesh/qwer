import React from "react";
import EmpDashmain from "./EmpDashmain";
import EmpDashnav from "./EmpDashnav";
const EmpDashboard = () => {
  return (
    <div className="min-w-full">
      <div className="p-1 bg-indigo-700 max-h-[50px] min-h-[50px]">
        <div>
          <EmpDashnav />
        </div>
      </div>
      <div className="min-w-full">
        <div>
          <EmpDashmain />
        </div>
      </div>
    </div>
  );
};

export default EmpDashboard;
