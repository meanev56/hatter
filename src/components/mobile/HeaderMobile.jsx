import React from 'react'

const Header = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[375px] h-[5860px] relative">
      <div className="absolute w-[375px] h-[48px] top-[62px] left-0">
          <img
            className="absolute w-[154px] h-[16px] top-[6px] left-[38px]"
            alt="Mad HATTERS"
            src="/imagesmobile/mad-hatters.svg"
          />
          <div className="h-[10px] top-[10px] left-[22px] absolute w-[9px] opacity-30">
            <div className="bg-dark-copy rounded-[1.5px/1.59px] absolute w-[3px] h-[3px] top-0 left-0" />
            <div className="w-[3px] h-[3px] top-[6px] bg-dark-copy rounded-[1.5px/1.59px] absolute left-0" />
            <div className="absolute w-[3px] h-[3px] top-0 left-[6px] bg-dark-copy rounded-[1.5px/1.59px]" />
            <div className="bg-dark-copy rounded-[1.5px/1.59px] absolute w-[3px] h-[3px] top-[6px] left-[6px]" />
          </div>
          <img className="absolute w-[25px] h-[26px] top-0 left-[333px]" alt="Menu s dark" src="/imagesmobile/menu-s-dark.svg" />
          <div className="absolute w-[375px] h-px top-[47px] left-0 bg-[#c4c4c44c]" />
        </div>
        
      </div>
    </div>
  )
}

export default Header
