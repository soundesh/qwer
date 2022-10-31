import React from 'react'
import AdminLeftSideBar from './AdminLeftSideBar'
import Adminmainpage from './Mainpages/Adminmainpage'
const AdminIndexpage = ({ children }) => {
  return (
    <React.Fragment>
      <div className="lg:hidden  w-full min-h-full">
        <div className="grow  border  border-blue-300">
          <Adminmainpage />
        </div>
      </div>

      <div className="lg:flex hidden lg:flex -mb-5 lg:flex-row  w-full">
        <div className="border  hidden lg:flex lg:h-full border-blue-300">
          <AdminLeftSideBar />
        </div>
        <div className="grow  border border-blue-300">
          <Adminmainpage children={children} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminIndexpage