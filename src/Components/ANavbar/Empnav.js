import React from 'react'
import IconBage from '../../assitComponet/IconBage/IconBage'

const Empnav = ({title}) => {
  return (

    <div className="flex flex-wrap items-center justify-between p-1 bg-indigo-700 max-h-[50px] min-h-[50px]">
    <div className="uppercase lg:text-xl md:text-base text-xs text-white pl-2 lg:pl-4">
     {title}
    </div>

    <div className="sm:mr-2 mr-4 md:mr-4 md:space-x-6 flex  space-x-4 mt-2">
      <div>
        <IconBage
          IconName="Notification"
          Showcount="4"
          Icon=""
          InconType="fa-solid fa-bell"
          Iconcolor="text-white"
        />
      </div>
    </div>
  </div>
  )
}

export default Empnav