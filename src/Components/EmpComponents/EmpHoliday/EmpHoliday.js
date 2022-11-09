import React, { useState } from "react";
import Hrholidaytable from "./Hrholidaytable";
import YearLeave from "../../GenralComponent/YearLeave";
import { Paper } from "@mui/material";
import ReuseButton from "../../../assitComponet/button/ReuseButton";
import Empnav from "../../ANavbar/Empnav";
import CreateLeaveholidays from "./CreateLeaveholidays";
const initialState = [
  {
    id: "126",
    leaveimg: "",
    leavedate: "23/05/22",
    leavetype: "festival",
    holiday: "deepavali",
  },

  {
    id: "123",
    leavedate: "2/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "124",
    leavedate: "2/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "125",
    leavedate: "2/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "123",
    leavedate: "30/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "123",
    leavedate: "2/04/22",
    leavetype: "festival",
    holiday: "christmus",
  },

  {
    id: "124",
    leavedate: "2/01/22",
    leavetype: "RH",
    holiday: "sri krishnar jemaastamivvvvv",
  },
  { id: "128", leavedate: "23/05/22", leavetype: "RH", holiday: "pongal" },
  { id: "129", leavedate: "2/03/22", leavetype: "RH", holiday: "mattu pongal" },

  {
    id: "127",
    leavedate: "2/01/22",
    leavetype: " general",
    holiday: "kannada rajyotsava",
  },

  {
    id: "123",
    leavedate: "2/04/22",
    leavetype: "festival",
    holiday: "christmus",
  },

  {
    id: "124",
    leavedate: "2/01/22",
    leavetype: "RH",
    holiday: "sri krishnar jemaastamivvvvv",
  },
  { id: "128", leavedate: "23/05/22", leavetype: "RH", holiday: "pongal" },
  { id: "129", leavedate: "2/03/22", leavetype: "RH", holiday: "mattu pongal" },

  {
    id: "127",
    leavedate: "2/01/22",
    leavetype: " general",
    holiday: "kannada rajyotsava",
  },

  {
    id: "122",
    leavedate: "23/01/22",
    leavetype: "national",
    holiday: "srikrishnar jemaavvvvstami",
  },
  {
    id: "121",
    leavedate: "12/05/22",
    leavetype: "national",
    holiday: "independance",
  },
];

const EmpHoliday = ({ hideBtn }) => {
  const [allData, setAllData] = useState(initialState);
  const [filteredData, setFilteredData] = useState(allData);
  const [userRegShow, setuserRegShow] = useState(false);
  const [editData, setEditData] = useState();

  const [edit, setEdit] = useState(false);

  const OnhandleEdit = (item) => {
    setEdit(true);
    setEditData(item);
    setuserRegShow(true);
  };

  const onhandleDelete = (deleteItem) => {
    if (window.confirm("please conform to delete")) {
      const data = allData.filter((item) => {
        return Object.values(item)[0] !== Object.values(deleteItem)[0];
      });
      setAllData(data);
      setFilteredData(data);
      setuserRegShow(!userRegShow);
      console.log("You pressed OK!");
    }
  };

  return (
    <div>
      <div>
        <Empnav title="task" />
      </div>
      <div className="relative     min-h-[50px] shadow shadow-lg flex flex-row items-center px-3">
        <ReuseButton
          btncolor="indigo"
          onclicked={() => {
            setuserRegShow(true);
            setEdit(false);
          }}
          btntype="button"
          btnname="create leave "
        />

        {userRegShow ? (
          <div className="absolute top-[50%] z-20">
            <CreateLeaveholidays
              settrigger={setuserRegShow}
              trigger={userRegShow}
              editor={edit}
              editData={editData}
              onhandleDelete={onhandleDelete}
            />
          </div>
        ) : null}
      </div>
      <div
        className="flex flex-row flex-wrap justify-center max-w-[280px] max-h-[70vh] Scrollbardesign
      overflow-auto"
      >
        {initialState.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                OnhandleEdit(item);
              }}
              className="container  container   m-auto flex flex-wrap flex-col md:flex-row items-center justify-start"
            >
              <div className="w-full p-1">
                <div className="flex border border-gray-300 flex-row lg:flex-row rounded overflow-hidden h-auto lg:min-h-16 border shadow shadow-lg">
                  <img
                    className="block h-auto w-full w-20 lg:w-16 flex-none bg-cover  "
                    src="https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg"
                    alt="img"
                  />
                  <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-1 flex flex-col justify-between leading-normal">
                    <div className="text-black font-bold text-lg mb-2 leading-tight">
                      <p>{item.holiday}</p>
                      <p>
                        {item.leavetype} {item.leavedate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmpHoliday;
