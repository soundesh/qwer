import React from "react";

import IconBage from "../../../assitComponet/IconBage/IconBage";

const EmpTasknav = () => {
  return (
    <div className="flex flex-wrap items-center justify-between  ">
      <div className="uppercase lg:text-xl md:text-base text-xs text-white pl-2 lg:pl-4">
        Task
      </div>

      <div className="sm:mr-2 mr-4 md:mr-4 md:space-x-6 flex  space-x-4 mt-2">
        <div>
          <IconBage
            IconName="Notification"
            Showcount="4"
            Icon=""
            InconType="fa-solid fa-bell"
            Iconcolor="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default EmpTasknav;
