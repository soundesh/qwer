import React, { useContext, useState, useEffect } from "react";
import { EmpGlobalState } from "../../../Globalsate/EmpGlobalState";
import { Paper } from "@mui/material";
import SelectorFrom from "../../../assitComponet/SelectorFrom";
import ReuseButton from "../../../assitComponet/button/ReuseButton";
const EmpLeaveVIewDetail = ({ headerData }) => {
  const { dataleave, datadispatchleave } = useContext(EmpGlobalState);

  const [updateTaskData, setUpdateTaskData] = useState({
    id: "23546432",
    user: "",
    empId: "",

    date: "",
    from: "",
    to: "",
    lop: "",
    Days: "",
    leaveType: "",
    reason: "",
    reasonleave: "",
    L1aproverandremarks: "",
    L2aproverandremarks: "",
    L3aproverandreamarks: "",
  });
  useEffect(() => {
    if (dataleave.projectdetail !== {}) {
      setUpdateTaskData(dataleave.projectdetail);
    }
  }, [dataleave]);

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
  const TodayDate = today();

  const totalDayLeave = () => {
    const value3 = "0";
    const value1 = new Date(updateTaskData.from);
    const value2 = new Date(updateTaskData.to);
    if (value1 !== " " && value2 !== " ") {
      var diff = value2.getTime() - value1.getTime();

      var daydiff = diff / (1000 * 60 * 60 * 24);
      if (daydiff + 1 <= 0) {
        updateTaskData.Days = "0";
        return value3;
      }
      updateTaskData.Days = daydiff + 1;
      return daydiff + 1;
    }
    updateTaskData.Days = 0;
    return value3;
  };

  const onChangeUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateTaskData({
      ...updateTaskData,
      [name]: value,
    });
    console.log(updateTaskData);
  };
  const ontaskUpdateSubmit = async (e) => {
    console.log("emp task update ", updateTaskData);
    e.preventDefault();
  };

  return (
    <div>
      {dataleave.showdetail ? (
        <Paper className="flex flex-col items-center justify-center">
          <div className="lg:mx-1 mx-1  lg:max-w-full md:max-w-full lg:min-w-[500px] min-w-[280px] justify-center lg:my-2">
            <div className="headerfont bg-indigo-700 text-white flex justify-between  lg:py-2 lg:pl-2 lg:text-xl md:text-xl text-xl ">
              <div>
                <h1>Leave Detail</h1>
              </div>
              <div
                onClick={() => {
                  datadispatchleave({
                    type: "normal",
                    value: dataleave.projectdetail,
                  });
                }}
              >
                <h1 className="font-bold text-2xl text-white pr-5 hover:text-3xl">
                  X
                </h1>
              </div>
            </div>
            <form
              onSubmit={ontaskUpdateSubmit}
              className="flex flex-col items-center justify-center"
            >
              {dataleave.editdetail ? (
                <div className="lg:flex md:flex md:flex-wrap md:pt-1 lg:flex-wrap lg:pt-1  rounded-[4px] lg:mx-2">
                  {Object.keys(dataleave.projectdetail).map((item, index) => {
                    if (Object.keys(dataleave.projectdetail)[0] === item) {
                      return <React.Fragment key={index}></React.Fragment>;
                    }
                    return (
                      <div
                        key={index}
                        className="min-w-[150px] p-1  max-w-[280px] m-1 max-h-[50pxpx] "
                      >
                        <div className="text-blue-400  text-base uppercase ">
                          {headerData[index]}
                        </div>
                        <div className="ml-4 text-gray-500    text-sm ">
                          {Object.values(dataleave.projectdetail)[index]}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="lg:flex md:flex md:flex-wrap md:pt-1 lg:flex-wrap lg:pt-1 ">
                  {Object.keys(dataleave.projectdetail).map((item, index) => {
                    if (index >= 11) {
                      return (
                        <div
                          key={index}
                          className="min-w-[150px] p-1  max-w-[280px] m-1 max-h-[50pxpx] "
                        >
                          <div className="text-blue-400  text-base uppercase ">
                            {headerData[index]}
                          </div>
                          <div className="ml-4 text-gray-500    text-sm ">
                            {Object.values(dataleave.projectdetail)[index]}
                          </div>
                        </div>
                      );
                    }

                    if (Object.keys(dataleave.projectdetail)[0] === item) {
                      return <React.Fragment key={index}></React.Fragment>;
                    }

                    if (index <= 3) {
                      return (
                        <div
                          key={index}
                          className="min-w-[150px] p-1  max-w-[280px] m-1 max-h-[50pxpx] "
                        >
                          <div className="text-blue-400  text-base uppercase ">
                            {headerData[index]}
                          </div>
                          <div className="ml-4 text-gray-500    text-sm ">
                            {Object.values(dataleave.projectdetail)[index]}
                          </div>
                        </div>
                      );
                    }

                    if (index >= 4 && index <= 5) {
                      return (
                        <div
                          key={Object.keys(dataleave.projectdetail)[index]}
                          className="max-w-[140px] p-1   m-1  mr-4 "
                        >
                          <label
                            htmlFor={
                              Object.keys(dataleave.projectdetail)[index]
                            }
                            className="text-blue-400  text-base uppercase"
                          >
                            {headerData[index]}
                          </label>

                          <input
                            id={Object.keys(dataleave.projectdetail)[index]}
                            type="date"
                            defaultValue={Object.keys(dataleave.projectdetail)
                              [index].split("/")
                              .reverse()
                              .join("-")}
                            name={Object.keys(dataleave.projectdetail)[index]}
                            placeholder={
                              Object.keys(dataleave.projectdetail)[index]
                            }
                            size="4"
                            onChange={(e) => {
                              onChangeUpdate(e);
                            }}
                            className=" outline-none border-indigo-800 rounded-md border-2 min-w-[150px] md:min-w-[200px] lg:min-w-[140px] p-2"
                          />
                        </div>
                      );
                    }

                    if (index === 8) {
                      return (
                        <div className="  flex py-1 px-2 items-center ">
                          <SelectorFrom
                            labeled="Leave Type"
                            defaultValue={updateTaskData.leaveType}
                            labeldesign="text-blue-400  text-base uppercase"
                            OptionData={[
                              "Select",
                              "CL",
                              "EL",
                              "COMP OFF",
                              "RH",
                            ]}
                            sizewidth="1"
                            setTrigger={setUpdateTaskData}
                            Trigger={updateTaskData}
                            Triggername="leaveType"
                          />
                        </div>
                      );
                    }

                    if (index === 9) {
                      return (
                        <div
                          key={Object.keys(dataleave.projectdetail)[index]}
                          className="max-w-[140px] p-1 m-1"
                        >
                          <label
                            htmlFor={
                              Object.keys(dataleave.projectdetail)[index]
                            }
                            className="text-blue-400  text-base uppercase"
                          >
                            {headerData[index]}
                          </label>

                          <input
                            id={Object.keys(dataleave.projectdetail)[index]}
                            type="text"
                            defaultValue={updateTaskData.reason}
                            name={Object.keys(dataleave.projectdetail)[index]}
                            placeholder={
                              Object.keys(dataleave.projectdetail)[index]
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
                    if (index === 10) {
                      return (
                        <div key="reasonleave">
                          <div>
                            <label
                              htmlFor="reasonleave"
                              className="text-blue-400  max-h-[50px] text-base uppercase "
                            >
                              reason leave
                            </label>
                          </div>

                          <textarea
                            id="reasonleave"
                            name="reasonleave"
                            defaultValue={updateTaskData.reasonleave}
                            type="text"
                            rows="2"
                            cols="30"
                            placeholder=" reason for leave"
                            onChange={(e) => {
                              onChangeUpdate(e);
                            }}
                            className="resize-none border-indigo-800 rounded-md border-2 max-w-[200px] lg:min-w-[200px] md:min-w-[200px]"
                            maxLength="70"
                          ></textarea>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={index}
                        className="min-w-[150px] p-1  max-w-[280px] m-1 max-h-[50pxpx] "
                      >
                        <div className="text-blue-400  text-base uppercase ">
                          {headerData[index]}
                        </div>
                        <div className="ml-4 text-gray-500    text-sm ">
                          {Object.values(dataleave.projectdetail)[index]}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div>
                {dataleave.editdetail ? (
                  <div className="max-h-[40px] w-full  flex flex-row items-center justify-center">
                    <ReuseButton
                      btncolor="blue"
                      onClick={() => {
                        datadispatchleave({
                          type: "view",
                          value: dataleave.projectdetail,
                        });
                      }}
                      btntype="button"
                      btnname="view"
                    />

                    <ReuseButton
                      btncolor="blue"
                      onclicked={() => {
                        datadispatchleave({
                          type: "edit",
                          value: dataleave.projectdetail,
                        });
                      }}
                      btntype="button"
                      btnname="edit"
                    />

                    <ReuseButton
                      btncolor="red"
                      onclicked={() => {
                        datadispatchleave({
                          type: "delete",
                          value: dataleave.projectdetail,
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

export default EmpLeaveVIewDetail;
