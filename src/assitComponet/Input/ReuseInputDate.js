import React from "react";
import moment from "moment";
const ReuseInputDate = ({
  name,
  defaultValue,
  setTrigger,
  Trigger,
  Triggername,
  labelname,
  inputdesign,
}) => {
  //     <ReuseInputDate
  //     labelname="Date"
  //     name={
  //       Object.keys(singledata.projectdetail)[index]
  //     }
  //     defaultValue={
  //       Object.values(singledata.projectdetail)[index]
  //     }
  //     setTrigger={setUpdateTaskData}
  //     Trigger={updateTaskData}
  //     Triggername="taskdate"
  //     inputdesign={"border-indigo-800 max-w-[140px]"}
  //   />

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

  return (
    <div className="flex flex-col ">
      <label htmlFor={name} className="text-blue-400  text-base uppercase">
        {labelname}
      </label>
      <input
        id={name}
        type="date"
        defaultValue={
          defaultValue.split("/").reverse().join("-") ||
          today().split("/").reverse().join("-")
        }
        name={name}
        size="4"
        onChange={(e) => {
          setTrigger({
            ...Trigger,
            [name]: moment(e.target.value).format("DD/MM/YYYY"),
          });
        }}
        className={`resize-none ${inputdesign} m-1 rounded-md border-2 w-[200px] lg:w-[200px] md:w-[200px]`}
      />
    </div>
  );
};

export default ReuseInputDate;
