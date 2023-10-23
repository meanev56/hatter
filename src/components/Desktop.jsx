import React from 'react'
import Header from './Header'
import Line from './Line'
import Introducing from './Introducing'
import Brand from './Brand'
import More from './More'
import Show from './Show'
import Quote from './Quote'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Desktop = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="overflow-hidden w-[1440px] h-[5538px] relative">
        <Header />
        <div className="absolute w-[1446px] h-[5566px] top-[179px] left-0 ">
            <Line />
            <Introducing />
            <Brand />
            <More />
            <Show />
            <Quote />
            <Newsletter />
            <Footer />
        </div>
    </div>
    </div>
  )
}

export default Desktop
