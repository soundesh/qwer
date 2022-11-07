import React, { useState } from "react";
import SelectorFrom from "../../../assitComponet/SelectorFrom";
const EmpProjectRegister = () => {
  const [updateTaskData, setUpdateTaskData] = useState({});

  const onAssigntaskSubmit = async (e) => {
    console.log("emp assign task update ", updateTaskData);
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={onAssigntaskSubmit}
        className=" flex lg:flex-row flex-wrap items-center justify-center    m-1 p-1"
      >
        <div className="  flex py-1 px-2 items-center  ">
          <SelectorFrom
            labeled="Project"
            defaultValue={updateTaskData.leaveType}
            selectdesign="flex flex-row mr-2"
            labeldesign="text-blue-400 min-w-[80px]   text-base uppercase mr-4 flex pt-2 "
            OptionData={["Select", "office connect", "NPD", "titan Project"]}
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
            selectdesign="flex flex-row mr-2"
            labeldesign="text-blue-400  min-w-[80px]  text-base uppercase mr-4 flex pt-2 "
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
            selectdesign="flex flex-row mr-2"
            labeldesign="text-blue-400  min-w-[80px] min-w-[100px] text-base uppercase mr-4 flex pt-2 "
            OptionData={["Select", "soundesh", "raj kumar", "shyam "]}
            sizewidth="1"
            setTrigger={setUpdateTaskData}
            Trigger={updateTaskData}
            Triggername="taskassigned"
          />
        </div>

        <button
          type="submit"
          className="hover:bg-blue-800 rounded-lg bg-blue-600  text-white flex justify-center py-2 px-2 items-center"
        >
          Add task
        </button>
      </form>
    </div>
  );
};

export default EmpProjectRegister;
