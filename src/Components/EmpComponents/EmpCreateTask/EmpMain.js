import React, { useCallback, useState, useEffect } from "react";
import EmpCreateTable from "../../../allTable/Emptable/EmpCreateTable/EmpCreateTable";
const inititalState1 = [
  {
    id: "1230",
    taskdate: "06/10/2022",
    taskgiven: "shyam",
    taskassigned: "soundesh",
    project: "titan project",
    task: "dashboard screen office ui office ui office",
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
    taskdate: "05/11/2022",
    taskgiven: "sandeep",
    taskassigned: "soundesh",
    project: "office connect ",
    task: "screen office ui office ui office",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen orim project ui office",
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
    taskassigned: "soundesh",
    project: "titan project",
    task: "dashboard screen office ui office ui office",
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
    taskassigned: "soundesh",
    project: "titan project",
    task: "office connect",
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
    taskdate: "09/10/2022",
    taskgiven: "suriya naveen",
    taskassigned: "soundesh",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
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
    taskassigned: "soundesh",
    project: "titan project",
    task: "office connect",
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
    taskassigned: "soundesh",
    project: "titan project",
    task: "office connect",
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
    taskassigned: "soundesh",
    project: "civil workers",
    task: "titan project",
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
    taskassigned: "soundesh",
    project: "office ui office ui office ui office",
    task: "data",
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
    taskassigned: "soundesh",
    project: "melonda poject ",
    task: "dashboard screen office ui office ui office",
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
  "Task Assigned",
  "Project",
  "Task",
  "Approver Remarks",
  "Employee Remarks",
  "Worked Hours",
  "Clocked Hours",
  "Utilised Hours",
  "Efficiency",
  "Status",
  "Approved",
];

const EmpMain = () => {
  const [allData] = useState(inititalState1);
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

    const pending1 = allData.filter((item) => {
      return item.taskStatus !== "complete";
    });
    const Approved1 = allData.filter((item) => {
      return item.approvedstatus === "yes";
    });
    const notApproved1 = allData.filter((item) => {
      return item.approvedstatus !== "yes";
    });
    const complete = allData.filter((item) => {
      return item.taskStatus === "complete";
    });
    DataArray.push(...pending);

    notifylength.push({
      name: "complete",
      length: complete.length,
      InconType: "material-icons lg:text-4xl",
      icon: "task",
    });
    notifylength.push({
      name: "pending",
      length: pending1.length,
      InconType: "material-icons lg:text-4xl",
      icon: "pending",
    });

    notifylength.push({
      name: "not Approved",
      length: notApproved1.length,
      InconType: "fa-solid fa-rectangle-xmark",
      icon: "",
    });

    notifylength.push({
      name: "Approved",
      length: Approved1.length,
      InconType: "material-icons lg:text-4xl",
      icon: "assignment",
    });
    DataArray.push(...notApproved);
    DataArray.push(...Approved);
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

  console.log(datasetup().initialaData);
  return (
    <div>
      <div className="flex justify-center">
        <EmpCreateTable
          initialData={datasetup().initialaData}
          headerData={headerstate}
        />
      </div>
    </div>
  );
};

export default EmpMain;
