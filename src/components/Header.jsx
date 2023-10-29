import React from 'react'

const Header = () => {
  return (
    <header className="absolute  w-[1440px] h-[180px] -top-px left-0">
          <img
            className="absolute w-[1440px] h-px top-[179px] left-0 object-cover"
            alt="Divider line"
            src="/images/divider-line.svg"
          />
          <div className="absolute w-[1440px] h-[179px] top-0 left-0 bg-white">
            <img
              className="absolute w-[302px] h-[29px] top-[68px] left-[568px]"
              alt="Mad HATTERS"
              src="/images/mad-hatters-1.svg"
            />
            <div className="inline-flex items-start gap-[65px] absolute top-[123px] left-[392px] bg-white">
              <div className="relative hover:text-green-400 w-fit mt-[-1.00px] font-menu-item font-[number:var(--menu-item-font-weight)] text-[#22232b] text-[length:var(--menu-item-font-size)] tracking-[var(--menu-item-letter-spacing)] leading-[var(--menu-item-line-height)] whitespace-nowrap [font-style:var(--menu-item-font-style)]">
                For Men
              </div>
              <div className="relative hover:text-green-400 w-fit mt-[-1.00px] font-menu-item font-[number:var(--menu-item-font-weight)] text-[#22232b] text-[length:var(--menu-item-font-size)] tracking-[var(--menu-item-letter-spacing)] leading-[var(--menu-item-line-height)] whitespace-nowrap [font-style:var(--menu-item-font-style)]">
                For Women
              </div>
              <div className="relative hover:text-green-400 w-fit mt-[-1.00px] font-menu-item font-[number:var(--menu-item-font-weight)] text-[#22232b] text-[length:var(--menu-item-font-size)] tracking-[var(--menu-item-letter-spacing)] leading-[var(--menu-item-line-height)] whitespace-nowrap [font-style:var(--menu-item-font-style)]">
                For Kids
              </div>
              <div className="relative hover:text-green-400 w-fit mt-[-1.00px] font-menu-item font-[number:var(--menu-item-font-weight)] text-[#22232b] text-[length:var(--menu-item-font-size)] tracking-[var(--menu-item-letter-spacing)] leading-[var(--menu-item-line-height)] whitespace-nowrap [font-style:var(--menu-item-font-style)]">
                For Anyone
              </div>
              <div className="relative hover:text-green-400 w-fit mt-[-1.00px] font-menu-item font-[number:var(--menu-item-font-weight)] text-[#22232b] text-[length:var(--menu-item-font-size)] tracking-[var(--menu-item-letter-spacing)] leading-[var(--menu-item-line-height)] whitespace-nowrap [font-style:var(--menu-item-font-style)]">
                For No-one
              </div>
            </div>
            <div className="top-[29px] left-[716px] absolute w-[9px] h-[9px] opacity-30">
              <div className="bg-dark-copy absolute w-[3px] h-[3px] top-0 left-0 rounded-[1.5px]" />
              <div className="absolute w-[3px] h-[3px] top-[6px] left-0 bg-dark-copy rounded-[1.5px]" />
              <div className="absolute w-[3px] h-[3px] top-0 left-[6px] bg-dark-copy rounded-[1.5px]" />
              <div className="bg-dark-copy absolute w-[3px] h-[3px] top-[6px] left-[6px] rounded-[1.5px]" />
            </div>
          </div>
    </header>
  )
}

export default Header
