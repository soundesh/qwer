import React, { useState } from "react";
import { Paper } from "@mui/material";
import CreateLeaveholidays from "./CreateLeaveholidays";
import "./Hrholidays.css";

const Hrholidaytable = ({ hideBtn, initialData }) => {
  const [allData, setAllData] = useState(initialData);
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
        return Object.values(item)[0] !== deleteItem;
      });
      setAllData(data);
      setFilteredData(data);
      setuserRegShow(!userRegShow);
      console.log("You pressed OK!");
    }
  };

  //   const sortedate = allData.sort(function compare(a, b) {
  //     var dateA = new Date(
  //       `${a.leavedate.split("/")[1]}/${a.leavedate.split("/")[0]}/${
  //         a.leavedate.split("/")[2]
  //       } `
  //     );
  //     var dateB = new Date(
  //       `${b.leavedate.split("/")[1]}/${b.leavedate.split("/")[0]}/${
  //         b.leavedate.split("/")[2]
  //       } `
  //     );
  //     return dateA - dateB;
  //   });
  return (
    <div className=" pt-2">
      {hideBtn ? (
        userRegShow ? (
          <CreateLeaveholidays
            settrigger={setuserRegShow}
            trigger={userRegShow}
            editor={edit}
            editData={editData}
            onhandleDelete={onhandleDelete}
          />
        ) : null
      ) : null}

      <Paper>
        {hideBtn ? (
          <h1
            className="text-xl ml-2 p-2 bg-indigo-300 max-w-[150px] rounded-lg addEmpForm "
            onClick={() => {
              setuserRegShow(true);
              setEdit(false);
            }}
          >
            add Holiday
          </h1>
        ) : null}
        <div className="p-2 ">
          <div>
            <h1 className="text-3xl">Holidays Leave </h1>
            <table className="Hrholidaytable min-w-[500px] bg-indigo-100 gfg  border-2 p-4">
              <thead>
                <tr className="bg-white  leading-5 min-w-[150px] font-medium ">
                  <th>leave Date</th>
                  <th>leave type </th>
                  <th>List Holidays</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={
                        hideBtn
                          ? () => {
                              OnhandleEdit(Object.values(item)[0]);
                            }
                          : () => {}
                      }
                      className="bg-white  leading-5 min-w-[150px] font-medium "
                    >
                      <td>{item.leavedate}</td>
                      <td>{item.leavetype}</td>
                      <td>{item.holiday}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Hrholidaytable;
