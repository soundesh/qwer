import { Paper } from "@mui/material";
import React, { useState } from "react";
import ReuseButton from "../../../assitComponet/button/ReuseButton";
import Dropdown from "../../../assitComponet/Dropdown";
import moment from "moment";
import "./Hrholidays.css";
const CreateLeaveholidays = ({
  settrigger,
  trigger,
  editor,
  editData,
  onhandleDelete,
  deletetrigger,
  setdeletetrigger,
}) => {
  const [CreateTaskData, setCreateTaskData] = useState(() => {
    if (editor === "undefined") {
      return editData;
    } else {
      return {
        leavedate: "",
        leavetype: "",
        holiday: "",
      };
    }
  });

  const [Imgview, setImgview] = useState(
    "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg"
  );
  const [eximage, setEximage] = useState([]);
  console.log(editData);
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
    if (editor) {
      const leavedata = new FormData();
      leavedata.append("leaveimg", eximage);
      leavedata.append("leavedate", CreateTaskData.leavedate);
      leavedata.append("leavetype", CreateTaskData.leavetype);
      leavedata.append("holiday", CreateTaskData.holiday);
      console.log("update");
    } else {
      const leavedata = new FormData();
      leavedata.append("leaveimg", eximage);
      leavedata.append("leavedate", CreateTaskData.leavedate);
      leavedata.append("leavetype", CreateTaskData.leavetype);
      leavedata.append("holiday", CreateTaskData.holiday);

      console.log("submit");
    }
  };

  //create data list dropdown
  const LeavetypeArray = ["Festival", "RH", "General", "National"];
  return (
    <div className="w-[300px] lg:w-[400px]">
      <Paper>
        <div className="IdleAdd-inner bg-pink-400">
          <Paper elevation={10}>
            <div className="close-btn text-white p-1 -my-5 px-2 rounded-full">
              <ReuseButton
                btncolor="red"
                onclicked={() => settrigger(!trigger)}
                btntype="button"
                btnname="Close"
              />
            </div>
          </Paper>
          <form onSubmit={ontaskCreateSubmit}>
            <div className="bg-pink-400 ">
              <Paper elevation={8} className="p-1 m-1">
                <div className="lg:p-8 py-8 ">
                  <div className=" flex items-center flex-col py-1 px-2  pt-4 ">
                    <img
                      className="block h-auto  w-full w-52 rounded-lg flex-none bg-cover  "
                      src={Imgview}
                      alt="img"
                    />
                    <div className="flex flex-row items-center   min-w-[280px]">
                      <label htmlFor="holiday" className="p-3 min-w-[90px]">
                        image
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
                  btnname={editor ? "update" : "Create"}
                />
                <div>
                  {editor ? (
                    <ReuseButton
                      btncolor="red"
                      onclicked={() => onhandleDelete(editData)}
                      btntype="button"
                      btnname="delete"
                    />
                  ) : null}
                </div>
              </div>
            </Paper>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default CreateLeaveholidays;
