import React, { useState } from "react";

const Crudfilter = ({ trigger, settrigger }) => {
  return (
    <div>
      {trigger ? (
        <div className="z-50 absolute  min-w-[200px] min-h-[200px] bg-white space-y-3 shadow-md rounded-xl p-3 drop-shadow-2xl">
          <i
            className="fa-sharp fa-solid fa-xmark flex justify-end text-2xl text-red-600 pr-2"
            onClick={() => {
              settrigger(!trigger);
            }}
          ></i>
          <ul>
            <li>
              <button
                className="border p-2 my-2 min-w-[200px] text-blue-700 rounded-lg flex items-center hover:bg-gray-200 focus:outline-none"
                onClick={() => {
                  settrigger(!trigger);
                }}
              >
                <span className="pl-3 pr-7">pending</span>
              </button>
            </li>
            <li>
              <button
                className="border p-2 my-2 min-w-[200px] text-blue-700 rounded-lg flex items-center hover:bg-gray-200 focus:outline-none"
                onClick={() => {
                  settrigger(!trigger);
                }}
              >
                <span className="pl-3 pr-7">Approved</span>
              </button>
            </li>
            <li>
              <button
                className="border p-2 my-2 min-w-[200px] text-blue-700 rounded-lg flex items-center hover:bg-gray-200 focus:outline-none"
                onClick={() => {
                  settrigger(!trigger);
                }}
              >
                <span className="pl-3 pr-7">not Approved</span>
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Crudfilter;
