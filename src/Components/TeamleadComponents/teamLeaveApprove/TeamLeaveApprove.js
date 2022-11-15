import React, { useState } from "react";
import TLLeaveApprove from "../../../allTable/TeamLeadtable/TLLeaveApprove";
import LeaveApprovedDetail from "../../GenralComponent/LeaveApprovedDetail";
import IconBage from "../../../assitComponet/IconBage/IconBage";
import Empnav from "../../ANavbar/Empnav";
import ReuseButton from "../../../assitComponet/button/ReuseButton";
const inititalState2 = [
  {
    id: "1200",
    user: `anand`,
    empId: "[RIM-Cad-876]",
    Dep: "3D-cad",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali fhghfgfgg",
    reasonleave:
      "qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopopqwertyuf",
    L1approver: "sandeep :approvedsandeep",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },

  {
    id: "1234",
    user: `soundesh`,
    empId: "[RIM-WEB-876]",
    Dep: "Web",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "CL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1approver: "sandeep :approvedsandeep",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },

  {
    id: "1223",
    user: `ragu`,
    empId: "[RIM-Cad--876]",
    Dep: "3D-cad",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1approver: "sandeep :approvedsandeep",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },

  {
    id: "2332",
    user: `shyam`,
    empId: "[RIM-Cad-876]",
    Dep: "3D-cad",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1approver: "sandeep :approvedsandeep",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },

  {
    id: "23425",
    user: `anand`,
    empId: "[RIM-Cad-876]",
    Dep: "3D-cad",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",

    L1approver: "sandeep :approvedsandeep",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },

  {
    id: "23345642",
    user: `shyam`,
    empId: "[RIM-Cad-876]",
    Dep: "3D-cad",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",

    L1approver: "sandeep :approvedsandeep",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },

  {
    id: "2335462",
    user: `shyam`,
    empId: "[RIM-WEB-876]",
    Dep: "Web",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",
    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1approver: "sandeep :approvedsandeep",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },

  {
    id: "23546432",
    user: `shyam`,
    empId: "[RIM-WEB-876]",
    Dep: "Web",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1approver: "sandeep :approved",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },
];

const leaveHeaderData = [
  "id",
  "user",
  "empid",
  "Deparment",
  "date",
  "from",
  "to",
  "lop",
  "Days",
  "Leave type",
  "reason",
  "reasonleave",
  "L1 Aprover and Remarks",
  "L2 Aprover and Remarks",
  "L3 Aprover and Remarks",
];
const TeamLeaveApprove = () => {
  return (
    <div>
      <div>
        <Empnav title="Team Lead Approvel" />
      </div>
      <div className="pt-2 flex shadow shadow-xl hover:shadow-lg bg-white  flex-row min-h-[50px] max-h-[50px]  md:space-x-8 lg:space-x-8 space-x-7 flex-wrap items-center justify-center">
        <IconBage
          IconName="common Leave"
          Showcount="5"
          Icon=""
          InconType="fa-solid fa-calendar-days "
          Iconcolor="text-gray-700"
        />

        <IconBage
          IconName="Earned Leave"
          Showcount="1"
          Icon="work"
          InconType="material-icons lg:text-4xl"
          Iconcolor="text-gray-700"
        />

        <IconBage
          IconName="Holiday Leave"
          Showcount="3"
          Icon="home"
          InconType="material-icons lg:text-4xl"
          Iconcolor="text-gray-700"
        />
        <IconBage
          IconName="Company oFF"
          Showcount="0"
          Icon="laptop"
          InconType="material-icons lg:text-4xl"
          Iconcolor="text-gray-700"
        />
      </div>

      <div className=" m-2 bg-white max-h-[350px]  lg:max-h-[350px] max-w-[1050px]    rounded-lg  mt-2 ">
        <LeaveApprovedDetail />
      </div>
      <div
        className="mt-3
      "
      >
        <TLLeaveApprove
          initialData={inititalState2}
          headerData={leaveHeaderData}
        />
      </div>
    </div>
  );
};

export default TeamLeaveApprove;
