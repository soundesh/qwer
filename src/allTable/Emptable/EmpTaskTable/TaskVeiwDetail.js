import React, { useContext, useState, useEffect } from "react";
import useUpdateform from "../../../assitComponet/CustomHooks/useUpdateform";
import SelectorFrom from "../../../assitComponet/Input/SelectorFrom";
import { EmpGlobalState } from "../../../Globalsate/EmpGlobalState";
import Footerbtn from "../../../assitComponet/Viewdetail/Footerbtn";
import { Paper } from "@mui/material";

import SingleDatasize from "../../../assitComponet/Viewdetail/SingleDatasize";
import VIewdetailheader from "../../../assitComponet/Viewdetail/VIewdetailheader";
import ReuseTextInput from "../../../assitComponet/Input/ReuseTextInput";
import Reuseinput from "../../../assitComponet/Input/Reuseinput";
import ReuseInputDate from "../../../assitComponet/Input/ReuseInputDate";
const TaskVeiwDetail = ({ headerData }) => {
  const [updateTaskData, setUpdateTaskData] = useState();

  const { singledata, Singledatadispatch } = useContext(EmpGlobalState);
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
  const Datavalues = Object.values(...singledata.projectdetail);
  return (
    <div>
      {singledata.showdetail ? (
        <div className="pt-2 bg-white border-2 border-gray-400 rounded-lg    lg:max-w-full md:max-w-full lg:min-w-[500px] max-w-[270px] justify-center lg:my-2">
          <Paper>
            <VIewdetailheader
              title="Project Detail"
              Singledatadispatch={Singledatadispatch}
            />
            <form
              onSubmit={ontaskUpdateSubmit}
              className="flex flex-col items-center justify-center"
            >
              <div className="lg:flex md:flex md:flex-wrap md:pt-1 lg:flex-wrap lg:pt-1  rounded-[4px] lg:mx-2">
                {Datavalues.map((item, index) => {
                  if (Datavalues[0] === item) {
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
                          {Datavalues[index]}
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
                              {Datavalues[index]}
                            </div>
                          </div>
                        ) : (
                          <div key={index} className=" p-1   m-1  mr-4 ">
                            <ReuseInputDate
                              labelname="Date"
                              name={Datavalues[index]}
                              defaultValue={Datavalues[index]}
                              setTrigger={setUpdateTaskData}
                              Trigger={updateTaskData}
                              Triggername="taskdate"
                              inputdesign={"border-indigo-800 max-w-[200px]"}
                            />
                          </div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <SingleDatasize
                      index={index}
                      headerData={headerData}
                      singledata={singledata}
                    />
                  );
                })}
              </div>
              {singledata.editdetail ? (
                <div className="lg:flex md:flex md:flex-wrap md:pt-1 lg:flex-wrap lg:pt-1 ">
                  {Datavalues.map((item, index) => {
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
                            {Datavalues[index]}
                          </div>
                        </div>
                      );
                    }

                    if (index > 7 && index <= Datavalues.length) {
                      return (
                        <SingleDatasize
                          index={index}
                          headerData={headerData}
                          singledata={singledata}
                        />
                      );
                    }

                    return <React.Fragment key={index}></React.Fragment>;
                  })}
                </div>
              ) : (
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    {Datavalues.map((item, index) => {
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
                              {Datavalues[index]}
                            </div>
                          </div>
                        );
                      }

                      if (index === 7) {
                        return (
                          <div key={index}>
                            <div key="empremarks">
                              <ReuseTextInput
                                name="empremarks"
                                defaultValue={Datavalues[index]}
                                onchanged={onChangeUpdate}
                                labelname="Employee remarks"
                                inputdesign=" border-indigo-800 "
                                maxLength="70"
                                rows="2"
                                cols="30"
                              />
                            </div>
                          </div>
                        );
                      }

                      if (index === 10) {
                        return (
                          <div
                            key={index}
                            className="  flex py-1 px-2 items-center "
                          >
                            <SelectorFrom
                              labeled="task Status "
                              defaultValue={singledata.projectdetail.taskStatus}
                              labeldesign="text-blue-400 max-w-[150px]  text-base uppercase"
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
                          <div key={index} className=" p-1   m-1  ">
                            <Reuseinput
                              name={
                                Object.keys(singledata.projectdetail)[index]
                              }
                              defaultValue={Datavalues[index]}
                              onchanged={onChangeUpdate}
                              labelname={
                                Object.keys(singledata.projectdetail)[index]
                              }
                              inputdesign="max-w-[200px] border-indigo-800 "
                            />
                          </div>
                        );
                      }
                      if (index === 13 || index === 11) {
                        return (
                          <SingleDatasize
                            index={index}
                            headerData={headerData}
                            singledata={singledata}
                          />
                        );
                      }

                      return <React.Fragment key={index}></React.Fragment>;
                    })}
                  </div>
                </div>
              )}
              <div>
                <Footerbtn
                  singledata={singledata}
                  Singledatadispatch={Singledatadispatch}
                />
              </div>
            </form>
          </Paper>
        </div>
      ) : null}
    </div>
  );
};
export default TaskVeiwDetail;
