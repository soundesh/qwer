import React from 'react'
import { EmployeeLinks } from '../PageNavlinks/Pagenavlinks';
import ReuseLeftSidebar from '../AComponetformainpages/ReuseLeftSidebar';
const AdminLeftSideBar = () => {
  return (
   <div>
    <ReuseLeftSidebar LinkMenu={ EmployeeLinks}/>
    </div>
  )
}

export default AdminLeftSideBar