import React from 'react'
import Header from './HeaderMobile'
import FooterMobile from './FooterMobile'
import Body from './Body'

const Mobile = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[375px] h-[5860px] relative">
    
      <Header />
      <Body />
      <FooterMobile />
    </div>
  </div>
  
  )
}

export default Mobile
