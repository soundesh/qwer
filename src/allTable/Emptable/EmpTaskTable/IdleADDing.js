import React, { useState, useEffect, useContext } from "react";
import ReuseButton from "../../../assitComponet/button/ReuseButton";
import SelectorFrom from "../../../assitComponet/SelectorFrom";
import Paper from "@mui/material/Paper";
import "./idleAdd.css";
import { EmpGlobalState } from "../../../Globalsate/EmpGlobalState";
const IdleADDing = ({ trigger, settrigger }) => {
  const [updateTaskData, setUpdateTaskData] = useState({
    taskdate: "",
    taskgiven: "",
    taskassigned: "",
    project: "",
    task: "",
    Approverremarks: "",
    empremarks: "",
    worked: "",
    clocked: "",
    utilised: "",
    efficiency: "",
    taskStatus: "",
    approvedstatus: "",
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
            <div className="headerfont bg-indigo-700 text-white flex justify-between  lg:py-2 lg:pl-2 lg:text-xl md:text-xl text-xl ">
              <div>
                <h1>Daily update</h1>
              </div>
              <div
                onClick={() => {
                  Singledatadispatch({
                    type: "normal",
                  });
                }}
              >
                <h1 className="font-bold text-2xl text-white pr-5 hover:text-3xl">
                  X
                </h1>
              </div>
            </div>

            <div className="lg:min-w-[400px]  text-base flex flex-column justify-center overflow-auto">
              <form onSubmit={ontaskUpdateSubmit}>
                <div className="flex flex-row IdleAdd-inner bg-white-300">
                  <div className=" min-h-[8vh]   space-y-3 ">
                    <div className="  flex py-1 px-2 items-center ">
                      <SelectorFrom
                        labeled="project"
                        labeldesign={"text-gray-800  text-medium"}
                        OptionData={Object.keys(initialState1.project)}
                        sizewidth="5"
                        setTrigger={setUpdateTaskData}
                        Trigger={updateTaskData}
                        Triggername="project"
                      />
                    </div>

                    <div className="  flex py-1 px-2 items-center ">
                      <SelectorFrom
                        labeled="task"
                        labeldesign={"text-gray-800  text-medium"}
                        OptionData={Object.keys(initialState1.project)}
                        sizewidth="5"
                        setTrigger={setUpdateTaskData}
                        Trigger={updateTaskData}
                        Triggername="task"
                      />
                    </div>

                    <div className="">
                      <div>
                        <label
                          htmlFor="taskdate"
                          className="text-gray-800  text-medium"
                        >
                          Date
                        </label>
                      </div>
                      <div>
                        <input
                          id="taskdate"
                          type="date"
                          name="taskdate"
                          placeholder="taskdate"
                          size="4"
                          onChange={(e) => {
                            onChangeUpdate(e);
                          }}
                          className="resize-none border-indigo-800 rounded-md border-2 min-w-[200px] md:min-w-[200px] lg:min-w-[200px] p-2"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label
                          htmlFor="worked"
                          className="text-gray-800  text-medium"
                        >
                          worked Hours
                        </label>
                      </div>
                      <div>
                        <input
                          id="worked"
                          type="text"
                          name="worked"
                          placeholder="worked hours "
                          size="4"
                          onChange={(e) => {
                            onChangeUpdate(e);
                          }}
                          className="resize-none border-indigo-800 rounded-md border-2 min-w-[200px] md:min-w-[200px] lg:min-w-[200px] p-2"
                        />
                      </div>
                    </div>

                    <div>
                      <div>
                        <label
                          htmlFor="clocked"
                          className="min-w-[100px] text-gray-800  text-medium"
                        >
                          clocked Hours
                        </label>
                      </div>

                      <input
                        id="clocked"
                        type="text"
                        name="clocked"
                        placeholder="clocked hours"
                        onChange={(e) => {
                          onChangeUpdate(e);
                        }}
                        size="4"
                        className="resize-none border-indigo-800 rounded-md border-2 min-w-[200px] md:min-w-[200px] lg:min-w-[200px] p-2"
                      />
                    </div>
                    <div>
                      <div>
                        <label
                          htmlFor="empremarks"
                          className="min-w-[150px] text-gray-800  text-medium"
                        >
                          Employee Remarks
                        </label>
                      </div>

                      <textarea
                        id="empremarks"
                        name="empremarks"
                        type="text"
                        rows="2"
                        cols="30"
                        placeholder="employee remarks about project task"
                        onChange={(e) => {
                          onChangeUpdate(e);
                        }}
                        className="resize-none border-indigo-800 rounded-md border-2 max-w-[200px] lg:min-w-[200px] md:min-w-[200px]"
                        maxLength="70"
                      ></textarea>
                    </div>

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
