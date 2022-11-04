import React, { useState } from "react";
import IconBage from "../../../assitComponet/IconBage/IconBage";
const EmpDashmain = () => {
  return (
    <div className="">
      <div className="flex flex-row min-h-[50px] max-h-[60px] bg-indigo-100 md:space-x-8 lg:space-x-8 space-x-7 flex-wrap items-center justify-center">
        <IconBage
          IconName="New Task"
          Showcount="4"
          Icon=""
          InconType="fa-solid fa-list-check"
          Iconcolor="text-gray-700"
        />
        <IconBage
          IconName="Complete"
          Showcount="4"
          Icon="task"
          InconType="material-icons lg:text-4xl"
          Iconcolor="text-gray-700"
        />
        <IconBage
          IconName="Pending"
          Showcount="4"
          Icon="pending"
          InconType="material-icons lg:text-4xl"
          Iconcolor="text-gray-700"
        />
        <IconBage
          IconName="Approved"
          Showcount="4"
          Icon="assignment"
          InconType="material-icons lg:text-4xl"
          Iconcolor="text-gray-700"
        />
        <IconBage
          IconName="Not Approved"
          Showcount="4"
          Icon=""
          InconType="fa-solid fa-rectangle-xmark"
          Iconcolor="text-gray-700"
        />
      </div>
      <div className="flex flex-wrap md:flex-row lg:flex-row  p-1 lg:space-x-2">
        <div className=" bg-indigo-100 Scrollbardesign p-1 m-1 rounded-[4px] min-w-[250px] max-w-[250px] max-h-[200px] overflow-auto">
          <div className="lg:text-xl md:text-xl text-base flex items-center justify-between">
            <div>New Task</div>
            <div className="pr-2">06/11/22</div>
          </div>
          <div className="p-1 pl-2">
            <div className="lg:text-base md:text-base text-sm ">Project</div>
            <div className=" p-0.5 pl-4 text-gray-500 lg:text-base text-xs font-medium">
              office connection
            </div>
            <div className="lg:text-base md:text-base text-sm ">Task</div>
            <div className=" p-0.5 pl-4 text-gray-500 lg:text-base text-xs font-medium">
              office font end task
            </div>
          </div>
        </div>
        <div className=" bg-indigo-100 Scrollbardesign p-1 m-1 rounded-[4px] min-w-[250px] max-w-[250px] max-h-[200px] overflow-auto">
          <div className="lg:text-xl md:text-xl text-base flex items-center justify-between">
            <div>New Task</div>
            <div className="pr-2">06/11/22</div>
          </div>
          <div className="p-1 pl-2">
            <div className="lg:text-base md:text-base text-sm ">Project</div>
            <div className=" p-0.5 pl-4 text-gray-500 lg:text-base text-xs font-medium">
              titan plus
            </div>
            <div className="lg:text-base md:text-base text-sm ">Task</div>
            <div className=" p-0.5 pl-4 text-gray-500 lg:text-base text-xs font-medium">
              watch bill listed,login page
            </div>
          </div>
        </div>

        <div className=" bg-indigo-100 p-1 m-1 rounded-[4px] min-w-[250px] max-w-[250px] max-h-[200px] overflow-auto">
          <div className="lg:text-xl md:text-xl text-base flex items-center justify-between">
            <div>HR Admin</div>
            <div className="pr-2">06/11/22</div>
          </div>
          <div className="p-1 pl-2">
            <div>
              upcoming on monday, we have event be ready for that event{" "}
            </div>
          </div>
        </div>

        <div className=" bg-indigo-100 p-1 m-1 rounded-[4px] min-w-[250px] max-w-[250px] max-h-[200px] overflow-auto">
          <div className="lg:text-xl md:text-xl text-base flex items-center justify-between">
            <div>Security Admin</div>
            <div className="pr-2">06/11/22</div>
          </div>
          <div className="p-1 pl-2">
            <div>your internet have been working now.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmpDashmain;
