import React from "react";
const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between  ">
      
      <div className="sm:mr-2 mr-4 md:mr-4 md:space-x-6 flex text-white space-x-4 mt-2">
        <div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <div className="flex relative boder-2 border-white">
            <i className="fa-solid fa-list-check text-2xl md:text-2xl lg:text-3xl "></i>
            <div className="w-[22px]  absolute -top-[5px] -right-[10px] h-[22px] md:text-xl lg:text-xl md:h-[25px] lg:h-[25px]   md:w-[25px] lg:w-[25px] bg-red-600 rounded-full flex itmes-center justify-center">
              <p>4</p>
            </div>
          </div>
          <div className="hidden lg:flex md:flex">
          New Task
          </div>
          </div>
        </div>
        <div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <div className="flex relative boder-2 border-white">
            <i className="fa-solid fa-list-check text-2xl md:text-2xl lg:text-3xl "></i>
            <div className="w-[22px]  absolute -top-[5px] -right-[10px] h-[22px] md:text-xl lg:text-xl md:h-[25px] lg:h-[25px]   md:w-[25px] lg:w-[25px] bg-red-600 rounded-full flex itmes-center justify-center">
              <p>4</p>
            </div>
          </div>
          <div className="hidden lg:flex md:flex">
         pending
          </div>
          </div>
        </div>
        <div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <div className="flex relative boder-2 border-white">
          <i className="material-icons text-2xl md:text-3xl lg:text-4xl">recommend</i>
            <div className="w-[22px]  absolute -top-[5px] -right-[10px] h-[22px] md:text-xl lg:text-xl md:h-[25px] lg:h-[25px]   md:w-[25px] lg:w-[25px] bg-red-600 rounded-full flex itmes-center justify-center">
              <p>4</p>
            </div>
          </div>
          <div className="hidden lg:flex md:flex">
         approved
          </div>
          </div>
        </div>
        <div>
        <div className="flex flex-row items-center justify-center space-x-4">
        
          <div className="flex relative boder-2 border-white w-[40px]">
        
            <div className="w-[22px]  absolute -top-[5px] -right-[10px] h-[22px] md:text-xl lg:text-xl md:h-[25px] lg:h-[25px]   md:w-[25px] lg:w-[25px] bg-red-600 rounded-full flex itmes-center justify-center">
              <p>4</p>
            </div>
          </div>
          <div className="hidden lg:flex md:flex ">
         not approved
          </div>
          </div>
        </div>

        <div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <div className="flex relative boder-2 border-white">
          <i className="fa-solid fa-bell text-2xl md:text-2xl lg:text-3xl "></i>
            <div className="w-[22px]  absolute -top-[5px] -right-[10px] h-[22px] md:text-xl lg:text-xl md:h-[25px] lg:h-[25px]   md:w-[25px] lg:w-[25px] bg-red-600 rounded-full flex itmes-center justify-center">
              <p>4</p>
            </div>
          </div>
          <div className="hidden lg:flex md:flex">
        Notification
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
