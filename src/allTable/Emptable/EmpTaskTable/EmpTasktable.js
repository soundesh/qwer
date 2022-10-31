import React, { useState, useEffect, useCallback } from "react";
import CrudTable from "../../../assitComponet/table/CrudTable";
import IdleADDing from "./IdleADDing";
import Crudfilter from "../../../assitComponet/table/CrudFilter/Crudfilter";
import "./idleAdd.css";

const EmpTasktable = ({ initialData, headerData }) => {
  const [projectviewshow, setProjectviewshow] = useState(true);
  return (
    <div className="">
      {projectviewshow ? (
        <div className="lg:mx-2 mx-1  lg:max-w-full md:max-w-full min-w-[280px] justify-center lg:my-2">
          <div className="headerfont bg-indigo-700 text-white flex justify-between  lg:py-2 lg:pl-2 lg:text-xl md:text-xl text-xl ">
            <div>
              <h1>Project Detail</h1>
            </div>
            <div>
              <h1 className="font-bold text-2xl text-white pr-5 hover:text-3xl">
                X
              </h1>
            </div>
          </div>
          <div className="lg:flex md:flex md:flex-wrap md:p-2 lg:flex-wrap lg:p-2  rounded-[4px] lg:mx-2 lg:my-2">
            {Object.keys(initialData[0]).map((item, index) => {
              if (Object.keys(initialData[0])[0] === item) {
                return <React.Fragment key={index}></React.Fragment>;
              }
              if (index > 8) {
                return (
                  <div className="min-w-[250px] max-w-[280px] max-h-[200px] ">
                    <div className="text-blue-400  max-h-[50px] text-base uppercase ">
                      {headerData[index]}
                    </div>
                    <div className="ml-4 text-gray-500  p-2 min-h-[60px] text-sm  max-w-[250px] ">
                      {Object.values(initialData[0])[index]}
                    </div>
                  </div>
                );
              }
              return (
                <div className="lg:min-w-[310px] max-w-[280px]  max-h-[200px]">
                  <div className="text-blue-400  max-h-[50px] text-base uppercase ">
                    {headerData[index]}
                  </div>
                  <div className="ml-4 p-2 text-gray-500 min-h-[60px] text-sm  max-w-[250px] ">
                    {Object.values(initialData[0])[index]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      <div>
        <CrudTable
          initialData={initialData}
          headerData={headerData}
          CheckDeletecolor="pink"
          title="Leave Status"
          Design="bg-white text-xs  max-w-[133vh]  lg:max-w-[133vh]  lg:ml-2 min-h-full overflow-auto"
          tableheight="max-h-[60vh] "
          tableDesign="min-w-[3000px]"
          Addingcomponent={IdleADDing}
          FiliterComponent={Crudfilter}
          Adding={true}
          editing={true}
          editbtnview={true}
          checkbtnview={true}
          DeleteBtnview={true}
          fontcheckbtnonly={true}
          fontbtnview={true}
        />
      </div>
    </div>
  );
};

export default EmpTasktable;
