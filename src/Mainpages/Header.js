import React, { useState } from "react";
import Paper from "material-ui/Paper";
import Profileimg from "../assitComponet/Profileimg";
const Header = () => {
  const [Information, setInformation] = useState(false);
  //      user img        //https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png
  return (
    <React.Fragment>
      <Paper elevation={24}>
        <div
          className="headerzindex lg:h-[7vh]  lg:min-h-[70px] hover:drop-shadow-md drop-shadow-xl flex flex-row  bg-indigo-700 text-white  my-0.5 lg:py-2 z-50
        "
        >
          <div className="flex flex-row items-center   flex-wrap justify-between  grow ">
            <div className="flex flex-row pl-3  items-center flex-wrap justify-between  space-x-1 relative">
              <div>
                <h1>RIM INDIA PVT LTD</h1>
              </div>
            </div>

            <div>
              <div
                className=" flex items-center justify-end  flex-row space-x-2 relative pr-2 lg:pr-4 z-50 "
                onClick={() => {
                  setInformation(!Information);
                }}
              >
                <Profileimg
                  SrcImg=" https://www.interviewmagazine.com/wp-content/uploads/2011/04/img-chris-hemsworth-1_103053671270.jpg"
                  altname="profilename"
                  UIstyle="bg-green-400"
                  onClick={() => {
                    setInformation(!Information);
                  }}
                />
                {Information ? (
                  <div className="index  absolute top-5 -left-30 min-w-[200px] min-h-[200px] bg-white space-y-3 shadow-md rounded-xl p-3 drop-shadow-2xl">
                    <i
                      className="fa-sharp fa-solid fa-xmark flex justify-end text-2xl text-red-600 pr-2"
                      onClick={() => {
                        setInformation(!Information);
                      }}
                    ></i>
                    <ul>
                      <li>
                        <button
                          className=" p-2 my-2 min-w-[200px] text-blue-700 rounded-lg flex items-center hover:bg-gray-200 focus:outline-none"
                          onClick={() => {
                            setInformation(!Information);
                          }}
                        >
                          <span className="pl-3 pr-7"> Profile</span>
                        </button>
                      </li>
                      <li>
                        <button
                          className=" p-2 my-2 min-w-[200px] text-blue-700 rounded-lg flex items-center hover:bg-gray-200 focus:outline-none"
                          onClick={() => {
                            setInformation(!Information);
                          }}
                        >
                          <span className="pl-3 pr-7">Change Password</span>
                        </button>
                      </li>
                      <li>
                        <button
                          className=" p-2 my-2 min-w-[200px] text-blue-700 rounded-lg flex items-center hover:bg-gray-200 focus:outline-none"
                          onClick={() => {
                            setInformation(!Information);
                          }}
                        >
                          <span className="pl-3 pr-7">Logout</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default Header;
