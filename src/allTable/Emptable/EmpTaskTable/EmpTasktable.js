import React, { useContext, useCallback } from "react";
import CrudTable from "../../../assitComponet/table/CrudTable";

import { EmpGlobalState } from "../../../Globalsate/EmpGlobalState";
import IdleADDing from "./IdleADDing";
import Crudfilter from "../../../assitComponet/table/CrudFilter/Crudfilter";
import "./idleAdd.css";
import TaskVeiwDetail from "./TaskVeiwDetail";

const EmpTasktable = ({ initialData, headerData }) => {
  const { Singledatadispatch } = useContext(EmpGlobalState);
  return (
    <div className="">
      <div className="flex flex-wrap lg:flex-nowrap  max-w-[300px] lg:max-w-[1150px] lg:space-x-2 md:min-w-[120vh] min-w-[40vh]  lg:min-w-[126vh] lg:mb-0 mb-[50px]">
        <CrudTable
          initialData={initialData}
          headerData={headerData}
          CheckDeletecolor="pink"
          title="Task Information"
          Design="bg-white text-xs   grow lg:ml-2 min-h-full overflow-auto"
          tableheight="max-h-[50vh] "
          tableDesign="min-w-[1700px] w-full"
          FiliterComponent={useCallback(() => {
            return Crudfilter;
          }, [])}
          Adding={true}
          editing={true}
          editbtnview={true}
          checkbtnview={true}
          DeleteBtnview={true}
          fontcheckbtnonly={true}
          fontbtnview={true}
          dispatcheddata={Singledatadispatch}
        />
        <TaskVeiwDetail headerData={headerData} />
        <IdleADDing />
      </div>
    </div>
  );
};

export default EmpTasktable;
