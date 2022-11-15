import React, { useEffect, useState } from "react";
import Empnav from "../../ANavbar/Empnav";
import SelectorFrom from "../../../assitComponet/SelectorFrom";
import EmpProjectRegister from "./EmpProjectRegister";
import Profileimg from "../../../assitComponet/Profileimg";
const ProjectAssignDetail = () => {
  const projectassigndata = [
    {
      project: "office connect",
      Manager: "saranya",
      workers: {
        madhu: {
          fieldName: "backend",
          task: [
            "register update delete",
            "api protocol",
            "checking data storage",
          ],
        },
        Shyam: {
          fieldName: "frontend",
          task: [
            "office connect hr manage ",
            "dashboard ui",
            "api protocol",
            "employee ui",
          ],
        },
        soundesh: {
          fieldName: "frontend",
          task: ["dashboard ui", "api protocol", "employee ui"],
        },

        sanjay: {
          fieldName: "backend",
          task: [
            "register update delete",
            "api protocol",
            "checking data storage",
          ],
        },
      },
    },
  ];

  const [projectcreateshow, setProjectcreatshow] = useState(false);

  const [updateTaskData, setUpdateTaskData] = useState({
    taskdate: today(),
    taskgiven: "shyam",
    taskassigned: "",
    project: "",
    task: "",
  });

  function today() {
    let d = new Date();
    let currDate = d.getDate();
    let currMonth = d.getMonth() + 1;
    let currYear = d.getFullYear();
    return (
      (currDate < 10 ? "0" + currDate : currDate) +
      "/" +
      (currMonth < 10 ? "0" + currMonth : currMonth) +
      "/" +
      currYear
    );
  }
  const onAssigntaskSubmit = async (e) => {
    console.log("emp assign task update ", updateTaskData);
    e.preventDefault();
  };

  useEffect(() => {}, [updateTaskData]);

  return (
    <div>
      <div>
        <Empnav title="Assign Task" />
      </div>
      <div className=" pt-0  md:min-w-full lg:min-w-full">
        <div className="flex lg:flex-row flex-wrap items-center">
          <div>
            <div>
              <button
                onClick={() => {
                  setProjectcreatshow(true);
                }}
                className="relative hover:bg-indigo-700  min-w-[100px]  min-w-[30px] text-xs p-2.5 text-white bg-indigo-600 font-semibold flex justify-center p-2  uppercase rounded-[4px] mx-3"
              >
                + Create New Project
              </button>
            </div>
            <div className="absolute max-w-[300px] h-[400px] m-1">
              <EmpProjectRegister
                settriggertask={setProjectcreatshow}
                triggertask={projectcreateshow}
              />
            </div>
          </div>

          <form
            onSubmit={onAssigntaskSubmit}
            className=" flex lg:flex-row flex-wrap items-center justify-center    m-1 p-1"
          >
            <div className="  flex py-1 px-2 items-center  ">
              <SelectorFrom
                labeled="Project"
                defaultValue={updateTaskData.leaveType}
                selectdesign="flex flex-row mr-2"
                labeldesign="text-blue-500 min-w-[80px]  font-semibold text-base uppercase mr-4 flex pt-2 "
                OptionData={[
                  "Select",
                  "office connect",
                  "NPD",
                  "titan Project",
                ]}
                sizewidth="1"
                setTrigger={setUpdateTaskData}
                Trigger={updateTaskData}
                Triggername="project"
              />
            </div>
            <div className="  flex py-1 px-2 items-center ">
              <SelectorFrom
                labeled="task"
                defaultValue={updateTaskData.leaveType}
                selectdesign="flex flex-row mr-2"
                labeldesign="text-blue-500 min-w-[80px]  font-semibold text-base uppercase mr-4 flex pt-2 "
                OptionData={[
                  "Select",
                  "login page",
                  "sign in page",
                  "dashboard page dashboard page dashboard page dashboard page",
                ]}
                sizewidth="1"
                setTrigger={setUpdateTaskData}
                Trigger={updateTaskData}
                Triggername="task"
              />
            </div>
            <div className="  flex py-1 px-2 items-center ">
              <SelectorFrom
                labeled="task Assign to"
                defaultValue={updateTaskData.leaveType}
                selectdesign="flex flex-row mr-2"
                labeldesign="text-blue-500 min-w-[80px]  font-semibold min-w-[100px] text-base uppercase mr-4 flex pt-2 "
                OptionData={["Select", "soundesh", "raj kumar", "shyam "]}
                sizewidth="1"
                setTrigger={setUpdateTaskData}
                Trigger={updateTaskData}
                Triggername="taskassigned"
              />
            </div>

            <button
              type="submit"
              className=" hover:bg-indigo-700  min-w-[100px]  min-w-[30px] text-xs p-2.5 text-white bg-indigo-600 shadow shadow-lg font-semibold flex justify-center p-2  uppercase rounded-[4px] mx-3"
            >
              Add task
            </button>
          </form>
        </div>

        <div className="  rounded-[3px]">
          <div className="flex flex-row justify-between ">
            <div className="bg-white shadow shadow-lg m-1">
              <div className="px-4 flex items-center  font-semibold min-h-[50px] max-h-[50px]   min-w-full">
                <h1 className="headerfont text-gray-800 uppercase  pl-2 lg:text-base  md:text-xl text-xl ">
                  Office Connect
                </h1>
              </div>

              <div className="flex flex-row space-x-2  m-0.5  hover:bg-slate-400 w-[200px]   mr-2 min-h-[50px] items-center pl-3">
                <Profileimg
                  SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                  altname="profilename"
                  UIstyle="bg-gray-400"
                />
                <div>
                  <p className=" uppercase text-base">sandeep</p>
                  <h1 className="lg:text-base text-xs text-gray-600 capitalize">
                    Manager
                  </h1>
                </div>
              </div>

              <div className="flex flex-row space-x-2  m-0.5 -300 w-[200px]   mr-2 min-h-[50px] items-center pl-3">
                <Profileimg
                  SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                  altname="profilename"
                  UIstyle="bg-gray-400"
                />
                <div>
                  <p className=" uppercase text-base">saranya</p>
                  <h1 className="lg:text-base text-xs text-gray-600 capitalize">
                    manager
                  </h1>
                </div>
              </div>

              <div className="flex flex-row space-x-2  m-0.5 -300 w-[200px]   mr-2 min-h-[50px] items-center pl-3">
                <Profileimg
                  SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                  altname="profilename"
                  UIstyle="bg-gray-400"
                />
                <div>
                  <p className=" uppercase text-base">Naga Rathna</p>
                  <h1 className="lg:text-base text-xs text-gray-600 capitalize">
                    testing
                  </h1>
                </div>
              </div>

              <div className="flex flex-row space-x-2 m-0.5 -300  w-[200px]   mr-2  h-[50px] items-center pl-3">
                <Profileimg
                  SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                  altname="profilename"
                  UIstyle="bg-gray-400"
                />
                <div>
                  <h1 className="text-base uppercase">Shyam</h1>
                  <h1 className="lg:text-base text-xs text-gray-600 capitalize">
                    frontend
                  </h1>
                </div>
              </div>
              <div className="flex flex-row space-x-2 m-0.5 -300 w-[200px]   mr-2  h-[50px] items-center pl-3">
                <Profileimg
                  SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                  altname="profilename"
                  UIstyle="bg-gray-400"
                />
                <div>
                  <h1 className="text-base uppercase">Prashanth</h1>
                  <h1 className="lg:text-base text-xs text-gray-600">
                    frontend
                  </h1>
                </div>
              </div>

              <div className="flex flex-row space-x-2 m-0.5 -300 w-[200px]   mr-2 h-[50px] items-center pl-3">
                <Profileimg
                  SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                  altname="profilename"
                  UIstyle="bg-gray-400"
                />
                <div>
                  <h1 className="text-base uppercase">Madhu</h1>
                  <h1 className="lg:text-base text-xs text-gray-600">
                    backendend
                  </h1>
                </div>
              </div>

              <div className="flex flex-row space-x-2 m-0.5 -300 w-[200px]   mr-2 h-[50px] items-center pl-3">
                <Profileimg
                  SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                  altname="profilename"
                  UIstyle="bg-gray-400"
                />
                <div>
                  <h1 className="text-base uppercase">Sanjay</h1>
                  <h1 className="lg:text-base text-xs text-gray-600">
                    frontend
                  </h1>
                </div>
              </div>
            </div>
            <div>
              {/* single data */}

              <div className="m-1  Scrollbardesign flex flex-row min-w-[990px] max-w-[110vh] max-h-[600px] overflow-auto ">
                <div className="min-w-[270px] max-w-[290px] bg-white min-h-[400px] overflow-hidden    flex flex-col items-center m-1">
                  <div className="shadow shadow-lg   min-w-[270px] w-full flex flex-wrap flex-row justify-between items-center font-semibold">
                    <div className="max-h-[50px] text-xs p-2.5 text-white bg-indigo-600 hover:bg-indigo-700  flex flex-row space-x-2 w-full items-center pl-3">
                      <Profileimg
                        SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                        altname="profilename"
                        UIstyle="bg-gray-400"
                      />
                      <div>
                        <h1 className="text-base font-semibold pt-1 uppercase">
                          madhu
                        </h1>
                        <h1>backend</h1>
                      </div>
                    </div>
                  </div>

                  <div className="border border-indigo-400 min-h-[400px] max-h-[400px] overflow-auto Scrollbardesign ">
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>

                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>

                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-w-[270px] max-w-[290px] bg-white min-h-[400px] overflow-hidden    flex flex-col items-center m-1">
                  <div className="shadow shadow-lg   min-w-[270px] w-full flex flex-wrap flex-row justify-between items-center font-semibold">
                    <div className="max-h-[50px] text-xs p-2.5 text-white bg-indigo-600 hover:bg-indigo-700  flex flex-row space-x-2 w-full items-center pl-3">
                      <Profileimg
                        SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                        altname="profilename"
                        UIstyle="bg-gray-400"
                      />
                      <div>
                        <h1 className="text-base font-semibold pt-1 uppercase">
                          madhu
                        </h1>
                        <h1>backend</h1>
                      </div>
                    </div>
                  </div>

                  <div className="border border-indigo-400 min-h-[400px] max-h-[400px] overflow-auto Scrollbardesign  ">
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>

                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>

                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="min-w-[270px] max-w-[290px] bg-white min-h-[400px] overflow-hidden    flex flex-col items-center m-1">
                  <div className="shadow shadow-lg   min-w-[270px] w-full flex flex-wrap flex-row justify-between items-center font-semibold">
                    <div className="max-h-[50px] text-xs p-2.5 text-white bg-indigo-600 hover:bg-indigo-700  flex flex-row space-x-2 w-full items-center pl-3">
                      <Profileimg
                        SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                        altname="profilename"
                        UIstyle="bg-gray-400"
                      />
                      <div>
                        <h1 className="text-base font-semibold pt-1 uppercase">
                          madhu
                        </h1>
                        <h1>backend</h1>
                      </div>
                    </div>
                  </div>

                  <div className="border border-indigo-400 min-h-[400px] max-h-[400px] overflow-auto Scrollbardesign ">
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>

                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>

                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-w-[270px] max-w-[290px] bg-white min-h-[400px] overflow-hidden    flex flex-col items-center m-1">
                  <div className="shadow shadow-lg   min-w-[270px] w-full flex flex-wrap flex-row justify-between items-center font-semibold">
                    <div className="max-h-[50px] text-xs p-2.5 text-white bg-indigo-600 hover:bg-indigo-700  flex flex-row space-x-2 w-full items-center pl-3">
                      <Profileimg
                        SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                        altname="profilename"
                        UIstyle="bg-gray-400"
                      />
                      <div>
                        <h1 className="text-base font-semibold pt-1 uppercase">
                          madhu
                        </h1>
                        <h1>backend</h1>
                      </div>
                    </div>
                  </div>

                  <div className="border border-indigo-400 min-h-[400px] max-h-[400px] overflow-auto Scrollbardesign  ">
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>

                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>

                    <div className="px-3 ">
                      <div>
                        <h1 className="justify-center border-b border-gray-400 lowercase  min-h-[48px] p-1 ml-3 max-w-[260px]  ">
                          office conect dATA HAS BEEN FIND OUT register update
                          update delete
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAssignDetail;
