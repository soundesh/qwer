import React, { useState } from "react";

import SelectorFrom from "../../../assitComponet/SelectorFrom";
import Paper from "@mui/material/Paper";
import "./idleAdd.css";
const IdleADDing = ({ initialState, trigger, settrigger }) => {
  const [updateTaskData, setUpdateTaskData] = useState(initialState[0]);

  const onChangeUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateTaskData({ ...updateTaskData, [name]: value });
  };

  const ontaskUpdateSubmit = (e) => {
    e.preventDefault();
    console.log("emp task update ", updateTaskData);
  };

  const project = ["Office ui", "office data", "3d cad website"];
  return (
    <div className="IdleAdd lg:text-base ">
      <Paper>
        <div className="lg:min-w-[400px]  text-base flex flex-column justify-center overflow-auto">
          <form method="GET" id="my_form2" onSubmit={ontaskUpdateSubmit}>
            <div className="flex flex-row IdleAdd-inner bg-white-300">
              <div className=" min-h-[8vh]  lg:p-10  space-y-3 ">
                <div className="close-btn btnFocus inline-block bg-red-600 m-1  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  <button
                    type="button"
                    className="btnFocus px-6 py-2.5 "
                    onClick={() => {
                      settrigger(!trigger);
                    }}
                  >
                    Close
                  </button>
                </div>
                <div>
                  <h1>Add Idle Work</h1>
                </div>

                <div className="  flex py-1 px-2 items-center ">
                  <SelectorFrom
                    labeled="Project"
                    OptionData={project}
                    sizewidth="5"
                    Date="18 oct 2021"
                  />
                </div>

                <div className="">
                  <div>
                    <label htmlFor=" worked">worked Hours</label>
                  </div>
                  <div>
                    <input
                      id=" worked"
                      type="text"
                      name=" worked"
                      form="my_form2"
                      placeholder=" worked hours "
                      size="4"
                      onChange={(e) => {
                        onChangeUpdate(e);
                      }}
                      className="resize-none border-indigo-800 rounded-md border-2 min-w-[200px] md:min-w-[200px] lg:min-w-[200px] p-2"
                    />
                  </div>
                </div>

                <div className="">
                  <div>
                    <label htmlFor="clocked" className="min-w-[100px]">
                      clocked Hours
                    </label>
                  </div>

                  <input
                    id="clocked"
                    type="text"
                    name="clocked"
                    form="my_form2"
                    placeholder="clocked hours"
                    onChange={(e) => {
                      onChangeUpdate(e);
                    }}
                    size="4"
                    className="resize-none border-indigo-800 rounded-md border-2 min-w-[200px] md:min-w-[200px] lg:min-w-[200px] p-2"
                  />
                </div>

                <div className=" ">
                  <div>
                    <label htmlFor=" utilised" className="min-w-[100px]">
                      utilised Hours
                    </label>
                  </div>

                  <input
                    id=" utilised"
                    type="text"
                    name=" utilised"
                    form="my_form2"
                    placeholder=" utilised hours"
                    size="4"
                    onChange={(e) => {
                      onChangeUpdate(e);
                    }}
                    className="resize-none border-indigo-800 rounded-md border-2 min-w-[200px] md:min-w-[200px] lg:min-w-[200px] p-2"
                  />
                </div>

                <div className="">
                  <div>
                    <label htmlFor="empremarks" className="min-w-[150px]">
                      Employee Remarks
                    </label>
                  </div>

                  <textarea
                    id="empremarks"
                    name="empremarks"
                    type="text"
                    rows="2"
                    cols="30"
                    form="my_form2"
                    placeholder="employee remarks about project task"
                    onChange={(e) => {
                      onChangeUpdate(e);
                    }}
                    className="resize-none border-indigo-800 rounded-md border-2 max-w-[200px] lg:min-w-[200px] md:min-w-[200px]"
                    maxLength="70"
                  ></textarea>
                </div>

                <div className="flex  items-center justify-center flex-row py-1 px-1  ">
                  <div className=" btnFocus inline-block bg-blue-600 m-1  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    <button
                      type="submit"
                      form="my_form2"
                      className="btnFocus px-6 py-2.5 "
                      onClick={() => {
                        settrigger(!trigger);
                      }}
                    >
                      Create Idle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default IdleADDing;
