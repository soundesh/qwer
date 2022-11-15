import React, { useContext, useState, useEffect } from "react";
import { EmpGlobalState } from "../../../Globalsate/EmpGlobalState";
import Footerbtn from "../../../assitComponet/Viewdetail/Footerbtn";
import SelectorFrom from "../../../assitComponet/SelectorFrom";
import VIewdetailheader from "../../../assitComponet/Viewdetail/VIewdetailheader";

import ReuseTextInput from "../../../assitComponet/Input/ReuseTextInput";
import SingleDatasize from "../../../assitComponet/Viewdetail/SingleDatasize";
import { Paper } from "@mui/material";
const CreateViewDetail = ({ headerData }) => {
  const { dataCreate, datadispatCreate } = useContext(EmpGlobalState);

  const [updateTaskData, setUpdateTaskData] = useState({});
  useEffect(() => {
    if (dataCreate.projectdetail !== {})
      setUpdateTaskData(dataCreate.projectdetail);
  }, [dataCreate]);
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

    datadispatCreate({
      type: "normal",
    });
    console.log("emp task update ", updateTaskData);
  };

  const Datavalues = Object.values(...dataCreate.projectdetail);
  return (
    <div>
      {dataCreate.showdetail ? (
        <div className="pt-2 bg-white border-2 border-gray-400 rounded-lg    lg:max-w-full md:max-w-full lg:min-w-[500px] max-w-[270px] justify-center lg:my-2">
          <Paper>
            <VIewdetailheader
              title="Assign Task"
              Singledatadispatch={datadispatCreate}
            />

            <form
              onSubmit={ontaskUpdateSubmit}
              className="flex flex-col items-center justify-center"
            >
              <div className="lg:flex md:flex md:flex-wrap md:pt-1 lg:flex-wrap lg:pt-1  rounded-[4px] lg:mx-2">
                {Object.keys(...dataCreate.projectdetail).map((item, index) => {
                  if (Object.keys(dataCreate.projectdetail)[0] === item) {
                    return <React.Fragment key={index}></React.Fragment>;
                  }

                  if (index === 4) {
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
                        {Datavalues[index]}
                      </div>
                    </div>
                  );
                })}
              </div>
              {dataCreate.editdetail ? (
                <div className="lg:flex md:flex md:flex-wrap md:pt-1 lg:flex-wrap lg:pt-1 ">
                  {Object.keys(...dataCreate.projectdetail).map(
                    (item, index) => {
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

                      if (
                        index > 7 &&
                        index <= Object.keys(...dataCreate.projectdetail).length
                      ) {
                        return (
                          <SingleDatasize
                            index={index}
                            headerData={headerData}
                            singledata={dataCreate}
                          />
                        );
                      }

                      return <React.Fragment key={index}></React.Fragment>;
                    }
                  )}
                </div>
              ) : (
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    {Object.keys(...dataCreate.projectdetail).map(
                      (item, index) => {
                        if (index === 7) {
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

                        if (index === 6) {
                          return (
                            <div key={index}>
                              <ReuseTextInput
                                name="Approverremarks"
                                defaultValue={Datavalues[index]}
                                onchanged={onChangeUpdate}
                                labelname="Approver Remarks"
                                inputdesign=" border-indigo-800 m-3 "
                                maxLength="70"
                                rows="2"
                                cols="30"
                              />
                            </div>
                          );
                        }

                        if (index === 13) {
                          return (
                            <div className="  flex py-1 px-2 items-center ">
                              <SelectorFrom
                                labeled="Approved Status"
                                defaultValue={
                                  dataCreate.projectdetail.approvedstatus
                                }
                                labeldesign="text-blue-400  text-base uppercase"
                                OptionData={["Select", "yes", "no"]}
                                sizewidth="1"
                                setTrigger={setUpdateTaskData}
                                Trigger={updateTaskData}
                                Triggername="approvedstatus"
                              />
                            </div>
                          );
                        }

                        if (index > 6) {
                          return (
                            <SingleDatasize
                              index={index}
                              headerData={headerData}
                              singledata={dataCreate}
                            />
                          );
                        }
                        return <React.Fragment key={index}></React.Fragment>;
                      }
                    )}
                  </div>
                </div>
              )}
              <div>
                <Footerbtn
                  singledata={dataCreate}
                  Singledatadispatch={datadispatCreate}
                />
              </div>
            </form>
          </Paper>
        </div>
      ) : null}
    </div>
  );
};

export default CreateViewDetail;
