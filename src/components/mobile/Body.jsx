import React from 'react'

const Body = () => {
  return (
    <div className="absolute w-[375px] h-[31px] top-[15px] left-0">
          <div className="absolute w-[24px] h-[12px] top-[3px] left-[336px]">
            <div className="absolute w-[22px] h-[12px] top-0 left-0 rounded-[2.67px]">
              <div className="absolute w-[22px] h-[12px] top-0 left-0 bg-[#333333] rounded-[2.67px] border border-solid opacity-[0.35]" />
              <div className="absolute w-[20px] h-[10px] top-px left-px bg-[#333333] rounded-[1.33px] border-0 border-none" />
            </div>
            <img className="absolute w-px h-[4px] top-[4px] left-[23px]" alt="Cap" src="/imagesmobile/cap.svg" />
          </div>
          <img className="absolute w-[15px] h-[12px] top-[3px] left-[316px]" alt="Wifi" src="/imagesmobile/wifi.svg" />
          <img
            className="absolute w-[17px] h-[11px] top-[3px] left-[294px]"
            alt="Cellular connection"
            src="/imagesmobile/cellular-connection.svg"
          />
          <div className="absolute w-[56px] h-[18px] top-0 left-[21px]">
            <div className="absolute w-[54px] -top-px -left-px [font-family:'Roboto',Helvetica] font-black text-[#333333] text-[15px] text-center tracking-[-0.30px] leading-[normal]">
              9:41
            </div>
          </div>
          <div className="absolute w-[375px] h-px top-[30px] left-0 bg-[#c4c4c466]" />
        </div>
  )
}

export default Body
