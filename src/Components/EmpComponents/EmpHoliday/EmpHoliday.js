import React, { useState, useContext } from "react";
import Hrholidaytable from "./Hrholidaytable";
import YearLeave from "../../GenralComponent/YearLeave";
import { EmpGlobalState } from "../../../Globalsate/EmpGlobalState";
import IconBage from "../../../assitComponet/IconBage/IconBage";
import CommonTable from "../../../assitComponet/normaltable/CommonTable";
import ReuseButton from "../../../assitComponet/button/ReuseButton";
import Empnav from "../../ANavbar/Empnav";

import { Spring } from "react-spring/renderprops";
import CreateLeaveholidays from "./CreateLeaveholidays";
const initialState = [
  {
    id: "111",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "23/05/22",
    leavetype: "festival",
    holiday: "deepavali",
  },

  {
    id: "112",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "2/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "113",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "2/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "114",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "2/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "115",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "30/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "116",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "2/04/22",
    leavetype: "festival",
    holiday: "christmus",
  },

  {
    id: "117",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "2/01/22",
    leavetype: "RH",
    holiday: "sri krishnar jemaastamivvvvv",
  },
  {
    id: "118",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "23/05/22",
    leavetype: "RH",
    holiday: "pongal",
  },
  {
    id: "119",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "2/03/22",
    leavetype: "RH",
    holiday: "mattu pongal",
  },

  {
    id: "120",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "2/01/22",
    leavetype: " general",
    holiday: "kannada rajyotsava",
  },

  {
    id: "121",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "2/04/22",
    leavetype: "festival",
    holiday: "christmus",
  },

  {
    id: "122",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "2/01/22",
    leavetype: "RH",
    holiday: "sri krishnar jemaastamivvvvv",
  },
  {
    id: "123",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "23/05/22",
    leavetype: "RH",
    holiday: "pongal",
  },
  {
    id: "124",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "2/03/22",
    leavetype: "RH",
    holiday: "mattu pongal",
  },

  {
    id: "125",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "2/01/22",
    leavetype: " general",
    holiday: "kannada rajyotsava",
  },

  {
    id: "126",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "23/01/22",
    leavetype: "national",
    holiday: "srikrishnar jemaavvvvstami",
  },
  {
    id: "127",
    leaveimg: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    leavedate: "12/05/22",
    leavetype: "national",
    holiday: "independance",
  },
];

const headerData = ["image", "date", "Leave Type", "holiday"];

const EmpHoliday = ({ hideBtn }) => {
  const [allData, setAllData] = useState(initialState);
  const [filteredData, setFilteredData] = useState(allData);
  const [userRegShow, setuserRegShow] = useState(false);
  const [editData, setEditData] = useState();

  const [edit, setEdit] = useState(false);
  const { dataholiday, datadispatcholiday } = useContext(EmpGlobalState);
  const onhandleDelete = (deleteItem) => {
    if (window.confirm("please conform to delete")) {
      const data = allData.filter((item) => {
        return Object.values(item)[0] !== deleteItem;
      });

      setAllData(data);
      setFilteredData(data);
      setuserRegShow(!userRegShow);
      console.log("You pressed OK!");
      datadispatcholiday({
        type: "normal",
      });
    }
  };

  return (
    <div>
      <div>
        <Empnav title="Holiday Leave" />
      </div>

      <div className="pt-2 flex shadow shadow-xl hover:shadow-lg bg-white  flex-row min-h-[50px] max-h-[50px]  md:space-x-8 lg:space-x-8 space-x-7 flex-wrap items-center justify-center">
        <IconBage
          IconName="common Leave"
          Showcount="5"
          Icon=""
          InconType="fa-solid fa-calendar-days "
          Iconcolor="text-gray-700"
        />

        <IconBage
          IconName="Earned Leave"
          Showcount="1"
          Icon="work"
          InconType="material-icons lg:text-4xl"
          Iconcolor="text-gray-700"
        />

        <IconBage
          IconName="Holiday Leave"
          Showcount="3"
          Icon="home"
          InconType="material-icons lg:text-4xl"
          Iconcolor="text-gray-700"
        />
        <IconBage
          IconName="Company oFF"
          Showcount="0"
          Icon="laptop"
          InconType="material-icons lg:text-4xl"
          Iconcolor="text-gray-700"
        />
      </div>

      <div className="relative  pt-2   min-h-[50px] flex flex-row items-center px-3">
        <ReuseButton
          btncolor="indigo"
          onclicked={() => {
            datadispatcholiday({
              type: "createState",
            });
          }}
          btntype="button"
          btnname="create leave "
        />
        {dataholiday.createState ? null : (
          <div className="absolute top-[50%] z-20">
            <CreateLeaveholidays
              settrigger={setuserRegShow}
              trigger={userRegShow}
              editor={edit}
              editData={editData}
              onhandleDelete={onhandleDelete}
            />
          </div>
        )}
      </div>

      <div className="flex lg:flex-row flex-col items-center justify-center">
        <Spring
          from={{
            transform: "translate3d(100%,0,0) ",
          }}
          to={{
            transform: "translate3d(0px,0,0) ",
          }}
          config={{ duration: 1000 }}
        >
          {(props) => (
            <div className="mt-4" style={props}>
              <CommonTable
                initialData={initialState}
                headerData={headerData}
                title="Leave Bases"
                dispatcheddata={datadispatcholiday}
                Design="bg-white  shadow shadow-lg hover:shadow-xl  max-w-[400px]"
              />
            </div>
          )}
        </Spring>
        <Spring
          // from={{ opacity: 0 }}
          // to={{ opacity: 1 }}
          // config={{ duration: 300 }}
          from={{
            transform: "translate3d(-100%,0,0) ",
          }}
          to={{
            transform: "translate3d(0px,0,0) ",
          }}
          config={{ duration: 1000 }}
        >
          {(props) => (
            <div style={props}>
              <YearLeave
                initialState={initialState}
                headerData={headerData}
                datadispatcholiday={datadispatcholiday}
              />
            </div>
          )}
        </Spring>
      </div>
    </div>
  );
};

export default EmpHoliday;
