import React from "react";
import AdminNavbar from "./AdminNavbar";
import AdminRightSideBar from "./AdminRightSideBar";
import AdminFooter from "./AdminFooter";
import Admincomponents from "./Admincomponents";
import { EmployeeLinks} from "../../PageNavlinks/Pagenavlinks"
const Adminmainpage = ({ children }) => {
  return (
    <div className="z-10">
      <div className="bgred-300">
        <div>
          <div className="bg-indigo-700 p-1 max-h-[50px] min-h-[50px]">
            <div>
              <AdminNavbar />
            </div>
          </div>
        </div>
        <div className="flex p-0.5 lg:mb-0  mb-[50px] max-h-[81vh] overflow-auto text-xs md:text-base lg:text-base text-gray-700">
          <div className="grow border border-blue-300">
          { children }
          </div>
          <div>
          <AdminRightSideBar Children={children}/>
          </div>
        </div>
      </div>
      <div>
        <div className="fixed lg:hidden bottom-0 left-0 min-w-full max-w-full w-full ">
         <AdminFooter LinkMenu={EmployeeLinks}/>
        </div>
      </div>
    </div>
  );
};

export default Adminmainpage;
