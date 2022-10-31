import React from 'react'
import ReuseFooterpage from '../../AComponetformainpages/ReuseFooterpage';

const AdminFooter = ({LinkMenu}) => {
  return (
    <React.Fragment  >
       <ReuseFooterpage LinkMenu={LinkMenu} />
    </React.Fragment>
  )
}

export default AdminFooter