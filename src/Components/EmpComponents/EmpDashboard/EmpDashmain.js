import React, { useState } from "react";
import IconBage from "../../../assitComponet/IconBage/IconBage";
const EmpDashmain = () => {
  return (
    <div className="">
      <div className="flex flex-row min-h-[50px] max-h-[60px] bg-gray-50 md:space-x-8 lg:space-x-8 space-x-7 flex-wrap items-center justify-center">
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
    </div>
  );
};
export default EmpDashmain;
