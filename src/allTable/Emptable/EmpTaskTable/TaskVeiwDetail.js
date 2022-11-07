import React, { useContext, useState, useEffect } from "react";
import SelectorFrom from "../../../assitComponet/SelectorFrom";
import { EmpGlobalState } from "../../../Globalsate/EmpGlobalState";
import { Paper } from "@mui/material";
import ReuseButton from "../../../assitComponet/button/ReuseButton";
const TaskVeiwDetail = ({ headerData }) => {
  const { singledata, Singledatadispatch } = useContext(EmpGlobalState);

  const [updateTaskData, setUpdateTaskData] = useState({
    id: "1233",
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
  useEffect(() => {
    if (singledata.projectdetail !== {}) {
      setUpdateTaskData(singledata.projectdetail);
    }
  }, [singledata]);
  const onChangeUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateTaskData({
      ...updateTaskData,
      [name]: value,
    });
    console.log(updateTaskData);
  };
  const ontaskUpdateSubmit = (e) => {
    console.log(updateTaskData);

    e.preventDefault();

    Singledatadispatch({
      type: "normal",
    });

    console.log("emp task update ", updateTaskData);
  };
  return (
    <div>
      {singledata.showdetail ? (
        <Paper>
          <div className="p-4 border-2 border-gray-400 rounded-lg lg:mx-1 mx-1   lg:max-w-full md:max-w-full lg:min-w-[500px] max-w-[270px] justify-center lg:my-2">
            <Paper elevation={1}>
              <div className="headerfont bg-indigo-700 text-white flex justify-between  lg:py-2 lg:pl-2 lg:text-xl md:text-xl text-xl ">
                <div>
                  <h1>Project Detail</h1>
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
            </Paper>
            <form
              onSubmit={ontaskUpdateSubmit}
              className="flex flex-col items-center justify-center"
            >
              <div className="lg:flex md:flex md:flex-wrap md:pt-1 lg:flex-wrap lg:pt-1  rounded-[4px] lg:mx-2">
                {Object.keys(singledata.projectdetail).map((item, index) => {
                  if (Object.keys(singledata.projectdetail)[0] === item) {
                    return <React.Fragment key={index}></React.Fragment>;
                  }

                  if (index >= 4 && index <= 5) {
                    return (
                      <div
                        key={index}
                        className="min-w-[200px]   p-1 m-1  px-2 max-h-[150px]"
                      >
                        <div className="text-blue-400  max-h-[50px] text-base uppercase ">
                          {headerData[index]}
                        </div>
                        <div className="ml-4 p-0.5 text-gray-500 max-w-[140px]  text-sm  ">
                          {Object.values(singledata.projectdetail)[index]}
                        </div>
                      </div>
                    );
                  }
                  if (index > 5 && index <= 13) {
                    return <React.Fragment key={index}></React.Fragment>;
                  }

                  if (index === 1) {
                    return (
                      <div>
                        {singledata.editdetail ? (
                          <div
                            key={index}
                            className="min-w-[140px] p-1  max-w-[280px] m-1 max-h-[50pxpx] "
                          >
                            <div className="text-blue-400  text-base uppercase ">
                              {headerData[index]}
                            </div>
                            <div className="ml-4 text-gray-500    text-sm ">
                              {Object.values(singledata.projectdetail)[index]}
                            </div>
                          </div>
                        ) : (
                          <div
                            key={Object.keys(singledata.projectdetail)[index]}
                            className="max-w-[140px] p-1   m-1  mr-4 "
                          >
                            <label
                              htmlFor={
                                Object.keys(singledata.projectdetail)[index]
                              }
                              className="text-blue-400  text-base uppercase"
                            >
                              {headerData[index]}
                            </label>

                            <input
                              id={Object.keys(singledata.projectdetail)[index]}
                              type="date"
                              defaultValue={Object.values(
                                singledata.projectdetail
                              )
                                [index].split("/")
                                .reverse()
                                .join("-")}
                              name={
                                Object.keys(singledata.projectdetail)[index]
                              }
                              placeholder={
                                Object.keys(singledata.projectdetail)[index]
                              }
                              size="4"
                              onChange={(e) => {
                                onChangeUpdate(e);
                              }}
                              className=" outline-none border-indigo-800 rounded-md border-2 min-w-[150px] md:min-w-[200px] lg:min-w-[140px] p-2"
                            />
                          </div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <div
                      key={index}
                      className="min-w-[140px] p-1   max-w-[280px] m-1 max-h-[50pxpx] "
                    >
                      <div className="text-blue-400  text-base uppercase ">
                        {headerData[index]}
                      </div>
                      <div className="ml-4 text-gray-500    text-sm ">
                        {Object.values(singledata.projectdetail)[index]}
                      </div>
                    </div>
                  );
                })}
              </div>
              {singledata.editdetail ? (
                <div className="lg:flex md:flex md:flex-wrap md:pt-1 lg:flex-wrap lg:pt-1 ">
                  {Object.keys(singledata.projectdetail).map((item, index) => {
                    if (index >= 6 && index <= 7) {
                      return (
                        <div
                          key={index}
                          className="min-w-[220px]  max-w-[280px] m-1 max-h-[220px] "
                        >
                          <div className="text-blue-400  max-h-[50px] text-base uppercase ">
                            {headerData[index]}
                          </div>
                          <div className="ml-4 text-gray-500 max-w-[200px]  p-0.5  min-h-[60px] text-sm ">
                            {Object.values(singledata.projectdetail)[index]}
                          </div>
                        </div>
                      );
                    }

                    if (
                      index > 7 &&
                      index <= Object.keys(singledata.projectdetail).length
                    ) {
                      return (
                        <div
                          key={index}
                          className="min-w-[150px] p-1  max-w-[280px] m-1 max-h-[50pxpx] "
                        >
                          <div className="text-blue-400  text-base uppercase ">
                            {headerData[index]}
                          </div>
                          <div className="ml-4 text-gray-500    text-sm ">
                            {Object.values(singledata.projectdetail)[index]}
                          </div>
                        </div>
                      );
                    }

                    return <React.Fragment key={index}></React.Fragment>;
                  })}
                </div>
              ) : (
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    {Object.keys(singledata.projectdetail).map(
                      (item, index) => {
                        if (index === 6) {
                          return (
                            <div
                              key={index}
                              className="min-w-[220px]  max-w-[280px] m-1 max-h-[220px] "
                            >
                              <div className="text-blue-400  max-h-[50px] text-base uppercase ">
                                {headerData[index]}
                              </div>
                              <div className="ml-4 text-gray-500 max-w-[200px]  p-0.5  min-h-[60px] text-sm ">
                                {Object.values(singledata.projectdetail)[index]}
                              </div>
                            </div>
                          );
                        }

                        if (index === 7) {
                          return (
                            <div>
                              <div key="empremarks">
                                <div>
                                  <label
                                    htmlFor="empremarks"
                                    className="text-blue-400  max-h-[50px] text-base uppercase "
                                  >
                                    Employee Remarks
                                  </label>
                                </div>

                                <textarea
                                  id="empremarks"
                                  name="empremarks"
                                  type="text"
                                  defaultValue={
                                    Object.values(singledata.projectdetail)[
                                      index
                                    ]
                                  }
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
                            </div>
                          );
                        }

                        if (index === 10) {
                          return (
                            <div className="  flex py-1 px-2 items-center ">
                              <SelectorFrom
                                labeled="task Status "
                                defaultValue={
                                  singledata.projectdetail.taskStatus
                                }
                                labeldesign="text-blue-400  text-base uppercase"
                                OptionData={["Select", "complete", "pending"]}
                                sizewidth="1"
                                setTrigger={setUpdateTaskData}
                                Trigger={updateTaskData}
                                Triggername="taskStatus"
                              />
                            </div>
                          );
                        }

                        if (index > 7 && index < 11) {
                          return (
                            <div
                              key={Object.keys(singledata.projectdetail)[index]}
                              className="max-w-[140px] p-1   m-1  "
                            >
                              <label
                                htmlFor={
                                  Object.keys(singledata.projectdetail)[index]
                                }
                                className="text-blue-400  text-base uppercase"
                              >
                                {headerData[index]}
                              </label>

                              <input
                                id={
                                  Object.keys(singledata.projectdetail)[index]
                                }
                                type="text"
                                defaultValue={
                                  Object.values(singledata.projectdetail)[index]
                                }
                                name={
                                  Object.keys(singledata.projectdetail)[index]
                                }
                                placeholder={
                                  Object.keys(singledata.projectdetail)[index]
                                }
                                size="4"
                                onChange={(e) => {
                                  onChangeUpdate(e);
                                }}
                                className="resize-none border-indigo-800 rounded-md border-2 min-w-[200px] md:min-w-[200px] lg:min-w-[140px] p-2"
                              />
                            </div>
                          );
                        }
                        if (index === 13 || index === 11) {
                          return (
                            <div
                              key={index}
                              className="min-w-[150px] p-1  max-w-[280px] m-1 max-h-[50pxpx] "
                            >
                              <div className="text-blue-400  text-base uppercase ">
                                {headerData[index]}
                              </div>
                              <div className="ml-4 text-gray-500    text-sm ">
                                {Object.values(singledata.projectdetail)[index]}
                              </div>
                            </div>
                          );
                        }

                        return <React.Fragment key={index}></React.Fragment>;
                      }
                    )}
                  </div>
                </div>
              )}
              <div>
                {singledata.editdetail ? (
                  <div className="max-h-[40px] w-full  flex flex-row items-center justify-center">
                    <ReuseButton
                      btncolor="blue"
                      onClick={() => {
                        Singledatadispatch({
                          type: "view",
                          value: singledata.projectdetail,
                        });
                      }}
                      btntype="button"
                      btnname="view"
                    />

                    <ReuseButton
                      btncolor="blue"
                      onclicked={() => {
                        Singledatadispatch({
                          type: "edit",
                          value: singledata.projectdetail,
                        });
                      }}
                      btntype="button"
                      btnname="edit"
                    />

                    <ReuseButton
                      btncolor="red"
                      onclicked={() => {
                        Singledatadispatch({
                          type: "delete",
                          value: singledata.projectdetail,
                        });
                      }}
                      btntype="button"
                      btnname="delete"
                    />
                  </div>
                ) : (
                  <div className="flex flex-row justisy-center">
                    <ReuseButton
                      btncolor="blue"
                      btntype="submit"
                      btnname="submit"
                    />
                  </div>
                )}
              </div>
            </form>
          </div>
        </Paper>
      ) : null}
    </div>
  );
};

export default TaskVeiwDetail;
