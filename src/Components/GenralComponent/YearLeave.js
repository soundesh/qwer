import React, { useState } from "react";
import CommonTable from "../../assitComponet/normaltable/CommonTable";
const initialState = [
  {
    id: "126",
    leavedate: "23/05/22",
    leavetype: "festival",
    holiday: "deepavali",
  },
  {
    id: "121",
    leavedate: "2/03/22",
    leavetype: "festival",

    holiday: "sri krishnar jemaasvvvvtami ",
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

const dataheader2 = ["Leave date", "Leave Type", "holiday"];
const YearLeave = () => {
  const [allData, setAllData] = useState(initialState);
  const [filteredData, setFilteredData] = useState(allData);

  const sortedate = filteredData.sort(function compare(a, b) {
    var dateA = new Date(
      `${a.leavedate.split("/")[1]}/${a.leavedate.split("/")[0]}/${
        a.leavedate.split("/")[2]
      } `
    );
    var dateB = new Date(
      `${b.leavedate.split("/")[1]}/${b.leavedate.split("/")[0]}/${
        b.leavedate.split("/")[2]
      } `
    );
    return dateA - dateB;
  });

  return (
    <div className="border-2 border-gray-200 p-2">
      <CommonTable
        initialData={allData}
        headerData={dataheader2}
        title="Holiday leaves"
        Design="min-h-[45vh] bg-white "
      />
    </div>
  );
};

export default YearLeave;
