import React, { useState, useContext, useEffect } from "react";
import { Paper } from "@mui/material";
import { EmpGlobalState } from "../../../Globalsate/EmpGlobalState";
import ReuseButton from "../../../assitComponet/button/ReuseButton";
import Dropdown from "../../../assitComponet/Dropdown";
import moment from "moment";
const CreateLeaveholidays = ({ onhandleDelete }) => {
  const [CreateTaskData, setCreateTaskData] = useState({});
  const [Imgview, setImgview] = useState(
    "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg"
  );
  const [eximage, setEximage] = useState([]);

  const { dataholiday, datadispatcholiday } = useContext(EmpGlobalState);
  const onChangeCreate = (e) => {
    const { name, value } = e.target;
    setCreateTaskData({ ...CreateTaskData, [name]: value });
    console.log(CreateTaskData);
  };

  const onchangeimg = (e) => {
    setImgview(URL.createObjectURL(e.target.files[0]));
    setEximage(e.target.files[0]);
  };
  const ontaskCreateSubmit = (e) => {
    e.preventDefault();
    if (dataholiday.editdetail === false) {
      const leavedata = new FormData();
      leavedata.append("leaveimg", eximage);
      leavedata.append("leavedate", CreateTaskData.leavedate);
      leavedata.append("leavetype", CreateTaskData.leavetype);
      leavedata.append("holiday", CreateTaskData.holiday);
      console.log("update");
      datadispatcholiday({
        type: "normal",
      });
    } else {
      const leavedata = new FormData();
      leavedata.append("leaveimg", eximage);
      leavedata.append("leavedate", CreateTaskData.leavedate);
      leavedata.append("leavetype", CreateTaskData.leavetype);
      leavedata.append("holiday", CreateTaskData.holiday);
      datadispatcholiday({
        type: "normal",
      });
      console.log("submit");
    }
  };
  useEffect(() => {
    setCreateTaskData(() => {
      if (dataholiday.editdetail === false) {
        return dataholiday.projectdetail[0];
      } else {
        return {
          leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
          leavedate: "",
          leavetype: "",
          holiday: "",
        };
      }
    });
  }, [dataholiday]);
  //create data list dropdown
  const LeavetypeArray = ["Festival", "RH", "General", "National"];
  return (
    <div>
      <div className="w-[300px] lg:w-[400px] mt-6">
        <Paper>
          <div className=" bg-pink-400">
            <form onSubmit={ontaskCreateSubmit}>
              <div className="bg-pink-400 ">
                <Paper elevation={8} className="p-1 m-1">
                  <div className="flex justify-end">
                    <ReuseButton
                      btncolor="red"
                      onclicked={() => {
                        datadispatcholiday({
                          type: "normal",
                        });
                      }}
                      btntype="button"
                      btnname="Close"
                    />
                  </div>
                  <div className="">
                    <div className=" flex items-center flex-col py-1 px-2  min-w-[280px] ">
                      <img
                        className="block h-auto  w-full w-52 rounded-lg flex-none bg-cover  "
                        src={CreateTaskData.leaveimg}
                        alt="img"
                      />
                      <div className="flex flex-row items-center   min-w-[280px]">
                        <label htmlFor="holiday" className="p-3 ">
                          Upload image
                        </label>
                        <input
                          id="leaveimg"
                          type="file"
                          name="leaveimg"
                          placeholder="please enter "
                          size="13"
                          required
                          onChange={(e) => onchangeimg(e)}
                          className=" px-3 py-1.5  m-2 outline-none w-[118px] "
                          accept="image/*"
                        />
                      </div>
                    </div>

                    <div className=" flex items-center mg:flex-row lg:flex-row py-1 px-2   ">
                      <label htmlFor="holiday" className="min-w-[90px]">
                        Holiday
                      </label>
                      <input
                        id="holiday"
                        type="text"
                        name="holiday"
                        defaultValue={CreateTaskData.holiday}
                        placeholder="please enter "
                        size="13"
                        required
                        onChange={(e) => onChangeCreate(e)}
                        className=" px-3 py-1.5  m-2 outline-none border-2 border-indigo-700 w-[150px] lg:w-[200px]"
                      />
                    </div>

                    <div className="  flex items-center  flex-row py-1 px-2 ">
                      <label htmlFor="leavedate" className="min-w-[90px]">
                        Holiday Date
                      </label>
                      <input
                        id="leavedate"
                        type="date"
                        name="leavedate"
                        defaultValue={CreateTaskData.leavedate}
                        placeholder="please enter "
                        required
                        onChange={(e) => {
                          setCreateTaskData({
                            ...CreateTaskData,
                            leavedate: moment(e.target.value).format(
                              "DD/MM/YYYY"
                            ),
                          });
                        }}
                        className=" px-3 py-1.5  m-2 outline-none border-2 w-[150px] lg:w-[200px] border-indigo-700"
                      />
                    </div>

                    <div className=" flex items-center hover:rounded-lg  flex-row py-1 px-2 ">
                      <label htmlFor="empId" className="min-w-[90px]">
                        Leave Type
                      </label>
                      <Dropdown
                        listData={LeavetypeArray}
                        cssdata={
                          "  ml-1 w-[180px] rounded-lg border-2 w-[150px] lg:w-[200px] border-indigo-700"
                        }
                        selecting={CreateTaskData}
                        name="leavetype"
                        setSelecting={setCreateTaskData}
                      />
                    </div>
                  </div>
                </Paper>
              </div>
              <Paper elevation={8} className="flex justify-center p-1 ">
                <div className="flex  items-center flex-row py-1 px-1  ">
                  <ReuseButton
                    btncolor="indigo"
                    onclicked={ontaskCreateSubmit}
                    btntype="button"
                    btnname={dataholiday.editdetail ? "Create" : "update"}
                  />
                  <div>
                    {dataholiday.editdetail ? null : (
                      <ReuseButton
                        btncolor="red"
                        onclicked={() =>
                          onhandleDelete(
                            Object.values(dataholiday.projectdetail[0])[0]
                          )
                        }
                        btntype="button"
                        btnname="delete"
                      />
                    )}
                  </div>
                </div>
              </Paper>
            </form>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default CreateLeaveholidays;
