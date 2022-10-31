import React, { useCallback, useState, useEffect } from "react";
import IconBage from "../../../assitComponet/IconBage/IconBage";
import Projecttable from "../../../assitComponet/Projecttable/Projecttable";

import EmpTasktable from "../../../allTable/Emptable/EmpTaskTable/EmpTasktable";
import EmpDashRightSide from "./EmpTaskRightSide";
const inititalState1 = [
  {
    id: "1230",
    taskdate: "06/10/2022",
    taskgiven: "soundesh",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "100%",
    taskStatus: "pending",
    approvedstatus: "yes",
  },

  {
    id: "1231",
    taskdate: "06/10/2022",
    taskgiven: "soundesh",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "100%",
    taskStatus: "pending",
    approvedstatus: "no",
  },
  {
    id: "1232",
    taskdate: "06/10/2022",
    taskgiven: "parimala",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "100%",
    taskStatus: "pending",
    approvedstatus: "yes",
  },
  {
    id: "1233",
    taskdate: "06/10/2022",
    taskgiven: "saranya",
    project: "331 inspirational designs,",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "100%",
    taskStatus: "complete",
    approvedstatus: "no",
  },

  {
    id: "1234",
    taskdate: "06/10/2022",
    taskgiven: "anand kumar naveen",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "100%",
    taskStatus: "complete",
    approvedstatus: "no",
  },
  {
    id: "1235",
    taskdate: "06/10/2022",
    taskgiven: "anand kumar naveen",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "100%",
    taskStatus: "complete",
    approvedstatus: "yes",
  },

  {
    id: "1236",
    taskdate: "06/10/2022",
    taskgiven: "anand kumar naveen",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "100%",
    taskStatus: "pending",
    approvedstatus: "no",
  },
  {
    id: "1237",
    taskdate: "06/10/2022",
    taskgiven: "anand kumar naveen",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "100%",
    taskStatus: "complete",
    approvedstatus: "yes",
  },
  {
    id: "1238",
    taskdate: "06/10/2022",
    taskgiven: "anand kumar naveen",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "100%",
    taskStatus: "complete",
    approvedstatus: "yes",
  },
  {
    id: "1239",
    taskdate: "06/10/2022",
    taskgiven: "anand kumar naveen",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "100%",
    taskStatus: "complete",
    approvedstatus: "no",
  },
];
const headerstate = [
  "id",
  "Task date",
  "Task Given",
  "Project",
  "Task",
  "Task Assigned",
  "Approver Remarks",
  "Employee Remarks",
  "Worked Hours",
  "Clocked Hours",
  "Utilised Hours",
  "Efficiency",
  "Status",
  "Approved",
];
const EmptaskMain = () => {
  const [allData, setalldata] = useState(inititalState1);
  const datasetup = useCallback(() => {
    const DataArray = [];
    const notifylength = [];
    const pending = allData.filter((item) => {
      return item.approvedstatus !== "yes" && item.taskStatus !== "complete";
    });
    const Approved = allData.filter((item) => {
      return item.approvedstatus === "yes" && item.taskStatus === "complete";
    });
    const notApproved = allData.filter((item) => {
      return item.approvedstatus !== "yes" && item.taskStatus === "complete";
    });
    DataArray.push(...pending);
    notifylength.push({ name: "Pending", length: pending.length });
    DataArray.push(...notApproved);
    notifylength.push({ name: " Not Approved", length: notApproved.length });
    DataArray.push(...Approved);
    notifylength.push({ name: "Approved", length: Approved.length });
    if (DataArray === []) {
      return [
        {
          id: "",
          "Task date": "",
          "Task Given": "",
          Project: "",
          Task: "",
          "Task Assigned": "",
          "Approver Remarks": "",
          "Employee Remarks": "",
          "Worked Hours": "",
          "Clocked Hours": "",
          "Utilised Hours": "",
          Efficiency: "",
          taskStatus: "",
          approvedstatus: "",
        },
      ];
    }
    return { initialaData: DataArray, taskstatuslength: notifylength };
  }, []);
  useEffect(() => {}, [datasetup]);

  return (
    <div className=" min-w-full flex-grow  ">
      <div className="flex flex-row min-h-[50px] max-h-[50px] bg-gray-50 md:space-x-8 lg:space-x-8 space-x-7 flex-wrap items-center justify-center">
        <IconBage
          IconName="New Task"
          Showcount="4"
          Icon=""
          InconType="fa-solid fa-list-check"
          Iconcolor="text-gray-700"
        />
        <IconBage
          IconName="Complete"
          Showcount="4"
          Icon="task"
          InconType="material-icons lg:text-4xl"
          Iconcolor="text-gray-700"
        />
        <IconBage
          IconName="Pending"
          Showcount="4"
          Icon="pending"
          InconType="material-icons lg:text-4xl"
          Iconcolor="text-gray-700"
        />
        <IconBage
          IconName="Approved"
          Showcount="4"
          Icon="assignment"
          InconType="material-icons lg:text-4xl"
          Iconcolor="text-gray-700"
        />
        <IconBage
          IconName="Not Approved"
          Showcount="4"
          Icon=""
          InconType="fa-solid fa-rectangle-xmark"
          Iconcolor="text-gray-700"
        />
      </div>
      <div>
        <EmpTasktable
          initialData={datasetup().initialaData}
          headerData={headerstate}
        />
      </div>
    </div>
  );
};

export default EmptaskMain;
