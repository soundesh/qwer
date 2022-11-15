import React, { useState } from "react";
import CommonTable from "../../assitComponet/normaltable/CommonTable";

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
const YearLeave = ({ datadispatcholiday }) => {
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
    <div className="mt-4">
      <CommonTable
        initialData={allData}
        headerData={headerData}
        title="Month Bases"
        dispatcheddata={datadispatcholiday}
        Design="bg-white  shadow shadow-lg hover:shadow-xl max-w-[400px] "
      />
    </div>
  );
};

export default YearLeave;
