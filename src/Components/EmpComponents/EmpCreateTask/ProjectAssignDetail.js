import React, { useState } from "react";
import SelectorFrom from "../../../assitComponet/SelectorFrom";
import EmpProjectRegister from "./EmpProjectRegister";
import Profileimg from "../../../assitComponet/Profileimg";
const ProjectAssignDetail = () => {
  const prjectassigndata = [
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
  return (
    <div className=" pt-0  md:min-w-full lg:min-w-full">
      <div className="flex lg:flex-row flex-wrap items-center">
        <div>
          <div>
            <div className="relative  min-w-[100px] border border-blue-700 bg-indigo-700 text-white flex justify-center p-2  uppercase rounded-[4px] mx-3">
              + Create New Project
            </div>
          </div>
          <div className="absolute  bg-red-300 min-w-[280px] h-[400px] m-1">
            <EmpProjectRegister />
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
              labeldesign="text-blue-400 min-w-[80px]   text-base uppercase mr-4 flex pt-2 "
              OptionData={["Select", "office connect", "NPD", "titan Project"]}
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
              labeldesign="text-blue-400  min-w-[80px]  text-base uppercase mr-4 flex pt-2 "
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
              labeldesign="text-blue-400  min-w-[80px] min-w-[100px] text-base uppercase mr-4 flex pt-2 "
              OptionData={["Select", "soundesh", "raj kumar", "shyam "]}
              sizewidth="1"
              setTrigger={setUpdateTaskData}
              Trigger={updateTaskData}
              Triggername="taskassigned"
            />
          </div>

          <button
            type="submit"
            className="hover:bg-blue-800 rounded-lg bg-blue-600  text-white flex justify-center py-2 px-2 items-center"
          >
            Add task
          </button>
        </form>
      </div>
      <div>
        <div className=" mt-4  rounded-[6px] shadow shadow-lg bg-indigo-100 min-w-full  ">
          <div className=" flex justify-center p-1 border-b-400 border-b-2  bg-indigo-700 text-white">
            <h1 className="text-2xl uppercase ">Office Connect</h1>
          </div>
        </div>

        <div className="lg:pl-2 md:pl-2  bg-indigo-100 flex flex-row flex-wrap  bg-indigo-100 flex flex-row flex-wrap lg:justify-evenly  justify-center  ">
          {/* single data */}
          <div className="min-w-[270px] shadow shadow-lg bg-white min-h-[400px] overflow-hidden    flex flex-col items-center m-1">
            <div className=" border-b-2 border-gray-400 min-w-[270px]  flex flex-wrap flex-row justify-between items-center font-semibold">
              <div className="flex flex-row space-x-2 bg-indigo-700 text-white w-full items-center pl-3">
                <Profileimg
                  SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                  altname="profilename"
                  UIstyle="bg-gray-400"
                />
                <div>
                  <h1 className="text-xl uppercase">madhu</h1>
                  <h1 className="text-xs text-gray-400">backend</h1>
                </div>
              </div>
            </div>
            <div className="px-3 ">
              <div className=" flex min-h-[50px] max-w-[250px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>
                  register update delete register update deleteregister update
                  delete
                </h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>
                  register update delete register update deleteregister update
                  delete
                </h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>
              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>
            </div>
          </div>
          <div className="min-w-[270px] shadow shadow-lg bg-white min-h-[400px] overflow-hidden    flex flex-col items-center m-1">
            <div className=" border-b-2 border-gray-400 min-w-[270px]  flex flex-wrap flex-row justify-between items-center font-semibold">
              <div className="flex flex-row space-x-2 bg-indigo-700 text-white w-full items-center pl-3">
                <Profileimg
                  SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                  altname="profilename"
                  UIstyle="bg-gray-400"
                />
                <div>
                  <h1 className="text-xl uppercase">Shyam</h1>
                  <h1 className="text-xs text-gray-400">frontend</h1>
                </div>
              </div>
            </div>
            <div className="px-3 ">
              <div className=" flex min-h-[50px] max-w-[250px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>
                  register update delete register update deleteregister update
                  delete
                </h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>
                  register update delete register update deleteregister update
                  delete
                </h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>
              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>
            </div>
          </div>

          <div className="min-w-[270px] shadow shadow-lg bg-white min-h-[400px] overflow-hidden    flex flex-col items-center m-1">
            <div className=" border-b-2 border-gray-400 min-w-[270px]  flex flex-wrap flex-row justify-between items-center font-semibold">
              <div className="flex flex-row space-x-2 bg-indigo-700 text-white w-full items-center pl-3">
                <Profileimg
                  SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                  altname="profilename"
                  UIstyle="bg-gray-400"
                />
                <div>
                  <h1 className="text-xl uppercase">Sanjay</h1>
                  <h1 className="text-xs text-gray-400">backend</h1>
                </div>
              </div>
            </div>
            <div className="px-3 ">
              <div className=" flex min-h-[50px] max-w-[250px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>
                  register update delete register update deleteregister update
                  delete
                </h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>
                  register update delete register update deleteregister update
                  delete
                </h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>
              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>
            </div>
          </div>

          <div className="min-w-[270px] shadow shadow-lg bg-white min-h-[400px] overflow-hidden    flex flex-col items-center m-1">
            <div className=" border-b-2 border-gray-400 min-w-[270px]  flex flex-wrap flex-row justify-between items-center font-semibold">
              <div className="flex flex-row space-x-2 bg-indigo-700 text-white w-full items-center pl-3">
                <Profileimg
                  SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                  altname="profilename"
                  UIstyle="bg-gray-400"
                />
                <div>
                  <h1 className="text-xl uppercase">Prashanth</h1>
                  <h1 className="text-xs text-gray-400">frontend</h1>
                </div>
              </div>
            </div>
            <div className="px-3 ">
              <div className=" flex min-h-[50px] max-w-[250px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>
                  register update delete register update deleteregister update
                  delete
                </h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>
                  register update delete register update deleteregister update
                  delete
                </h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>
              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>

              <div className=" flex max-w-[250px] min-h-[50px]  min-w-[250px] pl-2 my-1 flex-row space-x-2 items-center">
                <h1>register update delete</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:p-2 p-1 min-h-[40px]  lg:max-w-full flex flex-wrap flex-row items-center justify-between uppercase font-semibold bg-indigo-700 text-white">
          <div className="grow">
            <h1>manager : saranya</h1>
          </div>
          <div>
            <h1>Team Lead : Shyam</h1>
          </div>
        </div>

        <div className="bg-indigo-700 text-black pb-4 flex flex-row flex-wrap items-center justify-center">
          <div className="flex flex-row space-x-2 m-0.5  w-[200px]  shadow shadow-lg mr-2 bg-green-200  h-[50px] items-center pl-3">
            <Profileimg
              SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
              altname="profilename"
              UIstyle="bg-gray-400"
            />
            <div>
              <h1 className="text-base uppercase">Shyam</h1>
              <h1 className="text-xs text-gray-600">frontend</h1>
            </div>
          </div>
          <div className="flex flex-row space-x-2 m-0.5  w-[200px]  shadow shadow-lg mr-2 bg-green-200  h-[50px] items-center pl-3">
            <Profileimg
              SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
              altname="profilename"
              UIstyle="bg-gray-400"
            />
            <div>
              <h1 className="text-base uppercase">Prashanth</h1>
              <h1 className="text-xs text-gray-600">frontend</h1>
            </div>
          </div>

          <div className="flex flex-row space-x-2 m-0.5  w-[200px]  shadow shadow-lg mr-2 bg-green-200 h-[50px] items-center pl-3">
            <Profileimg
              SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
              altname="profilename"
              UIstyle="bg-gray-400"
            />
            <div>
              <h1 className="text-base uppercase">Madhu</h1>
              <h1 className="text-xs text-gray-600">backendend</h1>
            </div>
          </div>

          <div className="flex flex-row space-x-2 m-0.5  w-[200px]  shadow shadow-lg mr-2 bg-green-200 h-[50px] items-center pl-3">
            <Profileimg
              SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
              altname="profilename"
              UIstyle="bg-gray-400"
            />
            <div>
              <h1 className="text-base uppercase">Sanjay</h1>
              <h1 className="text-xs text-gray-600">frontend</h1>
            </div>
          </div>
          <div className="flex flex-row space-x-2  m-0.5 w-[200px]  shadow shadow-lg mr-2 bg-green-200 min-h-[50px] items-center pl-3">
            <Profileimg
              SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
              altname="profilename"
              UIstyle="bg-gray-400"
            />
            <div>
              <p className=" uppercase text-base">Naga Rathna</p>
              <h1 className="text-xs text-gray-600">testing</h1>
            </div>
          </div>

          <div className="flex flex-row space-x-2 m-0.5  w-[200px]  shadow shadow-lg mr-2 bg-green-200 h-[50px] items-center pl-3">
            <Profileimg
              SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
              altname="profilename"
              UIstyle="bg-gray-400"
            />
            <div>
              <h1 className="text-base uppercase">Sanjay</h1>
              <h1 className="text-xs text-gray-600">frontend</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAssignDetail;
