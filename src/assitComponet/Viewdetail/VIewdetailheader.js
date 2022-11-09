import React from "react";
import { Paper } from "@mui/material";
const VIewdetailheader = ({ title, Singledatadispatch }) => {
  //     <VIewdetailheader
  //     title="dddd"
  //     Singledatadispatch="Singledatadispatch"
  //   />
  return (
    <div>
      <Paper elevation={1}>
        <div className="headerfont bg-indigo-700 text-white flex justify-between  lg:py-2 lg:pl-2 lg:text-xl md:text-xl text-xl ">
          <div>
            <h1>{title}</h1>
          </div>
          <div
            onClick={() => {
              Singledatadispatch({
                type: "normal",
              });
            }}
          >
            <h1 className="font-bold text-2xl text-white pr-5 hover:text-3xl">
              X
            </h1>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default VIewdetailheader;
