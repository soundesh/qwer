import React from "react";
import { Paper } from "material-ui";
import EmployeeRoute from "./EmployeeRoute";
import { EmpDataProvider } from "../Globalsate/EmpGlobalState";
const Mainpages = () => {
  return (
    <div>
      <Paper elevation={16}>
        <EmpDataProvider>
          <EmployeeRoute />
        </EmpDataProvider>
      </Paper>
    </div>
  );
};

export default Mainpages;
