import React from "react";
import { Route, Routes } from "react-router-dom";
import EmpTask from "../Components/EmpComponents/Emptask/EmpTask";
import EmployeeIndexpage from "../pages/Emppages/EmployeeIndexpage";
import EmpLeave from "../Components/EmpComponents/Empleave/EmpLeave";
import EmpHoliday from "../Components/EmpComponents/EmpHoliday/EmpHoliday";
import EmpCreateTask from "../Components/EmpComponents/EmpCreateTask/EmpCreateTask";
import ProjectAssignDetail from "../Components/EmpComponents/EmpProjectCreate/ProjectAssignDetail";
const EmployeeRoute = () => {
  return (
    <EmployeeIndexpage>
      <Routes>
        <Route path="/" element={<EmpTask />} />
        <Route path="/empleave" element={<EmpLeave />} />
        <Route path="/empholiday" element={<EmpHoliday />} />
        <Route path="/empcreatetask" element={<EmpCreateTask />} />
        <Route path="/empassign" element={<ProjectAssignDetail />} />
      </Routes>
    </EmployeeIndexpage>
  );
};

export default EmployeeRoute;
