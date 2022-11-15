import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import "./CommonTable.css";

const CommonTable = ({
  initialData,
  headerData,
  title,
  Design,
  dispatcheddata,
}) => {
  const [initialState] = useState(initialData);

  //   <div>
  //   <CommonTable
  //     initialData={Dummydata}
  //     headerData={empTaskheader}
  //     title="Task Status"
  //     Design="with"
  //   />
  // </div>

  const onhandleEdit = (edititem) => {
    const data = initialData.filter((item, index) => {
      return Object.values(item)[0] === edititem;
    });

    dispatcheddata({
      type: "editState",
      value: data,
    });
  };
  return (
    <div
      className={` ${Design} space-x-2  m-1 mr-2 border border-gray-200 px-2 rounded-lg overflow-auto `}
    >
      <h1 className="headerfont bg-indigo-700 text-white mt-3 py-2 pl-5">
        {title}
      </h1>
      <div className="py-3 lg:px-4 text-xs md:text-base lg:text-lg">
        <table className="text-gray-900 font-light CommonTable ">
          <tbody>
            <tr className=" text-sm font-light headerfont ">
              {headerData.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <th>{item}</th>
                  </React.Fragment>
                );
              })}
            </tr>
            {initialState.map((item, index) => {
              return (
                <tr key={index} className="text-gray-700 lg:text-base  ">
                  {Object.keys(item).map((data, index) => {
                    if (Object.keys(item)[0] === Object.keys(item)[index]) {
                      return <React.Fragment key={index}></React.Fragment>;
                    }
                    if (Object.keys(item)[1] === Object.keys(item)[index]) {
                      return (
                        <td>
                          <img
                            style={{ borderRadius: "50%" }}
                            className="w-[30px] h-[30px] "
                            src={item[data]}
                            alt="img"
                          />
                        </td>
                      );
                    }

                    return (
                      <Tooltip
                        key={index}
                        title={`${Object.keys(item)[index]}`}
                      >
                        <td
                          onClick={() => {
                            return onhandleEdit(Object.values(item)[0]);
                          }}
                        >
                          <p>{item[data]}</p>
                        </td>
                      </Tooltip>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommonTable;
