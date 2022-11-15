import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { EmpDataProvider } from "../Globalsate/EmpGlobalState";

const EmppaySlip = lazy(() =>
  import("../Components/EmpComponents/Emppayslip.js/EmppaySlip")
);
const EmpTask = lazy(() =>
  import("../Components/EmpComponents/Emptask/EmpTask")
);
const EmployeeIndexpage = lazy(() =>
  import("../pages/Emppages/EmployeeIndexpage")
);

const EmpLeave = lazy(() =>
  import("../Components/EmpComponents/Empleave/EmpLeave")
);
const EmpHoliday = lazy(() =>
  import("../Components/EmpComponents/EmpHoliday/EmpHoliday")
);

const EmployeeRoute = () => {
  return (
    <EmpDataProvider>
      <Suspense fallback={<>Loading ...</>}>
        <EmployeeIndexpage>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<>Loading ...</>}>
                  <EmpTask />
                </Suspense>
              }
            />
            <Route
              path="/empleave"
              element={
                <Suspense fallback={<>Loading ...</>}>
                  <EmpLeave />
                </Suspense>
              }
            />

            <Route
              path="/emppayslip"
              element={
                <Suspense fallback={<>Loading ...</>}>
                  <EmppaySlip />
                </Suspense>
              }
            />
            <Route
              path="/empholiday"
              element={
                <Suspense fallback={<>Loading ...</>}>
                  <EmpHoliday />
                </Suspense>
              }
            />
          </Routes>
        </EmployeeIndexpage>
      </Suspense>
    </EmpDataProvider>
  );
};

export default EmployeeRoute;
