import React from 'react'
import EmpTasknav from './EmpTasknav'
import EmptaskMain from './EmptaskMain'
const EmpTask = () => {
  return (
    <div className='min-w-full'>
      <div className="p-1 bg-indigo-700 max-h-[50px] min-h-[50px]">
      <div>
       < EmpTasknav/>
      </div>
    </div>
    <div className='min-w-full'>
      <div>
        <EmptaskMain/>
      </div>
    </div>
  </div>
  )
}

export default EmpTask