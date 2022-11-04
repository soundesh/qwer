import React from "react";
import { Route, Routes } from "react-router-dom";
import EmpDashboard from "../Components/EmpComponents/EmpDashboard/EmpDashboard";
import EmpTask from "../Components/EmpComponents/Emptask/EmpTask";
import EmployeeIndexpage from "../pages/Emppages/EmployeeIndexpage";
import EmpLeave from "../Components/EmpComponents/Empleave/EmpLeave";
import EmpHoliday from "../Components/EmpComponents/EmpHoliday/EmpHoliday";
import EmpCreateTask from "../Components/EmpComponents/EmpCreateTask/EmpCreateTask";
const EmployeeRoute = () => {
  return (
    <EmployeeIndexpage>
      <Routes>
        <Route path="/emptask1" element={<EmpTask />} />
        <Route path="/" element={<EmpDashboard />} />
        <Route path="/empleave" element={<EmpLeave />} />
        <Route path="/empholiday" element={<EmpHoliday />} />
        <Route path="/empcreatetask" element={<EmpCreateTask />} />
      </Routes>
    </EmployeeIndexpage>
  );
};

export default EmployeeRoute;
