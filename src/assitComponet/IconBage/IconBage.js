import React from 'react'
import Tooltip from "@mui/material/Tooltip";
const IconBage = ({IconName,Showcount,Icon,Iconcolor,InconType}) => {
  
  {/* .....  <IconBage IconName="Notification" Showcount="4" Icon="" InconType="fa-solid fa-bell" Iconcolor="text-gray-400"/>
*/}
  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      
          <div className="flex relative boder-2 border-white">
          <Tooltip title={IconName}>
          <i className={`${InconType} ${Iconcolor} text-2xl md:text-2xl lg:text-3xl `}>{Icon}</i>
          </Tooltip>
            <div className="w-[22px] text-white  absolute -top-[5px] -right-[10px] h-[22px] text-base lg:text-xl lg:h-[25px]   lg:w-[25px] bg-red-600 rounded-full flex itmes-center justify-center">
              <p>{Showcount}</p>
            </div>
          </div>
          <div className={`${Iconcolor} hidden text-xl lg:flex md:flex `}>
       {IconName}
          </div>
          </div>
  )
}
export default IconBage