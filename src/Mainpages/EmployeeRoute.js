import React from 'react'
import { Route, Routes } from "react-router-dom";
import EmpDashboard from '../Components/EmpComponents/EmpDashboard/EmpDashboard';
import EmpTask from '../Components/EmpComponents/Emptask/EmpTask';
import EmployeeIndexpage from '../pages/Emppages/EmployeeIndexpage';
const EmployeeRoute = () => {
  return (
   <EmployeeIndexpage>
    
    <Routes>
          <Route path="/emptask" element={<EmpTask />} />
          
          <Route path="/" element={<EmpDashboard />} />
    </Routes>
   </EmployeeIndexpage>
  )
}

export default EmployeeRoute