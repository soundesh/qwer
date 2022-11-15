import React, { useContext, useState, useEffect } from "react";
import { EmpGlobalState } from "../../../Globalsate/EmpGlobalState";
import { Paper } from "@mui/material";
import SelectorFrom from "../../../assitComponet/SelectorFrom";

import ReuseButton from "../../../assitComponet/button/ReuseButton";
import VIewdetailheader from "../../../assitComponet/Viewdetail/VIewdetailheader";
const AssignTask = () => {
  const { dataCreate, datadispatCreate } = useContext(EmpGlobalState);

  const [updateTaskData, setUpdateTaskData] = useState({
    taskdate: today(),
    taskgiven: "shyam",
    taskassigned: "",
    project: "",
    task: "",
  });

  function today() {
    let d = new Date();
    let currDate = d.getDate();
    let currMonth = d.getMonth() + 1;
    let currYear = d.getFullYear();
    return (
      (currDate < 10 ? "0" + currDate : currDate) +
      "/" +
      (currMonth < 10 ? "0" + currMonth : currMonth) +
      "/" +
      currYear
    );
  }
  const onAssigntaskSubmit = async (e) => {
    console.log("emp assign task update ", updateTaskData);
    e.preventDefault();
  };

  useEffect(() => {}, [dataCreate]);
  return (
    <div>
      {dataCreate.createState ? null : (
        <div className="lg:mx-1 mx-1   lg:max-w-full md:max-w-full lg:min-w-[400px] rounded-lg max-w-[270px] justify-center ">
          <Paper>
            <div className=" border-2 border-gray-400  p-4 rounded-lg">
              <VIewdetailheader
                title="Assign New Task"
                Singledatadispatch={datadispatCreate}
              />
              <form
                onSubmit={onAssigntaskSubmit}
                className=" flex flex-col items-center justify-center   "
              >
                <div className="  flex py-1 px-2 items-center ">
                  <SelectorFrom
                    labeled="Project"
                    defaultValue={updateTaskData.leaveType}
                    labeldesign="text-blue-400  text-base uppercase"
                    OptionData={[
                      "Select",
                      "office connect",
                      "NPD",
                      "titan Project",
                    ]}
                    sizewidth="1"
                    setTrigger={setUpdateTaskData}
                    Trigger={updateTaskData}
                    Triggername="project"
                  />
                </div>
                <div className="  flex py-1 px-2 items-center ">
                  <SelectorFrom
                    labeled="task"
                    defaultValue={updateTaskData.leaveType}
                    labeldesign="text-blue-400  text-base uppercase"
                    OptionData={[
                      "Select",
                      "login page",
                      "sign in page",
                      "dashboard page dashboard page dashboard page dashboard page",
                    ]}
                    sizewidth="1"
                    setTrigger={setUpdateTaskData}
                    Trigger={updateTaskData}
                    Triggername="task"
                  />
                </div>
                <div className="  flex py-1 px-2 items-center ">
                  <SelectorFrom
                    labeled="task Assign to"
                    defaultValue={updateTaskData.leaveType}
                    labeldesign="text-blue-400  text-base uppercase"
                    OptionData={["Select", "soundesh", "raj kumar", "shyam "]}
                    sizewidth="1"
                    setTrigger={setUpdateTaskData}
                    Trigger={updateTaskData}
                    Triggername="taskassigned"
                  />
                </div>
                <ReuseButton
                  btncolor="blue"
                  btntype="submit"
                  btnname="Add task"
                />
              </form>
            </div>
          </Paper>
        </div>
      )}
    </div>
  );
};

export default AssignTask;
