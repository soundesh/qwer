import React, { useContext, useState, useEffect } from "react";
import { EmpGlobalState } from "../../../Globalsate/EmpGlobalState";
import Footerbtn from "../../../assitComponet/Viewdetail/Footerbtn";
import { Paper } from "@mui/material";
import SelectorFrom from "../../../assitComponet/SelectorFrom";
import VIewdetailheader from "../../../assitComponet/Viewdetail/VIewdetailheader";

import ReuseTextInput from "../../../assitComponet/Input/ReuseTextInput";
import Reuseinput from "../../../assitComponet/Input/Reuseinput";
import SingleDatasize from "../../../assitComponet/Viewdetail/SingleDatasize";

import ReuseInputDate from "../../../assitComponet/Input/ReuseInputDate";
const EmpLeaveVIewDetail = ({ headerData }) => {
  const { dataleave, datadispatchleave } = useContext(EmpGlobalState);

  const [updateTaskData, setUpdateTaskData] = useState();
  useEffect(() => {
    if (dataleave.projectdetail !== {}) {
      setUpdateTaskData(dataleave.projectdetail);
    }
  }, [dataleave]);
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
    datadispatchleave({
      type: "normal",
    });
  };

  const Datakey = Object.keys(dataleave.projectdetail);
  const Datavalue = Object.values(dataleave.projectdetail);
  return (
    <div>
      {dataleave.showdetail ? (
        <Paper className="flex flex-col items-center justify-center">
          <div className="lg:mx-1 mx-1  lg:max-w-full md:max-w-full lg:min-w-[500px]  min-w-[280px] justify-center lg:my-2">
            <VIewdetailheader
              title="Leave Detail"
              Singledatadispatch={datadispatchleave}
            />
            <form
              onSubmit={ontaskUpdateSubmit}
              className="flex flex-col items-center justify-center"
            >
              {dataleave.editdetail ? (
                <div className="lg:flex md:flex md:flex-wrap md:pt-1 lg:flex-wrap lg:pt-1  rounded-[4px] lg:mx-2">
                  {Datakey.map((item, index) => {
                    if (Datakey[0] === item) {
                      return <React.Fragment key={index}></React.Fragment>;
                    }
                    return (
                      <SingleDatasize
                        index={index}
                        headerData={headerData}
                        singledata={dataleave}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="lg:flex md:flex md:flex-wrap md:pt-1 lg:flex-wrap lg:pt-1 ">
                  {Datakey.map((item, index) => {
                    if (index >= 11) {
                      return (
                        <SingleDatasize
                          index={index}
                          headerData={headerData}
                          singledata={dataleave}
                        />
                      );
                    }

                    if (Datakey[0] === item) {
                      return <React.Fragment key={index}></React.Fragment>;
                    }

                    if (index <= 3) {
                      return (
                        <SingleDatasize
                          index={index}
                          headerData={headerData}
                          singledata={dataleave}
                        />
                      );
                    }

                    if (index >= 4 && index <= 5) {
                      return (
                        <ReuseInputDate
                          labelname="Date"
                          name={Datakey[index]}
                          defaultValue={Datavalue[index]}
                          setTrigger={setUpdateTaskData}
                          Trigger={updateTaskData}
                          Triggername="taskdate"
                          inputdesign={"border-indigo-800 max-w-[140px]"}
                        />
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
                        <div key={index} className="max-w-[140px] p-1 m-1">
                          <Reuseinput
                            name={Datakey[index]}
                            defaultValue={Datavalue[index]}
                            onchanged={onChangeUpdate}
                            labelname={Datakey[index]}
                            inputdesign="max-w-[140px] border-indigo-800 "
                          />
                        </div>
                      );
                    }
                    if (index === 10) {
                      return (
                        <div key="reasonleave">
                          <ReuseTextInput
                            name="reasonleave"
                            defaultValue={Datavalue[index]}
                            onchanged={onChangeUpdate}
                            labelname="Reason leave"
                            inputdesign=" border-indigo-800 "
                            maxLength="70"
                            rows="2"
                            cols="30"
                          />
                        </div>
                      );
                    }

                    return (
                      <SingleDatasize
                        index={index}
                        headerData={headerData}
                        singledata={dataleave}
                      />
                    );
                  })}
                </div>
              )}
              <Footerbtn
                singledata={dataleave}
                Singledatadispatch={datadispatchleave}
              />
            </form>
          </div>
        </Paper>
      ) : null}
    </div>
  );
};

export default EmpLeaveVIewDetail;
