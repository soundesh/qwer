import React, { useEffect, useReducer } from "react";
import { Paper } from "material-ui";
import EmployeeRoute from "./EmployeeRoute";
import TeamLeadRoute from "./TeamLeadRoute";
const Mainpages = () => {
  const initialState = {
    user: <EmployeeRoute />,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "employee":
        return {
          ...state,
          user: <EmployeeRoute />,
        };
      case "teamlead":
        return {
          ...state,
          user: <TeamLeadRoute />,
        };
      default:
        return state;
    }
  };

  const [role, roledispatch] = useReducer(reducer, initialState);
  const user = { role: "teamlead" };
  useEffect(() => {
    roledispatch({ type: user.role });
  }, [roledispatch]);

  return (
    <div>
      <Paper elevation={16}>{role.user}</Paper>
    </div>
  );
};

export default Mainpages;
