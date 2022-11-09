import React from "react";

import Empnav from "../../ANavbar/Empnav";
import EmptaskMain from "./EmptaskMain";
const EmpTask = () => {
  return (
    <div className="min-w-full">
      <div>
        <Empnav title="Dashboard" />
      </div>
      <div className="min-w-full">
        <div>
          <EmptaskMain />
        </div>
      </div>
    </div>
  );
};

export default EmpTask;
