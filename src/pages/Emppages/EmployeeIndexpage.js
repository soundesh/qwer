import React from 'react'
import ReuseIndexPage from '../AComponetformainpages/ReuseIndexPage'

import { EmployeeLinks } from '../PageNavlinks/Pagenavlinks'
const EmployeeIndexpage = ({ children}) => {
  return (
   <ReuseIndexPage  LinkMenu={EmployeeLinks} children={children} />
  )
}

export default EmployeeIndexpage