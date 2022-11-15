import React, { useContext, useState } from "react";
import { EmpGlobalState } from "../../../Globalsate/EmpGlobalState";
import ReuseButton from "../../../assitComponet/button/ReuseButton";
import ReuseTextInput from "../../../assitComponet/Input/ReuseTextInput";
import Reuseinput from "../../../assitComponet/Input/Reuseinput";
import ReuseInputDate from "../../../assitComponet/Input/ReuseInputDate";

import SelectorFrom from "../../../assitComponet/Input/SelectorFrom";
import VIewdetailheader from "../../../assitComponet/Viewdetail/VIewdetailheader";
import { Paper } from "@mui/material";
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

      console.log(ApplyLeave);
    }
  };

  return (
    <div>
      {dataleave.createState ? null : (
        <div className="lg:mx-1 mx-1   lg:max-w-full md:max-w-full lg:min-w-[400px] rounded-lg max-w-[270px] justify-center ">
          <Paper>
            <div className=" border-2 border-gray-400  p-4 rounded-lg">
              <VIewdetailheader
                title="Apply Leave"
                Singledatadispatch={datadispatchleave}
              />

              <form
                onSubmit={onsubmitApplyLeave}
                className=" flex flex-col items-center justify-center   "
              >
                <div>
                  <div className="hidden max-w-[270px] p-1  flex flex-col m-1   ">
                    <ReuseInputDate
                      labelname="Apply Date"
                      name="date"
                      defaultValue={today().split("-").reverse().join("/")}
                      setTrigger={setApplyLeave}
                      Trigger={ApplyLeave}
                      inputdesign={"border-indigo-800 max-w-[200px]"}
                    />
                  </div>
                  <div className="max-w-[270px] p-1  flex flex-col m-1   ">
                    <SelectorFrom
                      labeled="Leave Type"
                      name="leaveType"
                      defaultValue={ApplyLeave.leaveType}
                      labeldesign="text-blue-400  text-base uppercase"
                      OptionData={["Select", "CL", "EL", "COMP OFF", "RH"]}
                      sizewidth="border-indigo-800"
                      setTrigger={setApplyLeave}
                      Trigger={ApplyLeave}
                    />
                  </div>

                  <div
                    key="reason"
                    className="max-w-[270px] p-1  flex flex-col m-1   "
                  >
                    <Reuseinput
                      name="reason"
                      onchanged={onChangeapplyLeave}
                      labelname={"Reason"}
                      inputdesign="max-w-[200px] border-indigo-800 "
                    />
                  </div>

                  <div className="max-w-[270px] p-1  flex flex-col m-1   ">
                    <ReuseInputDate
                      labelname="Start Date"
                      name="from"
                      defaultValue={today().split("-").reverse().join("/")}
                      setTrigger={setApplyLeave}
                      Trigger={ApplyLeave}
                      inputdesign={"border-indigo-800 max-w-[200px]"}
                    />
                  </div>
                  <div className="max-w-[270px] p-1  flex flex-col m-1   ">
                    <ReuseInputDate
                      labelname="Last Date"
                      name="to"
                      defaultValue=""
                      setTrigger={setApplyLeave}
                      Trigger={ApplyLeave}
                      inputdesign={"border-indigo-800 max-w-[200px]"}
                    />
                  </div>

                  <div className="max-w-[270px] p-1  flex flex-col m-1   ">
                    <ReuseTextInput
                      name="reasonleave"
                      onchanged={onChangeapplyLeave}
                      labelname="Reason leave"
                      inputdesign=" border-indigo-800 "
                      maxLength="70"
                      rows="2"
                      cols="30"
                    />
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

                <ReuseButton
                  btncolor="blue"
                  btntype="submit"
                  btnname=" Add Leave"
                />
              </form>
            </div>
          </Paper>
        </div>
      )}
    </div>
  );
};

export default EmpLeaveAdd;
