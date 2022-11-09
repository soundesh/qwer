import React, { useState, useEffect } from "react";
import ReuseButton from "../../../assitComponet/button/ReuseButton";
import { Paper } from "@mui/material";
import SelectorFrom from "../../../assitComponet/SelectorFrom";
const EmpProjectRegister = ({ settriggertask, triggertask }) => {
  const [updateTaskData, setUpdateTaskData] = useState({
    project: "",
    task: "",
  });
  const [ProjectData, setProjectData] = useState({
    project: "",
  });

  const onChangeUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateTaskData({
      ...updateTaskData,
      [name]: value,
    });
    console.log(updateTaskData);
  };
  const ontaskUpdateSubmit = (e) => {
    e.preventDefault();
    console.log("emp task update ", updateTaskData);
  };
  const onChangeproject = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...ProjectData,
      [name]: value,
    });
    console.log(ProjectData);
  };
  const onProjectSubmit = (e) => {
    e.preventDefault();
    console.log("ProjectData ", ProjectData);
  };
  //   <div className="my-1 ">
  //   <Paper elevation={3}>
  //     <div className="flex flex-row items-center justify-center max-w-[260px] bg-indigo-700 rounded-[4px] border border-indigo-600">
  //       <p className=" text-xs p-2 max-w-[220px] bg-white">
  //         office conect dATA HAS BEEN FIND OUT register update delete
  //         office conect dATA HAS BEEN FIND OUT register update delete
  //       </p>
  //       <div className=" text-white   text-base lg:text-xl  py-3 px-2    bg-indigo-700  flex itmes-center justify-center">
  //         <p>X</p>
  //       </div>
  //     </div>
  //   </Paper>
  // </div>

  useEffect(() => {}, [updateTaskData]);
  return (
    <div>
      {triggertask ? (
        <div className="shadow shadow-xl bg-white py-2 border-2 border-indigo-700 min-w-[300px] max-w-[300px] rounded-[5px]">
          <div className="headerfont bg-indigo-700 text-white flex justify-between  lg:py-2  lg:text-xl md:text-xl text-xl ">
            <div className="pl-2">
              <h1>Project</h1>
            </div>
            <div
              onClick={() => {
                settriggertask(false);
              }}
            >
              <h1 className="font-bold text-2xl text-white pr-5 hover:text-3xl">
                X
              </h1>
            </div>
          </div>
          <form
            onSubmit={onProjectSubmit}
            className=" flex flex-col lg:flex-col  flex-wrap items-center justify-center    m-1 p-1"
          >
            <div className="  flex py-1 px-2 items-center  ">
              <div key="project" className="max-w-[160px] p-1 mb-2">
                <label
                  htmlFor="project"
                  className="text-blue-400  text-base uppercase"
                >
                  Create Project
                </label>
                <input
                  id="project"
                  type="text"
                  name="project"
                  placeholder="project"
                  size="4"
                  onChange={(e) => {
                    onChangeproject(e);
                  }}
                  className="resize-none border-indigo-800 rounded-md border-2 min-w-[200px] md:min-w-[200px] lg:min-w-[140px] p-2"
                />
              </div>
            </div>
            <div className="flex flex-row justisy-center">
              <ReuseButton btncolor="blue" btntype="submit" btnname="create" />
            </div>
          </form>

          <form
            onSubmit={ontaskUpdateSubmit}
            method="get"
            id="form_1"
            className=" flex lg:flex-col  flex-wrap items-center justify-center    m-1 p-1"
          >
            <div className=" text-blue-700 w-full uppercase   bg-indigo-100 py-2    text-base lg:text-xl  p-1  flex itmes-center justify-center">
              <p>create task</p>
            </div>
            <div className="flex py-1 px-2 items-center  ">
              <SelectorFrom
                labeled="Project"
                selectdesign="flex flex-col -ml-[40px] lg:ml-0 md:ml-0"
                labeldesign="text-blue-400 min-w-[80px]   text-base uppercase  flex pt-2 "
                OptionData={[
                  "Select",
                  "office connect",
                  "NPD",
                  "titan Project",
                ]}
                sizewidth="1"
                form="form_1"
                setTrigger={setUpdateTaskData}
                Trigger={updateTaskData}
                Triggername="project"
              />
            </div>

            <div key="task" className="max-w-[200px] mb-2">
              <label
                htmlFor="task"
                className="text-blue-400  text-base uppercase"
              >
                Task
              </label>
              <input
                id="task"
                type="text"
                name="task"
                form="form_1"
                placeholder="task"
                size="4"
                onChange={(e) => {
                  onChangeUpdate(e);
                }}
                className="resize-none border-indigo-800 rounded-md border-2 lg:min-w-[200px] min-w-[160px]  md:min-w-[200px]"
              />
            </div>
            <div className="flex flex-row justisy-center">
              <ReuseButton
                btncolor="blue"
                form="form_1"
                btntype="submit"
                btnname="submit"
              />
            </div>
          </form>

          <hr></hr>

          <div className="flex flex-col min-w-[300px] Scrollbardesign pt-4 items-center justify-center max-h-[300px] overflow-auto ">
            <div className="my-1 ">
              <Paper elevation={3}>
                <div className="flex flex-row items-center justify-center max-w-[260px] rounded-[4px] border border-indigo-600">
                  <p className=" text-xs p-2 max-w-[220px]">
                    office conect dATA HAS BEEN FIND OUT
                  </p>
                  <div className=" text-white   text-base lg:text-xl  py-3 px-2    bg-indigo-700  flex itmes-center justify-center">
                    <p>X</p>
                  </div>
                </div>
              </Paper>
            </div>

            <div className="my-1 ">
              <Paper elevation={3}>
                <div className="flex flex-row items-center justify-center max-w-[260px] rounded-[4px] border border-indigo-600">
                  <p className=" text-xs p-2 max-w-[220px]">
                    office conect dATA HAS BEEN FIND OUT
                  </p>
                  <div className=" text-white   text-base lg:text-xl  py-3 px-2    bg-indigo-700  flex itmes-center justify-center">
                    <p>X</p>
                  </div>
                </div>
              </Paper>
            </div>
            <div className="my-1 ">
              <Paper elevation={3}>
                <div className="flex flex-row items-center justify-center max-w-[260px] rounded-[4px] border border-indigo-600">
                  <p className=" text-xs p-2 max-w-[220px]">
                    office conect dATA HAS BEEN FIND OUT
                  </p>
                  <div className=" text-white   text-base lg:text-xl  py-3 px-2    bg-indigo-700  flex itmes-center justify-center">
                    <p>X</p>
                  </div>
                </div>
              </Paper>
            </div>
            <div className="my-1 ">
              <Paper elevation={3}>
                <div className="flex flex-row items-center justify-center max-w-[260px] bg-indigo-700 rounded-[4px] border border-indigo-600">
                  <p className=" text-xs p-2 max-w-[220px] bg-white">
                    office conect dATA HAS BEEN FIND OUT register update delete
                    office conect dATA HAS BEEN FIND OUT register update delete
                  </p>
                  <div className=" text-white   text-base lg:text-xl  py-3 px-2    bg-indigo-700  flex itmes-center justify-center">
                    <p>X</p>
                  </div>
                </div>
              </Paper>
            </div>
            <div className="my-1 ">
              <Paper elevation={3}>
                <div className="flex flex-row items-center justify-center max-w-[260px] rounded-[4px] border border-indigo-600">
                  <p className=" text-xs p-2 max-w-[220px]">
                    office conect dATA HAS BEEN FIND OUT register update delete
                  </p>
                  <div className=" text-white   text-base lg:text-xl  py-3 px-2    bg-indigo-700  flex itmes-center justify-center">
                    <p>X</p>
                  </div>
                </div>
              </Paper>
            </div>
            <div className="my-1 ">
              <Paper elevation={3}>
                <div className="flex flex-row items-center justify-center max-w-[260px] rounded-[4px] border border-indigo-600">
                  <p className=" text-xs p-2 max-w-[220px]">
                    office conect dATA HAS BEEN FIND OUT register update delete
                  </p>
                  <div className=" text-white   text-base lg:text-xl  py-3 px-2    bg-indigo-700  flex itmes-center justify-center">
                    <p>X</p>
                  </div>
                </div>
              </Paper>
            </div>
            <div className="my-1 ">
              <Paper elevation={3}>
                <div className="flex flex-row items-center justify-center max-w-[260px] rounded-[4px] border border-indigo-600">
                  <p className=" text-xs p-2 max-w-[220px]">
                    office conect dATA HAS BEEN FIND OUT
                  </p>
                  <div className=" text-white   text-base lg:text-xl  py-3 px-2    bg-indigo-700  flex itmes-center justify-center">
                    <p>X</p>
                  </div>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EmpProjectRegister;
