import React, { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
const inititalState2 = [
  {
    id: "1200",
    user: `anand`,
    empId: "[RIM-Cad-876]",
    Dep: "3D-cad",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali fhghfgfgg",
    reasonleave:
      "qwertyuio pqwertyuiop qwertyuio pqwertyuiopq wertyuiopq wertyuiopo pqwertyuf",
    L1approver: "sandeep :approvedsandeep",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },

  {
    id: "1234",
    user: `soundesh`,
    empId: "[RIM-WEB-876]",
    Dep: "Web",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "CL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1approver: "sandeep :approvedsandeep",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },

  {
    id: "1223",
    user: `ragu`,
    empId: "[RIM-Cad--876]",
    Dep: "3D-cad",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1approver: "sandeep :approvedsandeep",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },

  {
    id: "2332",
    user: `shyam`,
    empId: "[RIM-Cad-876]",
    Dep: "3D-cad",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1approver: "sandeep :approvedsandeep",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },

  {
    id: "23425",
    user: `anand`,
    empId: "[RIM-Cad-876]",
    Dep: "3D-cad",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",

    L1approver: "sandeep :approvedsandeep",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },

  {
    id: "23345642",
    user: `shyam`,
    empId: "[RIM-Cad-876]",
    Dep: "3D-cad",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",

    L1approver: "sandeep :approvedsandeep",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },

  {
    id: "2335462",
    user: `shyam`,
    empId: "[RIM-WEB-876]",
    Dep: "Web",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",
    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1approver: "sandeep :approvedsandeep",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },

  {
    id: "23546432",
    user: `shyam`,
    empId: "[RIM-WEB-876]",
    Dep: "Web",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    L1approver: "sandeep :approved",
    L2approver: "parimala:approved",
    L3approver: "approved",
  },
];

const LeaveApprovedDetail = () => {
  const [allData, setAllData] = useState(inititalState2);
  const [filteredData, setFilteredData] = useState(allData);

  const [ApprovedData, setApprovedData] = useState([]);

  const [Show, setShow] = useState(true);

  const onhandleNotApproved = (Approveditem) => {
    const data1 = allData.map((item, index) => {
      if (Object.values(item)[0] === Approveditem) {
        item.L1approver = "Not approved";
      }
      return item;
    });
    setApprovedData(data1);
    const data = allData.filter((item) => {
      return Object.values(item)[0] !== Approveditem;
    });
    setAllData(data);
    setFilteredData(data);
    console.log(allData);
  };

  const onhandleApproved = (Approveditem) => {
    const data1 = allData.map((item, index) => {
      if (Object.values(item)[0] === Approveditem) {
        item.L1approver = "approved";
      }
      return item;
    });
    setApprovedData(data1);
    const data = allData.filter((item) => {
      return Object.values(item)[0] !== Approveditem;
    });
    setAllData(data);
    setFilteredData(data);
  };
  useEffect(() => {}, [allData]);
  return (
    <div>
      {filteredData.length === 0 ? null : (
        <div className=" bg-white max-h-[350px]  lg:max-h-[300px] max-w-[1050px]  overflow-auto Scrollbardesign   rounded-lg  m-1 ">
          <div
            className={`bg-indigo-600 p-3 mx-2  text-white font-medium text-lg uppesrcase  leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out`}
          >
            <div className="flex">
              <h1>Leave Approves</h1>
            </div>
          </div>

          {filteredData.map((item, index) => {
            return (
              <div>
                {Show && filteredData[index][0] !== Object.values(item)[0] ? (
                  <div key={index}>
                    <Tooltip title={`${item.user} will leave on ${item.from} `}>
                      <div className="flex flex-row flex-wrap  items-center lg:mx-4 m-2 border-b border-gray-400 ">
                        <div className="flex  flex-wrap">
                          <h1 className="min-w-[220px] p-1 m-1 leading-2 max-w-[150px]">
                            Name: {item.user}
                          </h1>
                          <h1 className="min-w-[200px] p-1 m-1 leading-2 max-w-[150px]">
                            ID: {item.empId}
                          </h1>

                          <h1 className="min-w-[50px] p-1 m-1">
                            number of leave: {item.Days}
                          </h1>
                          <h1 className="min-w-[50px] p-1 m-1">
                            Type : {item.leaveType}
                          </h1>
                          <h1 className="min-w-[50px] p-1 m-1">
                            Reason : {item.reason}
                          </h1>
                        </div>
                        <div className="flex flex-col lg:flex-row md:flex-row justify-between">
                          <p className="lg:max-w-[850px] lg:min-w-[850px] p-1  m-1">
                            Explain Reason: {item.reasonleave}
                          </p>
                          <div className="flex">
                            <Tooltip title="Not Approved">
                              <div
                                onClick={() => {
                                  onhandleNotApproved(Object.values(item)[0]);
                                }}
                                className="min-w-[60px]  w-[56px] h-[56px] m-1 flex justify-center items-center rounded-full hover:bg-gray-200 "
                              >
                                <i className="fa-solid fa-xmark font-bold text-3xl text-pink-500 hover:text-4xl  hover:text-pink-600"></i>
                              </div>
                            </Tooltip>
                            <Tooltip title="Approved">
                              <div
                                onClick={() => {
                                  onhandleApproved(Object.values(item)[0]);
                                }}
                                className="min-w-[60px]  w-[56px] h-[56px] m-1 flex justify-center items-center rounded-full hover:bg-gray-200  "
                              >
                                <i className="fa-solid fa-check font-bold text-3xl text-green-600  hover:text-4xl hover:text-green-600"></i>
                              </div>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                ) : (
                  <React.Fragment key={index}></React.Fragment>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LeaveApprovedDetail;
