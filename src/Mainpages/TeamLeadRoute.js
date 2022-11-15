import React, { Suspense, useContext, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { EmpDataProvider, EmpGlobalState } from "../Globalsate/EmpGlobalState";
const EmpTask = lazy(() =>
  import("../Components/EmpComponents/Emptask/EmpTask")
);
const TeamLeadindexPage = lazy(() =>
  import("../pages/TeamLeadPage/TeamLeadindexPage")
);

const TeamLeaveApprove = lazy(() =>
  import("../Components/TeamleadComponents/teamLeaveApprove/TeamLeaveApprove")
);
const EmpLeave = lazy(() =>
  import("../Components/EmpComponents/Empleave/EmpLeave")
);
const EmpHoliday = lazy(() =>
  import("../Components/EmpComponents/EmpHoliday/EmpHoliday")
);

const EmpCreateTask = lazy(() =>
  import("../Components/EmpComponents/EmpCreateTask/EmpCreateTask")
);
const ProjectAssignDetail = lazy(() =>
  import("../Components/EmpComponents/EmpProjectCreate/ProjectAssignDetail")
);

const EmppaySlip = lazy(() =>
  import("../Components/EmpComponents/Emppayslip.js/EmppaySlip")
);
const TeamLeadRoute = () => {
  return (
    <EmpDataProvider>
      <Suspense fallback={<>Loading ...</>}>
        <TeamLeadindexPage>
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback={<>Loading ...</>}>
                  <EmpTask />
                </React.Suspense>
              }
            />
            <Route
              path="/empleave"
              element={
                <React.Suspense fallback={<>Loading ...</>}>
                  <EmpLeave />
                </React.Suspense>
              }
            />
            <Route
              path="/empholiday"
              element={
                <React.Suspense fallback={<>Loading ...</>}>
                  <EmpHoliday />
                </React.Suspense>
              }
            />
            <Route
              path="/empcreatetask"
              element={
                <React.Suspense fallback={<>Loading ...</>}>
                  <EmpCreateTask />
                </React.Suspense>
              }
            />
            <Route
              path="/empassign"
              element={
                <React.Suspense fallback={<>Loading ...</>}>
                  <ProjectAssignDetail />
                </React.Suspense>
              }
            />

            <Route
              path="/teamapprove"
              element={
                <React.Suspense fallback={<>Loading ...</>}>
                  <TeamLeaveApprove />
                </React.Suspense>
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
          </Routes>
        </TeamLeadindexPage>
      </Suspense>
    </EmpDataProvider>
  );
};

export default TeamLeadRoute;
