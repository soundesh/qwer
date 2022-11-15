import React from "react";

const SingleDatasize = ({ index, headerData, singledata }) => {
  return (
    <div key={index} className="min-w-[140px] p-1  max-w-[280px] m-1  ">
      <div className="text-blue-400  text-base uppercase ">
        {headerData[index]}
      </div>
      <div className="ml-4 text-gray-500    text-sm ">
        {Object.values(...singledata.projectdetail)[index]}
      </div>
    </div>
  );
};

export default SingleDatasize;
