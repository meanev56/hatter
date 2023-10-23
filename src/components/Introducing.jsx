import React, { useState } from 'react'

const Introducing = () => {
  
    const [isHovered, setIsHovered] = useState(false);
    const image1 = "/images/talent-shot.png"
    const image2 = "/images/talent-shot-1.png"
    const handleHover = () => {
      setIsHovered(!isHovered);
    };

  return (
    <div className="absolute w-[1087px] h-[553px] top-[137px] left-[131px]">
            <div className="relative w-[1081px] h-[553px]">
              <div className="absolute w-[1081px] h-[553px] top-0 left-0">
                <div className="absolute top-[63px] left-[2px] [font-family:'Poppins',Helvetica] font-light text-[#957674] text-[16px] tracking-[0] leading-[normal]">
                  Introducing
                </div>
                <div className="absolute w-[518px] h-[518px] top-[35px] left-[480px] rounded-[259px] border border-solid border-dark-copy opacity-10" />
                <img
                  className="absolute w-[221px] h-[299px] top-[139px] left-[860px]"
                  alt="Talent shot"
                  src="/images/talent-shot-1.png"
                />
                <div className="absolute w-[246px] h-[246px] top-[160px] left-[606px] bg-[#fae2d666] rounded-[123px]" />
                <p className="absolute w-[829px] top-[86px] left-0 font-h1 font-[number:var(--h1-font-weight)] text-dark-copy text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
                  Mad hatters, <br />
                  &nbsp;&nbsp; style matters
                </p>
                <div className="absolute w-[56px] top-[290px] left-[2px] [font-family:'Playfair_Display',Helvetica] font-bold text-dark-copy text-[43.5px] tracking-[0] leading-[17.4px]">
                  b <br />
                  &nbsp;&nbsp;/
                  <br />
                  &nbsp;&nbsp; c
                </div>
                <img
                  className="absolute w-[256px] h-[370px] top-0 left-[718px] object-cover"
                  src={isHovered ? image2 : image1}
                  alt="Image1"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
            
                />
              </div>
              <button className="top-[442px] left-[2px] absolute w-[187px] h-[61px] all-[unset] box-border">
                <div className="relative w-[185px] h-[61px] rounded-[6px]">
                  <div className="absolute w-[161px] h-[32px] top-[26px] left-[12px] bg-white rounded-[6px] shadow-[0px_8px_34px_#964f4c52]" />
                  <div className="absolute w-[185px] h-[61px] top-0 left-0 bg-white rounded-[6px] border border-solid border-[#cfadab]" />
                  <div className="absolute h-[24px] top-[18px] left-[47px] font-CTA-hyperlink font-[number:var(--CTA-hyperlink-font-weight)] text-[#957674] text-[length:var(--CTA-hyperlink-font-size)] text-center tracking-[var(--CTA-hyperlink-letter-spacing)] leading-[var(--CTA-hyperlink-line-height)] [font-style:var(--CTA-hyperlink-font-style)]">
                    Learn more
                  </div>
                </div>
              </button>
            </div>
          </div>
  )
}

export default Introducing
