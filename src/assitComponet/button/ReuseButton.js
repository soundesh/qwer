import React from "react";
import { Tooltip } from "@mui/material";

const ReuseButton = ({ btncolor, onclicked, btntype, btnname, form }) => {
  //     <ReuseButton
  //     btncolor="blue"
  //     onclicked={() => {
  //       Singledatadispatch({
  //         type: "view",
  //         value: singledata.projectdetail,
  //       });
  //     }}
  //     btntype="button"
  //     btnname="view"
  //   />
  return (
    <div
      className={`btnFocus inline-block  bg-${btncolor}-600 m-1  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-${btncolor}-700 hover:shadow-lg focus:bg-${btncolor}-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-${btncolor}-800 active:shadow-lg transition duration-150 ease-in-out`}
      onClick={onclicked}
    >
      <Tooltip title={btnname}>
        <button type={btntype} form={form} className="btnFocus px-6 py-2.5">
          {btnname}
        </button>
      </Tooltip>
    </div>
  );
};

export default ReuseButton;
