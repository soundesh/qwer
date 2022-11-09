import React, { useState, useEffect, useContext } from "react";
import ReuseButton from "../../../assitComponet/button/ReuseButton";
import SelectorFrom from "../../../assitComponet/Input/SelectorFrom";
import Paper from "@mui/material/Paper";
import "./idleAdd.css";
import { EmpGlobalState } from "../../../Globalsate/EmpGlobalState";
import ReuseTextInput from "../../../assitComponet/Input/ReuseTextInput";
import Reuseinput from "../../../assitComponet/Input/Reuseinput";
import ReuseInputDate from "../../../assitComponet/Input/ReuseInputDate";
import VIewdetailheader from "../../../assitComponet/Viewdetail/VIewdetailheader";
const IdleADDing = ({ trigger, settrigger }) => {
  const [updateTaskData, setUpdateTaskData] = useState({
    taskdate: "",
    project: "",
    task: "",
    empremarks: "",
    worked: "",
    clocked: "",
  });
  const { singledata, Singledatadispatch } = useContext(EmpGlobalState);
  const onChangeUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateTaskData({
      ...updateTaskData,
      [name]: value,
    });
    console.log(updateTaskData);
  };
  const ontaskUpdateSubmit = (e) => {
    console.log("emp task update ", updateTaskData);
    e.preventDefault();
  };

  useEffect(() => {}, [updateTaskData]);

  const initialState1 = {
    project: {
      "office connect": {
        task: ["login page data", "dashboard page data", "employye page data"],
      },
      "titan project": {
        task: ["login page data", "dashboard page data", "employye page data"],
      },
      ndm: {
        task: ["login page data", "dashboard page data", "employye page data"],
      },
      "Data list": {
        task: ["login page data", "dashboard page data", "employye page data"],
      },
    },
  };
  return (
    <div className="IdleAdd lg:text-base  ">
      {singledata.createState ? null : (
        <Paper>
          <div className=" border-2 border-gray-400 rounded-lg p-4">
            <VIewdetailheader
              title="Daily update"
              Singledatadispatch={Singledatadispatch}
            />
            <div className="lg:min-w-[400px]  text-base flex flex-column justify-center overflow-auto">
              <form onSubmit={ontaskUpdateSubmit}>
                <div className="flex flex-row IdleAdd-inner bg-white-300">
                  <div className=" min-h-[8vh]   space-y-3 ">
                    <SelectorFrom
                      labeled="project"
                      selectdesign={"-ml-2"}
                      labeldesign={
                        "text-blue-400 min-w-[100px]  max-h-[50px] text-base uppercase"
                      }
                      OptionData={Object.keys(initialState1.project)}
                      sizewidth="5"
                      setTrigger={setUpdateTaskData}
                      Trigger={updateTaskData}
                      name="project"
                    />

                    <div className="  flex py-1 px-2 items-center ">
                      <SelectorFrom
                        labeled="task"
                        selectdesign={"-ml-2"}
                        labeldesign={
                          "text-blue-400 min-w-[100px]  max-h-[50px] text-base uppercase"
                        }
                        OptionData={Object.keys(initialState1.project)}
                        sizewidth="5"
                        setTrigger={setUpdateTaskData}
                        Trigger={updateTaskData}
                        name="task"
                      />
                    </div>
                    <Reuseinput
                      labelname="Date"
                      name="taskdate"
                      type="date"
                      onchanged={onChangeUpdate}
                      inputdesign=" border-indigo-800 "
                    />
                    <ReuseInputDate
                      labelname="Date"
                      name="taskdate"
                      setTrigger={setUpdateTaskData}
                      Trigger={updateTaskData}
                      inputdesign={"border-indigo-800 max-w-[140px]"}
                    />
                    <Reuseinput
                      name="worked"
                      type="text"
                      onchanged={onChangeUpdate}
                      labelname="worked hours"
                      inputdesign=" border-indigo-800 "
                    />

                    <Reuseinput
                      name="clocked"
                      type="text"
                      onchanged={onChangeUpdate}
                      labelname="Clocked hours"
                      inputdesign=" border-indigo-800 "
                    />

                    <ReuseTextInput
                      name="empremarks"
                      onchanged={onChangeUpdate}
                      labelname="Employee remarks"
                      inputdesign="border-indigo-800 "
                      maxLength="70"
                      rows="2"
                      cols="30"
                    />

                    <div className="flex  items-center justify-center flex-row  px-1  ">
                      <ReuseButton
                        btncolor="blue"
                        btntype="submit"
                        btnname="create"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Paper>
      )}
    </div>
  );
};

export default IdleADDing;
