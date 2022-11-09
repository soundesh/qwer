import React from "react";
import IconBage from "../../../assitComponet/IconBage/IconBage";
import EmpLeaveTable from "../../../allTable/Emptable/EmpLeaveTable/EmpLeaveTable";
const inititalState2 = [
  {
    id: "1200",
    user: `anand`,
    empId: "[RIM-876]",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali fhghfgfgg",
    reasonleave:
      "qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopopqwertyuf",
    L1aproverandremarks: "sandeep :approvedsandeep",
    L2aproverandremarks: "parimala:approved",
    L3aproverandreamarks: "approved",
  },

  {
    id: "1234",
    user: `soundesh`,
    empId: "[RIM-876]",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "CL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1aproverandremarks: "sandeep :approvedsandeep",
    L2aproverandremarks: "parimala:approved",
    L3aproverandreamarks: "approved",
  },

  {
    id: "1223",
    user: `ragu`,
    empId: "[RIM-876]",

    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1aproverandremarks: "sandeep :approvedsandeep",
    L2aproverandremarks: "parimala:approved",
    L3aproverandreamarks: "approved",
  },

  {
    id: "2332",
    user: `shyam`,
    empId: "[RIM-876]",

    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1aproverandremarks: "sandeep :approvedsandeep",
    L2aproverandremarks: "parimala:approved",
    L3aproverandreamarks: "approved",
  },

  {
    id: "23425",
    user: `anand`,
    empId: "[RIM-876]",

    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",

    L1aproverandremarks: "sandeep :approvedsandeep",
    L2aproverandremarks: "parimala:approved",
    L3aproverandreamarks: "approved",
  },

  {
    id: "23345642",
    user: `shyam`,
    empId: "[RIM-876]",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",

    L1aproverandremarks: "sandeep :approvedsandeep",
    L2aproverandremarks: "parimala:approved",
    L3aproverandreamarks: "approved",
  },

  {
    id: "2335462",
    user: `shyam`,
    empId: "[RIM-876]",

    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",
    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1aproverandremarks: "sandeep :approvedsandeep",
    L2aproverandremarks: "parimala:approved",
    L3aproverandreamarks: "approved",
  },

  {
    id: "23546432",
    user: `shyam`,
    empId: "[RIM-876]",

    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1aproverandremarks: "sandeep :approved",
    L2aproverandremarks: "parimala:approved",
    L3aproverandreamarks: "approved",
  },
];

const initialState = [
  {
    id: "126",
    leaveimg: "",
    leavedate: "23/05/22",
    leavetype: "festival",
    holiday: "deepavali",
  },

  {
    id: "124",
    leavedate: "2/01/22",
    leavetype: "RH",
    holiday: "sri krishnar jemaastamiv",
  },
  { id: "128", leavedate: "23/05/22", leavetype: "RH", holiday: "pongal" },

  {
    id: "126",
    leaveimg: "",
    leavedate: "23/05/22",
    leavetype: "festival",
    holiday: "deepavali",
  },

  {
    id: "124",
    leavedate: "2/01/22",
    leavetype: "RH",
    holiday: "sri krishnar jemaastamiv",
  },
  { id: "128", leavedate: "23/05/22", leavetype: "RH", holiday: "pongal" },
  {
    id: "126",
    leaveimg: "",
    leavedate: "23/05/22",
    leavetype: "festival",
    holiday: "deepavali",
  },

  {
    id: "124",
    leavedate: "2/01/22",
    leavetype: "RH",
    holiday: "sri krishnar jemaastamiv",
  },
  { id: "128", leavedate: "23/05/22", leavetype: "RH", holiday: "pongal" },
];
const leaveHeaderData = [
  "id",
  "user",
  "empid",
  "date",
  "from",
  "to",
  "lop",
  "Days",
  "Leave type",
  "reason",
  "reasonleave",
  "L1 Aprover and Remarks",
  "L2 Aprover and Remarks",
  "L3 Aprover and Remarks",
];

const EmpLeaveMain = () => {
  return (
    <div>
      <div className="flex flex-row min-h-[50px] max-h-[50px] bg-gray-50 md:space-x-8 lg:space-x-8 space-x-7 flex-wrap items-center justify-center">
        <IconBage
          IconName="common Leave"
          Showcount="5"
          Icon=""
          InconType="fa-solid fa-calendar-days"
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

      <div className="  flex  overflow-auto  Scrollbarnone">
        <div className=" flex items-center px-2 text-blue-400">
          <i className="fa-solid fa-up-long lg:text-2xl font-bold"></i>
          <h1>UpComing Leaves... </h1>
        </div>
        <div className="  lg:max-w-[1150px] md:min-w-full flex items-center px-2 text-blue-400">
          <div className="flex flex-row ">
            {initialState.map((item, index) => {
              return (
                <div
                  key={index}
                  className="container max-h-[70px]  min-h-[70px] container max-w-sm  m-auto flex flex-wrap flex-row md:flex-row items-center justify-start"
                >
                  <div className="w-full p-1 ">
                    <div className="flex border min-w-[300px]  border-gray-300 flex-row lg:flex-row rounded overflow-hidden h-auto lg:min-h-16 border shadow shadow-lg">
                      <img
                        className="block h-auto w-full w-20 lg:w-16 flex-none bg-cover  "
                        src="https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg"
                        alt="img"
                      />
                      <div className="bg-white rounded-b grow lg:rounded-b-none lg:rounded-r p-1 flex flex-col justify-between leading-normal">
                        <div className="text-black font-bold text-lg mb-2 leading-tight">
                          <p>{item.holiday}</p>
                          <p>
                            <span>{item.leavedate} </span>
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
      </div>
      <div className="flex justify-center ">
        <EmpLeaveTable
          initialData={inititalState2}
          headerData={leaveHeaderData}
        />
      </div>
    </div>
  );
};

export default EmpLeaveMain;
