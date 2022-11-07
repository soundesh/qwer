import React, { useContext, useState } from "react";
import { EmpGlobalState } from "../../../Globalsate/EmpGlobalState";
import { Paper } from "@mui/material";
import moment from "moment";
const EmpLeaveAdd = () => {
  const [ApplyLeave, setApplyLeave] = useState({
    date: " ",
    to: " ",
    from: " ",
    leaveType: " ",
    reason: "",
    Days: " ",
    reasonleave: "",
  });

  const { dataleave, datadispatchleave } = useContext(EmpGlobalState);
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
    const value1 = new Date(ApplyLeave.from.split("/").reverse().join("-"));
    const value2 = new Date(ApplyLeave.to.split("/").reverse().join("-"));

    if (value1 !== " " && value2 !== " ") {
      var diff = value2.getTime() - value1.getTime();

      var daydiff = diff / (1000 * 60 * 60 * 24);
      if (daydiff + 1 <= 0) {
        ApplyLeave.Days = "0";
        return value3;
      }
      ApplyLeave.Days = daydiff + 1;
      return daydiff + 1;
    }
    ApplyLeave.Days = 0;
    return value3;
  };

  const onChangeapplyLeave = (e) => {
    const { name, value } = e.target;
    setApplyLeave({
      ...ApplyLeave,
      [name]: value,
      date: today(),
    });
  };

  const onsubmitApplyLeave = (e) => {
    e.preventDefault();
    datadispatchleave({
      type: "normal",
    });
    if (isNaN(ApplyLeave.Days) || ApplyLeave.Days === "0") {
      window.alert("please click valid calender date");
    } else {
      console.log("validate");
    }
  };

  return (
    <div>
      {dataleave.createState ? null : (
        <div className="lg:mx-1 mx-1   lg:max-w-full md:max-w-full lg:min-w-[400px] rounded-lg max-w-[270px] justify-center ">
          <Paper>
            <div className=" border-2 border-gray-400  p-4 rounded-lg">
              <div className="headerfont bg-indigo-700 text-white flex justify-between  lg:py-2 lg:pl-2 lg:text-xl md:text-xl text-xl ">
                <div>
                  <h1>Apply Leave</h1>
                </div>
                <div
                  onClick={() => {
                    datadispatchleave({
                      type: "normal",
                    });
                  }}
                >
                  <h1 className="font-bold text-2xl text-white pr-5 hover:text-3xl">
                    X
                  </h1>
                </div>
              </div>

              <form
                onSubmit={onsubmitApplyLeave}
                className=" flex flex-col items-center justify-center   "
              >
                <div>
                  <div className="max-w-[270px] p-1  flex flex-col m-1   ">
                    <label
                      htmlFor="to"
                      className="text-blue-400  max-h-[50px] text-base uppercase "
                    >
                      Apply Date
                    </label>

                    <input
                      type="text"
                      name="Date"
                      value={TodayDate}
                      readOnly
                      size={10}
                      className="resize-none border-indigo-800 rounded-md border-2 min-w-[200px] md:min-w-[200px] lg:min-w-[140px] p-2"
                      onChange={(e) => {
                        onChangeapplyLeave(e);
                      }}
                    />
                  </div>
                  <div className="max-w-[270px] p-1  flex flex-col m-1   ">
                    <label
                      htmlFor="leaveType"
                      className="text-blue-400  max-h-[50px] text-base uppercase "
                    >
                      Leave type
                    </label>
                    <select
                      name="leaveType"
                      id="leaveType"
                      className="resize-none border-indigo-800 rounded-md border-2 min-w-[200px] md:min-w-[200px] lg:min-w-[140px] p-2"
                      onChange={(e) => {
                        onChangeapplyLeave(e);
                      }}
                    >
                      <option value="select">select</option>
                      <option value="CL">CL</option>
                      <option value="EL">EL</option>
                      <option value="CompOff">Comp OFF</option>
                      <option value="RH">RH</option>
                    </select>
                  </div>

                  <div
                    key="reason"
                    className="max-w-[270px] p-1  flex flex-col m-1   "
                  >
                    <label
                      htmlFor="reason"
                      className="text-blue-400  text-base uppercase"
                    >
                      reason
                    </label>

                    <input
                      id="reason"
                      type="text"
                      name="reason"
                      placeholder="reason"
                      size="4"
                      onChange={(e) => {
                        onChangeapplyLeave(e);
                      }}
                      className="resize-none border-indigo-800 rounded-md border-2 min-w-[200px] md:min-w-[200px] lg:min-w-[140px] p-2"
                    />
                  </div>

                  <div className="max-w-[270px] p-1  flex flex-col m-1   ">
                    <label
                      htmlFor="to"
                      className="text-blue-400  max-h-[50px] text-base uppercase "
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="from"
                      className="resize-none border-indigo-800 rounded-md border-2 min-w-[200px] md:min-w-[200px] lg:min-w-[140px] p-2"
                      onChange={(e) => {
                        setApplyLeave({
                          ...ApplyLeave,
                          from: moment(e.target.value).format("DD/MM/YYYY"),
                        });
                      }}
                    />
                  </div>
                  <div className="max-w-[270px] p-1  flex flex-col m-1   ">
                    <label
                      htmlFor="to"
                      className="text-blue-400  max-h-[50px] text-base uppercase "
                    >
                      Last Date
                    </label>
                    <input
                      type="date"
                      name="to"
                      className="resize-none border-indigo-800 rounded-md border-2 min-w-[200px] md:min-w-[200px] lg:min-w-[140px] p-2"
                      onChange={(e) => {
                        setApplyLeave({
                          ...ApplyLeave,
                          to: moment(e.target.value).format("DD/MM/YYYY"),
                        });
                      }}
                    />
                  </div>

                  <div className="max-w-[270px] p-1  flex flex-col m-1   ">
                    <label
                      htmlFor="reasonleave"
                      className="text-blue-400  max-h-[50px] text-base uppercase "
                    >
                      reason in Detail
                    </label>
                    <textarea
                      id="reasonleave"
                      name="reasonleave"
                      rows="3"
                      cols="25"
                      placeholder="reason in detailed"
                      className="py-1 px-2 resize-none border-indigo-800 rounded-md border-2 min-w-[200px] md:min-w-[200px] lg:min-w-[140px]"
                      maxLength="70"
                      onChange={(e) => {
                        onChangeapplyLeave(e);
                      }}
                    ></textarea>
                  </div>
                  <div className="max-w-[270px] p-1  flex flex-col m-1   ">
                    <h1 className="text-blue-400  max-h-[50px] text-base uppercase ">
                      Total Day
                    </h1>
                    <p className="px-4 py-2 border border-gray-400">
                      {totalDayLeave() || 0}
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="hover:bg-blue-800 rounded-lg bg-blue-600  text-white flex justify-center py-2 px-2 items-center"
                >
                  Add Leave
                </button>
              </form>
            </div>
          </Paper>
        </div>
      )}
    </div>
  );
};

export default EmpLeaveAdd;
