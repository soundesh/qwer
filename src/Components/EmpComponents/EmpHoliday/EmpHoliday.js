import React, { useCallback } from "react";
import Hrholidaytable from "./Hrholidaytable";
import YearLeave from "../../GenralComponent/YearLeave";
const initialState = [
  {
    id: "126",
    leavedate: "23/05/22",
    leavetype: "festival",
    holiday: "deepavali",
  },
  {
    id: "121",
    leavedate: "2/03/22",
    leavetype: "festival",

    holiday: "sri krishnar jemaasvvvvtami ",
  },
  {
    id: "123",
    leavedate: "2/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "124",
    leavedate: "2/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "125",
    leavedate: "2/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "123",
    leavedate: "30/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "123",
    leavedate: "2/04/22",
    leavetype: "festival",
    holiday: "christmus",
  },

  {
    id: "124",
    leavedate: "2/01/22",
    leavetype: "RH",
    holiday: "sri krishnar jemaastamivvvvv",
  },
  { id: "128", leavedate: "23/05/22", leavetype: "RH", holiday: "pongal" },
  { id: "129", leavedate: "2/03/22", leavetype: "RH", holiday: "mattu pongal" },

  {
    id: "127",
    leavedate: "2/01/22",
    leavetype: " general",
    holiday: "kannada rajyotsava",
  },

  {
    id: "122",
    leavedate: "23/01/22",
    leavetype: "national",
    holiday: "srikrishnar jemaavvvvstami",
  },
  {
    id: "121",
    leavedate: "12/05/22",
    leavetype: "national",
    holiday: "independance",
  },
];

const EmpHoliday = () => {
  return (
    <div className="flex flex-row flex-wrap">
      <Hrholidaytable hideBtn={true} initialData={initialState} />
      <YearLeave />
    </div>
  );
};

export default EmpHoliday;
