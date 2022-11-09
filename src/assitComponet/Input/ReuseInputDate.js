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
  return (
    <div className="flex flex-col mx-3">
      <label htmlFor={name} className="text-blue-400  text-base uppercase">
        {labelname}
      </label>
      <input
        id={name}
        type="date"
        defaultValue={defaultValue.split("/").reverse().join("-")}
        name={name}
        size="4"
        onChange={(e) => {
          setTrigger({
            ...Trigger,
            [name]: moment(e.target.value).format("DD/MM/YYYY"),
          });
        }}
        className={`resize-none ${inputdesign} rounded-md border-2 w-[200px] lg:w-[200px] md:w-[200px]`}
      />
    </div>
  );
};

export default ReuseInputDate;
