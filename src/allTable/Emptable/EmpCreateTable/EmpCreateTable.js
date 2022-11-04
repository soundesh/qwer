import React, { useContext } from "react";

import CrudTable from "../../../assitComponet/table/CrudTable";
import Crudfilter from "../../../assitComponet/table/CrudFilter/Crudfilter";
import { EmpGlobalState } from "../../../Globalsate/EmpGlobalState";
import CreateViewDetail from "./CreateViewDetail";
const EmpCreateTable = ({ initialData, headerData }) => {
  const { datadispatCreate } = useContext(EmpGlobalState);
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap  max-w-[300px] lg:max-w-[1150px] lg:space-x-2 md:min-w-[120vh] min-w-[40vh]  lg:min-w-[126vh] lg:mb-0 mb-[50px]">
        <CrudTable
          initialData={initialData}
          headerData={headerData}
          CheckDeletecolor="pink"
          title="Task Information"
          Design="bg-white text-xs   grow lg:ml-2 min-h-full overflow-auto"
          tableheight="max-h-[50vh] "
          tableDesign="min-w-[3000px]"
          FiliterComponent={Crudfilter}
          Adding={true}
          editing={true}
          editbtnview={true}
          checkbtnview={true}
          DeleteBtnview={true}
          fontcheckbtnonly={true}
          fontbtnview={true}
          dispatcheddata={datadispatCreate}
        />
        <CreateViewDetail headerData={headerData} />
      </div>
    </div>
  );
};

export default EmpCreateTable;
