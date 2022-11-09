import React from "react";
import { NavLink } from "react-router-dom";
const ReuseIndexPage = ({ children, LinkMenu }) => {
  return (
    <React.Fragment>
      <div className="lg:hidden   min-h-full">
        <div className="grow  border  border-blue-300">
          {/*....main*/}
          <div className="z-10   max-w-[600px]">
            {children}
            <div>
              <div className="fixed lg:hidden bottom-0 left-0 min-w-full max-w-full w-full ">
                {/*....footer*/}
                <React.Fragment>
                  <div
                    elevation={24}
                    className=" min-w-full max-w-full w-full bg-indigo-700  md:text-4xl p-1"
                  >
                    <div className="flex flex-row items-center justify-center  md:h-[40px] h-[40px] w-full space-x-4 md:space-x-12 md:text-3xl text-xl itmes-center ">
                      {LinkMenu?.map((item, index) => {
                        return (
                          <NavLink to={item.path} key={index} className="link">
                            <div
                              key={index}
                              className="w-[30px] h-[30px] md:max-w-[60px]  md:h-[40px] rounded-[4px] md:rounded-[6px] flex flex-row items-center justify-center grow hover:bg-sky-400 "
                            >
                              <div className="text-white">{item.icon}</div>
                            </div>
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                </React.Fragment>
              </div>
            </div>
          </div>

          {/*....main*/}
        </div>
      </div>

      <div className="lg:flex max-w-[100%]   hidden  lg:flex-row  w-full">
        <div className="border  hidden lg:flex lg:h-full border-blue-300">
          {/*....leftSidebard....*/}
          <div className="hover:drop-shadow-md drop-shadow-xl bg-indigo-800 max-h-full  min-h-[94vh] border-2 rounded-lg pt-[10px]">
            <div className=" space-y-2  px-1 ">
              {LinkMenu?.map((item, index) => {
                return (
                  <NavLink to={item.path} key={index} className="link">
                    <div
                      key={index}
                      className=" hover:font-semibold flex flex-row justify-center py-2 items-center hover:bg-sky-400 min-w-[42px] min-w-[150px] hover:w-full space-x-2  mb-1"
                    >
                      <div className="material-icons centerflexrow   text-3xl  text-white ">
                        {item.icon}
                      </div>
                      <div className="text-white uppercase min-w-[110px]  text-base">
                        {item.name}
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
          {/*....leftSidebard....*/}
        </div>

        {/*....main*/}
        <div className="border border-blue-300 grow">
          <div className="z-10 ">
            {children}
            <div>
              <div className="fixed lg:hidden bottom-0 left-0 min-w-full  ">
                {/*....footer*/}
                <React.Fragment>
                  <div
                    elevation={24}
                    className="   bg-indigo-700  md:text-4xl p-1"
                  >
                    <div className="flex flex-row items-center justify-center  md:h-[40px] h-[40px] w-full space-x-4 md:space-x-12 md:text-3xl text-xl itmes-center ">
                      {LinkMenu?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="w-[30px] h-[30px] md:max-w-[60px]  md:h-[40px] rounded-[4px] md:rounded-[6px] flex flex-row items-center justify-center grow hover:bg-sky-400 "
                          >
                            <div className="text-white">{item.icon}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </React.Fragment>
                {/*....footer*/}
              </div>
            </div>
          </div>
        </div>

        {/*....main*/}
      </div>
    </React.Fragment>
  );
};

export default ReuseIndexPage;
